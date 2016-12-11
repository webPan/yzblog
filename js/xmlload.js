
//实例化xml对象
var xmlDoc=(function(){
    var xmlHttp=new XMLHttpRequest();
    xmlHttp.open('GET','xml/article.xml',false);
    xmlHttp.send();
    return xmlHttp.responseXML;
})();
    
    
//加载xml文档内容
var number=4;
var i=0;
function xmlload(){  
//滚动加载事件

window.onscroll=function(){
if(checkScrollSlide()){
    number=number+2;
    if(number>xmlarts.length){
        number=xmlarts.length;
    }
    xmlload();
}else{
    console.log('false');
}
}
    
    var xmlarts=xmlDoc.getElementsByTagName('art');//xml
    var newslists=document.getElementsByClassName('newslist');//文章盒子数量
    var oulines=document.getElementsByClassName('outline');
    var left=document.getElementsByClassName('left')[0];
    var title,xmltitle,xmloutlines,times,xmltimes,imgs,xmlimgs;
    var htmls='<div class="newslist">'
    +'<h3><a href="index/content.html"></a></h3>'
    +''
    +'<figure>'
    +'<div class="box"><img src="images/Sample1.jpg" alt=""></div>'
    +'</figure>'
    +'<ul>'
    +'<p class="outline"></p>'
    +'<a class="btn" href="index/content.html">阅读全文>></a>'
    +'</ul>'
    +'<p class="dataview"><span class="time"></span><span class="auther"><i></i>作者：冯叶青</span><span>个人博客：[<a class="n1" href="">心得笔记</a>]</span></p>'
    +'</div>';
    for(i;i<number;i++){
        console.log("循环中:i="+i+" number="+number);
        left.innerHTML+=htmls;
        title=newslists[i].getElementsByTagName('a')[0];
        xmltitle=xmlarts[i].getElementsByTagName('title')[0];
        //console.log(xmltitle.childNodes[0].nodeValue);
        title.innerHTML=xmltitle.childNodes[0].nodeValue;
        
        //outline
        xmloutlines=xmlarts[i].getElementsByTagName('outline')[0];
        oulines[i].innerHTML=xmloutlines.childNodes[0].nodeValue;
        
        //time
        times=newslists[i].getElementsByClassName('time')[0];
        xmltimes=xmlarts[i].getElementsByTagName('time')[0];
        times.innerHTML='<i></i>'+xmltimes.childNodes[0].nodeValue;
        
        //img
        imgs=newslists[i].getElementsByTagName('img')[0];
        xmlimgs=xmlarts[i].getElementsByTagName('img')[0];
        imgs.src=xmlimgs.childNodes[0].nodeValue;
        
    }
    i=number;
    console.log("循环后:i="+i+" number="+number);
}
xmlload();
    
//滚动条检测
function checkScrollSlide(){
    var newslists=document.getElementsByClassName('newslist');
    //var lastlist=newslists[newslists.length-1].offsetTop+Math.floor(newslists.length);
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.body.clientHeight||document.documentElement.scrollHeight;
    //console.log(scrollTop+" "+(height-scrollTop))
    return height-scrollTop<800? true:false;
}
 