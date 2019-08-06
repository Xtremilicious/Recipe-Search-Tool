import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import './Recipe.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Recipe = ({key, title, calories, image, ingredients}) =>{
    let i='lol';
    return(
/* <div className={style.recipe}>
    <h1 >{title}</h1>
    <ol>
        {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
        ))}
    </ol>
    <p>{calories}</p>
    

</div> */
<div className="card">
<img  className="card-img" src ={image} alt=''/>
  <div className="card-body">
    <div className="card-title">{title}</div>
    <div className="btn btn-primary view-recipe" data-toggle="modal" data-target={"#"+title.replace(/ /g, '').replace(/[^a-zA-Z ]/g, "")}>View Recipe</div>

<div className="modal" id={title.replace(/[^a-zA-Z ]/g, "").replace(/ /g, '')} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenteredLabel">Ingredients</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <ul>
        {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
        ))}
    </ul>
      </div>
    </div>
  </div>
</div>
  </div>
  
</div>

    );
}

export default Recipe;