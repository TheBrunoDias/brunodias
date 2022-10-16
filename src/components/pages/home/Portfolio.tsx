import { FadeUp } from '@Components/Fade';
import { useLanguage } from '@Hooks/useLanguage';
import { technologies } from '@Mocks/technologies';
import { GithubLogo, Link } from 'phosphor-react';
import { useEffect, useState } from 'react';

export const Portfolio: React.FC = () => {
  const { content } = useLanguage();
  const [cards, setCards] = useState(content.portfolio.projects);
  const [filter, setFilter] = useState<typeof technologies[0]>();

  const handleSelectFilter = (id: string | undefined) => {
    const find = technologies.find((i) => i.id === id);
    setFilter(find);
    if (!find) {
      setCards(content.portfolio.projects);
    } else {
      setCards(content.portfolio.projects.filter((p) => p.technologies.includes(find.id)));
    }
  };

  useEffect(() => {
    setCards(content.portfolio.projects);
    setFilter(undefined);
  }, [content]);

  return (
    <section id="portfolio" className="container -mt-40 pt-60">
      <FadeUp className="mb-10 flex flex-col items-center space-y-5">
        <h2 className="text-2xl font-bold text-main-500">{content.portfolio.section_title}</h2>
        <p className="text-center">{content.portfolio.text}</p>
        <div className="w-20 h-[2px] bg-main-500"></div>
      </FadeUp>

      <FadeUp className="mb-10">
        <span className="flex-1">{content.portfolio.filter_message}:</span>
        <ul className="flex justify-start items-center gap-2 flex-wrap my-2">
          <li>
            <button
              onClick={() => handleSelectFilter(undefined)}
              className={`py-2 px-4 border-t-2 bg-dark-300 ${
                filter === undefined ? 'border-t-main-500' : 'border-t-transparent'
              } hover:border-t-main-500 duration-150`}
            >
              {content.portfolio.remove_filter} ({content.portfolio.projects.length})
            </button>
          </li>
          {technologies.map((t) => (
            <li key={t.id}>
              <button
                onClick={() => handleSelectFilter(t.id)}
                className={`py-2 px-4 border-t-2 bg-dark-300  ${
                  filter?.id === t.id ? 'border-t-main-500' : 'border-t-transparent'
                } hover:border-t-main-500 duration-150`}
              >
                {t.label} ({content.portfolio.projects.filter((l) => l.technologies.includes(t.id)).length})
              </button>
            </li>
          ))}
        </ul>

        <p className="font-light">{filter?.description[content.lang]}</p>
      </FadeUp>
      <FadeUp>
        <p>
          ** <span className="font-light">{content.portfolio.projects_message}</span>
        </p>
      </FadeUp>
      <FadeUp className="flex justify-center lg:justify-start items-stretch gap-4 flex-wrap my-3 duration-150 w-full">
        {cards
          .sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          })
          .map((c) => (
            <div
              key={c.id}
              className="p-4 flex-1 bg-dark-300 border-b-2 border-main-500 min-w-[320px] max-w-xs flex flex-col space-y-2"
            >
              <h4 className="font-semibold text-sm text-main-500 ">{c.title}</h4>
              <p className="text-xs">{c.description}</p>
              <span className="text-xs pt-2">
                {c.technologies.map((t) => technologies.find((i) => i.id === t)?.label).join(', ')}
              </span>
              <div className="flex-1 flex justify-end items-end space-x-2">
                <a
                  title={c.link}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main-500 duration-150"
                >
                  <Link />
                </a>
                {c.repository && (
                  <a
                    href={c.repository}
                    title={c.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-main-500 duration-150"
                  >
                    <GithubLogo />
                  </a>
                )}
              </div>
            </div>
          ))}
      </FadeUp>
    </section>
  );
};
