import ThreeDCalendar from './ThreeDCalendar';
import HandIcon from '../../assets/icons/HandIcon';
import DragIcon from '../../assets/icons/DragIcon';
import { useTheme } from '../Theme/ThemeContext';
import Description from './Description';


const CalendarPage = () => {
  const { theme } = useTheme()

  const bgClasses = {
    default: 'bg-defaultCustomBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueCustomBg',
    green: 'bg-greenCustomBg',
  };
  const iconColors = {
    default: '#000', // Hex value for default background
    dark: '#fff',    // Hex for bg-stone-500
    blue: '#00796B',    // Blue theme color
    green: '#28A745',   // Green theme color
  };

  return (
    <div id="about" className="h-screen overflow-hidden">
      <div className="flex flex-col items-center md:flex-row w-full h-full ">
        {/* Left side with text and description */}
        <Description />
        {/* Right side with the 3D calendar */}
        <div className="w-72 md:w-96 h-96 flex-1 mx-16 md:mx-4 shadow-md rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="text-xs flex items-center">
            <div className={`${bgClasses[theme]} flex flex-row items-center space-x-2 rounded bg-opacity-40 p-2`}>
              <HandIcon className="w-5 h-5 md:w-7 md:h-7" color={iconColors[theme]} />
              <p className="text-sm font-semibold  md:text-base">Drag/Zoom to interact</p>
              <DragIcon className="w-5 h-5 md:w-7 md:h-7" color={iconColors[theme]} />
            </div>
          </div>

          {/* Interactive 3D Calendar Section */}
          <div className={`${bgClasses[theme]} h-full bg-opacity-50 cursor-grab `}>
            <ThreeDCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
