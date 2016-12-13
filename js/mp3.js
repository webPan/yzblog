window.onload=function(){
    var audio=document.getElementsByTagName('audio')[0];
    var aswitch=document.getElementsByClassName('switch')[0];
    var current=audio.currentTime;
    var duration=audio.duration;
    var time=document.getElementsByClassName('time')[0];
    var bg=document.getElementsByClassName('bg')[0];
    
    //d定时器
    var timer=function(){
        duration=duration-1;
        var minute=duration/60;
        var minutes=parseInt(minute);
        
        if(minute<10){
            minutes="0"+minutes;
        }
        //秒
        var second=duration%60;
        var seconds=parseInt(second);
        if(seconds<10){
            seconds="0"+seconds;
        }
        if(second==0){
            clearInterval(settimer);
        }
        var allTime="00:"+minutes+":"+seconds;
        time.innerHTML=allTime;
        
    }
    
    var settimer=setInterval(timer,1000);
    
    //btn切换
    aswitch.onclick=function(){
        if(this.className=='switch play'){
            this.className='switch pause';
            audio.pause();
            bg.style.cssText="animation-play-state:paused";
            clearInterval(settimer);
            
        }else{
            this.className='switch play';
            audio.play();
            bg.style.cssText="animation-play-state:running";
            settimer=setInterval(timer,1000);
        }
    }
}