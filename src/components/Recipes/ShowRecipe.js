import React from 'react';
import "./Recipes.css";

function ShowRecipe(props) {
    const recipe = props.recipe;
    return (
        <>
         <div className="container recipe-container">
              <div className="card m-5 recipe-card">
                <img
                  className="card-img-top"
                  src={recipe.img}
                  alt={recipe.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{recipe.ingredients}</li>
                  <li className="list-group-item">{recipe.instructions}</li>
                  <li className="list-group-item">{recipe.calories}</li>
                  <li className="list-group-item">{recipe.cooktime}</li>
                </ul>
              </div>
            </div>
        </>
    );
};

export default ShowRecipe;