

toolBoxButton.addEventListener("click", () =>{
    localStorage.setItem("pickedUpToolbox", "true")
    if(toolboxItem.style.display == "none"){
        toolboxItem.style.display = "block";
    }else {
        toolboxItem.style.display = "none";
    }
});