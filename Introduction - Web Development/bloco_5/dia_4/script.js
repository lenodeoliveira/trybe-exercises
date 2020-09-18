window.onload = function(){

    function setBackgroundColor(color) {
      let content = document.querySelector(".content")
      content.style.backgroundColor = color
      localStorage.setItem("corDeFundo", color)
    }

}