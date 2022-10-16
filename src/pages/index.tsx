import type { NextPage } from 'next';
import { Hero, About, Resume, Portfolio } from '@Components/pages/home';

const HomePage: NextPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
    </main>
  );
};

export default HomePage;
