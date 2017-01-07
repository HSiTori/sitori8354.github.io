
console.log("001");
updateTotalTaskNumber();

function addTask(){
  console.log("002");
  var value = $("input#input").val();
  if(value!==""){
    var date=new Date();
    var dateString=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"
    var time=date.getHours()+":"+date.getMinutes();
    $("#task-list").append("<li class=\"ab\"><label><input  class='js-task-checkbox' type='checkbox'><span class='js-content'>"+value+"</span>"+","+dateString+","+time+"</label><button class='js-delete-button'>刪除</button></li>");
    $("#input").val("");
    updateTotalTaskNumber();
  }
}

function isEnterPressed(event){
  if (event.which === 13){
    addTask();
  }
}
$("button#add-button").on("click", addTask);
$("input#input").on("keypress", isEnterPressed);



function deleteTask(){
  var $target = $(this).closest("li");
  $target.remove();
  updateTotalTaskNumber();
}
$("body").on("click", ".js-delete-button", deleteTask);
$("#delete-completed-button").on("click", removeCompletedTasks);
                                 



function updateTotalTaskNumber() {
  var total = $(".js-task-checkbox").length;
  $("#total-task-number").text(total);
}
