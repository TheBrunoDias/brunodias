import { FadeUp } from '@Components/Fade';
import { socials } from '@Mocks/socials';
import { CaretDown, GithubLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react';

export const Hero: React.FC = () => {
  return (
    <div className="home--hero bg-cover bg-opacity-30">
      <FadeUp className="px-2 backdrop-blur-sm flex justify-center items-center flex-col h-screen">
        <h1 className="text-4xl font-bold tracking-wider">Bruno Sousa Dias</h1>
        <h2 className="text-lg text-light-900 font-semibold uppercase">Full Stack Developer</h2>
        <div className="w-12 h-[2px] bg-light-500 my-4"></div>
        <div className="flex justify-center items-center space-x-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-500 duration-150"
          >
            <GithubLogo size={28} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-500 duration-150"
          >
            <LinkedinLogo size={28} />
          </a>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-500 duration-150"
          >
            <WhatsappLogo size={28} />
          </a>
        </div>
        <a href="#sobre" className="rounded-full  mt-20  flex justify-center items-center text-main-500">
          <CaretDown size={24} weight="bold" className="animate-bounce" />
        </a>
      </FadeUp>
    </div>
  );
};
