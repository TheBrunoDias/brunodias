import { useEffect, useRef } from 'react';

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const FadeUp: React.FC<Props> = ({ children, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (els) => {
        els.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add('faded');
            observer.unobserve(el.target);

            el.target.addEventListener('transitionend', () => el.target.classList.remove('fade-up', 'faded'), {
              once: true,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div {...props} ref={ref} className={`${className ? className : ''} fade-up`}>
      {children}
    </div>
  );
};
