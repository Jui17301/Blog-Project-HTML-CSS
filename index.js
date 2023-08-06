
const menuIcon = document.getElementById("menu_icon2");
const menu = document.getElementById("menu_icon");

menuIcon?.addEventListener("click",()=>{
  if(menu?.className="hidden")
  {
    menu.classList.remove("hidden");
  }
  else{
    menu.classList.add("hidden");
  }
})