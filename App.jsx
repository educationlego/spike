
import React from "react";
import BlocklyEditor from "./BlocklyEditor.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col">
      <header className="p-4 text-center text-2xl font-bold shadow-md">
        🚀 Mini SPIKE Clone
      </header>
      <main className="flex-1 p-4">
        <BlocklyEditor />
      </main>
      <footer className="p-2 text-center text-sm bg-black/30">
        © 2025 - Creado por Teto
      </footer>
    </div>
  );
}
