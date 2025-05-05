'use client';

import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';

const PomodoroTimer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'shortBreak' | 'longBreak'>('work');

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer completed
            setIsActive(false);
            handleTimerComplete();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const handleTimerComplete = () => {
    // Play notification sound
    const audio = new Audio('/notification.mp3');
    audio.play();

    // Switch modes
    switch (mode) {
      case 'work':
        setMode('shortBreak');
        setMinutes(5);
        break;
      case 'shortBreak':
        setMode('work');
        setMinutes(25);
        break;
      default:
        setMode('work');
        setMinutes(25);
    }
    setSeconds(0);
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    if (mode === 'work') {
      setMinutes(25);
    } else if (mode === 'shortBreak') {
      setMinutes(5);
    } else {
      setMinutes(15);
    }
    setSeconds(0);
  };

  const formatTime = (min: number, sec: number): string => {
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      <style jsx global>{`
        @keyframes neonFlicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            opacity: 0.99;
            text-shadow: 
              0 0 4px #fff,
              0 0 11px #fff,
              0 0 19px #fff,
              0 0 40px #0fa,
              0 0 80px #0fa,
              0 0 90px #0fa,
              0 0 100px #0fa,
              0 0 150px #0fa;
          }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            opacity: 0.4;
            text-shadow: none;
          }
        }

        .retro-timer {
          font-family: 'Press Start 2P', cursive;
          letter-spacing: 4px;
          color: #fff;
        }

        .retro-heading {
          font-family: 'Press Start 2P', cursive;
          color: #fff;
          text-shadow: 
            0 0 4px #fff,
            0 0 11px #fff,
            0 0 19px #fff,
            0 0 40px #0fa;
          letter-spacing: 2px;
        }

        .retro-button {
          font-family: 'Press Start 2P', cursive;
          text-transform: uppercase;
          border: 3px solid currentColor;
          text-shadow: 0 0 4px currentColor;
          transition: all 0.3s ease;
        }

        .retro-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px currentColor;
        }
      `}</style>
      <div
        className="bg-black/60 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-lg border-4 border-[#0fa]"
        style={{ boxSizing: 'border-box' }}
      >
        <h1 className="retro-heading text-2xl text-center mb-8">Pomodoro Timer</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className="retro-button px-4 py-2 rounded text-red-500 text-sm"
            onClick={() => {setMode('work'); setMinutes(25); setSeconds(0); setIsActive(false);}}
          >
            Work
          </button>
          <button
            className="retro-button px-4 py-2 rounded text-green-500 text-sm"
            onClick={() => {setMode('shortBreak'); setMinutes(5); setSeconds(0); setIsActive(false);}}
          >
            Break
          </button>
        </div>

        <div className="retro-timer text-6xl text-center mb-10 px-2">
          {formatTime(minutes, seconds)}
        </div>

        <div className="flex justify-center space-x-6">
          <button
            className="retro-button bg-transparent text-blue-500 p-4 rounded-lg"
            onClick={toggleTimer}
          >
            {isActive ? <FaPause /> : <FaPlay />}
          </button>
          <button
            className="retro-button bg-transparent text-gray-500 p-4 rounded-lg"
            onClick={resetTimer}
          >
            <FaRedo />
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          .retro-timer {
            font-size: 2.5rem !important;
          }
          .retro-heading {
            font-size: 1.1rem !important;
          }
          .bg-black\/60 {
            padding: 1.25rem !important;
            padding-bottom: 5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PomodoroTimer; 