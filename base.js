let canvas = document.getElementById("jueguito")
let ctx = canvas.getContext("2d")
canvas.style.background = "#DCDFE1" 

let x=50, y=100, xv=38, yv=10, x2=0, y2=0
let right=false, left=false, up=false, down=false, ct=0

let groundX=[400,50,700,25, 0,500], groundY=[250,-50,70,75, 300,50]

let mouseX=0, mouseY=0, mouseXClick=0, mouseYClick=0, mouseClick=false


//Utilidades ==============================================================================
function azar(min, max){
  return Math.random() * (max-min) + min
}


//Jugador ==============================================================================
function player(){
  ctx.fillStyle = "#FFFFFF"
  ctx.fillRect(x-10,y-10,20,20)
}


//Mouse ==============================================================================
function mouseMove(e){
  mouseX=e.pageX
  mouseY=e.pageY
}

function mouseDown(){
  if(mouseClick==false){
    mouseXClick=mouseX
    mouseYClick=mouseY
    mouseClick=true
  }
}

function mouseUp(){
  if(mouseClick==true){
    mouseClick=false
    if(Math.abs(mouseX - mouseXClick) > 1 && Math.abs(mouseY - mouseYClick) > 1){
      groundX.push(mouseXClick)
      groundX.push(mouseX - mouseXClick)
      groundY.push(mouseYClick)
      groundY.push(mouseY - mouseYClick)
    }
  }
}


//Teclas ==============================================================================
function keyUp(e){
    if(e.keyCode==37 || e.keyCode==65){
        left=false
    }
    
    if(e.keyCode==39 || e.keyCode==68){
        right=false
    }
    
    if(e.keyCode==40 || e.keyCode==83){
        down=false
    }
    
    if(e.keyCode==38 || e.keyCode==87){
        up=false
    }
}
 
function keyDown(e){
    if(e.keyCode==37 || e.keyCode==65){
      left=true
    }
    
    if(e.keyCode==39 || e.keyCode==68){
      right=true
    }
    
    if(e.keyCode==40 || e.keyCode==83){
      down=true
    }
    
    if(e.keyCode==38 || e.keyCode==87){
      up=true
    }
}


//Funcionamiento ==============================================================================
function movimiento(){
  if(left){
    xv=xv-0.5
  }

  if(right){
    xv=xv+0.5
  }

  if(down){
    yv=yv+0.5
  }

  if(up && ct<10){
    yv=yv-10
    ct=10
  }

  yv=yv+0.5
      
  ct++

  for(let i=0; i<10; i++){
    x2=x
    x=x+(xv/10)
    colisiones("x")
  }
  xv=xv*0.9

  for(let i=0; i<10; i++){
  y2=y
  y=y+(yv/10)
  colisiones("y")
  }
}

function colisiones(xy){
  for(let i=0; i<(groundX.length); i=i+2){


  }
}

function ground(){

    for(let i=0; i<(groundX.length); i=i+2){
        ctx.fillStyle = "#000000"

        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(groundX[i], groundY[i], groundX[i+1], groundY[i+1])
    }
}


//Bucle ==============================================================================
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  document.addEventListener("keydown", keyDown, false)
  document.addEventListener("keyup", keyUp, false)

  document.addEventListener("mousemove", mouseMove)

  document.addEventListener("mousedown", mouseDown)
  document.addEventListener("mouseup", mouseUp)

  ground()
  player()
  movimiento()
}

setInterval(draw, 10)