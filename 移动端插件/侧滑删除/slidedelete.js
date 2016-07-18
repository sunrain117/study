/**
 * Created by sunrain117 on 2016/5/11.
**/


var sliderdelete=(function(){
    var config={};
    config.btnW=75;
    config.sliderItem=".slide-delete>a";
    /*执行移动事件*/
    var reg= /translateX\(([+-]?\d+(.\d+)?)px\)/i;
    var getTransLate=function(){
        /*获取项的偏移量*/
        var transL=this.style.webkitTransform;
        transL= transL.indexOf("translate")!=-1?parseFloat(transL.match(reg)[1]):0;
        return transL;
    };
    var removeTransition=function(){
        /*移除transiton动画*/
        this.style.webkitTransition="none";
    }
    var addTranstion=function(){
        /*添加transiton动画*/
        this.style.webkitTransition="transform 0.2s";
    }


    var addOpenClass=function(){
        //当前滑动元素处于偏移状态，slider-open表示当前状态  为了重置方便
        this.classList.contains("slider-open")?null:this.classList.add("slider-open");
    }
    var removeOpenClass=function(){
        //当前滑动元素处于偏移状态，slider-open表示当前状态  为了重置方便
        this.classList.contains("slider-open")?this.classList.remove("slider-open"):null;
    }
    var resetHoming=function(){
        var allOpenItem=document.querySelectorAll(".slide-delete>a.slider-open");
        for(var i=0;i<allOpenItem.length;i++){
            allOpenItem[i].style.webkitTransform="translatex(0px)";
            removeOpenClass.call(allOpenItem[i]);
        }
    }


    function _start(e){
        resetHoming();
        this.allowMove=true;
        var startTran=getTransLate.call(this);
        if(startTran){
            e.preventDefault();
            this.style.webkitTransform="translatex(0px)";
            this.allowMove=false;
        }
        var changeTouch= e.changedTouches[0];
        this.startX=changeTouch.pageX;
        this.startY=changeTouch.pageY;
    };
    function _move(e){
        if(!this.allowMove){
            return;
        }
        removeTransition.call(this);
        var changeTouch= e.changedTouches[0];
        var curX=changeTouch.pageX,curY=changeTouch.pageY;
        var stepX=this.startX-curX,stepY=this.startY-curY;
        if(Math.abs(stepX)>Math.abs(stepY)){
            e.preventDefault();
        }
        if(stepX>20&&Math.abs(stepX)>Math.abs(stepY)){
            this.style.webkitTransform="translatex("+-stepX+"px)";
            addOpenClass.call(this);
        }
        else if(stepY>20&&Math.abs(stepY)>Math.abs(stepX)){//y轴移动
           /* this.style.webkitTransform="translatex("+-stepX+"px)";
            console.log(stepX);*/
        }
    };
    function _end(e){
        var btnW=config.btnW;
        addTranstion.call(this);
        var changeTouch= e.changedTouches[0];
        var transL=getTransLate.call(this);
       if(transL>0){
           this.style.webkitTransform="translatex(0px)";
       }
        if(transL<0&&(Math.abs(transL)>btnW||Math.abs(transL)>btnW/2)){
            this.style.webkitTransform="translatex("+-btnW+"px)";
            addOpenClass.call(this);
        }else{
            this.style.webkitTransform="translatex(0px)";
        }
    };

    config.init=function(){
        if(!config.sliderItem) {
            console.log("请设置滑动项");
            return;
        }
        var allCon=document.querySelectorAll(config.sliderItem);
        for(var i=0;i<allCon.length;i++){
            allCon[i].addEventListener("touchstart",_start,false);
            allCon[i].addEventListener("touchmove",_move,false);
            allCon[i].addEventListener("touchend",_end,false);
            allCon[i].addEventListener("transitionend",function(){
                /* addTranstion.call(this);
                 this.isTransition=true;*/
            },false)
        }
    }
    return config;
})();
sliderdelete.sliderItem=".slide-delete>a";
sliderdelete.init();

/*$(function(){
    var btnW=75;
    var allCon=document.querySelectorAll(".slide-delete>a");
    for(var i=0;i<allCon.length;i++){
        allCon[i].addEventListener("touchstart",_start,false);
        allCon[i].addEventListener("touchmove",_move,false);
        allCon[i].addEventListener("touchend",_end,false);
        /!* allCon[i].addEventListener("transitionend",function(){
         },false)*!/
    }



    var getTransLate=function(){
        var trans = $(this).css("transform");
        var transL = trans == "none" ? 0 : trans.split(',')[4];
        return parseFloat(transL);
    };
    var removeTransition=function(){
        $(this).css("transition","none");
    }
    var addTranstion=function(){
        $(this).css("transition","transform 0.2s");
    }
    var resetHoming=function(){
        $(this).parent().siblings("section").children("a").css("transform","translate(0px)");
    }

    function _start(e){
        resetHoming.call(this);
        this.allowMove=true;
        var startTran=getTransLate.call(this);
        if(startTran){
            e.preventDefault();
            this.allowMove=false;
        }
        var changeTouch= e.changedTouches[0];
        this.startX=changeTouch.pageX;
        this.startY=changeTouch.pageY;
    };
    function _move(e){
        if(!this.allowMove){
            $(this).css("transform","translate(0px)");
            return;
        }
        removeTransition.call(this);
        var changeTouch= e.changedTouches[0];
        var curX=changeTouch.pageX,curY=changeTouch.pageY;
        var stepX=this.startX-curX,stepY=this.startY-curY;
        console.log(stepX);
        if(Math.abs(stepX)>Math.abs(stepY)){
            e.preventDefault();
        }
        if(stepX>20&&Math.abs(stepX)>Math.abs(stepY)){
            $(this).css("transform","translate("+(-stepX)+"px)");
        }
        else if(stepY>20&&Math.abs(stepY)>Math.abs(stepX)){//y轴移动

        }

    };
    function _end(e){
        addTranstion.call(this);
        var changeTouch= e.changedTouches[0];
        var transL=getTransLate.call(this);
        if(transL>0){
            $(this).css("transform","translate(0px)");
        }
        if(transL<0&&(Math.abs(transL)>btnW||Math.abs(transL)>btnW/2)){
            $(this).css("transform","translate("+(-btnW)+"px)");
        }else{
            $(this).css("transform","translate(0px)");
        }

    }

});*/
