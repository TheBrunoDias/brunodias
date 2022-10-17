import { useLanguage } from '@Hooks/useLanguage';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { content, handleSelectLang } = useLanguage();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 140) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
  }, []);

  const links = [
    { id: 0, label: content.header.menu.home, path: '#' },
    { id: 1, label: content.header.menu.about, path: '#sobre' },
    { id: 2, label: content.header.menu.resume, path: '#curriculo' },
    { id: 3, label: content.header.menu.portfolio, path: '#portfolio' },
    { id: 4, label: content.header.menu.contact, path: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full py-1 z-50 duration-150 ${
          isScroll ? 'bg-dark-500/90' : 'bg-transparent'
        } backdrop-blur-sm`}
      >
        <div className="container flex justify-between items-center">
          <Link href="#" passHref>
            <a title={content.header.menu.home}>
              <Image src="/images/logo.png" alt="Bruno Dias Logo" width="65" height="52" />
            </a>
          </Link>

          <div className="hidden flex-1 lg:flex justify-center items-center">
            <nav className="flex-1 flex items-center justify-center space-x-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.path}
                  title={l.label}
                  className={`font-bold pb-2 border-b-2 border-transparent text-light-500  hover:border-main-500 hover:text-main-500 duration-150`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className=" flex justify-end items-center space-x-4">
              {['pt', 'es', 'en'].map((l) => (
                <button
                  key={l}
                  title={l.toUpperCase()}
                  onClick={() => handleSelectLang(l as 'pt' | 'es' | 'en')}
                  className={`${
                    content.lang === l ? 'text-main-500' : 'text-light-500'
                  } font-bold duration-150 hover:text-main-500`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-1 justify-center items-start space-x-2 lg:hidden">
            <div className="flex flex-1 justify-center items-center space-x-2">
              {['pt', 'es', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => handleSelectLang(l as 'pt' | 'es' | 'en')}
                  className={`${
                    content.lang === l ? 'text-main-500' : 'text-light-500'
                  } font-bold duration-150 hover:text-main-500`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <MobileMenu links={links} />
          </div>
        </div>
      </header>
    </>
  );
};
