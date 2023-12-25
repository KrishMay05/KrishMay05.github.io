document.getElementById("linkvalue").style.display = "none";
document.getElementById("linkvalue").style.fontSize = "30px";
document.getElementById("programPic").style.display = "none";

// Makes the Github Link & dropdown menu button invisible on execution 
//Makes the link buttons a larger size


class CodeProject {
    constructor(Language, ProjectName, Details){
        this.Language = Language;
        this.ProjectName = ProjectName;
        this.Details = Details;
        //this.Git = GitHubLink;
    }
    
};
// generic class with a constructor for all the future coding projects I will add

function ChangeLabel(prog){
    var x = document.getElementById("ProjDetails");   
    x.innerHTML = " Project Name: "+ prog.ProjectName +"<br>"  + " Language: "+ prog.Language +"<br>" +prog.Details;// +"<br>"+"Link:";
    //x.innerHTML = prog.Git;
}

function setLink(linkString, hrefDocumentId){
    document.getElementById(hrefDocumentId).style.display = "block";
    document.getElementById(hrefDocumentId).href=linkString; 
}
// Displays relevant information depending on the CodProject object 

// Customize apperence of the dropdown menu 

document.getElementById("ProjDetails").style.fontSize = "xx-large";
// Sets subheading text to a smaller font 

let WebScrape = new CodeProject("Java", "URLReader.java", "Webscraper that takes a website showing times around <br> the world, and displays time at a given inputed city.");
let WebApp = new CodeProject("JavaScript", "WebsiteCode.js","Javascript behind the home page of my personal website <br> (the current website you are on).");
let WebAppHTML = new CodeProject("HTML", "Index.html","HTML behind the home page of my personal website <br> (the current website you are on)." );
let FTC = new CodeProject("Java", "FTC Freight Frenzy", "My code repository during the 2021-22 FTC season where I <br> was the sole programmer on a small team.");
let Tetris = new CodeProject("Java", "Tetris.java", "An alternative form of Tetris I created in the summer of 2022.");
let Minesweep = new CodeProject("Java", "MinesweeperRunner.java", "My own version of minesweeper I created in the summer of 2022.");
let Message = new CodeProject("Java", "BlankServer.java & BlankClient.java", "A message system that allows useres to communicate w/ eachother.");
let Paint = new CodeProject("Java", "Paint.java", "Creates a paint software simmilar to microsoft paint.");
// creates the CodeProject objects with the relevant parameters 

document.getElementById("Proj1").onclick = function() {
    ChangeLabel(WebScrape);
    setLink("https://github.com/KrishMay05/Projects/blob/main/SmallProjects/Webscraper/URLReader.java","linkvalue");
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "URL.jpg";

}
document.getElementById("Proj2").onclick = function(){
    ChangeLabel(WebApp);
    setLink("https://github.com/KrishMay05/KrishMay05.github.io/blob/main/WebsiteCode.js","linkvalue");
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "WebsiteJs.jpg";
}
document.getElementById("Proj3").onclick = function(){
    ChangeLabel(WebAppHTML);
    setLink("https://github.com/KrishMay05/KrishMay05.github.io/blob/main/index.html","linkvalue");
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "WebsiteScreen.jpg";
}
document.getElementById("Proj4").onclick = function(){
    ChangeLabel(Tetris);
    setLink("https://github.com/KrishMay05/Projects/blob/main/Games/Tetris.java","linkvalue");
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "Tetris.jpg";
}
document.getElementById("Proj5").onclick = function(){
    ChangeLabel(Minesweep);
    setLink("https://github.com/KrishMay05/Projects/blob/main/Games/Minesweeper.java","linkvalue")
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "minesweeper.jpg";
}
document.getElementById("ProjX").onclick = function(){
    ChangeLabel(FTC);
    setLink("https://github.com/KrishMay05/Freight_Frenzy_2021-22","linkvalue");
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "FTCrobot.jpg";
}
document.getElementById("Proj6").onclick = function(){
    ChangeLabel(Message);
    setLink("https://github.com/KrishMay05/Projects/tree/main/MessageSystem","linkvalue");
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "Message.jpg";
}
document.getElementById("Proj7").onclick = function(){
    ChangeLabel(Paint);
    setLink("https://github.com/KrishMay05/Projects/tree/main/SmallProjects/Paint","linkvalue");
    document.getElementById("programPic").style.display = "block";
    document.getElementById("programPic").src = "paint.jpg";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

// Makes it so that on button click it shows subheading information on click and makes the Github link button visible again