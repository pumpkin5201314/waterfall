 


function getData(){
    // method, url, callback, data, flag
    ajax("GET","./data.txt",renderDom, '' ,true);

}
var oLi=document.getElementsByClassName("col");
  // var oImgBox=document.getElementsByClassName("imgBox")
//渲染页面
function renderDom(data){
	data=typeof data ==="string" ? JSON.parse(data):data;
	console.log(data);
     data.forEach(function(ele,index){
          
     		var minIndex = getMinli();
     		var itemDom = addDom(ele);

     		oLi[minIndex].innerHTML+=itemDom;
     		  console.log( ele.height*200/ele.width)

     		 

     })
}


function addDom(data){
	var oHight=parseInt(data.height*200/data.width)+"px"
	var dom='<div class="item">\
                    <div class="imgBox" style="height:'+ oHight+'">\
                        <img src="'+ data.image+'" alt="">\
                    </div>\
                    <p>'+data.title+'</p>\
                </div>'
      return dom;

}
//查找最短的列
function getMinli(){
	var oLi=document.getElementsByClassName("col");//类数组
	var minIndex = 0;
	var minHeight=oLi[minIndex].offsetHeight;
	for(var i=1;i<oLi.length;i++){
		if(oLi[i].offsetHeight<minHeight){
			minHeight=oLi[i].offsetHeight;
			minIndex=i;
		}
		
	}
	return minIndex;
}
 //懒加载
window.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var clientHeight=document.documentElement.clientHeight;
	var minHeight=oLi[getMinli()].offsetHeight;

	if(scrollTop+clientHeight>minHeight){
		getData();
		console.log(scrollTop,clientHeight,minHeight)



	}
}




getData()