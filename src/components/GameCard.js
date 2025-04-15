
// import Link from 'next/link';

// function GameCard({ title, image, link }) {
//   return (
//     <div className="flex flex-col items-center justify-center m-4">
//       <Link href={link} target="_blank" rel="noopener noreferrer" className="w-32 h-32 bg-white rounded-lg shadow-lg overflow-hidden relative group">
//         <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
//           <span className="text-white text-lg font-bold">Play Now</span>
//         </div>
//       </Link>
//       <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">{title}</h2>
//     </div>
//   );
// }

// export default GameCard;



import Image from 'next/image';
import Link from 'next/link';

function GameCard({ title, image, link }) {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-lg overflow-hidden relative group block">
        <div className="w-32 h-32 relative">
          <Image src={image} alt={title} width={32} height={32} objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <span className="text-white text-lg font-bold">Play Now</span>
        </div>
      </Link>
      <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">{title}</h2>
    </div>
  );
}

export default GameCard;

