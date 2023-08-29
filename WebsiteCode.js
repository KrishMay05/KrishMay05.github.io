document.getElementById("linkvalue").style.display = "none";
document.getElementById("linkvalue").style.fontSize = "30px";

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


class CodeProject {
    constructor(Language, ProjectName){
        this.Language = Language;
        this.ProjectName = ProjectName;
        //this.Git = GitHubLink;
    }
    
};
// generic class with a constructor for all the future coding projects I will add

function ChangeLabel(prog){
    var x = document.getElementById("ProjDetails");   
    x.innerHTML = " Project Name: "+ prog.ProjectName +"<br>"  + " Language: "+ prog.Language;// +"<br>"+"Link:";
    //x.innerHTML = prog.Git;
}

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

document.getElementById("ProjDetails").style.fontSize = "xx-large";
// Sets subheading text to a smaller font 

let WebScrape = new CodeProject("Java", "URLReader.java");
let WebApp = new CodeProject("JavaScript", "WebsiteCode.js");
let WebAppHTML = new CodeProject("HTML", "WebsiteRunner.html" );
let FTC = new CodeProject("Java", "FTC Freight Frenzy")
// creates the CodeProject objects with the relevant parameters 

document.getElementById("Proj1").onclick = function() {
    ChangeLabel(WebScrape);
    setLink("https://github.com/KrishMay05/Purdue23-24/blob/main/URLReader.java","linkvalue")
}
document.getElementById("Proj2").onclick = function(){
    ChangeLabel(WebApp);
    setLink("https://github.com/KrishMay05/KrishMay05.github.io/blob/main/WebsiteCode.js","linkvalue")
}
document.getElementById("Proj3").onclick = function(){
    ChangeLabel(WebAppHTML);
    setLink("https://github.com/KrishMay05/KrishMay05.github.io/blob/main/index.html","linkvalue")
}
document.getElementById("Proj4").onclick = function(){
    ChangeLabel(FTC);
    setLink("https://github.com/KrishMay05/Freight_Frenzy_2021-22","linkvalue")
}
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
