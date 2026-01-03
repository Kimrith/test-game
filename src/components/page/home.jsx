import React, { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredGames = [
    {
      id: 1,
      title: "Adventure Quest",
      category: "adventure",
      players: "1.8k online",
      rating: 4.9,
      image: "🎲",
      color: "from-blue-500 to-cyan-500",
      description: "Epic fantasy adventure with quests",
    },
    {
      id: 2,
      title: "Battle Arena",
      category: "action",
      players: "2.5k online",
      rating: 4.8,
      image: "🎯",
      color: "from-red-500 to-orange-500",
      description: "Intense multiplayer battles",
    },
    {
      id: 3,
      title: "Puzzle Master",
      category: "puzzle",
      players: "1.4k online",
      rating: 4.7,
      image: "🧩",
      color: "from-purple-500 to-pink-500",
      description: "Challenging puzzles to solve",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      category: "strategy",
      players: "3.2k online",
      rating: 4.6,
      image: "🎮",
      color: "from-green-500 to-emerald-500",
      description: "Classic strategy game",
    },
    {
      id: 5,
      title: "Fantasy World",
      category: "adventure",
      players: "1.2k online",
      rating: 4.9,
      image: "🎪",
      color: "from-yellow-500 to-amber-500",
      description: "Magical world exploration",
    },
  ];

  const categories = [
    { id: "all", name: "All Games", icon: "🎯" },
    { id: "adventure", name: "Adventure", icon: "🧭" },
    { id: "action", name: "Action", icon: "⚔️" },
    { id: "puzzle", name: "Puzzle", icon: "🧩" },
    { id: "strategy", name: "Strategy", icon: "♟️" },
  ];

  const chatRooms = [
    { name: "General Chat", members: 2456, topic: "🎮 All Games Discussion" },
    { name: "Adventure Quest", members: 892, topic: "🎲 Quest Help & Tips" },
    { name: "Battle Arena", members: 1673, topic: "🎯 Tournament Strategies" },
    { name: "Puzzle Masters", members: 1289, topic: "🧩 Puzzle Solutions" },
  ];

  const stats = [
    { number: "50,000+", label: "Active Players", icon: "👥" },
    { number: "5", label: "Games Available", icon: "🎮" },
    { number: "24/7", label: "Live Support", icon: "🛡️" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
  ];

  const filteredGames =
    activeCategory === "all"
      ? featuredGames
      : featuredGames.filter((game) => game.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Play, Chat &
                <span className="block text-yellow-300">Connect</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of players in our gaming platform. Enjoy 5
                amazing games, chat with friends, and build your gaming
                community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>🎮</span>
                  <span>Start Playing Free</span>
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>💬</span>
                  <span>Join Chat Now</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-3 gap-3">
                  {["🎲", "🎯", "🧩", "🎮", "🎪"].map((emoji, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-white/20 to-transparent rounded-xl p-3 flex items-center justify-center aspect-square animate-float`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className="text-3xl">{emoji}</span>
                    </div>
                  ))}
                  <div className="col-span-3 bg-black/30 rounded-xl p-3 mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                      <div>
                        <div className="h-2 bg-white/30 rounded-full w-24 mb-2"></div>
                        <div className="h-2 bg-white/30 rounded-full w-16"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Games</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our collection of 5 amazing games
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center`}
                >
                  <span className="text-5xl">{game.image}</span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 truncate">
                      {game.title}
                    </h3>
                    <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-lg">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-bold text-sm">{game.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {game.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <span className="text-green-500 text-xs">●</span>
                      <span className="text-xs">{game.players}</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-300">
                      Play Now
                    </button>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {game.category.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Game Description */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              About Our Games
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎲</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Adventure Quest
                </h4>
                <p className="text-gray-600 text-sm">
                  Epic fantasy RPG with quests
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Battle Arena
                </h4>
                <p className="text-gray-600 text-sm">
                  Intense multiplayer battles
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🧩</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Puzzle Master
                </h4>
                <p className="text-gray-600 text-sm">Brain-teasing puzzles</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎮</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Tic Tac Toe
                </h4>
                <p className="text-gray-600 text-sm">Classic strategy game</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🎪</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Fantasy World
                </h4>
                <p className="text-gray-600 text-sm">Magical exploration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Rooms */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Game <span className="text-green-400">Chat Rooms</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Discuss strategies and make friends
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chat Rooms List */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Game Discussions
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">ACTIVE NOW</span>
                </div>
              </div>

              <div className="space-y-4">
                {chatRooms.map((room, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/50 hover:bg-gray-700 rounded-xl p-4 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {room.name}
                      </h4>
                      <span className="text-green-400 text-sm">
                        {room.members.toLocaleString()} online
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{room.topic}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-gray-700"
                          ></div>
                        ))}
                      </div>
                      <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Join Room
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Demo */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white">
                  Adventure Quest Chat
                </h3>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-4 h-64 overflow-y-auto mb-4">
                {[
                  {
                    user: "QuestMaster",
                    message: "Need help with Dragon Cave quest!",
                    time: "Just now",
                  },
                  {
                    user: "ElfWarrior",
                    message: "I can help! Meet at the castle gates",
                    time: "1 min ago",
                  },
                  {
                    user: "Wizard101",
                    message: "Found the hidden treasure map 🗺️",
                    time: "3 min ago",
                  },
                  {
                    user: "DragonSlayer",
                    message: "New boss spotted in Dark Forest!",
                    time: "5 min ago",
                  },
                  {
                    user: "QuestMaster",
                    message: "Thanks ElfWarrior! On my way 🏃",
                    time: "Just now",
                  },
                ].map((msg, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          msg.user === "QuestMaster"
                            ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                            : msg.user === "ElfWarrior"
                            ? "bg-gradient-to-r from-green-400 to-emerald-500"
                            : msg.user === "Wizard101"
                            ? "bg-gradient-to-r from-purple-400 to-pink-500"
                            : "bg-gradient-to-r from-red-400 to-orange-500"
                        }`}
                      >
                        {msg.user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-white font-semibold">
                            {msg.user}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {msg.time}
                          </span>
                        </div>
                        <p className="text-gray-300 mt-1">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Adventure?
              </h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Create your free account and dive into 5 amazing games with
                thousands of players.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Sign Up Free
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  Try Demo Games
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
