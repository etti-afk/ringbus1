
// draggable keyboard

dragElm(document.getElementById("keyboard"));
function dragElm(el) {
    var pos1 = 0, pos2 = 0, pos3=0, pos4=0;
    if (document.getElementById(el.id + "keyboard-top")) {
        document.getElementById(el.id + "keyboard-top").onmousedown = dragMouseDown;
    }
    else {
        el.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e){
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }
    function closeDragElement(){
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Wire Color
$(".pathcolor").hover(function(){
    $(this).data("hover", true)
    if ($(this).data("clicked")) {
        $(this).css("stroke", "purple");    // hover over clicked
    }
    else {
        $(this).css("stroke", "rgba(113, 187, 255, 0.90");      // hover over not clicked
    }
    }, function(){
        $(this).data("hover", false)
        if ($(this).data("clicked")) {
            $(this).css("stroke", "#ff105e");   // not hover and clicked
        }
        else {
            $(this).css("stroke", "grey");       // not hover and not clicked
        }
});
$(".pathcolor").click(function(){
    if ($(this).data("clicked")){
        $(this).css("stroke", "white");
        $(this).data("clicked", false);
    }
    else {
        $(this).data("clicked", true);
    }
})
// Wire Color

//sticky menu
window.onscroll = function() {apply_sticky()}
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function apply_sticky() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}
// end sticky menu

// scroll to animate
$(document).ready(function(){
    $("a").on('click', function(event){
        if (this.hash !==""){
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash=hash;
            }
            )
        }
    });
});

// comment reveal (allows added comment in html)

var q = document.querySelectorAll(".q");
for (let w=0; w<q.length; w++){
    q[w].addEventListener("click", function(){
        let target = document.querySelectorAll(".q_section")[w];
        if (target.style.display != "none") {
            target.style.display = "none";
        } 
        else {
            target.style.display = "block";
        }
    });
}

// keyboard buttons

document.getElementById("playbtnimage").addEventListener("click", playAnim);
document.getElementById("pausebtnimage").addEventListener("click", pauseAnim);
document.getElementById("resetbtnimage").addEventListener("click", resetAnim);
function playAnim(){
     document.getElementById("playbtnimage").style.borderColor = "grey";
     document.getElementById("pausebtnimage").style.borderColor = "black";
     document.getElementById("resetbtnimage").style.borderColor = "black";
     animePath1_0.play()
     minianimePath1_0.play(); 
     animePath2_0.play(); 
     animePath3_0.play(); 
     animePath4_0.play(); 
     animePath5_0.play(); 
     animePath6_0.play(); 
     animePath7_0.play(); 
     animePath8_0.play(); 
     animePath9_0.play(); 
     animePath10_0.play(); 
     animePath11_0.play(); 
     animePath12_0.play(); 
     animePath13_0.play(); 
     animePath14_0.play(); 
     animePath15_0.play(); 
     animePath1_1.play(); 
     animePath2_1.play(); 
     animePath3_1.play(); 
     animePath4_1.play(); 
     animePath5_1.play(); 
     animePath6_1.play(); 
     animePath7_1.play(); 
     animePath8_1.play(); 
     animePath9_1.play(); 
     animePath10_1.play(); 
     animePath11_1.play(); 
     animePath12_1.play(); 
     animePath13_1.play(); 
     animePath14_1.play(); 
     animePath15_1.play(); 
};
function pauseAnim(){
     document.getElementById("playbtnimage").style.borderColor = "black";
     document.getElementById("pausebtnimage").style.borderColor = "grey";
     document.getElementById("resetbtnimage").style.borderColor = "black";
     animePath1_0.pause(); 
     animePath2_0.pause(); 
     animePath3_0.pause(); 
     animePath4_0.pause(); 
     animePath5_0.pause(); 
     animePath6_0.pause(); 
     animePath7_0.pause(); 
     animePath8_0.pause(); 
     animePath9_0.pause(); 
     animePath10_0.pause(); 
     animePath11_0.pause(); 
     animePath12_0.pause(); 
     animePath13_0.pause(); 
     animePath14_0.pause(); 
     animePath15_0.pause(); 
     animePath1_1.pause(); 
     animePath2_1.pause(); 
     animePath3_1.pause(); 
     animePath4_1.pause(); 
     animePath5_1.pause(); 
     animePath6_1.pause(); 
     animePath7_1.pause(); 
     animePath8_1.pause(); 
     animePath9_1.pause(); 
     animePath10_1.pause(); 
     animePath11_1.pause(); 
     animePath12_1.pause(); 
     animePath13_1.pause(); 
     animePath14_1.pause(); 
     animePath15_1.pause(); 
};
function resetAnim(){
     document.getElementById("playbtnimage").style.borderColor = "black";
     document.getElementById("pausebtnimage").style.borderColor = "black";
     document.getElementById("resetbtnimage").style.borderColor = "grey";
     animePath1_0.restart(); 
     animePath2_0.restart(); 
     animePath3_0.restart(); 
     animePath4_0.restart(); 
     animePath5_0.restart(); 
     animePath6_0.restart(); 
     animePath7_0.restart(); 
     animePath8_0.restart(); 
     animePath9_0.restart(); 
     animePath10_0.restart(); 
     animePath11_0.restart(); 
     animePath12_0.restart(); 
     animePath13_0.restart(); 
     animePath14_0.restart(); 
     animePath15_0.restart(); 
     animePath1_1.restart(); 
     animePath2_1.restart(); 
     animePath3_1.restart(); 
     animePath4_1.restart(); 
     animePath5_1.restart(); 
     animePath6_1.restart(); 
     animePath7_1.restart(); 
     animePath8_1.restart(); 
     animePath9_1.restart(); 
     animePath10_1.restart(); 
     animePath11_1.restart(); 
     animePath12_1.restart(); 
     animePath13_1.restart(); 
     animePath14_1.restart(); 
     animePath15_1.restart(); 
     randomOutputTrial();
};