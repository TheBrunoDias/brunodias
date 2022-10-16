import { FadeUp } from '@Components/Fade';
import { useLanguage } from '@Hooks/useLanguage';

export const Resume: React.FC = () => {
  const { content } = useLanguage();
  return (
    <>
      <section id="curriculo" className="container -mt-40 pt-60">
        <FadeUp className="mb-10 flex flex-col items-center space-y-5">
          <h2 className="text-2xl font-bold text-main-500">{content.resume.section_title}</h2>
          <p className="text-center">{content.resume.text}</p>
          <div className="w-20 h-[2px] bg-main-500 my-4"></div>
        </FadeUp>

        <div className="flex justify-center items-start lg:space-x-5 space-y-5 lg:space-y-0 flex-col lg:flex-row">
          <div className="flex-1">
            <FadeUp>
              <h3 className="text-base mb-2 text-main-500 font-bold">{content.resume.professonal_title}:</h3>
            </FadeUp>

            {content.resume.professional.map((p) => (
              <FadeUp
                key={p.id}
                className="flex flex-col space-y-1 px-2 py-3 mb-1 bg-dark-300 border-l-2 border-main-500"
              >
                <h4 className="uppercase font-semibold mb-1">{p.title}</h4>
                <span className="">{p.company}</span>
                <span className="font-light text-xs">{p.duration}</span>
                <p className="font-light">{p.description}</p>
              </FadeUp>
            ))}
          </div>
          <div className="flex-1">
            <FadeUp>
              <h3 className="text-base mb-2 text-main-500 font-bold">{content.resume.educational_title}:</h3>
            </FadeUp>

            {content.resume.educational.map((p) => (
              <FadeUp
                key={p.id}
                className="flex flex-col space-y-1 px-2 py-3 mb-1 bg-dark-300 border-l-2 border-main-500"
              >
                <h4 className="uppercase font-semibold mb-1">{p.title}</h4>
                <span className="">
                  {content.resume.educational_labels.collage}: {p.collage}
                </span>
                <span>
                  {content.resume.educational_labels.level}: {p.level}
                </span>
                <span>
                  {content.resume.educational_labels.conclusion_year}: {p.conclusion_year}
                </span>
              </FadeUp>
            ))}
          </div>
          <div className="flex-1">
            <FadeUp>
              <h3 className="text-base mb-2 text-main-500 font-bold">{content.resume.course_title}:</h3>
            </FadeUp>

            {content.resume.courses.map((p) => (
              <FadeUp
                key={p.id}
                className="flex flex-col space-y-1 px-2 py-3 mb-1 bg-dark-300 border-l-2 border-main-500"
              >
                <h4 className="uppercase font-semibold mb-1">{p.title}</h4>
                <span>{p.category}</span>
                <span>
                  {p.collage} - {p.duration}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
