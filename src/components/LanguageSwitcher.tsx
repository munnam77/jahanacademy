import React from "react";
import { Globe2 } from "lucide-react";
interface LanguageSwitcherProps {
  currentLang: string;
  onSwitch: (lang: string) => void;
}
export function LanguageSwitcher({
  currentLang,
  onSwitch
}: LanguageSwitcherProps) {
  return <button onClick={() => onSwitch(currentLang === "en" ? "ja" : "en")} className="flex items-center space-x-2 text-white bg-transparent hover:bg-white/10 px-3 py-2 rounded-full transition-colors">
      <Globe2 className="w-4 h-4" />
      <span>{currentLang.toUpperCase()}</span>
    </button>;
}