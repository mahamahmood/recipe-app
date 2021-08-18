import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowRecipe from "./ShowRecipe";
import "./Recipes.css";
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';

function CreateRecipe() {
  // new
  const [newRecipe, updateNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    calories: "",
    cooktime: "",
    img: "",
  });

  const [allRecipes, updateAllRecipes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAllRecipes([...allRecipes, newRecipe]);
    updateNewRecipe({
      name: "",
      ingredients: "",
      instructions: "",
      calories: "",
      cooktime: "",
      img: "",
    });
    // console.log(allRecipes);
  };

  const handleChange = (event) => {
    updateNewRecipe({ ...newRecipe, [event.target.id]: event.target.value });
    // console.log(newRecipe);
  };
 
  return (
    <div className="App">
      <NavBar />
      <Link to={"/recipes"}>Back to All Recipe Page</Link>
      <h1>Create A Recipe</h1>
      <p>
        Fill out the form to create a recipe. Pay attention, some fileds are
        required!
      </p>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>New Recipe Form</h1>
        <label className="form-label">Name</label>
        <input
          className="form-control"
          required
          type="text"
          name="name"
          id="name"
          value={newRecipe.name}
          onChange={handleChange}
        />
        <label className="form-label">Ingredients</label>
        <textarea
          className="form-control"
          required
          type="text"
          name="ingredients"
          id="ingredients"
          value={newRecipe.ingredients}
          onChange={handleChange}
        />
        <label className="form-label">Instructions</label>
        <textarea
          className="form-control"
          required
          type="text"
          name="instructions"
          id="instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
        />
        <label className="form-label">Calories</label>
        <input
          className="form-control"
          type="number"
          name="calories"
          id="calories"
          value={newRecipe.calories}
          onChange={handleChange}
        />
        <label className="form-label">Cook Time in Minutes</label>
        <input
          className="form-control"
          type="number"
          name="cooktime"
          id="cooktime"
          value={newRecipe.cooktime}
          onChange={handleChange}
        />
        <label className="form-label">Recipe Image</label>
        <input
          className="form-control"
          type="link"
          name="img"
          id="img"
          value={newRecipe.img}
          onChange={handleChange}
        /><br />
        <button type="submit">Create Recipe</button>
      </form>
      {allRecipes.length > 0 &&
        allRecipes.map((recipe, i) => {
          return (
           <ShowRecipe key={i} recipe={recipe} />
          );
        })}
        <Footer />
    </div>
  );
}
export default CreateRecipe;
