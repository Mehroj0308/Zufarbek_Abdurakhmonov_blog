import logo from './logo.svg';
import './App.css';
import Entering from './Components/Enter/Entering'
import Navbar from './Components/Home/Navbar/Navbar';
import AsosiyPage from './Components/Home/Asosiy_page/Asosiy_page';
import Recant from './Components/Home/Recant  sayt/Recant_work'
import Fiture from './Components/Home/Fiture_works/Fiture';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
   <>
    {/* <Entering/> */}
   <Navbar/>
   <AsosiyPage/>
   <Recant/>
   <Fiture/>
   <Footer/>
   </>
  );
}

export default App;
