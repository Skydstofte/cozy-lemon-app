import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from'./page/HomePage';
import IntroPosters from './page/IntroPosters';
import IntroCrochet from './page/IntroCrochet';
import IntroAboutUs from './page/IntroAboutUs';
import ContactOrOrder from './page/ContactOrder';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Plakater" element={<IntroPosters/>} />
        <Route path="/HækledeBlomster" element={<IntroCrochet/>} />
        <Route path="/OmCozyLemon" element={<IntroAboutUs/>} />
        <Route path="/KontaktBestil" element={<ContactOrOrder/>} />
      </Routes>
    </main>
  );
}

export default App;