import { FadeUp } from '@Components/Fade';
import { socials } from '@Mocks/socials';
import { useLanguage } from '@Hooks/useLanguage';
import { Envelope, GithubLogo, LinkedinLogo, Phone, WhatsappLogo } from 'phosphor-react';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  return (
    <footer id="contato" className="container -mt-40 pt-60 pb-4">
      <FadeUp className="mb-10 flex flex-col items-center space-y-5">
        <h2 className="text-2xl font-bold text-main-500">{content.contact.section_title}</h2>
        <p className="text-center">{content.contact.text_1}</p>
        <div className="w-20 h-[2px] bg-main-500"></div>
      </FadeUp>

      <FadeUp>
        <p className="text-center text-base">{content.contact.text_2}</p>
        <div className="flex justify-center items-center flex-wrap text-main-500 gap-5 my-5">
          <a href={socials.email} title={socials.email}>
            <Envelope size={24} />
          </a>
          <a href={socials.github} title={socials.github} target="_blank" rel="noopener noreferrer">
            <GithubLogo size={24} />
          </a>
          <a href={socials.linkedin} title={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={24} />
          </a>
          <a href={socials.whatsapp} title={socials.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsappLogo size={24} />
          </a>
          <a href={socials.phone} title={socials.phone}>
            <Phone size={24} />
          </a>
        </div>
      </FadeUp>
      <FadeUp className="mx-auto text-center mt-4 mb-2">
        {new Date().getFullYear()} &copy;{' '}
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="underline font-bold">
          Bruno Dias.
        </a>
      </FadeUp>
    </footer>
  );
};
