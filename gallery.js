/*Name this external file gallery.js*/

document.addEventListener("DOMContentLoaded", function() {
  setImage();
});//Ensure this function runs when the page loads by using the DOMContentLoaded event

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     
     
      document.getElementById("image").innerHTML=previewPic.alt
      document.getElementById("image").style.background="url("+previewPic.src+")" ;
      document.getElementById("image").style.backgroundSize= "180%";
      document.getElementById("image").style.backgroundPosition= "center";
      

       }
    
function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
        document.getElementById("image").innerHTML = "Hover over an image below to display here."
        document.getElementById("image").style.backgroundImage="url('')";
        document.getElementById("image").style.backgroundColor="#8e68ff";
           
       }
function setImage(){
  

    var currentImages = document.getElementsByClassName("preview")
    for (var i =0; i< currentImages.length; i++){
      console.log("image" + i)

      currentImages[i].setAttribute("tabindex",i+1)

      
    }
}
