let selections = ['tax', 'size', 'collab']

function clearButtons(lineID) {
    var bns = document.getElementsByTagName("button");
    for (i = 0; i < bns.length; i++) {
      if(bns[i].parentNode.id == lineID){
          bns[i].classList.remove("selected");
      }
    }
}

function addtoev() {
    var bns = document.getElementsByTagName("button");
    for (i = 0; i < bns.length; i++) {
      bns[i].addEventListener("click", function() {
        clearButtons(this.parentNode.id);
        this.classList.toggle("selected");
        checkFilled(); });  
    }
  }

function checkFilled() {
    var count = 0;
    var bns = document.getElementsByTagName("button");
    for (i = 0; i < bns.length; i++) {
      if(bns[i].classList.contains("selected")){
          count++;
          switch(bns[i].parentNode.id){
                case "line1":
                    selections[0] = bns[i].innerHTML;
                    break;
                case "line2":
                    selections[1] = bns[i].innerHTML;
                    break;
                case "line3":
                    selections[2] = bns[i].innerHTML;
                    break;
                default:
                    break;
          }
      }
    }
    if(count == 3){
        console.log("It worked.")
        submit = document.getElementById("SubmitButton");
        submit.classList.add("SubmitActive");
    }
}
  
  window.addEventListener("load",function() {
    addtoev();
  });
