// import Link from 'next/link'

// function Header() {
//   return (
//     <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-gray-800">🎮 Mini Game</h1>
//       <div className="space-x-4">
//         <Link href="/" className="text-gray-600 hover:text-blue-500">홈</Link>
//         <Link href="/games" className="text-gray-600 hover:text-blue-500">게임 목록</Link>
//       </div>
//     </nav>
//   );
// }

// export default Header;
import Link from 'next/link'
import { FaHome, FaGamepad } from 'react-icons/fa';

function Header() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">🎮 Mini Game</h1>
      <div className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-blue-500">
          <FaHome size={24} />
        </Link>
        <Link href="/games" className="text-gray-600 hover:text-blue-500">
          <FaGamepad size={24} />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
