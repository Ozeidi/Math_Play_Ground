
var angle = 5;
var evenAngle = 5;
var oddAngle =-5;
var len = 3;
var update = true
let bigSeq = [];
var lengthDecayFactor =1;
var branchOpacity = 0.1*255;
var animate = false;
var radial = false;
radius = 15;
radialAngle = 15;

function setup() {
    
    openNav();
    $(".answer").hide(200);
    var myCanvas = createCanvas(windowWidth, windowHeight - 300);
    myCanvas.parent("Canvas");
    translate(width / 2, height);
    background(0);
    angleMode(DEGREES)
    //var arr = Array()
    for (i = 1; i <= 100000; i++) {
        let seq = [];
        //console.log("Seed :", i)
        var res = i;
        while (res != 1) {
            res = Collatz(res);
            //console.log(res);
            seq.push(res);
        }
        seq = seq.reverse();
        bigSeq.push(seq);

    }

    update = true;
    
    noLoop();
    refresh();

}

async function visualise(){

    background(0);
    resetMatrix();
    textSize(18);
    fill(255, 255, 255);
    text(concat('Conjecture Tested up to ', (bigSeq.length)), width/2-200, height-40);

    if (update == true) {
        translate(width / 2, height);
        
        console.log("Draw")
        
        for (let i = 0; i < bigSeq.length; i++) {
            const seq = bigSeq[i];
            // console.log("Seed of ", i+1);
            // console.log(seq);
            var rnd =20;
            var r = leaf_RGB["r"] + random(-1*rnd, rnd);
            var g = leaf_RGB["g"] + random(-1*rnd, rnd);
            var b = leaf_RGB["b"] + random(-1*rnd, rnd);
            var branchLen = len;
            let wt =1;
            for (let j = 0; j < seq.length; j++) {

                //branchLen*=lengthDecayFactor;
                wt*=lengthDecayFactor//(1+.02)//(1-lengthDecayFactor)
                const element = seq[j];
                if (element % 2 == 0) {
                    rotate(evenAngle)
                } else {
                    rotate(1.8*oddAngle)
                }
                if (element == 1){
                    resetMatrix();
                    if (radial){
                        translate(width / 2 +cos(i)*radius, height/2 +sin(i)*radius);
                        
                        rotate(i*radialAngle)
                    }else{
                        translate(width / 2 , height - 100);
                    }



                }

                strokeWeight(wt);
                stroke(r,g,b,branchOpacity);
                line(0, 0, 0, -branchLen);
                translate(0, -branchLen);
                
            }
            // ellipse(0, 0, 10)
            if (animate) await sleep(0);
            resetMatrix();
            fill(0)
            noStroke();
            rect(width/2-150, height-30, 200, 30)
            fill(255);
            text(i+1, width/2-70, height-10)
            
        }
        

    }
    update =false;

}

// function draw() {

//     // translate(width / 2, height / 2 + 200);
//     // // branch(100);
//     // branch(branch_size);
//     // update = false;

//     //line(0,0,-100,-100)
// }


function Collatz(i){
    if (i % 2 == 0) {
        i = i / 2
    } else {
        i = (3 * i + 1);

    }

    return i;

}

function branch(len) {

    if (update == true) {
        growthRate = branch_factor//random(branch_factor*min_growth, branch_factor*max_growth)

        push();
        if (len > 10) {
            strokeWeight(map(len, 10, 100, 1, 20));
            stroke(70, 40, 20);
            line(0, 0, 0, -len);
            translate(0, -len);
            angle = random(min_angle, min_angle - 10)//random( min_angle, min_angle-10);
            rotate(angle);
            branch(len * growthRate);
            //console.log(max_angle)
            angle = random(int(max_angle), int(max_angle) + 10) //random(max_angle, max_angle+10);
            rotate(angle);
            branch(len * growthRate);

        } else {
            push();
            var r = leaf_RGB["r"] + random(-20, 20);
            var g = leaf_RGB["g"] + random(-20, 20);
            var b = leaf_RGB["b"] + random(-20, 20);

            fill(r, g, b, 155)
            noStroke();
            // ellipse(0, 0, 10)
            //min_leaf = 45;
            //max_leaf = 135;
            beginShape()
            for (var i = min_leaf; i < max_leaf; i++) {
                var rad = 15;
                var x = rad * cos(i);
                var y = rad * sin(i);
                vertex(x, y)
            }

            for (var i = max_leaf; i > min_leaf; i--) {
                var rad = 15;
                var x = rad * cos(i);
                var y = rad * sin(-i) + 20;
                vertex(x, y)
            }
            endShape(CLOSE)
            pop();
        }
        pop();
    }


}

function refresh() {
    animate = $("#animate").is(":checked");
    
    len = select("#branch-size").value();
    lengthDecayFactor = select("#decay-factor").value()/100;
    
    // min_growth = select("#min-growth").value()/100;
    // max_growth = select("#max-growth").value()/100;
    oddAngle = select("#odd-angle").value();
    evenAngle = select("#even-angle").value();

    branchOpacity = (select("#branch-alpha").value()/100)*255;
    radial = $("#radial").is(":checked");
    radius = select("#radius").value();
    radialAngle = select("#radial-angle").value();


    background(255);
    update = true;
    visualise();

}

function changeText(id, text) {
    document.getElementById(id).innerHTML = text;
}


// a custom 'sleep' or wait' function, that returns a Promise that resolves only after a timeout
function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}


$(function() {
    $("#radial").on("click",function() {
    //   $(".answer").toggle(this.checked);
        if($(this).is(":checked")) {
            $(".answer").show(300);
            console.log("test")
        } else {
            $(".answer").hide(200);
        }
    });
  });

