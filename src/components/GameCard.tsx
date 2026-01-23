import type { GameMetadata } from '../types';
import { Play } from 'lucide-react';

interface Props {
    game: GameMetadata;
    onSelect: (game: GameMetadata) => void;
}

export const GameCard = ({ game, onSelect }: Props) => {
    return (
        <div
            className="game-card glass"
            style={{ backgroundImage: `url(${game.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => game.status !== 'Development' && onSelect(game)}
        >
            <div className="content">
                <span className="category glass" style={{ padding: '0.2rem 0.6rem', borderRadius: '8px', fontSize: '0.8rem', marginBottom: '0.5rem', display: 'inline-block' }}>
                    {game.category}
                </span>
                <h3 style={{ margin: '0.5rem 0', fontSize: '1.5rem' }}>{game.title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5rem' }}>{game.description}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: game.status === 'Alpha' ? '#ff9800' : '#4caf50',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '2px 8px',
                        borderRadius: '4px'
                    }}>
                        {game.status}
                    </span>

                    {game.status !== 'Development' && (
                        <button className="play-btn">
                            <Play size={18} fill="white" /> PLAY
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
