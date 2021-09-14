img = ""; 
objects = [];
 status = "";
 function preload(){
      img = loadImage('bench.jpg');
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
                     function draw() {
                          image(img, 0, 0, 640, 420);
                           if(status != "") 
                           {
 for (i = 0; i < objects.length; i++)
  { 
      document.getElementById("status").innerHTML = "Status : Object Detected";
       fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
         text(objects[i].label + " " + percent + "%", objects[i].x + 50, objects[i].y + 63);
          noFill();
           stroke("#FF0000");
            rect(objects[i].x + 40, objects[i].y + 50, objects[i].width, objects[i].height); 
        } 
    } 
}