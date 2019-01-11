function loading(){
var input = document.querySelector("#listname_input");

var loadBtn = document.querySelector("#load_list_btn");
loadBtn.addEventListener("click",loading);

var listContent =  document.querySelector("#timelist");

function loading(player){
    var time = localStorage.getItem(input.value);
    player = input.value;
    // We create the div container
   var card = document.createElement("div");
   card.className = "card";
   card.id = "card" + player;
   listContent.appendChild(card);
   // We create the name content
   var name = document.createElement("h3");
   name.className = "name";
   name.id = "name" + player;
   name.innerText = player;
   card.appendChild(name);
   // We create the list
   var timeList = document.createElement("ol");
   timeList.className = "timeList";
   timeList.id = "timeList" + player;
   card.appendChild(timeList);
   // We push the list's elements in list
   timeList.innerHTML = time;
   input.value = "";
}
}
export default loading;