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

import Link from 'next/link'
import { FiHome, FiPlay } from 'react-icons/fi'; // FontAwesome 대신 Feather Icons 사용

function Header() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">🎮 Mini Game</h1>
      <div className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-blue-500">
          <FiHome size={24} />
        </Link>
        <Link href="/games" className="text-gray-600 hover:text-blue-500">
          <FiPlay size={24} />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
