import { FadeUp } from '@Components/Fade';
import { useLanguage } from '@Hooks/useLanguage';
import { socials } from '@Mocks/socials';
import Image from 'next/image';
import { GithubLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react';

export const About: React.FC = () => {
  const { content } = useLanguage();
  return (
    <section
      id="sobre"
      className="container -mt-40 pt-60 pb-10 flex justify-center lg:justify-between items-center flex-col space-y-4 lg:space-y-0 space-x-0 lg:space-x-10 lg:flex-row"
    >
      <FadeUp className="relative w-full max-w-[400px] h-[400px] rounded-full ring-2 ring-main-500 shadow-lg shadow-main-500">
        <Image
          src="/images/me_4.jpg"
          alt="Bruno Sousa Dias"
          objectFit="cover"
          layout="fill"
          objectPosition={'top'}
          className="rounded-full "
        />
      </FadeUp>
      <FadeUp className="max-w-3xl">
        <h2 className="text-2xl font-bold text-main-500">{content.about.section_title}:</h2>
        <p className="pt-2 text-justify lg:text-left" dangerouslySetInnerHTML={{ __html: content.about.text }}></p>
        <div className="w-20 h-[2px] bg-main-500 my-4 mx-auto lg:mx-0"></div>
        <ul className="space-y-2">
          {content.about.info.map((ab) => (
            <li key={ab.label} className="text-sm">
              <span className="font-semibold ">{ab.label}: </span>
              {ab.link ? (
                <a href={ab.link} target="_blank" rel="noopener noreferrer">
                  <span>{ab.value}</span>
                </a>
              ) : (
                <span>{ab.value}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-center lg:justify-start items-center space-x-3 mt-3">
          <a
            href={socials.github}
            title={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-500 duration-150"
          >
            <GithubLogo size={28} />
          </a>
          <a
            href={socials.linkedin}
            title={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-500 duration-150"
          >
            <LinkedinLogo size={28} />
          </a>
          <a
            href={socials.whatsapp}
            title={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-500 duration-150"
          >
            <WhatsappLogo size={28} />
          </a>
        </div>
      </FadeUp>
    </section>
  );
};
