
// Get reference of all buttons and counter label in const fields

const lbl_counterValue = document.getElementById("lbl_counterValue");
const btn_decrease = document.getElementById("btn_decrease");
const btn_reset = document.getElementById("btn_reset");
const btn_increase = document.getElementById("btn_increase");


// Below we'll define 3 functions, one for each button 

let counter = 0;
const MAX_COUNTE_VALUE = 50;

//this function will decrease the counter value by 1 on each click
btn_decrease.onclick = () => {


    counter--;
    lbl_counterValue.textContent = counter;

}

//this function will increase the counter value by 1 on each click
btn_increase.onclick = () => {

    counter++;
    lbl_counterValue.textContent = counter;

}

//this function will reset the counter to 0
btn_reset.onclick = () => {

    counter = 0;
    lbl_counterValue.textContent = counter;

}