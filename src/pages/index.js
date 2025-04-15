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
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ maxHeight: "500px" }}>
            <img 
              src="/home-banner.jpg" 
              alt="게임 포털 배너" 
              className="w-full object-cover"
              style={{ maxHeight: "500px" }}
            />
            // <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
            //   <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MEMORY GAME</h1>
            //   <Link href="/games" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors">
            //     게임 시작하기
            //   </Link>
            // </div>
          </div>
        </div>
      </main>
    </>
  );
}
