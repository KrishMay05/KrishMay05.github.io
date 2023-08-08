document.getElementById("linkvalue").style.display = "none";
// Makes the Github Link button invisible on execution 

class CodeProject {
    constructor(Language, ProjectName, GitHubLink){
        this.Language = Language;
        this.ProjectName = ProjectName;
        this.Git = GitHubLink;
    }
    
};
// generic class with a constructor for all the future coding projects I will add

function ChangeLabel(prog){
    var x = document.getElementById("ProjDetails");             
    x.innerHTML = "Project Name: "+ prog.ProjectName +"<br>" + " Language: "+ prog.Language;// +"<br>"+"Link:";
    //x.innerHTML = prog.Git;
}
// Displays relevant information depending on the CodProject object 


document.getElementById("ProjDetails").style.fontSize = "xx-large";
// Sets subheading text to a smaller font 

let WebScrape = new CodeProject("Java", "URLReader.java", "https://github.com/KrishMay05/https://github.com/KrishMay05/Purdue23-24/blob/5e069b5b0bdc53a0cea2c2fedd87672397afc0e4/URLReader.java-24/blob/main/URLReader.java");
let WebApp = new CodeProject("JavaScript", "WebsiteCode.js", "https://github.com/KrishMay05/Purdue23-https://github.com/KrishMay05/Purdue23-24/blob/88c0ab3bb25c947d8d963715fcc3f0d8a146d115/WebsiteCode.js/blob/main/WebsiteCode.js");
let WebAppHTML = new CodeProject("HTML", "WebsiteRunner.html", "https://github.com/KrishMay05/Purdue23-24/blob/main/WebsiteRunner.html" );
// creates the CodeProject objects with the relevant parameters 

document.getElementById("Proj1").onclick = function() {
    ChangeLabel(WebScrape);
    document.getElementById("linkvalue").style.display = "block";
    document.getElementById("linkvalue").href="https://github.com/KrishMay05/Purdue23-24/blob/main/URLReader.java"; 
}
document.getElementById("Proj2").onclick = function(){
    ChangeLabel(WebApp);
    document.getElementById("linkvalue").style.display = "block";
    document.getElementById("linkvalue").href="https://github.com/KrishMay05/Purdue23-24/blob/main/WebsiteCode.js"; 
}
document.getElementById("Proj3").onclick = function(){
    ChangeLabel(WebAppHTML);
    document.getElementById("linkvalue").style.display = "block";
    document.getElementById("linkvalue").href="https://github.com/KrishMay05/Purdue23-24/blob/main/WebsiteRunner.html"; 
}
// Makes it so that on button click it shows subheading information on click and makes the Github link button visible again

