// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const ingSauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      ingSauce.classList.add('sauce-white');
    } else {
      ingSauce.classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const ingCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    ingCrust.classList.add('crust-gluten-free');
  } else {
    ingCrust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPep = document.querySelector('.btn-pepperoni')
  if(state.pepperoni) {
    btnPep.classList.add('active')
  } else {
    btnPep.classList.remove('active')
  }
  const btnMus = document.querySelector('.btn-mushrooms')
  if(state.mushrooms) {
    btnMus.classList.add('active')
  } else {
    btnMus.classList.remove('active')
  }
  const btnGreenPep = document.querySelector('.btn-green-peppers')
  if(state.greenPeppers) {
    btnGreenPep.classList.add('active')
  } else {
    btnGreenPep.classList.remove('active')
  }
  const btnSauce = document.querySelector('.btn-sauce')
  if(state.whiteSauce) {
    btnSauce.classList.add('active')
  } else {
    btnSauce.classList.remove('active')
  }
  const btnCrust = document.querySelector('.btn-crust')
  if(state.glutenFreeCrust) {
    btnCrust.classList.add('active')
  } else {
    btnCrust.classList.remove('active')
  }

  //He intentado crear una constante de los valores del objeto Object.values(state), iterar por cada uno de ellos y cada uno de los botones para no tener que repetir uno por uno pero no me salía el resultado.
  // const valueState = Object.values(state)
  //const buttons = document.querySelectorAll('.btn')
   // for (let i = 0; i<buttons.length; i++) {
     // if (valueState[i]) {
      //  buttons[i].classList.add('active');
    //  } else {
    //    buttons[i].classList.remove('active')
   //   }
  

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const extraPrices = document.querySelectorAll('.price li')
  console.log(extraPrices)
  if(state.pepperoni) {extraPrices[0].style.visibility = 'visible';} 
  else {extraPrices[0].style.visibility = 'hidden';}
  if(state.mushrooms) {extraPrices[1].style.visibility = 'visible';} 
  else {extraPrices[1].style.visibility = 'hidden';}
  if(state.greenPeppers){extraPrices[2].style.visibility = 'visible';}
  else {extraPrices[2].style.visibility = 'hidden';}
  if(state.whiteSauce){extraPrices[3].style.visibility = 'visible';}
  else {extraPrices[3].style.visibility = 'hidden';}
  if(state.glutenFreeCrust){extraPrices[4].style.visibility = 'visible';}
  else{extraPrices[4].style.visibility = 'hidden';}
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});