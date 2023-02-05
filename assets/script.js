

const currentDay = moment();
const currentTime = moment().format('HH mm A')

let timeBlocks = [];

function init() {
    console.log(currentTime);
    
    $('#currentDay').text(currentDay.format('dddd Do MMM YYYY'));
    for(let i = 0; i < timeBlocks.length; i++){

    }
}

init();