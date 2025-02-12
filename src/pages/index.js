import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <img src="/home-banner.jpg" alt="게임 포털 배너" className="w-full max-w-3xl rounded-lg shadow-lg mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">메모리 게임</h1>
      <p className="text-lg text-gray-600 mb-6">즐겁게 플레이할 수 있는 다양한 메모리 게임을 만나보세요!</p>
      <Link href="/games" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        게임 목록 보기
      </Link>
    </div>
  );
}
