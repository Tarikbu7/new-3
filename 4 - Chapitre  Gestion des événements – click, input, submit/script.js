
let goku=document.getElementById("third")
  let gohan=document.getElementById("fourth")
  let vegeta=document.getElementById("forma")

  goku.addEventListener("click" , function(){

console.log("show what first button did")


  })

gohan.addEventListener("input" , function(){

console.log("anything you type : "  + gohan.value )


})


vegeta.addEventListener("submit" , function(e){
e.preventDefault(),

console.log("when i click the third button : " + gohan.value)

})



