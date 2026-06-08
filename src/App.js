import React from 'react';
import './index.css'; 

function App() {
  return (
    <div className="min-h-screen bg-base flex flex-col items-center py-10 font-sans">
      {/* 
        Fixed-width dashboard wrapper 
        To prevent reflow on mobile, we enforce width and scale via fixed properties (controlled in index.css)
      */}
      <div className="dashboard-wrapper bg-board p-10 rounded-[3rem] border border-gray-800 shadow-2xl flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex justify-between items-center px-10">
          <span className="text-4xl">🌻</span>
          <h1 className="text-accent font-hand text-5xl tracking-widest">How was your day?</h1>
          <span className="text-4xl text-accent">🌻</span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-10 px-4">
          <div className="w-[280px] h-[280px] bg-card rounded-[3rem] border border-gray-700 shadow-inner"></div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-6xl font-light text-white mb-2">Hi !<br/>I am <span className="font-bold text-accent">Salem</span></h2>
            <p className="text-muted text-xl tracking-wide font-light">software engineer | research enthusiast</p>
            <div className="bg-accent text-black font-bold px-10 py-2.5 rounded-sm text-lg mt-2 cursor-pointer hover:bg-opacity-90 inline-block">Email</div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex justify-around items-center bg-card rounded-2xl px-12 py-5 shadow-inner">
          {[1,2,3,4,5,6,7].map(i => (
            <div key={i} className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold text-xs text-white">Icon</div>
          ))}
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            
            {/* Education Placeholder */}
            <div className="bg-card rounded-3xl p-6 shadow-inner">
              <h3 className="text-accent text-2xl font-semibold mb-4">Education</h3>
              <div className="flex bg-gray-600/50 text-gray-300 px-4 py-2 rounded mb-3 text-sm font-semibold tracking-wide">
                <span className="flex-1">Degree</span>
                <span className="flex-[1.5] text-center">Institution</span>
                <span className="flex-1 text-right">GPA</span>
              </div>
              <div className="flex flex-col gap-2">
                {[1, 2, 3].map(i => <div key={i} className="h-8 bg-gray-600/50 rounded-sm"></div>)}
              </div>
            </div>

            {/* Skills Placeholder */}
            <div className="bg-card rounded-3xl p-6 shadow-inner">
              <h3 className="text-accent text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-5 gap-3">
                {[1,2,3,4,5,6,7,8,9,10].map(i => <div key={i} className="w-full aspect-square bg-gray-600/50 rounded-xl"></div>)}
              </div>
            </div>

            {/* Awards Placeholder */}
            <div className="bg-card rounded-3xl p-6 shadow-inner">
              <h3 className="text-accent text-2xl font-semibold mb-4">Awards</h3>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-12 bg-gray-600/50 rounded-xl"></div>)}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            
            {/* Languages Placeholder */}
            <div className="bg-card rounded-3xl p-6 shadow-inner">
              <h3 className="text-accent text-2xl font-semibold mb-4">languages</h3>
              <div className="flex flex-col gap-3">
                {["English", "Bangla", "Garo", "Hindi", "French"].map((lang, idx) => (
                   <div key={idx} className="flex gap-4 items-center">
                     <div className="w-20 text-white font-medium text-sm">{lang}</div>
                     <div className="flex gap-[4px] mt-1 flex-1 items-center">
                       {[1,2,3,4,5,6,7,8,9,10].map(dot => (
                         <div key={dot} className={`w-2 h-2 rounded-full ${dot <= (10-idx) ? 'bg-gray-300' : 'bg-gray-700'}`}></div>
                       ))}
                     </div>
                   </div>
                ))}
              </div>
            </div>

            {/* Experiences Placeholder */}
            <div className="bg-card rounded-3xl p-6 flex-1 shadow-inner">
              <h3 className="text-accent text-2xl font-semibold mb-4">Experiences</h3>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-gray-600/50 p-4 rounded-[1.5rem] flex gap-4">
                    <div className="w-[100px] h-[100px] bg-gray-300 rounded-[1.2rem] shrink-0"></div>
                    <div className="flex flex-col justify-center">
                      <div className="text-white font-bold tracking-wide">Role : Company</div>
                      <div className="text-gray-300 text-xs mb-2">2025-2026</div>
                      <div className="text-gray-400 text-xs">description</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Placeholder */}
        <div className="flex flex-col gap-4">
          <h3 className="text-accent text-2xl font-semibold ml-2">Projects</h3>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-72 bg-card rounded-3xl shadow-inner border border-gray-800 border-opacity-50"></div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
