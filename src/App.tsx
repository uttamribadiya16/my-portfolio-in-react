import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { MenuBar } from './components/layout/MenuBar';
import { StatusBar } from './components/layout/StatusBar';
import { FileExplorer } from './components/layout/FileExplorer';
import { Tabs } from './components/layout/Tabs';
import { MainContent } from './components/layout/MainContent';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-[#1e1e1e] text-gray-300">
        <MenuBar />
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <FileExplorer />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Tabs />
            <MainContent>
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </MainContent>
          </div>
        </div>
        <StatusBar />
      </div>
    </Router>
  );
}