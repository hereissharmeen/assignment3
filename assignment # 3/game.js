//PRACTICE EXERCISE # 4.5
// QUESTION # 1
let prize ;
while (true){
    prize=parseInt(prompt("Set the value of the prize by selecting a number between 0 and 10:"));
    if (prize  >= 0 && prize <= 10){
        break;
    } else{
        alert("Please enter a valid number between 0 and 10.");
    }
}
let dynamicNumber = Math.floor(Math.random()*100)+1;
function checkNumber(){
    let userNumber=parseInt(document.getElementById('userNumber').value);
    let result;
    if (userNumber > dynamicNumber){
        result="your number is grater than"+dynamicNumber;
    }else if (userNumber < dynamicNumber){
        result = "your number is less than"+ dynamicNumber;
    }else{
        result = "your number is equal to" + dynamicNumber;
    }
    document.getElementById("result").innerText = result + ". You selected a prize value of " + prize;
}
// EVALUATING A NUMBER GAME
// Generate a Random Number
let y = Math.floor(Math.random() * 10 + 1);
 
// Counting the number of guesses
// made for correct Guess
let guess = 1;

document.getElementById("submitguess").onclick = function () {

    // Number guessed by user    
    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }

    //  If guessed number is greater than actual number
    else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}


// FRIEND CHEACKER GAME:
function startGame() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    if (player1 === '' || player2 === '') {
        alert('Please enter names for both players.');
        return;
    }

    document.getElementById('intro').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
}

function checkAnswers() {
    const questions = [
        { id: 'q1', text: 'What is your favorite color?' },
        { id: 'q2', text: 'What is your favorite food?' },
        { id: 'q3', text: 'What is your dream vacation destination?' }
    ];

    let score1 = 0;
    let score2 = 0;

    questions.forEach(q => {
        const p1Answer = document.getElementById(`${q.id}-p1`).value.trim().toLowerCase();
        const p2Answer = document.getElementById(`${q.id}-p2`).value.trim().toLowerCase();

        if (p1Answer === p2Answer) {
            score1++;
            score2++;
        }
    });

    document.getElementById('game').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result-text').innerText = `Player 1 Score: ${score1}\nPlayer 2 Score: ${score2}`;
}

function resetGame() {
    document.getElementById('intro').classList.remove('hidden');
    document.getElementById('game').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    document.querySelectorAll('#questions input').forEach(input => input.value = '');
}

