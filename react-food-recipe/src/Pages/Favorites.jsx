
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import RecipeItem from '../components/RecipeItem';
import './Pages.css';

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="page-container">
      {favoritesList && favoritesList.length > 0 ? (
        <div className="recipe-grid">
          {favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h1>Nothing is added in favorites.</h1>
        </div>
      )}
    </div>
  );
}