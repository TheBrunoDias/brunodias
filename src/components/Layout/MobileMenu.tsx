import { Popover, Transition } from '@headlessui/react';
import { useLanguage } from '@Hooks/useLanguage';
import { socials } from '@Mocks/socials';
import Image from 'next/image';
import Link from 'next/link';
import { List, X } from 'phosphor-react';
import { Fragment } from 'react';

type Props = {
  links: {
    id: number;
    label: string;
    path: string;
  }[];
};

export const MobileMenu: React.FC<Props> = ({ links }) => {
  const { content, handleSelectLang } = useLanguage();

  return (
    <>
      <Popover>
        {({ close, open }) => (
          <>
            <Popover.Button className="text-main-500">
              <List size={24} weight="bold" />
            </Popover.Button>
            {open && <div className="fixed inset-0 bg-black bg-opacity-50" />}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-x-2"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-2"
            >
              <Popover.Panel className={`fixed top-0 right-0 h-screen bg-dark-300 w-1/2 p-3`}>
                <div className="flex h-full justify-start items-center flex-col">
                  <header className="w-full py-10 relative flex justify-center items-center flex-col space-y-2">
                    <button className="absolute top-0 right-2 text-main-500" onClick={close}>
                      <X size={24} weight="bold" />
                    </button>
                    <Image src="/images/logo.png" alt="Bruno Dias Logo" width="65" height="52" />
                  </header>
                  <div className="flex w-full justify-center items-center space-y-5 flex-col px-3 py-3">
                    {links.map((l) => (
                      <Link key={l.id} href={l.path} passHref>
                        <a className={`uppercase font-bold text-main-500`}>{l.label}</a>
                      </Link>
                    ))}
                  </div>
                  <div className="w-full border-t border-main-500 pt-3  flex justify-center items-center space-x-4 mt-10">
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
                  <footer className="mt-auto flex flex-col items-center">
                    <span>{new Date().getFullYear()} &copy;</span>
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold"
                    >
                      Bruno Dias.
                    </a>
                  </footer>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
