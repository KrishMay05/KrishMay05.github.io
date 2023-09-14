var NBATeam;
function returnText(){
    NBATeam = document.getElementById("inputCity").value;
    fetch("https://www.balldontlie.io/api/v1/teams")
    .then(response => response.json())
    .then(responseJson => {
        for(y=0;y< 30;y++){
            const team = ""+responseJson.data[y].abbreviation;
            const city = ""+responseJson.data[y].city;
            if(!(NBATeam.localeCompare(team))||!(NBATeam.localeCompare(city))){
                    const playerInfo = document.createElement("x");
                    playerInfo.innerText = "Team Name: "+responseJson.data[y].full_name+"\nTeam Abbreviation: "+responseJson.data[y].abbreviation+"\nConfrence: "+responseJson.data[y].conference+"\n";
                    NBA.append(playerInfo);
                    }
                    
                }
            })
            .catch( error=> console.log(error))


}

