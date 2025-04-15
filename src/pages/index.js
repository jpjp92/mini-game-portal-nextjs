// import Header from '../components/Header';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <Header />
//       <div className="w-full h-64 md:h-screen relative">
//         <img 
//           src="/home-banner.jpg" 
//           alt="게임 포털 배너" 
//           className="w-full h-full object-cover absolute inset-0"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
         
//         </div>
//       </div>
//     </div>
//   );
// }

import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      <Header />
      <div className="w-full h-64 md:h-80 relative">
        <img
          src="/home-banner.jpg"
          alt="게임 포털 배너"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
         
        </div>
      </div>
    </div>
  );
}
