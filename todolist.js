var save = function (array) {
	// 序列化保存todo
	var s = JSON.stringify(array)
	localStorage.todos = s	
}

var load = function(){
	// 反序列化取出todo
	var s = localStorage.todos
	if (s){
		return JSON.parse(s)
	} else {
		return []
	}
}

var isEmptyObject = function(e) {  
    var t;  
    for (t in e)  
        return !1;
    return !0;
}


Date.prototype.format = function(format)
{
 var o = {
 "M+" : this.getMonth()+1, //month
 "d+" : this.getDate(),    //day
 "h+" : this.getHours(),   //hour
 "m+" : this.getMinutes(), //minute
 "s+" : this.getSeconds(), //second
 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
 "S" : this.getMilliseconds() //millisecond
 }
 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 for(var k in o)if(new RegExp("("+ k +")").test(format))
 format = format.replace(RegExp.$1,
 RegExp.$1.length==1 ? o[k] :
 ("00"+ o[k]).substr((""+ o[k]).length));
 return format;
}

var countFinished = function () {
	return this.todos.filter(function (todo) {
		return todo.done
	}).length	
}