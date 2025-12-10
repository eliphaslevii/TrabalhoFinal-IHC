import { useState } from "react";
import { toast } from "sonner";
import {
  Accessibility,
  AlertTriangle,
  Ambulance,
  ShieldAlert,
  Flame,
  Send,
  VolumeX,
  MessageCircle,
  Volume2,
  Flashlight,
  Timer,
  Heart,
  FileText,
  Contrast,
  ZoomIn,
  Palette,
  Infinity,
  ChevronRight,
} from "lucide-react";

const MainApp = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast");
    toast.success(highContrast ? "Modo normal ativado" : "Alto contraste ativado");
  };

  const increaseFont = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
    toast.success(`Fonte: ${newSize}px`);
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
      toast.success(`🔊 "${text}"`);
    } else {
      toast.info(`🔊 "${text}"`);
    }
  };

  return (
    <div className="min-h-full bg-background">
      {/* Compact Header */}
      <header className="bg-primary text-primary-foreground py-4 px-4 text-center sticky top-0 z-40">
        <div className="flex items-center justify-center gap-2">
          <Infinity className="w-6 h-6" />
          <h1 className="text-lg font-black tracking-tight">SWISSARMY PCD</h1>
        </div>
      </header>

      <main className="px-4 py-3 pb-8 space-y-4">
        {/* Quick Access Grid - Accessibility */}
        <section>
          <SectionHeader icon={Accessibility} title="Acessibilidade" />
          <div className="grid grid-cols-3 gap-2">
            <QuickButton
              icon={Contrast}
              label="Contraste"
              onClick={toggleContrast}
              active={highContrast}
            />
            <QuickButton
              icon={ZoomIn}
              label="Fonte +"
              onClick={increaseFont}
            />
            <QuickButton
              icon={Palette}
              label="Daltonismo"
              onClick={() => toast.info("🎨 Modo daltonismo ativado")}
            />
          </div>
        </section>

        {/* Emergency Section */}
        <section>
          <SectionHeader icon={AlertTriangle} title="Emergência" />
          <div className="space-y-2">
            <EmergencyButton
              icon={AlertTriangle}
              label="EMERGÊNCIA AGORA"
              sublabel="Acionar imediatamente"
              onClick={() => toast.error("🚨 Emergência acionada!")}
              variant="danger"
            />
            <div className="grid grid-cols-2 gap-2">
              <CompactButton
                icon={Ambulance}
                label="SAMU"
                sublabel="192"
                onClick={() => toast.warning("🏥 Chamando SAMU")}
                variant="warning"
              />
              <CompactButton
                icon={ShieldAlert}
                label="Polícia"
                sublabel="190"
                onClick={() => toast.info("👮 Chamando Polícia")}
                variant="primary"
              />
              <CompactButton
                icon={Flame}
                label="Bombeiros"
                sublabel="193"
                onClick={() => toast.info("🔥 Chamando Bombeiros")}
                variant="info"
              />
              <CompactButton
                icon={Send}
                label="SOS"
                sublabel="Enviar"
                onClick={() => toast.success("📩 SOS enviado!")}
                variant="success"
              />
            </div>
            <EmergencyButton
              icon={VolumeX}
              label="SOS Silencioso"
              sublabel="Sem alerta sonoro"
              onClick={() => toast.success("🔕 SOS silencioso enviado!")}
              variant="muted"
            />
          </div>
        </section>

        {/* Communication Section */}
        <section>
          <SectionHeader icon={MessageCircle} title="Comunicação" />
          <div className="space-y-2">
            <SpeakButton
              label="Preciso de ajuda!"
              onClick={() => speak("Preciso de ajuda!")}
            />
            <SpeakButton
              label="Estou perdido, me ajude"
              onClick={() => speak("Estou perdido, por favor me ajude.")}
            />
            <SpeakButton
              label="Chame alguém para mim"
              onClick={() => speak("Chame alguém para mim, por favor.")}
            />
          </div>
        </section>

        {/* Utilities Section */}
        <section>
          <SectionHeader icon={Heart} title="Utilidades" />
          <div className="grid grid-cols-2 gap-2">
            <UtilityCard
              icon={Flashlight}
              label="Lanterna"
              onClick={() => toast.info("🔦 Lanterna ativada")}
            />
            <UtilityCard
              icon={Timer}
              label="Timer"
              onClick={() => toast.success("⏳ Timer iniciado")}
            />
            <UtilityCard
              icon={Heart}
              label="Calm Down"
              onClick={() => toast.success("🧘 Modo relaxamento")}
            />
            <UtilityCard
              icon={FileText}
              label="Info Médica"
              onClick={() => toast.info("📄 Informações médicas")}
            />
          </div>
        </section>
      </main>

      {/* Bottom Safe Area */}
      <div className="h-8 bg-background" />
    </div>
  );
};

// Sub-components

const SectionHeader = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex items-center gap-2 mb-2">
    <Icon className="w-4 h-4 text-primary" />
    <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
      {title}
    </h2>
  </div>
);

const QuickButton = ({ icon: Icon, label, onClick, active }: any) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
      active
        ? "bg-primary text-primary-foreground"
        : "bg-card border border-border hover:bg-secondary"
    }`}
  >
    <Icon className="w-5 h-5 mb-1" />
    <span className="text-xs font-bold">{label}</span>
  </button>
);

const EmergencyButton = ({ icon: Icon, label, sublabel, onClick, variant }: any) => {
  const styles: Record<string, string> = {
    danger: "bg-destructive text-destructive-foreground",
    muted: "bg-secondary text-secondary-foreground border border-border",
  };
  
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl flex items-center gap-3 transition-all active:scale-[0.98] ${styles[variant]}`}
    >
      <Icon className="w-8 h-8" />
      <div className="text-left flex-1">
        <div className="font-bold text-base">{label}</div>
        <div className="text-xs opacity-80">{sublabel}</div>
      </div>
      <ChevronRight className="w-5 h-5 opacity-60" />
    </button>
  );
};

const CompactButton = ({ icon: Icon, label, sublabel, onClick, variant }: any) => {
  const styles: Record<string, string> = {
    warning: "bg-warning text-warning-foreground",
    primary: "bg-primary text-primary-foreground",
    info: "bg-info text-info-foreground",
    success: "bg-success text-success-foreground",
  };
  
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-xl flex items-center gap-2 transition-all active:scale-[0.98] ${styles[variant]}`}
    >
      <Icon className="w-6 h-6" />
      <div className="text-left">
        <div className="font-bold text-sm">{label}</div>
        <div className="text-xs opacity-80">{sublabel}</div>
      </div>
    </button>
  );
};

const SpeakButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-full p-3 rounded-xl bg-info text-info-foreground flex items-center gap-3 transition-all active:scale-[0.98]"
  >
    <Volume2 className="w-6 h-6" />
    <span className="font-bold text-sm flex-1 text-left">"{label}"</span>
    <ChevronRight className="w-5 h-5 opacity-60" />
  </button>
);

const UtilityCard = ({ icon: Icon, label, onClick }: any) => (
  <button
    onClick={onClick}
    className="p-4 rounded-xl bg-card border border-border flex flex-col items-center gap-2 transition-all hover:bg-secondary active:scale-[0.98]"
  >
    <Icon className="w-7 h-7 text-primary" />
    <span className="font-bold text-sm">{label}</span>
  </button>
);

export default MainApp;
