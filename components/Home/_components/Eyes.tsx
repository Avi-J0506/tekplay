// components/Eyes.js
import { useEffect } from 'react';

const Eyes = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll('.eye .pupil');

    const handleMouseMove = (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x = (e.pageX - rect.left) / 30 + 'px';
        const y = (e.pageY - rect.top) / 30 + 'px';
        pupil.style.transform = `translate3d(${x}, ${y}, 0px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-36 h-36 rounded-full flex items-center justify-center">
        <div className="eyes flex gap-10">
          <div className="eye w-[6.1rem] h-[6.1rem] bg-white rounded-full flex items-center justify-center shadow-md">
            <div className="pupil w-10 h-10 bg-black rounded-full">
              <div className='w-3 h-3 rounded-full bg-white m-2'></div>
              <div className='w-2 h-2 rounded-full bg-white ml-5'></div>
            </div>
          </div>
          <div className="eye w-[6.1rem] h-[6.1rem] bg-white rounded-full flex items-center justify-center shadow-md">
            <div className="pupil w-10 h-10 bg-black rounded-full">
              <div className='w-3 h-3 rounded-full bg-white m-2'></div>
              <div className='w-2 h-2 rounded-full bg-white ml-5'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
