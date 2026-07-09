import { useState } from "react";


function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'projects'>('home')

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <nav className="flex gap-4 p-4 bg-slate-800">
        <button
        className={`px-4 py-2 hover:bg-indigo-600 rounded-3xl`}
        onClick={() => setActiveTab('home')}>
          Home
        </button>
        <button
        className={`px-4 py-2 hover:bg-indigo-600 rounded-3xl`}
        onClick={() => setActiveTab('projects')}>
          Projects
        </button>
      </nav>

      <main>
        {activeTab === 'home' && (
          <div>
            <div className="Home-container max-w-7xl mx-auto p-4 pt-5">
              <div className="CV-container grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="Contact-info-container md:border-r md:border-gold-500 space-y-3 p-4">
                  <div className="Author-container flex flex-col items-center text-center text-lg font-semibold">
                    <img src="bruce.jpg" alt="Bruce"
                    className="rounded-full w-48 h-48 object-cover"/>
                    <h2 className="text-xl font-semibold">Serhij Pshenychnyj</h2>
                    <p className="text-md">Web Developer</p>
                  </div>

                  <div className="Social-networks-container flex flex-wrap gap-2">
                    Telegram
                    Instagram
                    GitHub
                    LinkedIn
                    YouTube
                  </div>

                  <div>
                    <h3 className="text-lg text-center">Contact Information</h3>
                    <p className="text-md">Email:{" "}
                      <a href="mailto:jjustgray@gmail.com" className="text-blue-400 hover:underline">
                        jjustgray@gmail.com
                      </a>
                    </p>
                    <p className="text-md flex">
                      Phone:{" "}
                      <img src="UA_flag.png" alt="UA flag" 
                        className="w-6 h-6"/>
                      <a href="tel:+380672383808" className="text-blue-400 hover:underline">
                        +38 (067) 238-38-08
                      </a>
                    </p>
                    <p className="text-md flex">Location:{" "}
                      <img src="UA_flag.png" alt="UA flag" 
                        className="w-6 h-6"/>
                        <span>Ukraine</span>
                    </p>
                  </div>
                  
                </div>
                <div className="CV-content md:col-span-3 space-y-5">
                  <div className="Education-container space-y-3">
                    <h2 className="text-xl font-bold border-b border-b-teal-200">Education</h2>
                    <div className="text-lg font-semibold">
                      <p>National Technical University of Ukraine</p>
                      <p>“Igor Sikorsky Kyiv Polytechnic Institute”</p>
                    </div>
                    <ul className="list-none space-y-2 text-md">
                      <li className="border-l-4 border-l-blue-200 pl-2">
                        <p>Bachelor degree in System Analysis</p>
                        <p>Institute of Applied System Analysis</p>
                        <p>2021 - 2024</p>
                      </li>
                      <li className="border-l-4 border-l-orange-200 pl-2">
                        <p>Master degree in Computer Engineering</p>
                        <p>Faculty of Applied Mathematics</p>
                        <p>2024 - 2025</p>
                      </li>
                    </ul>
                  </div>

                  <div className="Experience-container space-y-3">
                    <h2 className="text-xl font-bold border-b border-b-teal-200">Experience</h2>
                    <div className="text-lg font-semibold">
                      <p>State Enterprise "Boryspil International Airport"</p>
                    </div>

                    <ul className="list-none space-y-2 text-md">
                      <li className="border-l-4 border-l-blue-200 pl-2">
                        <p>IT Technician</p>
                        <p>September 2025 – April 2026</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                          <li>
                            <p>Maintaining existing communication channels and </p>
                            <p>establishing new ones within the enterprise network.</p>
                          </li>
                        </ul>
                      </li>

                      <li className="border-l-4 border-l-orange-200 pl-2">
                        <p>Network Engineer</p>
                        <p>May 2026 - Present</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                          <li>Configuring, maintaining, and troubleshooting Cisco and other 
                            enterprise network hardware.</li>
                          <li>Providing advanced L2/L3 technical support for complex 
                            network infrastructure issues.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="Skills-container space-y-3">
                    <h2 className="text-xl font-bold border-b border-b-teal-200">Skills</h2>
                    <div className="text-lg font-semibold">
                      <p>Soft Skills</p>
                    </div>
                    <div className="text-lg font-semibold">
                      <p>Hard Skills</p>
                    </div>
                  </div>

                  <div className="Hobbies-container">
                    <h2 className="text-xl font-semibold">Hobbies</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'projects' && (
          <div>
            <h1 className="text-4xl font-bold text-center mt-8">My Projects</h1>
          </div>
        )}
      </main>
    </div>
  )
}

export default App;
