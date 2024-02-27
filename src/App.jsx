import './app.scss';
import { Contact } from './components/contact/Contact';
import { Education } from './components/education/Education';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { Parallax } from './components/parallax/Parallax';
import { Portfolio } from './components/portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Education'>
        <Parallax type='education' />
      </section>
      <section>
        <Education />
      </section>
      <section id='Projects'>
        <Parallax type='Projects' />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
