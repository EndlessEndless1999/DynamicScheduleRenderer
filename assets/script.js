

const currentDay = moment();
const currentTime = moment().format('HH mm A')
let buttonCount = 0;

let buttons = [$('#btn1'), $('#btn2'), $('#btn3'), $('#btn4'), $('#btn5'), $('#btn6'), $('#btn7'), $('#btn8')];

let timeBlocks = [
    time1 = {
        time: moment('09:00', 'HH mm A'),
        id: '#1',
        buttonId: '#btn1'
    },
    time2 = {
        time: moment('10:00', 'HH mm A'),
        id: '#2',
        buttonId: '#btn2'
    },
    time3 = {
        time: moment('11:00', 'HH mm A'),
        id: '#3',
        buttonId: '#btn3'
    },
    time4 = {
        time: moment('12:00', 'HH mm A'),
        id: '#4',
        buttonId: '#btn4'
    },
    time5 = {
        time: moment('13:00', 'HH mm A'),
        id: '#5',
        buttonId: '#btn5'
    },
    time6 = {
        time: moment('14:00', 'HH mm A'),
        id: '#6',
        buttonId: '#btn6'
    },
    time7 = {
        time: moment('15:00', 'HH mm A'),
        id: '#7',
        buttonId: '#btn7'
    },
    time8 = {
        time: moment('16:00', 'HH mm A'),
        id: '#8',
        buttonId: '#btn8'
    }
];

let userEvents = [];


function init() {
    console.log(currentTime);

    $('#currentDay').text(currentDay.format('dddd Do MMM YYYY'));





    //SETTING CLASS THAT INDICATES PAST OR FUTURE
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

    //CREATING EVENTLISTENER THAT SAVES EVENTS IN LOCAL STORAGE

    for(let i = 0; i < buttons.length; i++){
        buttons[i].attr('input', i + 1);
        buttons[i].on('click', onClick);
    }







    if(userEvents != null){for(let i = 0; i < userEvents.length; i++){
        let input = $('#' + (i + 1));
        input.val(data[i].text);
    }}


}

function onClick(){
    input = this.getAttribute('input');
    inputField = $('#' + input).val();
    console.log(input);
    let event = {
        text: inputField,
        id: input
    }
    console.log(event);
    userEvents.push(event);
    saveData();
}

//SAVES DATA IN LOCAL STORAGE
function saveData(){
    localStorage.setItem('userData', JSON.stringify(userEvents));
}

init();