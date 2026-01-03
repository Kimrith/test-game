import React, { useState } from "react";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const allGames = [
    {
      id: 1,
      title: "Adventure Quest",
      emoji: "🎲",
      category: "RPG Adventure",
      players: "1,850 online",
      rating: 4.9,
      description:
        "Embark on an epic fantasy adventure through magical lands. Complete quests, battle monsters, and discover hidden treasures in this immersive RPG experience.",
      features: [
        "Single & Multiplayer",
        "Character Customization",
        "Quest System",
        "Inventory Management",
      ],
      color: "from-blue-500 to-cyan-500",
      difficulty: "Medium",
      playTime: "30-60 min",
      instructions: [
        "Create your character and choose your class",
        "Accept quests from NPCs in different villages",
        "Explore dungeons and defeat monsters",
        "Collect items and level up your character",
      ],
    },
    {
      id: 2,
      title: "Battle Arena",
      emoji: "🎯",
      category: "Action Battle",
      players: "2,540 online",
      rating: 4.8,
      description:
        "Enter the ultimate battle arena! Choose your champion and compete in fast-paced multiplayer battles. Team up or go solo in this action-packed game.",
      features: [
        "Real-time PvP",
        "Multiple Champions",
        "Tournament Mode",
        "Ranking System",
      ],
      color: "from-red-500 to-orange-500",
      difficulty: "Hard",
      playTime: "10-20 min",
      instructions: [
        "Select your champion and loadout",
        "Join quick match or create custom game",
        "Use abilities strategically",
        "Capture objectives and defeat opponents",
      ],
    },
    {
      id: 3,
      title: "Puzzle Master",
      emoji: "🧩",
      category: "Brain Teaser",
      players: "1,420 online",
      rating: 4.7,
      description:
        "Challenge your mind with hundreds of puzzles! From logic puzzles to pattern recognition, this game will test your problem-solving skills.",
      features: [
        "500+ Puzzles",
        "Daily Challenges",
        "Time Attack Mode",
        "Hint System",
      ],
      color: "from-purple-500 to-pink-500",
      difficulty: "Easy-Hard",
      playTime: "5-30 min",
      instructions: [
        "Select a puzzle category",
        "Read the puzzle description carefully",
        "Use logic to solve the puzzle",
        "Use hints if you get stuck",
      ],
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      emoji: "🎮",
      category: "Classic Strategy",
      players: "3,210 online",
      rating: 4.6,
      description:
        "The classic game of X's and O's with a modern twist! Play against AI or challenge friends in this timeless strategy game.",
      features: [
        "AI Opponents",
        "Online Multiplayer",
        "Tournament Mode",
        "Custom Boards",
      ],
      color: "from-green-500 to-emerald-500",
      difficulty: "Easy",
      playTime: "1-5 min",
      instructions: [
        "Choose X or O to start",
        "Take turns placing your mark",
        "Get 3 in a row to win",
        "Block your opponent's moves",
      ],
    },
    {
      id: 5,
      title: "Fantasy World",
      emoji: "🎪",
      category: "Exploration",
      players: "1,230 online",
      rating: 4.9,
      description:
        "Explore a magical world filled with wonders! Discover hidden locations, interact with magical creatures, and uncover ancient secrets.",
      features: [
        "Open World",
        "Magical Creatures",
        "Treasure Hunts",
        "Photo Mode",
      ],
      color: "from-yellow-500 to-amber-500",
      difficulty: "Easy",
      playTime: "15-45 min",
      instructions: [
        "Create your explorer character",
        "Choose a starting location",
        "Explore the map and discover points of interest",
        "Interact with NPCs and complete exploration tasks",
      ],
    },
  ];

  const categories = [
    "All Games",
    "RPG Adventure",
    "Action Battle",
    "Brain Teaser",
    "Classic Strategy",
    "Exploration",
  ];
  const [activeCategory, setActiveCategory] = useState("All Games");

  const filteredGames =
    activeCategory === "All Games"
      ? allGames
      : allGames.filter((game) => game.category === activeCategory);

  const playGame = (gameId) => {
    const game = allGames.find((g) => g.id === gameId);
    setSelectedGame(game);
    // In a real app, you would navigate to the actual game page
    alert(`Starting ${game.title}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Games</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Choose from our collection of 5 amazing games. Play solo or with
              friends, challenge your mind or battle for glory!
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-xl">
                <span className="text-2xl">🎮</span>
                <span className="font-semibold">5 Games</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-xl">
                <span className="text-2xl">👥</span>
                <span className="font-semibold">10,000+ Players</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-xl">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.8 Avg Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Game Header */}
                <div
                  className={`h-48 bg-gradient-to-br ${game.color} relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                      {game.emoji}
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      {game.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-bold text-gray-800">
                        {game.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {game.description}
                  </p>

                  {/* Players Online */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">
                        {game.players}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{game.difficulty}</span> •{" "}
                      {game.playTime}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {game.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {game.features.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{game.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => playGame(game.id)}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Play Now
                    </button>
                    <button
                      onClick={() => setSelectedGame(game)}
                      className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    >
                      <span className="text-lg">ℹ️</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Details Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r ${selectedGame.color} p-8 rounded-t-3xl`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-6xl mb-4">{selectedGame.emoji}</div>
                  <h2 className="text-4xl font-bold text-white">
                    {selectedGame.title}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {selectedGame.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Description
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedGame.description}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    How to Play
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {selectedGame.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedGame.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg"
                      >
                        <span className="text-blue-500">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Stats */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Game Stats
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Rating</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-bold text-gray-800">
                            {selectedGame.rating}/5.0
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Players Online</span>
                        <span className="font-bold text-gray-800">
                          {selectedGame.players}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Difficulty</span>
                        <span className="font-bold text-gray-800">
                          {selectedGame.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Avg. Play Time</span>
                        <span className="font-bold text-gray-800">
                          {selectedGame.playTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to Play?</h3>
                    <p className="mb-6">
                      Join thousands of players enjoying this game right now!
                    </p>
                    <div className="flex flex-col space-y-3">
                      <button
                        onClick={() => {
                          playGame(selectedGame.id);
                          setSelectedGame(null);
                        }}
                        className="bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
                      >
                        🎮 Play Now
                      </button>
                      <button className="bg-transparent border-2 border-white py-3 rounded-xl font-bold hover:bg-white/20 transition-colors duration-300">
                        👥 Invite Friends
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Can't Decide Which Game to Play?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Try them all! Each game offers a unique experience for different
              moods and play styles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                View Game Tutorials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
