// import React from 'react'
// import banner from '../../assets/banner.png'
// const Banner = () => {
//   return (
//     <div className='flex mt-10  justify-between   p-22 bg-gray-100 rounded-3xl'>
//       <div>
//         <h1 className="Playfair-Display text-[86px] font-bold ">Books to freshen up <br /> your bookshelf</h1>
//         <br />
//         <button className='p-4 bg-green-600 text-white font-bold text-cyan-300xl rounded-xl px-10 cursor-pointer hover:opacity-80 hover:text-black'>View The List</button>
//       </div>
//       <div><img src={ banner} alt="" /></div>
//     </div>
//   );
// }

// export default Banner
import React from 'react';
import banner from '../../assets/banner.png';

const Banner = () => {
  const text = 'Books to freshen up your bookshelf';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-gray-100 rounded-3xl items-center p-10 gap-10">
      <div className="flex justify-center order-1 lg:order-2 ">
        <img
          src={banner}
          alt="banner"
          className="animate-bounceSlow w-[200px] md:w-[200px] lg:w-[250px] lg:ml-10 "
        />
      </div>

      <div className="text-center lg:text-left order-2 lg:order-1">
        <h1 className="Playfair-Display text-[30px] md:text-[54px] lg:text-[56px] font-bold leading-tight mb-6 lg:w-[641px] ">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="animated-rgb"
              style={{
                animationDelay: `${index * 0.1}s`,
                whiteSpace: 'pre',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <button className="p-4 px-10 bg-green-600 text-white font-bold rounded-xl cursor-pointer hover:opacity-90 hover:bg-green-700 hover:text-black transition-all duration-300">
          View The List
        </button>
      </div>

      <style >{`
        @keyframes rgbColor {
          0% {
            color: rgb(255, 0, 0);
          }
          33% {
            color: rgb(0, 255, 0);
          }
          66% {
            color: rgb(0, 0, 255);
          }
          100% {
            color: rgb(255, 0, 0);
          }
        }

        .animated-rgb {
          display: inline-block;
          animation: rgbColor 8s linear infinite;
        }

        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounceSlow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
