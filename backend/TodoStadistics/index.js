const fs = require('fs');
const stadistics = require('./todoStadistics.json');

function addStadistics(date, operation){
    try {

    
        stadistics[date][operation]++;
        fs.writeFileSync('./TodoStadistics/todoStadistics.json', JSON.stringify(stadistics, null, 2));
        console.log('Stadistics updated!');
    } catch (error) {
        console.log(error);
    }

}

function getStadistics(){
    return stadistics;
}

// exports.getStadistics = getStadistics;
module.exports = {
    getStadistics, 
    addStadistics
}