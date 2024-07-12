import Navbar from "./components/Navbar";

/*import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
*/

function App() {
  return (
    <>
      <Navbar/>
      <div className="text-center pt-5 bg-[#060A0F] h-[100vh]">
        <h1 className="text-yellow text-2xl font-bold">Welcome!</h1>
        <h2 className="text-xl text-orange">React + Tailwind + Framer Motion + React Router </h2>
      </div>
    </>
  );
}

export default App;
