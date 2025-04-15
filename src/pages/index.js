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
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full relative">
          <div className="w-full h-64 md:h-96 lg:h-[70vh] relative overflow-hidden">
            <img 
              src="/home-banner.jpg" 
              alt="게임 포털 배너" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
              {/* 여기에 배너 위에 표시할 콘텐츠 추가 */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">게임 포털에 오신 것을 환영합니다</h1>
              <p className="text-lg md:text-xl mb-6">다양한 게임을 즐겨보세요</p>
              <Link href="/games" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300">
                게임 보러가기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
