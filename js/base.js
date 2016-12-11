//响应式导航栏
var subnav=document.getElementById('subnav');
var isOut=false;
var bar={
    showMenu:function(){//响应式菜单显示
    if(isOut==false){
        subnav.style.display='block';
        isOut=true;
    }else{
        subnav.style.display='none';
        isOut=false;
        }
    },
    showtrag:function(){//响应式菜单显示
    if(window.innerWidth>600){
        subnav.style.display='block';
    }else{
        subnav.style.display='none';
    }
    }
    
}
window.onresize=bar.showtrag;

//导航栏特效
(function(){
var ul=document.getElementsByTagName('ul');
var lis=ul[0].getElementsByTagName('li');
var bar=document.getElementById('navbar');
var active=document.getElementById('active');
;(function(){
    for(var i=0;i<lis.length;i++){
        (function(i){
            lis[i].onmouseenter=function(){
                var distance=0;
                for(var j=0;j<i;j++){
                    distance+=lis[j].offsetWidth;
                    //console.log(lis[j].offsetWidth);//打印li的长度
                }
                bar.style.left=distance+20+'px';
                bar.style.width=this.offsetWidth-40+'px';
            }
        })(i);
    }
})()
ul[0].onmouseleave=function(){w()}
var w=function(){
    bar.style.width=active.offsetWidth-40+'px';
    bar.style.left=parseInt(active.style.left)+20+'px';
}
w();
})()