
var login = function(){}
login.prototype.verify = function(){
    $.ajax({
        url:"./users.json",
        method:"GET",
        dataType:"JSON",
        success:function(result){
            console.log(result);
        }
    })
}