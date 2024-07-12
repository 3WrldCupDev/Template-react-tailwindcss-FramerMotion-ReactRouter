import { Link } from "react-router-dom";

 const Navbar = () => {
   return (
     <nav className="py-4 px-10">
       <ul className="flex space-x-10 justify-center">
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
     </nav>
   );
 }

 export default Navbar