let buttons = document.querySelectorAll('.btn');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');
let cells = ['','','','','','','','',''];
let player = "X";
let conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

buttons.forEach((button , index) => {
    button.addEventListener('click' , () =>{
        button.value = player;
        button.disabled = true;
        cells[index] = player;
        player = player == "X" ? "O" : "X";
        result.innerHTML = `Player ${player}`
        for(i = 0 ; i < conditions.length ; i++) {
            let condition = conditions[i];
            let a = cells[condition[0]];
            let b = cells[condition[1]];
            let c = cells[condition[2]];

            if(a == ''|| b == '' || c == '') {
                continue;
            }
            if(a == b && b == c && c == a ) {
                result.innerHTML = `Player ${a} Won`;
                allDisabled();
            }
        }
    })
});

const allDisabled = () => {
    buttons.forEach((btn)=>btn.disabled = true)
};



reset.addEventListener('click' , function() {
    cells = ['','','','','','','','',''];
    player = "X";
    result.innerHTML = "Player X";
    buttons.forEach((btn)=>{
        btn.disabled = false;
        btn.value ='';
    })
})