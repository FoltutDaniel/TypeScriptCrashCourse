let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

/*
for(let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}
*/

//simplified for loop

for(let tempSport of sportsOne){
    console.log(tempSport);
}

sportsOne.push("Basketball");
sportsOne.push("Micu");

for(let tempSport of sportsOne){
    console.log(tempSport);
}