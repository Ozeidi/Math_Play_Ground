var h = 500;
var w = 500;
var growthRate =0.75;
var angle = 30;

var len = 100;
var update = true
var branch_size;
var branch_factor;
// var min_growth, max_growth;
var min_angle, max_angle;
var min_leaf, max_leaf;

function setup (){
  openNav();
  var myCanvas = createCanvas (windowWidth, windowHeight-300);
  myCanvas.parent("Canvas");

  background(255);
  angleMode(DEGREES)
  
  //noLoop();
  branch_size = select("#branch-size").value();
  branch_factor = select("#branch-factor").value()/100;
//   min_growth = select("#min-growth").value()/100;
//   max_growth = select("#max-growth").value()/100;
  min_angle = select("#min-angle").value();
  max_angle = select("#max-angle").value();

  min_leaf = int(select("#min-leaf").value());
  max_leaf = int(select("#max-leaf").value());
}

function draw() {

    translate(width/2, height/2 +200);
    // branch(100);
    branch(branch_size);
    update = false;
    
    //line(0,0,-100,-100)
}



function branch(len){
    
    if (update == true){
        growthRate = branch_factor//random(branch_factor*min_growth, branch_factor*max_growth)

        push();
        if (len >10){
            strokeWeight(map(len,10,100,1,20));
            stroke(70,40,20);
            line(0,0,0,-len);
            translate(0, -len);
            angle = random(min_angle, min_angle-10)//random( min_angle, min_angle-10);
            rotate(angle);
            branch(len*growthRate);
            //console.log(max_angle)
            angle = random(int(max_angle), int(max_angle)+10) //random(max_angle, max_angle+10);
            rotate(angle);
            branch(len*growthRate);
            
        }else{
            push();
            var r = leaf_RGB["r"] + random(-20, 20);
            var g = leaf_RGB["g"]  + random(-20,20);
            var b = leaf_RGB["b"] + random(-20, 20);

            fill(r, g, b,155)
            noStroke();
            // ellipse(0, 0, 10)
            //min_leaf = 45;
            //max_leaf = 135;
            beginShape()
            for (var i = min_leaf; i <max_leaf ; i++ ) {
                var rad = 15;
                var x = rad* cos(i);
                var y = rad * sin(i);
                vertex(x, y)
            }

            for (var i = max_leaf; i >min_leaf; i-- ){
                var rad = 15;
                var x = rad* cos(i);
                var y = rad * sin(-i) +20;
                vertex(x, y)
            }
            endShape(CLOSE)
            pop();
        }
        pop();
    }
    

}

function refresh(){
        //lenSlider = createSlider(5, 300, 100, 10).parent("size");
    branch_size = select("#branch-size").value();
    branch_factor = select("#branch-factor").value()/100;
    // min_growth = select("#min-growth").value()/100;
    // max_growth = select("#max-growth").value()/100;
    min_angle = select("#min-angle").value();
    max_angle = select("#max-angle").value();
    
    min_leaf = int(select("#min-leaf").value());
    max_leaf = int(select("#max-leaf").value());

    background(255);
    update= true;

}

function changeText(id, text) {
    document.getElementById(id).innerHTML = text;
  }