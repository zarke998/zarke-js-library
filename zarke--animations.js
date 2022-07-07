
/* DROP DOWN ANIMATION FOR ul LIST */   /*(could be encapsulated even more by using .animate() jquery function) */
var animationRunning = false;           /* but there is unexpected behaviour when setting style on li tags via jquery where style wont reset to empty after timer stops */
var menuShowed = false;
var navMenu;
var navMenuItems;

function animateDropDownCascading(menuID, animationDuration) {
    if(!animationRunning){
        animationRunning = true;

        navMenu = document.getElementById(menuID);
        navMenuItems = navMenu.getElementsByTagName("li");
        var navMenuItemsLength = navMenuItems.length;

        if(!menuShowed){
            navMenu.classList.add("d-flex");

            for(var a = 0; a < navMenuItemsLength; a++)
                navMenuItems[a].classList.add("li-base");
        }
        var j = 0;

        var x = setInterval(function(){ /* timer function that repeats every x miliseconds */

            if(j >= navMenuItemsLength)
            {
                menuShowed = !menuShowed;
                if(!menuShowed){
                    for(var a = 0; a < navMenuItemsLength; a++){
                        navMenuItems[a].className = ""; 
                    }
                    navMenu.className = "";             
                }
                animationRunning = false;
                clearInterval(x);
            }

            if(animationRunning){
                if(!menuShowed){

                    navMenuItems[j].classList.remove("dropUp");
                    navMenuItems[j].classList.add("dropDown");
                }
                else{
                    navMenuItems[3-j].classList.remove("dropDown");
                    navMenuItems[3-j].classList.add("dropUp");
                }
            }
            j++;
        } ,animationDuration / navMenuItemsLength);
    }
}