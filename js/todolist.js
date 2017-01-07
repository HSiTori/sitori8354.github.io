
console.log("001");
updateTotalTaskNumber();

function addTask(){
  console.log("002");
  var value = $("#input").val();
  if(value!==""){
    var date=new Date();
    var dateString=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"
    var time=date.getHours()+":"+date.getMinutes();
    $("#task-list").append("<li class=\"ab\"><label><input  class='js-task-checkbox' type='checkbox'><span class='js-content'>"+value+"</span>"+","+dateString+","+time+"</label><div class=\"clear-float\"><div class=\"twoBottom\"><button class='edit'>編輯</button><br><button class='js-delete-button'>刪除</button></div></div></li>");
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


$("#input").on("keypress", isEnterPressed);



function deleteTask(){
  var $target = $(this).closest("li");
  $target.remove();
  updateTotalTaskNumber();
}
$("body").on("click", ".js-delete-button", deleteTask);


$("#delete-completed-button").on("click", removeCompletedTasks);
                                 
function removeCompletedTasks(){
  $(".js-task-checkbox:checked").closest("li").remove();
  updateTotalTaskNumber();
}



function updateTotalTaskNumber() { // #HW
  var total = $(".js-task-checkbox").length;
  $("#total-task-number").text(total);
}

function showCom(){
  $(".js-task-checkbox").closest("li").hide();
  $(".js-task-checkbox:checked").closest("li").show();
}

function showImcom(){
  $(".js-task-checkbox").closest("li").show();
  $(".js-task-checkbox:checked").closest("li").hide();
}

function showAll(){
  $(".js-task-checkbox").closest("li").show();
}
$("body").on("click","#com",showCom);
$("body").on("click","#imcom",showImcom);
$("body").on("click","#all",showAll);

 
function editlist(){
  var task =$(this).closest("li");
  var ori =task.find(".js-content").text();
  var newtask=prompt("將"+ori+"改成");
  task.find(".js-content").text(newtask);
}
$("body").on("click",".edit",editlist);
