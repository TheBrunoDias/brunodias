import { createContext, useEffect, useState } from 'react';

import * as pt from '@Mocks/pt';
import * as es from '@Mocks/es';
import * as en from '@Mocks/en';

type LanguageContextProps = {
  content: typeof pt;
  handleSelectLang: (lang: 'pt' | 'es' | 'en') => void;
};

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

const LanguageContext = createContext({} as LanguageContextProps);

const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState(pt);

  const handleSelectLang = (lang: 'pt' | 'es' | 'en') => {
    if (lang === 'pt') {
      setSelectedLang(pt);
      return window.localStorage.setItem('brunodias.lang', 'pt');
    }

    if (lang === 'es') {
      setSelectedLang(es);
      return window.localStorage.setItem('brunodias.lang', 'es');
    }

    if (lang === 'en') {
      setSelectedLang(en);
      return window.localStorage.setItem('brunodias.lang', 'en');
    }
  };

  useEffect(() => {
    const storage = window.localStorage.getItem('sol.lang');
    if (storage === 'en') {
      return setSelectedLang(en);
    }

    if (storage === 'es') {
      return setSelectedLang(es);
    }

    setSelectedLang(pt);
  }, []);

  return (
    <LanguageContext.Provider value={{ content: selectedLang, handleSelectLang }}>{children}</LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageContextProvider };
