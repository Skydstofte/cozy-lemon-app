import {Routes, Route} from "react-router-dom";
import HomePage from'./pages/HomePage';
import Posters from './pages/Posters';
import Crochet from './pages/Crochet';
import AboutUs from './pages/AboutUs';
import ContactOrOrder from './pages/ContactOrder';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/CitatPlakater" element={<Posters/>} />
        <Route path="/HækledeBlomster" element={<Crochet/>} />
        <Route path="/OmCozyLemon" element={<AboutUs/>} />
        <Route path="/BestilKontakt" element={<ContactOrOrder/>} />
      </Routes>
    </main>
  );
}

export default App;