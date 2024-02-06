import { dictioMan, dictioManLength } from "./worders.js";
//alert('hello');

let lista = [];
let word = document.querySelector('#sample');
let inputTexter = document.querySelector('#inText');
let lDisplay = document.querySelector('#letterDisplay');
let lInDisplay = document.querySelector('#letterInputDisplay');
const timeID = setInterval(funck, 1000);
const timeIDData = setInterval(flips, 300);
let errorRate = 0;
let errorCounts = 0;

let x = 0;
let time = 7;
let timeGo = 0;

for(let w = 6; w > 0; w--){
    let randomer = Math.floor(Math.random() * dictioManLength) + 1;
    lista.push(dictioMan[randomer]);
    word.textContent = lista.join(" ");
}
inputTexter.addEventListener('keydown', (event)=>{
    let keye = event.key;
    if(event.key == 'Backspace'){
        x--;
        lDisplay.textContent = word.textContent[x];
        if(x < 0){
            x = 0;
        }
        lInDisplay.textContent = '';
    }
    else if(event.key != 'Backspace' && keye != 'Enter' && keye != 'Alt' && keye != 'Shift' && keye != 'Tab' &&
    keye != 'CapsLock' && keye != 'Control' && keye != 'ArrowUp' && keye != 'ArrowLeft' && keye != 'ArrowRight' &&
    keye != 'ArrowDown' && keye != 'Unidentified' && keye != 'Escape' && keye != 'Delete'){
        if(word.textContent[x] != event.key){
            lInDisplay.style.color = 'red';
            errorCounts++;
            console.log(errorCounts);
        }
        else{
            lInDisplay.style.color = 'yellowgreen';
        }
        x++;
        lInDisplay.textContent = event.key;
        lDisplay.textContent = word.textContent[x];
    }
    else if(keye == 'Enter' && time > 0){
        clearInterval(timeID);
        errorRate = 0.1 / errorCounts;
        let timeCatcher = (timeGo / 60).toFixed(2);
        let wpm = (inputTexter.value.length / 5) / timeCatcher;
        if(errorRate == 'Infinity'){
            wpm = wpm;
        }
        else{
            wpm = wpm - errorRate;
        }
        let rWPM = errorCounts / timeCatcher;
        console.log('Time:',timeGo, 'WPM:',wpm.toFixed(2), 'Errors: ', errorCounts, 'Error rate: ', errorRate.toFixed(4));
        let randomPic = Math.round(Math.random() * 1);
        if(wpm == 0 || wpm == 'NaN'){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/logos.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/logos2.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        else if(wpm > 0 && wpm <= 50){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/bunny.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/owl.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        else if(wpm > 51 && wpm <= 98){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/eKey.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/xB.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        else if(wpm >= 99){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/samu.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/yellowKing.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        document.querySelector('.fPic').classList.toggle('hidden');
    }
});
/*
wpm = (chars / 5) * elapsedTime
errorRate = errors / elapsedTime

minutes to decimal, e.g.:
                    6 sec. is 0.10, 6 0.1 -> 5 0.8 -> 4 0.7 -> 3 0.5 -> 2 0.3 -> 1 0.2
                    15 sec. is 0.25,
                    1 min. || 60 sec. is 1.00,
                    30 sec. is 0.50
*/
function flips(){
    let timeToDec = timeGo / 60;
    let wpm = (inputTexter.value.length / 5) / timeToDec;
    document.querySelector('#rtData').textContent = wpm.toFixed(2) + 'wpm';
    if(time == 0){
        clearInterval(timeIDData);
    }
}
function funck(){
    let wpm = (inputTexter.value.length / 5) / 0.1;
    console.log('hello', time--, timeGo++);
    document.querySelector("#timeCount").textContent = time;
    if(time == 0){
        clearInterval(timeID);
        errorRate = 0.1 / errorCounts;
        wpm = (inputTexter.value.length / 5) / 0.1;
        if(errorRate == 'Infinity'){
            wpm = wpm;
        }
        else{
            wpm = wpm - errorRate;
        }
        console.log('Time:',time,'WPM:', wpm.toFixed(2), 'Errors: ', errorCounts, 'Error rate: ', errorRate.toFixed(4));
        let randomPic = Math.round(Math.random() * 1);
        if(wpm == 0 || wpm == 'NaN'){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/logos.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/logos2.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        else if(wpm > 0 && wpm <= 50){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/bunny.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/owl.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        else if(wpm > 51 && wpm <= 98){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/eKey.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/xB.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        else if(wpm >= 99){
            if(randomPic == 0){
                document.querySelector('.fPic').src = 'pics/samu.png';
            }
            else{
                document.querySelector('.fPic').src = 'pics/yellowKing.png';
            }
            document.querySelector('#wpmLabel').textContent = wpm.toFixed(2) + 'wpm\t' + timeGo + 'seconds';
        }
        document.querySelector('.fPic').classList.toggle('hidden');
    }
}