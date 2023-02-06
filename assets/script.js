

const currentDay = moment();
const currentTime = moment().format('HH mm A')
let buttonCount = 0;

let timeBlocks = [
    time1 = {
        time: moment('09:00', 'HH mm A'),
        id: '#1'
    },
    time2 = {
        time: moment('10:00', 'HH mm A'),
        id: '#2'
    },
    time3 = {
        time: moment('11:00', 'HH mm A'),
        id: '#3'
    },
    time4 = {
        time: moment('12:00', 'HH mm A'),
        id: '#4'
    },
    time5 = {
        time: moment('13:00', 'HH mm A'),
        id: '#5'
    },
    time6 = {
        time: moment('14:00', 'HH mm A'),
        id: '#6'
    },
    time7 = {
        time: moment('15:00', 'HH mm A'),
        id: '#7'
    },
    time8 = {
        time: moment('16:00', 'HH mm A'),
        id: '#8'
    }
];

let userEvents = [];


function init() {
    console.log(currentTime);

    $('#currentDay').text(currentDay.format('dddd Do MMM YYYY'));






    for(let i = 0; i < timeBlocks.length; i++){
        console.log('is working');
        console.log(timeBlocks[i].time);
        if (timeBlocks[i].time.isAfter(currentDay, 'minute')){
            console.log(timeBlocks[i].time + ' is after this time')
            $(timeBlocks[i].id).addClass('future');
        }else if(timeBlocks.time.isBefore(currentDay, 'minute')){
            $(timeBlocks[i].id).addClass('past')
        }
    }

    while(buttonCount < 9){
        $('#btn' + buttonCount).on('click', function(){
            $('#btn' + buttonCount).data('num', buttonCount);
            let buttonID = jQuery.data($('#btn' + buttonCount), 'num');
            console.log(buttonID);
            console.log('HELLO');
            var input = $('#' + buttonID).val();
            console.log(input);
            let event = {
                text: input
            }
            console.log(event);
            JSON.stringify(event);
            console.log(event);
            userEvents.push(event);
            saveData();
        })
        buttonCount++;
    }
    buttonCount = 0;


        let data = localStorage.getItem('userData');
        for(let i = 0; i < data.length; i++){
            let input = $('#' + (i + 1));
            input.val(data[i].text);
        }

}

function saveData(){
    localStorage.setItem('userData', JSON.stringify(userEvents));
}

init();