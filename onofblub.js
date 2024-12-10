function turnonoff(){
  let image = document.getElementById("image");
  if(image.src.match("ONbulb"))
  image.src = "https://ittrainingclasses.in/OFFbulb.jpg"
 else if(image.src.match("OFFbulb"))
 image.src = "https://ittrainingclasses.in/ONbulb.jpg"
 }