import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <div className="w-full h-64 md:h-screen relative">
        <img 
          src="/home-banner.jpg" 
          alt="게임 포털 배너" 
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold">Memory Game</h1>
          <p className="text-lg md:text-xl mt-4">즐겁게 플레이할 수 있는 다양한 메모리 게임을 만나보세요!</p>
          <Link href="/games" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            게임 목록 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
