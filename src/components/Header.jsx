import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BsMicFill } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/"><IoIosArrowBack /></Link>
        </li>
        <li>
          <h3>Studio Ghibli</h3>
        </li>
        <li><BsMicFill /></li>
        <li><AiTwotoneSetting /></li>
      </ul>
    </nav>
  </header>
);

export default Header;
