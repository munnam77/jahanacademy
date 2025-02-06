import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
interface NavigationProps {
  translations: any;
  currentLang: string;
  onLanguageSwitch: (lang: string) => void;
}
export function Navigation({
  translations,
  currentLang,
  onLanguageSwitch
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <div className="text-2xl font-bold">{translations.school.name}</div>
          <div className="text-sm">{translations.school.nameJp}</div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-white">
            {Object.entries(translations.navigation).map(([key, value]) => <a key={key} href={`#${key}`} className="hover:text-gray-200 transition-colors">
                {value as string}
              </a>)}
          </div>
          <LanguageSwitcher currentLang={currentLang} onSwitch={onLanguageSwitch} />
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 text-white">
            {Object.entries(translations.navigation).map(([key, value]) => <a key={key} href={`#${key}`} className="hover:text-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {value as string}
              </a>)}
          </div>
        </div>}
    </nav>;
}