import type { GameMetadata } from '../types';
import { ChevronLeft, Maximize2, Settings } from 'lucide-react';

interface Props {
    game: GameMetadata;
    onBack: () => void;
}

export const GamePlayer = ({ game, onBack }: Props) => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Game Header */}
            <div className="glass" style={{ padding: '0.8rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={onBack} style={{ padding: '0.5rem', background: 'transparent' }}>
                        <ChevronLeft /> Back to Lobby
                    </button>
                    <div style={{ borderLeft: '1px solid var(--glass-border)', paddingLeft: '1rem' }}>
                        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{game.title}</h2>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ padding: '0.5rem', background: 'var(--surface)' }}><Settings size={20} /></button>
                    <button style={{ padding: '0.5rem', background: 'var(--surface)' }}><Maximize2 size={20} /></button>
                </div>
            </div>

            {/* Game Content Area */}
            <div style={{ flex: 1, position: 'relative', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="glass" style={{ padding: '3rem', textAlign: 'center', borderRadius: '24px' }}>
                    <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Connecting to Unity Instance...
                    </div>
                    <p style={{ opacity: 0.7 }}>Loading assets for {game.title}</p>
                    <div style={{
                        width: '300px',
                        height: '4px',
                        background: 'var(--surface)',
                        borderRadius: '2px',
                        margin: '2rem auto',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '60%',
                            height: '100%',
                            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                            borderRadius: '2px'
                        }} />
                    </div>
                    <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Press Esc to exit fullscreen</p>
                </div>
            </div>
        </div>
    );
};
