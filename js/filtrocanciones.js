function searchFilters(input,selector){
    document.addEventListener("keyup",e=>{
    if(e.target.matches(input)){
		console.log(e.key);
      if (e.key === "Escape") e.target.value = "";

      document.querySelectorAll(selector).forEach(el=>
        el.textContent.toLowerCase().includes(e.target.value)
        ? el.classList.remove("filter")
        : el.classList.add("filter"));
    }
  })
}


document.addEventListener("DOMContentLoaded", (e) => {
    searchFilters(".card-filter",".cardbusqueda");
});