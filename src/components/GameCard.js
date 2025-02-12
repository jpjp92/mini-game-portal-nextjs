// function GameCard({ title, image, link }) {
//   return (
//     <div className="flex flex-col items-center justify-center m-4">
//       <div className="relative">
//         <img src={image} alt={title} className="w-48 h-48 object-cover rounded-lg shadow-lg" />
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-center">
//           <a 
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             플레이 하기
//           </a>
//         </div>
//       </div>
//       <h2 className="mt-2 text-lg font-semibold text-gray-800">{title}</h2>
//     </div>
//   );
// }

// export default GameCard;


import Link from 'next/link';

function GameCard({ title, image, link }) {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden relative group">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <span className="text-white text-lg font-bold">Play Now</span>
        </div>
      </Link>
      <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">{title}</h2>
    </div>
  );
}

export default GameCard;
