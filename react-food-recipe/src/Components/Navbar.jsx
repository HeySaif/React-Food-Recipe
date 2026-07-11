
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import './Navbar.css';

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
  const navigate = useNavigate();

  function onFormSubmit(e) {
    handleSubmit(e);
    navigate('/'); 
  }

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">FoodRecipe</Link>
      </h2>
      <form onSubmit={onFormSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter Items... (e.g. Banana, Pizza)"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
}