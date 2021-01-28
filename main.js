var names=["Saanvi Kishore Thakur", "Shatakshi Thakur", "Rupam Kumari", "Somesh Kumar"];
var images=["sister.jpg", "sis2.jpg", "mom.png", "dad.jpg"];
var i=0;
function nextbutton(){
    i++;
    if(i>3){
        i=0;
    }
    document.getElementById("familylabels").innerHTML=names[i];
    document.getElementById("imgFamily").src=images[i];
}