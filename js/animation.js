$(document).ready(function(){
    //nav 메뉴
    var nav = $("#page1").find(".side");
    $("#nav").on("click",function(){
        $(nav).animate({right:"0"},600);
        $(this).css({display:"none"});
    });
    var exit = $("#page1").find("i");
    $(exit).on("click",function(){
        $(nav).animate({right:"-22%"},600); 
        $("#nav").css({display:"block"});
    });
    
    //로고 누르면 top으로 가기
    $("#logo").on("click",function(){
       $("html,body").animate({scrollTop:0},800); 
        $(".side").find("li").removeClass("on");
        $(".side").find("span").animate({"width":"0"},0);
    });
    
    // 메인 텍스트 테두리 
    $(".box").find("div").animate({"opacity":"1"},1200);
    
        
    //포트폴리오 글씨 움직이기
    $('.maintext').shuffleText("PORTFOLIO",{
        frames   : 40,    // Duration In ms (Milliseconds) Of Shuffle For Each Letter
        maxSpeed : 1000,  // Max Duration In ms (Milliseconds) Of Global Shuffle
        amount   : 3,     // Amount Of Shuffle For Each Letter
    });
    
    // 스크롤 이미지 왔다갔다
    $(function() {
            function swing() {
                $('#down').animate({'top':'87%'},600).animate({'top':'87.5%'},600, swing);
            }
            swing();
        });
    
    // sidebar li 누르면 페이지 이동
    $('ul').pageScroll({
        speed:1100
    });

    // skill progress bar
    $(window).on("scroll",function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop();
        if(scroll>=ht*0.8 && scroll<ht*0.9){
            $('#demoprogressbar1').LineProgressbar({
                percentage: 90
            });
            $('#demoprogressbar2').LineProgressbar({
                percentage: 85
            });
            $('#demoprogressbar3').LineProgressbar({
                percentage: 70
            });
            $('#demoprogressbar4').LineProgressbar({
                percentage: 40
            });
            $('#demoprogressbar5').LineProgressbar({
                percentage: 90
            });
            $('#demoprogressbar6').LineProgressbar({
                percentage: 75
            });
        }
    });
    
    // web design 올라오기 
   $(window).on("scroll",function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop();
        if(scroll>=ht*2.5 && scroll<ht*3){
            $("#page4").find("li#web1").animate({"margin-top":"0","opacity":"1"},800);         $("#page4").find("li#web2").delay(100).animate({"margin-top":"0","opacity":"1"},800);
            $("#page4").find("li#web3").delay(200).animate({"margin-top":"0","opacity":"1"},800);
			$("#page4").find("li#web4").delay(200).animate({"margin-top":"0","opacity":"1"},800);
        }
    });
    // web design 화살표 나오게
    var web = $("#page4").find("div").find("li");
    var black = $(web).find(".blackbg");
    var direct = $(black).find("img");
    $(web).on("mouseenter",function(){
       $(this).find(black).fadeIn(300);
        $(this).siblings().find(black).fadeOut(300);
        $(this).find(direct).animate({"padding-right":"0"},300);
    });
    $(web).on("mouseleave",function(){
       $(this).find(black).fadeOut(300);
        $(this).siblings().find(black).fadeOut(300);
        $(this).find(direct).animate({"padding-right":"15px"},300);
    });
    
    // ux/ui design 화살표 나오게
    var uxui = $("#page5").find("div");
    var black2 = $(uxui).find(".blackbg");
    var direct2 = $(black2).find("img");
    $(uxui).on("mouseenter",function(){
       $(this).find(black2).fadeIn(300);
        $(this).siblings().find(black2).fadeOut(300);
        $(this).find(direct2).animate({"padding-right":"0"},300);
    });
    $(uxui).on("mouseleave",function(){
       $(this).find(black2).fadeOut(300);
        $(this).siblings().find(black2).fadeOut(300);
        $(this).find(direct2).animate({"padding-right":"20px"},300);
    });
    
    // work에서 마우스 올리면 사진 커지게
    var work = $("#page6").find("li");
    $(work).on("mouseenter",function(){
       $(this).find("img").stop().animate({"height":"108%"},200); 
        $(this).siblings().find("img").stop().animate({"height":"100%"}); 
    });
    $(work).on("mouseleave",function(){
       $(this).find("img").stop().animate({"height":"100%"},100); 
        $(this).siblings().find("img").stop().animate({"height":"100%"}); 
    });
    
    // work에서 li 또는 이미지를 클릭했을 때 그 이미지가 크게 나타나게 하기
    $("li#work").on("click",function(){
       $(".modal").fadeIn(300);
       var imgsrc = $(this).find("img").attr("src");
       var imgtext = $(this).find("img").attr("alt");
        $(".modalimg").attr({src:imgsrc});
    });
    $("span").on("click",function(){
       $(".modal").fadeOut(300); 
    });
});