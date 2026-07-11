
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import './Pages.css';

export default function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, favoritesList } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();
      if (data?.data?.recipe) {
        setRecipeDetailsData(data.data.recipe);
      }
    }
    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  const isFavorited = favoritesList.some(item => item.id === recipeDetailsData?.id);

  if (!recipeDetailsData) return <div className="status-msg">Loading recipe analytics...</div>;

  return (
    <div className="details-container">
      <div className="details-image-panel">
        <img src={recipeDetailsData?.image_url} alt="recipe details" />
      </div>
      <div className="details-content-panel">
        <span className="publisher-tag">{recipeDetailsData?.publisher}</span>
        <h2 className="details-title">{recipeDetailsData?.title}</h2>
        
        <button
          onClick={() => handleAddToFavorite(recipeDetailsData)}
          className={`fav-toggle-btn ${isFavorited ? 'remove-mode' : 'add-mode'}`}
        >
          {isFavorited ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
        </button>

        <div className="ingredients-section">
          <h3>Ingredients:</h3>
          <ul className="ingredients-list">
            {recipeDetailsData?.ingredients?.map((ingredient, idx) => (
              <li key={idx}>
                <span className="ing-quantity">
                  {ingredient.quantity ? ingredient.quantity : ''} {ingredient.unit}
                </span>
                <span className="ing-description"> {ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}