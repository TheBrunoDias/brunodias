import { LanguageContext } from '@Contexts/LanguageContext';
import { useContext } from 'react';

export const useLanguage = () => useContext(LanguageContext);
