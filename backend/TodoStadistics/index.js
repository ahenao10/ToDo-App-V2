const fs = require('fs');
const stadistics = require('./todoStadistics.json');

function addStadistics(date, operation){
    try {

        const dateData = new Date(date);
        const month = dateData.toLocaleString('default', { month: 'short' });

        const day = stadistics[month].findIndex(day => day.label === dateData.getDate());

        stadistics[month][day][operation]++;
        
        fs.writeFileSync('./TodoStadistics/todoStadistics.json', JSON.stringify(stadistics, null, 2));
        console.log('Stadistics updated!');
    } catch (error) {
        console.log(error);
    }

}

function getStadistics(){
    return stadistics;
}

module.exports = {
    getStadistics, 
    addStadistics
}