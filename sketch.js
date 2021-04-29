const Engine= Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var drops=[]
var maxDrops=100
function preload(){

}

function setup(){
createCanvas(900,900)   
engine=Engine.create()
world=engine.world
if(frameCount%150===0){
    for(var i =0;i<maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }
}
    
}

function draw(){
  background("aqua")
  for(var i =0;i<maxDrops;i++){
      drops[i].showDrop()
      drops[i].updateY()
  }  
}   

