var canvas = document.querySelector('canvas');
// var heightRatio = 1.5;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// for (var i =0; i<50;i++){
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//     var r = Math.random()*255;
//     var g = Math.random()*255;
//     var b = Math.random()*255;


//     c.beginPath();

//     c.arc(x,y,60,0,Math.PI *2, false);
// c.strokeStyle='rgb('+r+','+g+','+b+')'
//     c.stroke();

// }


// c.beginPath();

//     c.arc(200,200,60,0,Math.PI *2, false);
//     c.strokeStyle='brown';
//     c.stroke();
var mouse = {
    x: undefined,
    y:undefined
}

var colorArray= ["#2C3E50","#E74C3C","#ECF0F1","#3498DB","#298089"]


window.addEventListener('mousemove',function(event){

    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x , mouse.y);
    
});




function Circle(x,y,dx,dy,radius) {
    this.x =x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    
    this.minRadius=radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    this.draw = function(){
       
     c.beginPath();

     c.arc(this.x,this.y,this.radius,0,Math.PI *2, false);
     
     c.stroke();
     
     c.fillStyle=this.color;
     c.fill();
    }

    this.update = function()
  {

    if (this.x + this.radius> innerWidth || this.x -this.radius < 0)
    {
    this.dx=-this.dx;
    }

    if (this.y+radius>innerHeight || this.y - this.radius < 0)
    {
        this.dy=-this.dy;
    }

    this.x+=this.dx;
    this.y+=this.dy;

    //interactivity 

    if (mouse.x - this.x <50 && mouse.x- this.x > -50 && mouse.y - this.y <50 && mouse.y - this.y > -50)
    {
        
        this.radius=30;
    }
    else if (this.radius> this.minRadius){
        this.radius-=1;
    }

    this.draw();
  }
}

// var x = Math.random()*innerWidth;
// var y =Math.random()*innerHeight;
// var dx=(Math.random()-0.5)*10;
// var dy=(Math.random()-0.5)*10;
// var radius = 60;

var circleArray = [];

    for (var i=0;i<800;i++){

       var radius=(Math.random()*3)+2;
        
        var colorCode = Math.floor(Math.random()*3 +1)
        var x = Math.random()*(innerWidth-radius*2)+radius;
        var y =Math.random()*(innerHeight-radius*2)+radius;
        var dx=(Math.random()-0.5)*2;
        var dy=(Math.random()-0.5)*2;
        
        
        circleArray.push(new Circle(x,y,dx,dy,radius)); 
    }



function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for (var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
    
}


animate();