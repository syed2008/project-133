img = ""; 
objects = [];
 status = "";
 function preload(){
      img = loadImage('check.png');
     }
     function setup() { 
         canvas = createCanvas(640, 420); 
         canvas.center();
          objectDetector = ml5.objectDetector('cocossd', modelLoaded);
           document.getElementById("status").innerHTML = "Status : Detecting Objects";
         }
         function modelLoaded() {
              console.log("Model Loaded!")
               status = true;
                objectDetector.detect(img, gotResult);
             }
             function gotResult(error, results) {
                  if (error) { 
                       console.log(error);
                     } 
                     console.log(results);
                      objects = results;
                     }
                     function draw() { if (status != undefined) { image(img, 0, 0, 640, 420); for (var i = 0; i < objects.length; i++) { document.getElementById("status").innerHTML = "Status : Objects Detected"; fill(255, 0, 0); percent = floor(objects[i].confidence * 100); text(objects[i].label + " " + percent + "%", objects[i].x - 90, objects[i].y - 100 ); noFill(); stroke(255, 0, 0); rect(objects[i].x - 100, objects[i].y - 120, objects[i].width, objects[i].height); } } }
