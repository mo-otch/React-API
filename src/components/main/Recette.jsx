import Recipes from "../../recettes.json";
import '../../App.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa"
import Copyright from "../footer/Copyright";

function Recipe() {
  const [query, setQuery] = useState("")
  return (
    <div>
      <div className="flex justify-center items-center">
        <FaSearch className="text-2xl mt-1"/>
        <input className="border-2 rounded w-96 ml-2 mt-2 px-3 py-1 outline-none" onChange={event => setQuery(event.target.value)} placeholder="Rechercher..." />
      </div>
      <div className="grid grid-cols-3 gap-5 p-5">
        {Recipes.filter(recipe => {
          if (query === '') {
            return recipe
          }
          else if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
            return recipe
          }
        }).map((recipe) => {
          return (
            <div className="p-5 bg-couleur" key={recipe.id}>
              <h2 className="uppercase font-bold text-xl text-center mb-3 border-b-2 border-black h-16">
                {recipe.name}
              </h2>
              <img
                className="h-64 w-64 mr-auto ml-auto mb-2"
                src={require(`../../assets/${recipe.name}.jpg`)}
                alt="image recette"
              />
              <p className="border-b-2 border-black pb-2 h-40">
                <p className="font-semibold underline mb-2 border-t-2 border-black">
                  Ingrédients :
                </p>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <div>
                      <p className="text-sm ">
                        - {ingredient.quantity} {ingredient.unit}{" "}
                        {ingredient.ingredient}
                      </p>
                    </div>
                  );
                })}
              </p>
              <h2 className="font-semibold underline mb-2">Préparation :</h2>
              <p className="mt-2">{recipe.description}</p>
            </div>
          );
        })}
      </div>
      <footer className="App-footer">
          <Copyright />
        </footer>
    </div>
  );
}

export default Recipe;