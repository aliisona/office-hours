// Components/NavBar.js
import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
   <div className = 'p-2'> 
 <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/Teachers">Teachers</Link>
          </li>
          {/* <li>
             <Link to="/Calendar">Calendar</Link>
          </li> */}
       </ul>
 </nav></div>
 );
};

export default NavBar;