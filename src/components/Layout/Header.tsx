import { useLanguage } from '@Hooks/useLanguage';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const { content, handleSelectLang } = useLanguage();
  const router = useRouter();

  const links = [
    { id: 0, label: content.header.menu.home, path: '/' },
    { id: 1, label: content.header.menu.about, path: '/sobre' },
    { id: 2, label: content.header.menu.resume, path: '/curriculo' },
    { id: 3, label: content.header.menu.portfolio, path: '/portfolio' },
    { id: 4, label: content.header.menu.contact, path: '/contato' },
  ];

  return (
    <>
      <header className="py-2">
        <div className="hidden container lg:flex justify-end items-center space-x-10">
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
        <div className="container flex justify-between items-center">
          <Link href="/" passHref>
            <a>
              <Image src="/images/logo.png" alt="Bruno Dias Logo" width="65" height="52" />
            </a>
          </Link>

          <nav className="hidden lg:flex items-center justify-end space-x-4">
            {links.map((l) => (
              <Link key={l.id} href={l.path} passHref>
                <a
                  className={`font-bold pb-2 border-b-2 ${
                    router.pathname === l.path ? 'border-main-500 text-main-500' : 'border-transparent text-light-500'
                  } hover:border-main-500 hover:text-main-500 duration-150`}
                >
                  {l.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="block lg:hidden">
            <MobileMenu links={links} />
          </div>
        </div>
      </header>
    </>
  );
};
