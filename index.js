const allboxes=document.querySelectorAll(".box")
allboxes.forEach(function(box){
    box.addEventListener("click",function(e){
      document.body.style.backgroundColor=e.target.id
    })
})

function ChooseColor(){
    const colorChnager=document.getElementById("colorChanger")
    document.body.style.backgroundColor=colorChnager.value
}

function reset(){
    window.location.reload()
}