import React from "react";

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Gaming enthusiast with 10+ years in the industry",
      image: "👨‍💼",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about game mechanics",
      image: "👩‍💻",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Mike Chen",
      role: "Game Designer",
      bio: "Creates immersive worlds and engaging gameplay",
      image: "🎨",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Community Manager",
      bio: "Builds and nurtures our gaming community",
      image: "💬",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "100+", label: "Games Developed" },
    { value: "24/7", label: "Support Available" },
    { value: "99%", label: "User Satisfaction" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Innovation",
      description:
        "We constantly push boundaries to create unique gaming experiences",
    },
    {
      icon: "🤝",
      title: "Community First",
      description: "Our players are at the heart of everything we do",
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We strive for perfection in every game we create",
    },
    {
      icon: "❤️",
      title: "Passion",
      description: "We love what we do and it shows in our work",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-yellow-300">Us</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We're a passionate team creating unforgettable gaming experiences
              and building communities through innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Games
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 text-gray-50"
            fill="currentColor"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35,6.36,117.14-7.75,33-13,76-36.08,120.83-50.16C939.06,29.08,1078.9,46.28,1200,71.56V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2018, we started as a small group of gaming
                enthusiasts who wanted to create more than just games - we
                wanted to build communities.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                What began as a passion project has grown into a thriving
                platform where millions of players connect, compete, and create
                lasting memories together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Innovative gaming experiences
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Real-time chat and social features
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Regular updates and new content
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-6xl mb-4">🎮</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To create immersive gaming experiences that bring people
                    together, foster communities, and provide endless
                    entertainment.
                  </p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core principles guide everything we do, from game
              development to community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Meet Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate individuals behind our gaming platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div
                  className={`bg-gradient-to-br ${member.color} p-1 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {member.name}
                    </h3>
                    <div
                      className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${member.color} text-white mb-3`}
                    >
                      {member.role}
                    </div>
                    <p className="text-gray-600">{member.bio}</p>
                    <div className="mt-4 flex justify-center space-x-3">
                      <button className="text-blue-500 hover:text-blue-600">
                        🔗
                      </button>
                      <button className="text-blue-500 hover:text-blue-600">
                        💼
                      </button>
                      <button className="text-blue-500 hover:text-blue-600">
                        ✉️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Join the Adventure?
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Be part of our growing community and experience gaming like never
              before
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Start Playing Now
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
