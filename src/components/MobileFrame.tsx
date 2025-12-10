import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  showFrame?: boolean;
}

const MobileFrame = ({ children, showFrame = true }: MobileFrameProps) => {
  if (!showFrame) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="relative">

        <div className="bg-slate-950 rounded-[3rem] p-3 shadow-2xl shadow-black/50 relative">

          {/* Dynamic Island */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50" />

          {/* SCREEN */}
          <div className="w-[375px] h-[812px] bg-background rounded-[2.5rem] overflow-hidden relative">

            {/* STATUS BAR */}
            <div className="h-12 bg-primary/10" />

            {/* MAIN SCREEN CONTENT (RELATIVE = necessário p/ toasts e loading) */}
            <div className="h-[calc(100%-48px)] relative overflow-y-auto">
              {children}

              {/* LOCAL PORTAL DOS ALERTAS */}
              <div
                id="toast-root"
                className="absolute inset-0 pointer-events-none z-[9999]"
              ></div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-3px] top-32 w-1 h-12 bg-slate-700 rounded-r-sm" />
        <div className="absolute left-[-3px] top-28 w-1 h-8 bg-slate-700 rounded-l-sm" />
        <div className="absolute left-[-3px] top-40 w-1 h-16 bg-slate-700 rounded-l-sm" />
      </div>
    </div>
  );
};

export default MobileFrame;
