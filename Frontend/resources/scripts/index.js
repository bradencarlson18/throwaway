function getRecipe(item){
    const apiURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + item;
    fetch(apiURL).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json);
        displayRecipe(json);
    }).catch(function(error){
        console.log(error);
    });
}

function handleOnChange(){
    const recipe = document.getElementById("recipes").value;
    if(recipe != "none"){
        getRecipe(recipe);
    }
    else {
        const temp = {
            meals: [
                {
                    strMeal: "Please Select a Recipe",
                    strInstructions: "No Recipe Selected"
                }
            ]
        };
        displayRecipe(temp);
    }
}

function displayRecipe(recipe){
    let html = "<h1>"+recipe.meals[0].strMeal+"</h1>";
    html+="<p>" + recipe.meals[0].strInstructions+"</p>";
    document.getElementById("recipe").innerHTML = html;
}

