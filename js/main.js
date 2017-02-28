function button(event,x){ //receive two parameters from index.html, event and an integer x
    event.preventDefault(); //this makes your page perisitent after you click the bottom in the browser, try to delete it and see what happen in the mobile mode (f12)
    var j = document.getElementsByClassName("bpage").length; //get the amount of elements in index.html with the class name is bpage
    var i;
    for(i = 1; i <= j; i++){ //loops from 1 to the amount of bpage in index.html, hides all city and funfact description
        document.getElementById("city-"+i).style.display = "none";
        document.getElementById("funfact-"+i).style.display = "none";
    }
    document.getElementById("city-"+x).style.display = "inline"; //shows city with the postfix is x
    document.getElementById("funfact-"+x).style.display = "inline"; //shows funfact with the postfix is x
}