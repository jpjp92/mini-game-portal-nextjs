function GameCard({ title, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        플레이 하기
      </a>
    </div>
  );
}

export default GameCard;
