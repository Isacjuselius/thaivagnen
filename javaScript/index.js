document.querySelector(".jsButton").addEventListener("click", function() {
    alert("Hello JavaScript");
});

$(function(){
    $(".fade").click(function(){
        $(".fadeTextblock1").fadeTo(2000, 0.5); // tonar textblocket till 50% under 2 sekunder
        $(".fadeTextblock2").fadeTo(2000, 0.2); // tonar textblocket til 20% under 2 sekunder
    });
});

$(function(){

    $(".thaiVagnen").click(function(){
        $(".thaiVagnen").animate({
            width: '+=10vw', //Gör den större 
            backgroundColor: '#a2ae8f' // Ger den en annan färg
        }, "slow") //Sätter hur snabbt animationen sker 
    })
    $(".farskaVaror").click(function(){
        $(".farskaVaror").animate({
            width: '+=10vw',
            backgroundColor: '#a2ae8f'
        }, "slow")
    })
    $(".ersboda").click(function(){
        $(".ersboda").animate({
            width: '+=10vw',
            backgroundColor: '#a2ae8f'
        }, "slow")
    })
})
