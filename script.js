let line = "Hello World!";
let lineArray = '';
const lengthy = line.length;
let i = 0;
let mark = 0;

function recursion(){
    if(mark == 0){
        let timer = setInterval(function(){
            i++;
            lineArray = line.substring(0, i);
            console.log(lineArray);
            document.getElementById('theLine').innerText = lineArray;
            if(i == lengthy){
                mark = 1;
                clearInterval(timer);
                markcheck();
            }
        }, 1000);
    }

    else if(mark == 1){
        let inverseTimer = setInterval(function(){
            i--;
            lineArray = line.substring(0, i);
            console.log(lineArray);
            document.getElementById('theLine').innerText = lineArray;
            if(i == 0){
                mark = 0;
                clearInterval(inverseTimer);
                markcheck();
            }
        }, 1000);
    }
};


document.addEventListener("DOMContentLoaded", recursion);
function markcheck(){
    if(mark == 0 || mark == 1){
        recursion();
    }
}
