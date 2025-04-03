import React, { useState, useEffect} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

       // Function to format current date and time
    const getCurrentDateTime = () => {
      const now = new Date();
      
      const options = {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
      };
      
      return now.toLocaleString('en-US', options);
    };


     // State and effect for real-time updates
     const [currentTime, setCurrentTime] = useState(getCurrentDateTime());

     useEffect(() => {
         const timer = setInterval(() => {
             setCurrentTime(getCurrentDateTime());
         }, 60000); // Updates every minute
 
         return () => clearInterval(timer);
     }, []); 
    
    return (
        <header className="w-full p-4 bg-[#F9F9F9] border-gray-200"> 
            {/* Top Section - Title and Icons */}
            <div className="flex justify-start items-center">
                {/* Right Side - Icons */}
                <div className="flex items-center gap-3">
                    {/* User Avatar */}
                    <div className="relative">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img 
                                src="/avatar1.png" 
                                alt="User" 
                                className="w-10 h-10 bg-[#B4E5BC] rounded-full " 
                            />
                        </div>
                    </div>

                    {/* Welcome Message */}
                    <div className="text-gray-600">
                        <p>Hello Admin!</p>
                        <p className="flex items-center">
                            We're glad to have you back 
                            <span className="mx-2 h-4 w-px bg-gray-400"></span>
                            {currentTime} {/* Using the dynamically updating time */}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}