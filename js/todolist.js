
var count=1;
updateTotalTaskNumber();
function addTask(){
  console.log("002");
  var  value= $("input#input").val();
  if(value!==""){
    $("#task-list").append("<li class='delete'><div class='checkbox checkbox-primary'><input id='checkbox2' type='checkbox'><label for='checkbox2'>。</label></div><span class='js-content'>"+value+"</span>"+"<button class='btn btn-danger btn-xs' id='delete-button"+count+"' onclick='deleteTask("+count+");'>刪除</button></li>");
    $("#input").val("");
    updateTotalTaskNumber();
    count++;
  }
}



function isEnterPressed(event){
  if (event.which === 13){
    addTask();
  }
}
$("button#add-button").on("click", addTask);
$("input#input").on("keypress", isEnterPressed);


 $("ul#task-list").on("click","button#delete-button",deleteTask);
function deleteTask(i){
  console.log($("button#delete-button"+i).closest("li").text()+"YA");
  var $target = $("button#delete-button"+i).closest("li");
  $target.remove(); 
  updateTotalTaskNumber();
}


function updateTotalTaskNumber() {
  var total = $(".js-task-checkbox").length;
  $("#total-task-number").text(total);
}
