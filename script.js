$(function(){
    let timer = [];
   
    $("#start").click(function(){
        $(this).prop('disabled', true);
        let width = $("#widthOfCircle").val();
        let growSz = $("#growSz").val();
        let growIntl = $("#growIntl").val();
        let num = $("#numOfCircle").val();
        
        //createCircle(width, num);
        

        for(let i = 0; i < num; i++) {
            let circle = {
                color: "#" +Math.floor(Math.random()*16777215).toString(16),
                left: Math.floor(Math.random() * (window.innerWidth - width)), 
                top: Math.floor(Math.random() * (window.innerHeight - width)) 
            };
            $("#circles").append($("<div>", {
                "css": {
                        "width": width + "px",
                        "height": width + "px",
                        "left": circle.left + "px",
                        "top": circle.top + "px",
                        "background-color": circle.color
                },
                "class" : "circle",
                "click": function() {
                    $(this).remove();
                }, 
                "mouseenter": function(){
                    $(this).addClass("opacity-05");
                },
                "mouseleave": function(){
                    $(this).removeClass("opacity-05");
                }
               }));
        }
      
        timer.push(setInterval(() => {
            $(".circle").each(function(i, elem) {
                let w = parseInt($(elem).css('width')) + parseInt(growSz);
                let h = parseInt($(elem).css('height')) + parseInt(growSz);
                $(elem).css("width", w).css("height", h);
            });

        }, growIntl));

       
     });
     $("#stop").click(function(){

        let l = timer.length
        if(l > 0){
            $("#start").prop('disabled', false);
            timer.forEach(t => clearInterval(t));
        
            // for(let i = 0; i < l; i++){
            //     clearInterval(timer[i]);
            // }
        }
     });
});

