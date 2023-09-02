document.getElementById("SchoolProjects").style.margin = "-41px";
document.getElementById("SchoolProjects").style.marginTop = "-60px";

document.getElementById("PP1").style.display = "none";
document.getElementById("PP2").style.display = "none";
document.getElementById("PP3").style.display = "none";
document.getElementById("PP1").style.fontSize = "40px";
document.getElementById("PP2").style.fontSize = "40px";
document.getElementById("PP3").style.fontSize = "40px";

// Makes the Github Link & dropdown menu button invisible on execution 
//Makes the link buttons a larger size



// generic class with a constructor for all the future coding projects I will add

function setLink(linkString, hrefDocumentId){
    document.getElementById(hrefDocumentId).style.display = "block";
    document.getElementById(hrefDocumentId).href=linkString; 
}
// Displays relevant information depending on the CodProject object 

document.getElementById("SchoolProjects").style.fontSize = "xxx-large";
document.getElementById("SchoolProjects").style.width = "665px";
document.getElementById("SchoolProjects").style.height = "130px";
document.getElementById("SchoolProjects").style.color = "purple";
document.getElementById("SchoolProjects").style.borderColor = "grey";
// Customize apperence of the dropdown menu 



// Makes it so that on button click it shows subheading information on click and makes the Github link button visible again
var dropCount = 0; 
document.getElementById("SchoolProjects").onclick = function(){
    dropCount = dropCount+1;
    if(dropCount%2!=0){
        document.getElementById("SchoolProjects").innerHTML = "Purdue CS Projects & HW ⬇";
        setLink("https://google.com","PP1");
        setLink("https://amazon.com","PP2");
        setLink("https://youtube.com","PP3");
    }else{
        document.getElementById("SchoolProjects").innerHTML = "Purdue CS Projects & HW ➡";
        document.getElementById("PP1").style.display = "none";
        document.getElementById("PP2").style.display = "none";
        document.getElementById("PP3").style.display = "none";
    }

    
}
