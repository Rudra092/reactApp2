import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppInformation from './components/information';
import AppServices from './components/services';
import AppAbout from './components/about';
import AppCategory from './components/category';
import AppTestimonials from './components/testimonials';
import AppBook from './components/book';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
  <header>
  <AppHeader/>
  </header>
  <main>
    <AppHero/>
    <AppInformation/>
    <AppServices/>
    <AppAbout/>
    <AppCategory/>
    <AppTestimonials/>
    <AppBook/>
  </main>
  <footer>
    <AppFooter/>
  </footer>
    </div>
  );
}

export default App;
