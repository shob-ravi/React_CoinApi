import {Routes,Route} from 'react-router-dom';
import CurrenciesPage from "./pages/CurrenciesPage/CurrenciesPage";
import MainPage from "./pages/MainPage/MainPage";
import PricePage from "./pages/PricePage/PricePage";
import Nav from './components/Nav/Nav'

export default function App() {
  return (
  <div>
    <Nav />
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/currencies' element={<CurrenciesPage/>}/>
      <Route path='/price/:symbol' element={<PricePage/>} />
    </Routes>
  </div>
  );
}