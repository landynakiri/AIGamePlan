import type { GameMetadata } from './types';

export const games: GameMetadata[] = [
    {
        id: 'game1',
        title: 'Crystal Guardians',
        description: 'A mystical battle arena where you protect your crystal from waves of interdimensional enemies.',
        thumbnail: '/game1.png',
        category: 'Action / RPG',
        submodulePath: 'games/game1',
        status: 'Alpha',
    },
    {
        id: 'game2',
        title: 'Neon Nexus (Coming Soon)',
        description: 'High-speed racing through a cybernetic cityscape.',
        thumbnail: 'https://images.unsplash.com/photo-1614850523296-e8c041de239b?q=80&w=1000&auto=format&fit=crop',
        category: 'Racing',
        submodulePath: 'games/game2',
        status: 'Development',
    }
];
