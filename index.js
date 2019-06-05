
// var oLi = $('li');
// var num = 1;
// var flag = false;

//获取数据
// getData();
// function getData() {
    
//         $.ajax({
//             type: 'GET',
//             url: './data.txt',
//             success: addDom,
//             //  beforeSend: function () {
//             //     $('.loading').show();
//             // },
//         });
// }

// function addDom(data) {
//      $('.loading').hide();
//       var dataList = JSON.parse(data);
//       console.log(dataList)
//     if (dataList.length > 0) {
//         dataList.forEach(function (ele, index) {
//             var iDiv = $('<div class="item"></div>');
//             var imgBox = $('<div class="imgBox"></div>');
//             var oImg = new Image();
//             var oP = $('<p></p>');
//             oP.text(ele.title);
//             oImg.src = ele.preview;
//             oImg.onload = function () {
//                 imgBox.append(oImg);
//                 iDiv.append(imgBox).append(oP);
//                 var index = getMinList(oLi);
//                 $(oLi[index]).append(iDiv);
//             }
//         })
//     }
//     flag = false;
//  };

// function getMinList(dom) {
//     var minHeight = parseInt($(dom[0]).css('height')),
//         index = 0;
//     for (var i = 1; i < dom.length; i++) {
//         var h = parseInt($(dom[i]).css('height'));
//         if (h < minHeight) {
//             minHeight = h;
//             index = i;
//         }
//     }
//     console.log(index)
//     return index;
// };

// $(window).scroll(function () {
//     var scrollHeight = $(this).scrollTop();
//     var clientHeight = $(window).height();
//     var pageHeigh = parseInt($(oLi[getMinList(oLi)]).css('height'));
//     if (scrollHeight + clientHeight > pageHeigh) {
//         getData();
//     }
// })




function getData(){
    // method, url, callback, data, flag
    ajax("GET","./data.txt",renderDom, '' ,true);

}
var oLi=document.getElementsByClassName("col");
//渲染页面
function renderDom(data){
	data=typeof data ==="string" ? JSON.parse(data):data;
	console.log(data);
     data.forEach(function(ele,index){
     		var minIndex = getMinli();
     		var itemDom = addDom(ele);
     		oLi[minIndex].innerHTML+=itemDom;
     		

     })
}


function addDom(data){
	var dom='<div class="item">\
                    <div class="imgBox">\
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