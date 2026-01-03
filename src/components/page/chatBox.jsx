import React, { useState, useEffect, useRef } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "GamerPro",
      text: "Anyone playing Adventure Quest?",
      time: "2:30 PM",
      isOnline: true,
    },
    {
      id: 2,
      user: "PixelQueen",
      text: "Just completed level 45! 🎉",
      time: "2:32 PM",
      isOnline: true,
    },
    {
      id: 3,
      user: "StrategyKing",
      text: "Need help with Puzzle Master level 30",
      time: "2:35 PM",
      isOnline: false,
    },
    {
      id: 4,
      user: "SpeedRacer",
      text: "Tic Tac Toe tournament starting in 10 min! 🏆",
      time: "2:40 PM",
      isOnline: true,
    },
    {
      id: 5,
      user: "FantasyExplorer",
      text: "Found hidden treasure in Fantasy World! 💎",
      time: "2:45 PM",
      isOnline: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([
    { id: 1, name: "GamerPro", game: "🎲 Adventure Quest", avatar: "👨‍💻" },
    { id: 2, name: "PixelQueen", game: "🧩 Puzzle Master", avatar: "👸" },
    { id: 3, name: "SpeedRacer", game: "🎮 Tic Tac Toe", avatar: "🏎️" },
    { id: 4, name: "FantasyExplorer", game: "🎪 Fantasy World", avatar: "🧙‍♂️" },
    { id: 5, name: "BattleMaster", game: "🎯 Battle Arena", avatar: "🛡️" },
    { id: 6, name: "QuestHunter", game: "🎲 Adventure Quest", avatar: "🏹" },
  ]);

  const [activeRoom, setActiveRoom] = useState("general");
  const [typingUsers, setTypingUsers] = useState([]);
  const chatContainerRef = useRef(null);
  const currentUser = "You"; // In real app, this would come from auth

  const chatRooms = [
    { id: "general", name: "General Chat", members: 2456, icon: "💬" },
    { id: "adventure", name: "Adventure Quest", members: 892, icon: "🎲" },
    { id: "battle", name: "Battle Arena", members: 1673, icon: "🎯" },
    { id: "puzzle", name: "Puzzle Masters", members: 1289, icon: "🧩" },
    { id: "tictactoe", name: "Tic Tac Toe", members: 3200, icon: "🎮" },
    { id: "fantasy", name: "Fantasy World", members: 765, icon: "🎪" },
  ];

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      user: currentUser,
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOnline: true,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
    setTypingUsers([]);
  };

  useEffect(() => {
    // Simulate receiving messages
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance of receiving a message
        const botUsers = ["GamerBot", "AutoHelper", "System", "GameMaster"];
        const botGames = [
          "🎲 Adventure Quest",
          "🎯 Battle Arena",
          "🧩 Puzzle Master",
        ];
        const randomUser =
          botUsers[Math.floor(Math.random() * botUsers.length)];
        const randomGame =
          botGames[Math.floor(Math.random() * botGames.length)];

        const botMessages = [
          `Just started playing ${randomGame}, anyone wants to join?`,
          `New high score achieved in ${randomGame}!`,
          `Need tips for ${randomGame}? Ask me!`,
          `${randomGame} tournament results are out!`,
          `Found a bug in ${randomGame}, reporting now.`,
        ];

        const botMsg = {
          id: messages.length + 1,
          user: randomUser,
          text: botMessages[Math.floor(Math.random() * botMessages.length)],
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isOnline: true,
        };

        setMessages((prev) => [...prev, botMsg]);
      }
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    // Auto scroll to bottom
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleTyping = (e) => {
    setNewMessage(e.target.value);

    // Simulate other users typing
    if (!typingUsers.includes("Someone") && Math.random() > 0.8) {
      setTypingUsers(["Someone"]);
      setTimeout(() => {
        setTypingUsers([]);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white mb-6 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                Community <span className="text-yellow-300">Chat</span>
              </h1>
              <p className="text-xl opacity-90">
                Connect with players, share strategies, make friends
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      {onlineUsers.length} Online
                    </div>
                    <div className="text-blue-200 text-sm">Active Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Chat Rooms */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
                <h2 className="text-2xl font-bold text-white">Chat Rooms</h2>
                <p className="text-blue-100">Join game discussions</p>
              </div>

              <div className="p-4 space-y-2">
                {chatRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      activeRoom === room.id
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{room.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">
                          {room.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {room.members.toLocaleString()} members
                        </div>
                      </div>
                    </div>
                    {activeRoom === room.id && (
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-t border-gray-100">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 p-3 rounded-lg transition-colors">
                    <span className="block text-xl mb-1">👥</span>
                    <span className="text-sm font-medium">Create Group</span>
                  </button>
                  <button className="bg-purple-50 text-purple-600 hover:bg-purple-100 p-3 rounded-lg transition-colors">
                    <span className="block text-xl mb-1">🔔</span>
                    <span className="text-sm font-medium">Notifications</span>
                  </button>
                  <button className="bg-green-50 text-green-600 hover:bg-green-100 p-3 rounded-lg transition-colors">
                    <span className="block text-xl mb-1">📱</span>
                    <span className="text-sm font-medium">Invite Friends</span>
                  </button>
                  <button className="bg-red-50 text-red-600 hover:bg-red-100 p-3 rounded-lg transition-colors">
                    <span className="block text-xl mb-1">⚙️</span>
                    <span className="text-sm font-medium">Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">
                      {chatRooms.find((r) => r.id === activeRoom)?.icon}
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {chatRooms.find((r) => r.id === activeRoom)?.name}
                      </h2>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>{onlineUsers.length} users online</span>
                        {typingUsers.length > 0 && (
                          <span className="text-yellow-400 italic">
                            {typingUsers.join(", ")} is typing...
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-white hover:text-gray-300 p-2">
                      <span className="text-xl">🔍</span>
                    </button>
                    <button className="text-white hover:text-gray-300 p-2">
                      <span className="text-xl">📎</span>
                    </button>
                    <button className="text-white hover:text-gray-300 p-2">
                      <span className="text-xl">⋮</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages Container */}
              <div
                ref={chatContainerRef}
                className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100"
                style={{ maxHeight: "500px" }}
              >
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.user === currentUser
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md ${
                          message.user === currentUser
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            : "bg-white"
                        } rounded-2xl p-4 shadow-lg`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              message.user === currentUser
                                ? "bg-white/20"
                                : "bg-gradient-to-r from-blue-400 to-cyan-500 text-white"
                            }`}
                          >
                            {message.user.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span
                                className={`font-bold ${
                                  message.user === currentUser
                                    ? "text-white"
                                    : "text-gray-800"
                                }`}
                              >
                                {message.user}
                              </span>
                              {message.isOnline &&
                                message.user !== currentUser && (
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                )}
                            </div>
                            <span
                              className={`text-xs ${
                                message.user === currentUser
                                  ? "text-blue-200"
                                  : "text-gray-500"
                              }`}
                            >
                              {message.time}
                            </span>
                          </div>
                        </div>
                        <p
                          className={`${
                            message.user === currentUser
                              ? "text-white"
                              : "text-gray-700"
                          }`}
                        >
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-200">
                <form onSubmit={sendMessage} className="flex space-x-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={handleTyping}
                      placeholder={`Message in ${
                        chatRooms.find((r) => r.id === activeRoom)?.name
                      }...`}
                      className="w-full px-6 py-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        😊
                      </button>
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        📷
                      </button>
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        🎮
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </form>
                <div className="mt-3 text-sm text-gray-500 flex justify-between">
                  <span>Press Enter to send</span>
                  <span>Messages are public in this room</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Online Users */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                <h2 className="text-2xl font-bold text-white">
                  Online Players
                </h2>
                <p className="text-green-100">Currently active</p>
              </div>

              <div className="p-4">
                <div className="space-y-4">
                  {onlineUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
                            {user.avatar}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.game}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-600 p-2">
                          💬
                        </button>
                        <button className="text-purple-500 hover:text-purple-600 p-2">
                          👥
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Game Invites */}
                <div className="mt-8 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                  <h3 className="font-bold text-gray-800 mb-3">Game Invites</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-800">
                          Tic Tac Toe Match
                        </div>
                        <div className="text-sm text-gray-600">
                          From: SpeedRacer
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        Join
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-800">
                          Adventure Quest Party
                        </div>
                        <div className="text-sm text-gray-600">3/4 players</div>
                      </div>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
                        Full
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-blue-700">Support</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-600">
                      99.9%
                    </div>
                    <div className="text-sm text-green-700">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Chat Rules</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Be respectful to others</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>No spamming or advertising</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Keep conversations game-related</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Game-specific chat rooms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>👥</span>
                  <span>Private messaging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🎮</span>
                  <span>Game invites & parties</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <button className="bg-white text-blue-600 hover:bg-gray-100 w-full py-3 rounded-xl font-bold mb-3 transition-colors">
                Report Issue
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/20 w-full py-3 rounded-xl font-bold transition-colors">
                Contact Moderator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
