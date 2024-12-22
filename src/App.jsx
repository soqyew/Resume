import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="bg-[#1c3334] text-[#D1E8E2] max-w-5xl mx-auto p-6 flex flex-col sm:flex-row lg:flex-row">
      <div className="flex-2 mb-6 lg:mr-6">
        <h1 className="font-bold mb-4 text-[#DA7B93] text-5xl sm:text-6xl lg:text-7xl">Sofya Borodko</h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-[#DA7B93]">Frontend Developer</h2>
        <div className="flex items-center mb-6">
          <img src="/pictures/photo.jpg" alt="Фото" className="w-24 h-24 object-cover rounded-lg mr-4" />
          <p className="text-base sm:text-lg">My name is Sonya. I'm a beginner frontend developer, but I already have several examples of my work created for a programming course at my university.</p>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-6 mb-4 text-[#DA7B93]">Projects</h2>
        <div className="space-y-4">
          <div>
            <a href="https://github.com/soqyew/TODO-List" className="text-[#D1E8E2] font-bold hover:underline">TODO List</a>
            <p className="mb-2 text-[#D1E8E2]">This project is a simple application for creating notes, editing them, sorting them, and so on. The application is written in JavaScript using the React library.</p>
            <p className="text-sm sm:text-base text-[#D1E8E2]">Technologies: JavaScript, React</p>
          </div>
          <div>
            <a href="https://github.com/soqyew/API-SPA" className="text-[#D1E8E2] font-bold hover:underline">API and SPA</a>
            <p className="mb-2 text-[#D1E8E2]">The Single Page Application (SPA) API project provides an interface for client interaction, allowing data to be loaded and updated without reloading the page. It provides efficient application state management and optimizes the user experience through fast response and dynamic content loading.</p>
            <p className="text-sm sm:text-base text-[#D1E8E2]">Technologies: JavaScript, React, React Router</p>
          </div>
          <div>
            <a href="https://github.com/soqyew/Lamoda" className="text-[#D1E8E2] font-bold hover:underline">Lamoda</a>
            <p className="mb-2 text-[#D1E8E2]">This project is an online store Lamoda for selecting and purchasing clothes and accessories. It is made using JavaScript technologies using the React library and in particular the Chance library to generate random data.</p>
            <p className="text-sm sm:text-base text-[#D1E8E2]">Technologies: JavaScript, React, Chance</p>
          </div>
          <div>
            <a href="https://github.com/soqyew/Notion-Redux" className="text-[#D1E8E2] font-bold hover:underline">Notion</a>
            <p className="mb-2 text-[#D1E8E2]">This application allows the user to register on the page and leave their notes there.</p>
            <p className="text-sm sm:text-base text-[#D1E8E2]">Technologies: React, Zod, React Hook Form, React Router, Redux, Json-server, Tailwind CSS</p>
          </div>
        </div>
      </div>

      <div className="flex-[1.5] space-y-6">
        <div className="bg-[#2a4a4b] shadow-lg rounded-lg p-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-[#DA7B93]">Education</h3>
          <p>Belarusian State University (2023 - 2027)</p>
          <a href="https://mmf.bsu.by" className="text-[#D1E8E2] hover:underline">Faculty of Mechanics and Mathematics</a>
        </div>

        <div className="bg-[#2a4a4b] shadow-lg rounded-lg p-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-[#DA7B93]">Work Experience</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Self-employment</li>
            <li>Programming course at university</li>
          </ul>
        </div>

        <div className="bg-[#2a4a4b] shadow-lg rounded-lg p-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-[#DA7B93]">Languages</h3>
          <p>English - B2</p>
          <p>Russian, Belarusian - Native</p>
        </div>

        <div className="bg-[#2a4a4b] shadow-lg rounded-lg p-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-[#DA7B93]">Contacts</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              {/* <img src="/pictures/telegram.png" className="w-4 h-4 mr-2" /> */}
              <a href="https://t.me/soqyew/" className="text-[#D1E8E2] hover:underline">Telegram</a>
            </li>
            <li className="flex items-center">
              {/* <img src="/pictures/githab.png" className="w-4 h-4 mr-2" /> */}
              <a href="https://github.com/soqyew" className="text-[#D1E8E2] hover:underline">Github</a>
            </li>
            <li className="flex items-center">
              <a href="mailto:sonyaborodko8@gmail.com" className="text-[#D1E8E2] hover:underline">sonyaborodko8@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
