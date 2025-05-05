'use client';

import React from 'react';

const DancingChipmunks = () => {
  // Create array for 3 chipmunks
  const chipmunks = Array(3).fill(null).map((_, i) => ({
    scale: 1.2,
    delay: i * 0.3, // Stagger the animation
    bounceHeight: 20,
    danceSpeed: 1,
    bounceSpeed: 1,
    isFlipped: i === 1, // Middle one flipped
  }));

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#1a0f2e',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        perspective: '1000px'
      }}>
        <style jsx global>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(calc(var(--bounce-height) * -1px)); }
          }

          @keyframes dance {
            0% { transform: scale(1) rotate(0deg) scaleX(var(--flip)); }
            25% { transform: scale(1.1) rotate(5deg) scaleX(var(--flip)); }
            50% { transform: scale(0.9) rotate(-5deg) scaleX(var(--flip)); }
            75% { transform: scale(1.1) rotate(3deg) scaleX(var(--flip)); }
            100% { transform: scale(1) rotate(0deg) scaleX(var(--flip)); }
          }

          .synthwave-grid {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50vh;
            background-image: linear-gradient(0deg, rgba(26, 15, 46, 0) 0%, #1a0f2e 100%),
                            linear-gradient(rgba(42, 192, 217, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(42, 192, 217, 0.5) 1px, transparent 1px);
            background-size: 100% 100%, 50px 50px, 50px 50px;
            transform-origin: bottom;
            animation: gridMove 20s linear infinite;
          }

          .synthwave-sun {
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle at center, #ff69b4 0%, #ff1493 60%, transparent 70%);
            border-radius: 50%;
            box-shadow: 0 0 60px #ff69b4;
            overflow: visible;
            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 250%;
              height: 250%;
              transform: translate(-50%, -50%);
              background: conic-gradient(
                from 0deg,
                transparent 0deg,
                #ff69b4 5deg,
                transparent 15deg,
                transparent 30deg,
                #ff69b4 35deg,
                transparent 45deg,
                transparent 60deg,
                #ff69b4 65deg,
                transparent 75deg,
                transparent 90deg,
                #ff69b4 95deg,
                transparent 105deg,
                transparent 120deg,
                #ff69b4 125deg,
                transparent 135deg,
                transparent 150deg,
                #ff69b4 155deg,
                transparent 165deg,
                transparent 180deg,
                #ff69b4 185deg,
                transparent 195deg,
                transparent 210deg,
                #ff69b4 215deg,
                transparent 225deg,
                transparent 240deg,
                #ff69b4 245deg,
                transparent 255deg,
                transparent 270deg,
                #ff69b4 275deg,
                transparent 285deg,
                transparent 300deg,
                #ff69b4 305deg,
                transparent 315deg,
                transparent 330deg,
                #ff69b4 335deg,
                transparent 345deg
              );
              opacity: 0.5;
              animation: rotateSun 20s linear infinite;
            }
          }

          @keyframes rotateSun {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes gridMove {
            0% { transform: rotateX(60deg) translateY(0); }
            100% { transform: rotateX(60deg) translateY(100px); }
          }

          .dancing-container {
            animation: bounce var(--bounce-duration) infinite ease-in-out;
          }

          .dancing-squirrel {
            width: 100%;
            height: 100%;
            animation: dance var(--dance-duration) infinite ease-in-out;
          }

          .dancing-chipmunks-row {
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 2rem;
            justify-content: center;
            width: 100%;
            max-width: 100vw;
            padding: 0 1rem;
          }
          @media (max-width: 600px) {
            .dancing-chipmunks-row {
              gap: 0.5rem;
              bottom: 10%;
            }
            .dancing-container {
              width: 64px !important;
              height: 64px !important;
            }
          }
        `}</style>

        {/* Synthwave grid background */}
        <div className="synthwave-grid"></div>
        
        {/* Synthwave sun */}
        <div className="synthwave-sun"></div>

        {/* Container for the 3 squirrels */}
        <div className="dancing-chipmunks-row">
          {chipmunks.map((chipmunk, index) => (
            <div
              key={index}
              className="dancing-container"
              style={{
                width: '120px',
                height: '120px',
                '--bounce-height': chipmunk.bounceHeight,
                '--bounce-duration': `${2 * chipmunk.bounceSpeed}s`,
                '--dance-duration': `${1.5 * chipmunk.danceSpeed}s`,
                '--flip': chipmunk.isFlipped ? -1 : 1,
                animationDelay: `${chipmunk.delay}s`,
              } as React.CSSProperties}
            >
              <div className="dancing-squirrel">
                <img
                  src="https://chaweonkoo.github.io/BYOA-Pomodoro/tumblr_maw6nhSaKa1rfjowdo1_500.gif"
                  alt="Dancing squirrel"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DancingChipmunks;