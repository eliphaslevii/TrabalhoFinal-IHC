import { useEffect, useState } from "react";
import { Infinity, Accessibility, Heart, HandHeart, Brain } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 3;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 z-50">
      {/* Animated Icons Circle */}
      <div className="relative w-40 h-40 mb-6">
        
        {/* Center infinity symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Infinity 
            className="w-16 h-16 animate-rainbow animate-pulse-glow" 
            strokeWidth={2.5}
          />
        </div>

        {/* Orbiting icons */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
            <Accessibility className="w-8 h-8 text-blue-400 animate-float" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
            <Heart className="w-8 h-8 text-red-400 animate-float animation-delay-200" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
            <HandHeart className="w-8 h-8 text-green-400 animate-float animation-delay-400" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
            <Brain className="w-8 h-8 text-purple-400 animate-float animation-delay-600" />
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-black text-white mb-1 text-center">
        SWISSARMY PCD
      </h1>
      <p className="text-sm text-slate-400 mb-6 text-center">
        Acessibilidade Total
      </p>

      {/* Progress bar */}
      <div className="w-48 h-2 bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="mt-3 text-xs text-slate-500">
        Preparando recursos...
      </p>
    </div>
  );
};

export default LoadingScreen;
