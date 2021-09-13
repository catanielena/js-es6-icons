//icons
const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];
//color map
const colors = {
    food: "red",
    animal:"green",
    beverage: "blue"
};
// iconsWrapper
const iconsWrapper = document.getElementById("icons");
/*
**
**PROGRAMMA PRINCIPALE
**
*/
/*
**printIcons
*/
const printIcons = (arr, container) => {
    container.innerHTML = "";
    arr.forEach(
        (e) => {
            container.innerHTML += `
            <div class="icons-wrapper__card">
               <i class="card__icon ${e.family} ${e.prefix + e.name}" style="color:${e.color}"></i>
               <div class="card__label">
                    ${e.name}
               </div>
            </div>`;
        }
    );
};
/*
**printIcon
*/
const addNew = (icon) => {
    iconsWrapper.innerHTML += `
    <div class="icons-wrapper__card">
       <i class="card__icon ${icon.family} ${icon.prefix + icon.name}" style="color:${icon.color}"></i>
       <div class="card__label">
            ${icon.name}
       </div>
    </div>`;
}
// array icons and colors
const colorIcons = icons.map(
    (e) => {
        return {
            ...e,
            color: colors[e.category]
        }
    }
)
console.log("colorIcons", colorIcons);
// get select
const selectCategory = document.getElementById("icon-category");
// get categories
const iconCategories = [];
colorIcons.forEach(
    (e) => {
        if(iconCategories.includes(e.category) == false) {
            iconCategories.push(e.category);
        }
    }
);
console.log("iconCategories", iconCategories);
// display options
iconCategories.forEach(
    (e) => {
        selectCategory.innerHTML += `<option value="${e}">${e}</option>`
    }
);
// change event 
selectCategory.addEventListener("change",
    () => {
        const filter = colorIcons.filter((e) => selectCategory.value == e.category || selectCategory.value=="all"
        );
        console.log(filter);
        //print icons
        printIcons(filter, iconsWrapper);
    }
);
// on load 
window.addEventListener("load", 
    () => { 
        //print icons
        printIcons(colorIcons, iconsWrapper);
});
// *
// *
// *
// * Add btn
const btnAdd = document.getElementById("btn_add");
// Add event
btnAdd.addEventListener("click",
    () => {
        // get newIcon values
        let newIcon = {};
        newIcon.name = document.getElementById("name").value;
        newIcon.family = document.getElementById("family").value;
        newIcon.prefix = document.getElementById("prefix").value;
        newIcon.category = document.getElementById("category").value;
        let c = newIcon.category;
        // newIcon category case
        if(iconCategories.includes(c) == false) {
            iconCategories.push(c);
            selectCategory.innerHTML += `<option value="${c}">${c}</option>`;
            colors[c] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        }
        //assign newIcon color
        newIcon.color = colors[c];
        //push newIcon into colorIcons
        colorIcons.push(newIcon);
        //print newIcon
        addNew(newIcon);
}
);
