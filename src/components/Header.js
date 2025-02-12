import Link from 'next/link'
import { FiHome, FiPlay } from 'react-icons/fi'; // Feather Icons 사용

function Header() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
  
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
