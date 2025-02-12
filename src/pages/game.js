import Header from '../components/Header';
import GameCard from '../components/GameCard';

const games = [
  {
    id: 1,
    title: "미니언과 함께하는 메모리 게임",
    image: "/minion-game.jpg",
    link: "https://minion-match.vercel.app/",
  },
  {
    id: 2,
    title: "귀여운 동물들과 함께하는 메모리 게임",
    image: "/animal-game.jpg",
    link: "https://hanbok-animal-match.vercel.app/",
  },
];

export default function Games() {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <Header />
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">게임 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} title={game.title} image={game.image} link={game.link} />
        ))}
      </div>
    </div>
  );
}
