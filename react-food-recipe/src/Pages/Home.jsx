
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import RecipeItem from '../components/RecipeItem';
import './Pages.css';

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div className="status-msg">Searching for recipes...</div>;

  return (
    <div className="page-container">
      {recipeList && recipeList.length > 0 ? (
        <div className="recipe-grid">
          {recipeList.map((item) => <RecipeItem key={item.id} item={item} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h1>Nothing to show. Please search something</h1>
        </div>
      )}
    </div>
  );
}