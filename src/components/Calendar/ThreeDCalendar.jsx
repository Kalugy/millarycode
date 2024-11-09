import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Function to get the dates for the current month and the starting day
const getDatesForCurrentMonth = (year, month) => {
  const dates = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week the month starts on

  // Fill with nulls for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(null);
  }

  // Add all the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(day);
  }

  return dates;
};

// Function to create a texture from text using a 2D canvas
const createTextTexture = (text) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  // Fill background (optional)
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text with larger, bold font
  context.fillStyle = 'black';
  context.font = 'bold 64px Arial'; // Bold and larger font size
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  // Create texture
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

const Calendar = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Generate dates for the current month, including padding days
  const dates = getDatesForCurrentMonth(currentYear, currentMonth);

  // Memoize textures to avoid recreating them on every render
  const dateTextures = useMemo(() => {
    return dates.map((date) => (date ? createTextTexture(date.toString()) : null));
  }, [dates]);

  const dayTextures = useMemo(() => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => createTextTexture(day));
  }, []);

  return (
    <group>
      {/* Render Day Labels with Boxes */}
      {dayTextures.map((texture, index) => {
        const x = index * 1.1;
        return (
          <group key={index} position={[x - 3.5, 4, 0]}>
            {/* Box for the day label */}
            <mesh>
              <boxGeometry args={[1, 1, 0.1]} />
              <meshStandardMaterial color="lightgray" />
            </mesh>
            {/* Plane for the day text */}
            <mesh position={[0, 0, 0.11]}>
              <planeGeometry args={[1, 1]} />
              <meshBasicMaterial map={texture} transparent />
            </mesh>
          </group>
        );
      })}

      {/* Render Date Boxes with Textures */}
      {dates.map((date, index) => {
        const x = (index % 7) * 1.1;
        const y = -Math.floor(index / 7) * 1.1;
        const isDateAvailable = date !== null;

        return (
          <group key={index} position={[x - 3.5, y + 3, 0]}>
            {/* Box for each date */}
            <mesh>
              <boxGeometry args={[1, 1, 0.1]} />
              <meshStandardMaterial color={isDateAvailable ? 'lightgray' : 'transparent'} />
            </mesh>
            {/* Plane for the text */}
            {isDateAvailable && (
              <mesh position={[0, 0, 0.11]}>
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial map={dateTextures[index]} transparent />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
};

const ThreeDCalendar = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      style={{ width: '100%', height: '100%' }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Calendar />
      <OrbitControls
        enableZoom={true} // Allow zooming with pinch gestures
        enablePan={false} // Disable panning if not needed
        maxPolarAngle={Math.PI / 2} // Limit the vertical rotation
        minPolarAngle={0} // Prevent flipping upside down
      />
    </Canvas>
  );
};

export default ThreeDCalendar;
