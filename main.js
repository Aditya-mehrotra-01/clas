var last_position_of_x,last_position_of_y;
color="black";
width_of_line=2;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var width=screen.width;

new_width=screen.width - 70;
new_height=screen.height - 300;

If (width<992 ) 
{
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    console.log("my_touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;

    last_position_of_x=e.touches[0].cilentX-canvasoffsetLeft;
    last_position_of_y=e.touches[0].cilentY-canvasoffsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    console.log("my_touchmove");
    
    current_position_of_touch_x=e.touches[0].cilentX-canvasoffsetLeft;
    current_position_of_touch_y=e.touches[0].cilentY-canvasoffsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last position of x and y is =");
    console.log("x="+ last_position_of_x + " , y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current position of touch x and y is =");
    console.log("x="+ current_position_of_touch_x + " , y = " + current_position_of_touch_y );
    ctx.moveTo(current_position_of_touch_x,current_position_of_touch_y);

    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}