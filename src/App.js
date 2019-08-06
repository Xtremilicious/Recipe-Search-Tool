import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
let i=0;
const App = () => {
const APP_ID = '8807a737';
const APP_KEY = '6c084dec0b84f3d74b5a1b0118a39fa1';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('');
const [isLoading, setIsLoading] = useState(false);

useEffect( () =>{
  getRecipes();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [query]);

const getRecipes = async () => {
  setIsLoading(true);
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  setIsLoading(false);
}

const updateSearch = e =>{
  setSearch(e.target.value);
  console.log(search);
}

const getSearch =e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}


  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder="Find Recipe"/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      {query==='' ? (
      <div className='landing'>
Find Recipe
      </div>
      ) :(isLoading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='recipes'>
          {recipes.map((recipe, index) =>(
            <Recipe 
            key={index}

            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           />
          
           
          ))}
        
          
          </div>
          
        ))}
      <div className="footer">Made by Nilarjun Das</div>
    </div>
  );
}

export default App;