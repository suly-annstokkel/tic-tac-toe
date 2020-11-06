var currentPlayer = 'Red';

var selectedFields = {};

const winningPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

const createGame = () => {
  var status = document.createElement('h1');
  status.id = 'stateText';
  status.innerText = 'Play Tic Tac Toe';
  document.getElementById('game').appendChild(status);

  var board = document.createElement('div');
  board.className = 'board';

  //Maak 9 keer een veld aan
  for (i = 1; i <= 9; i++) {
    console.log(i);

    var field = creatField(i);

    //Voeg veld toe aan board-element
    board.appendChild(field);
  }

  document.getElementById('game').appendChild(board);
 
  updateStateText();
}

//Maak een field div aan met een meegegeven tekst/nummer (return = field element)
const creatField = (number) => {
  var field = document.createElement('div');
  field.className = 'field';
  field.innerText = number;
  field.addEventListener('click', fieldClick);
  return field;
};

const fieldClick = (e) => {
    console.log(e.target.innerText);
    e.target.classList.add(currentPlayer);

    selectedFields[e.target.innerText] = currentPlayer;
    
    console.log(selectedFields);

    //Controleren op winnar
    checkWinner();
    
    //Speler switchen
    changePlayer();
}

const checkWinner = () => {
    //check selectedFields op winnaar

    for(var pattern of winningPatterns){
      var field1 = selectedFields[pattern[0]];
      var field2 = selectedFields[pattern[1]];
      var field3 = selectedFields[pattern[2]];
      console.log(`${field1} = ${field2} = ${field3}`);

      if (field1 && field1 == field2 && field1 == field3) {
        alert(`Hoorayyy! ${field1} player wins!`);
        window.location.reload(true);
      } 
    //   else if (field1 && field1 == field2 && field1 != field3) {
    //     alert(`Ooh noo!, Try again!`);
    //     window.location.reload(true);
    //  }
    }
}


const changePlayer = () => {
    if (currentPlayer=='Red') {
         currentPlayer='Blue'
    }
    else {
        currentPlayer='Red'
    }
    updateStateText();
}

const updateStateText = () => {
  document.getElementById('stateText').innerText = `${currentPlayer} player, it's your turn`;
}


// function newFunction() {
//     document.getElementById('clear').reset()
    
//  }