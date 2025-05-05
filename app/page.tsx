'use client';

import PomodoroTimer from './components/PomodoroTimer';
import DancingChipmunks from './components/DancingChipmunks';

export default function Home() {
  return (
    <main style={{ 
      position: 'relative',
      minHeight: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <DancingChipmunks />
      <div style={{
        position: 'relative',
        zIndex: 1
      }}>
        <PomodoroTimer />
      </div>
    </main>
  );
} 