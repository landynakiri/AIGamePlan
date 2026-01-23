import { useState } from 'react';
import './App.css';
import { games } from './GameDatabase';
import type { GameMetadata } from './types';
import { GameCard } from './components/GameCard';
import { GamePlayer } from './components/GamePlayer';
import { LayoutGrid, Users, Trophy, Wallet } from 'lucide-react';

function App() {
  const [selectedGame, setSelectedGame] = useState<GameMetadata | null>(null);

  if (selectedGame) {
    return <GamePlayer game={selectedGame} onBack={() => setSelectedGame(null)} />;
  }

  return (
    <div className="app-container" style={{ animation: 'fadeIn 0.8s ease-out' }}>
      {/* Sidebar Navigation */}
      <nav className="sidebar glass">
        <div className="logo">
          <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AI GAME</span>
        </div>
        <div className="nav-items" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="nav-item active"><LayoutGrid size={20} /> Lobby</div>
          <div className="nav-item"><Users size={20} /> Social</div>
          <div className="nav-item"><Trophy size={20} /> Rankings</div>
          <div className="nav-item"><Wallet size={20} /> Wallet</div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ marginLeft: '260px', padding: '2rem 4rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1>Dashboard</h1>
            <p style={{ opacity: 0.6 }}>Welcome back, <span className="gradient-text" style={{ fontWeight: 'bold' }}>Player One</span></p>
          </div>
          <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '50%' }} />
            <span>0x1234...5678</span>
          </div>
        </header>

        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem' }}>Discovery</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span className="nav-tab active">All Games</span>
              <span className="nav-tab">Action</span>
              <span className="nav-tab">Strategy</span>
            </div>
          </div>

          <div className="card-grid">
            {games.map(game => (
              <GameCard
                key={game.id}
                game={game}
                onSelect={(g) => setSelectedGame(g)}
              />
            ))}
          </div>
        </section>
      </main>

      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 260px;
          height: 100vh;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--glass-border);
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0.6;
        }
        .nav-item:hover {
          background: var(--surface);
          opacity: 1;
        }
        .nav-item.active {
          background: var(--surface-hover);
          opacity: 1;
          color: var(--secondary);
          border: 1px solid var(--glass-border);
        }
        .nav-tab {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          opacity: 0.6;
          transition: 0.3s;
        }
        .nav-tab.active {
          opacity: 1;
          background: var(--surface);
        }
        .play-btn {
          border: none;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

export default App;
