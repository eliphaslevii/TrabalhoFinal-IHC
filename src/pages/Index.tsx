import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import MainApp from "@/components/MainApp";
import MobileFrame from "@/components/MobileFrame";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 500);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showFrame = !isMobileView;

  return (
    <MobileFrame showFrame={showFrame}>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="animate-fade-in">
          <MainApp />
        </div>
      )}
    </MobileFrame>
  );
};

export default Index;
