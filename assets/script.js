

const currentDay = moment();
const currentTime = moment().format('HH mm A')
let buttonCount = 0;

let buttons = [$('#btn1'), $('#btn2'), $('#btn3'), $('#btn4'), $('#btn5'), $('#btn6'), $('#btn7'), $('#btn8')];
let inputs = [$('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8')];

let timeBlocks = [
    time1 = {
        time: moment('09:00', 'HH mm A'),
        id: '#1',
        index: '1',
        buttonId: '#btn1'
    },
    time2 = {
        time: moment('10:00', 'HH mm A'),
        id: '#2',
        index: '2',
        buttonId: '#btn2'
    },
    time3 = {
        time: moment('11:00', 'HH mm A'),
        id: '#3',
        index: '3',
        buttonId: '#btn3'
    },
    time4 = {
        time: moment('12:00', 'HH mm A'),
        id: '#4',
        index: '4',
        buttonId: '#btn4'
    },
    time5 = {
        time: moment('13:00', 'HH mm A'),
        id: '#5',
        index: '5',
        buttonId: '#btn5'
    },
    time6 = {
        time: moment('14:00', 'HH mm A'),
        id: '#6',
        index: '6',
        buttonId: '#btn6'
    },
    time7 = {
        time: moment('15:00', 'HH mm A'),
        id: '#7',
        index: '7',
        buttonId: '#btn7'
    },
    time8 = {
        time: moment('16:00', 'HH mm A'),
        id: '#8',
        index: '8',
        buttonId: '#btn8'
    }
];

let userEvents = [];



function init() {


    if (localStorage.getItem('userData') != null){
        userEvents = JSON.parse(localStorage.getItem('userData'));
    }else{
        localStorage.setItem('userData', userEvents);
    }
    

    userEvents.sort(function(a, b){
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });

    console.log(userEvents);


    console.log(currentTime);   
    $('#currentDay').text(currentDay.format('dddd Do MMM YYYY'));





    //SETTING CLASS THAT INDICATES PAST OR FUTURE
    for(let i = 0; i < timeBlocks.length; i++){
        console.log('is working');
        console.log(timeBlocks[i].time);
        if (timeBlocks[i].time.isAfter(currentDay, 'minute')){
            console.log(timeBlocks[i].time + ' is after this time')
            $(timeBlocks[i].id).addClass('future');
        }else if(timeBlocks[i].time.isBefore(currentDay, 'minute')){
            $(timeBlocks[i].id).addClass('past')
        }
    }

    //CREATING EVENTLISTENER THAT SAVES EVENTS IN LOCAL STORAGE

    for(let i = 0; i < buttons.length; i++){
        buttons[i].attr('input', i + 1);
        buttons[i].on('click', onClick);
    }







    if(localStorage.getItem(('userData')) != null){
        console.log('User events is not null');
        console.log(localStorage.getItem('userData'));
        console.log(userEvents);
        var d = JSON.parse(localStorage.getItem('userData'));
        d.sort(function(a, b){
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
        });
        console.log(d); 
        for(let i = 0; i < d.length; i++){
            console.log('workinnnnn');
            let inputIndex = d[i].id;
            console.log(inputIndex);
            //THIS IS A STRING ^
            switch (inputIndex){
                case '1':
                    inputs[0].val(d[i].text);
                    break;
                case '2':
                    inputs[1].val(d[i].text);
                    break;
                case '3':
                    inputs[2].val(d[i].text);
                    break;
                case '4':
                    inputs[3].val(d[i].text);
                    break;
                case '5':
                    inputs[4].val(d[i].text);
                    break;
                case '6':
                    inputs[5].val(d[i].text);
                    break;
                case '7':
                    inputs[6].val(d[i].text);
                    break;
                case '8':
                    inputs[7].val(d[i].text);
                    break;
            
            }
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
    console.log(localStorage.getItem('userData'));
}

init();