import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BsMicFill } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';

const Header = () => (
  <header>
    <nav className="header-nav">
      <ul className="nav-ul">
        <li className="nav-li arrow">
          <Link to="/"><IoIosArrowBack /></Link>
        </li>
        <li className="nav-li">
          <h3 className="nav-title">Studio Ghibli</h3>
        </li>
        <li className="nav-li icons">
          <BsMicFill />
          <AiTwotoneSetting />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
