import ThreeDCalendar from './ThreeDCalendar';

import HandIcon from '../../assets/icons/HandIcon';
import DragIcon from '../../assets/icons/DragIcon';
const Description = () => {
    

    return (
      <div className="p-6 ml-8 flex flex-col gap-5 items-start sm:flex-1 md:w-2/3 lg:w-1/2 xl:w-1/3 text-white">
        <h1 className=" flex gap-4 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Control of Your Time
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-4">
        - This calendar view highlights the current month, helping you track and manage your events effortlessly. 
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-4">
        - Keep your finances in check with intuitive tracking features. Monitor your expenses.
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-4">
        - Stay on top of your favorite hobbies with personalized tracking. Record progress, set goals, and celebrate your achievements as you grow your passions.
        </p>
        
      </div>
    );
  };



const CalendarPage = () => {
  return (
    <div id="about" className="moving-gradient h-min-screen overflow-hidden">
    <div className="flex flex-col items-center md:flex-row w-full h-full ">
      {/* Left side with text and description */}
      <Description />
      {/* <HandCursorDiv/> */}

      {/* Right side with the 3D calendar */}
      
      <div className="w-72 md:w-96 h-96 flex-1 mx-16 md:mx-4 shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="text-xs text-gray-800  flex items-center">
          <div className="flex flex-row items-center space-x-2 rounded bg-slate-200 bg-opacity-40 p-2">
            <HandIcon className="w-5 h-5 md:w-7 md:h-7" color='#fff' />
            <p className="text-sm font-semibold text-white md:text-base">Drag/Zoom to interact</p>
            <DragIcon className="w-5 h-5 md:w-7 md:h-7" color='#fff' />
          </div>
        </div>

        {/* Interactive 3D Calendar Section */}
        <div className="h-full bg-slate-200 bg-opacity-50 cursor-grab">
          <ThreeDCalendar />
        </div>
      </div>

    </div>
    </div>

  );
};

export default CalendarPage;
