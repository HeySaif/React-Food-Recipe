// src/components/RecipeItem.jsx
import { Link } from 'react-router-dom';
import './RecipeItem.css';

export default function RecipeItem({ item }) {
  return (
    <div className="recipe-card">
      <div className="card-image-wrapper">
        <img src={item?.image_url} alt="recipe instance" />
      </div>
      <div className="card-info">
        <span className="publisher-tag">{item?.publisher}</span>
        <h3 className="recipe-title">{item?.title}</h3>
        <Link to={`/recipe-item/${item?.id}`} className="details-btn">
          Recipe Details
        </Link>
      </div>
    </div>
  );
}