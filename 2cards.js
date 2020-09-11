makeDeck.prototype.play = function () {
    
    var players = [], i = 0, deal1, deal2, t, ident = 0, result = 0, wait1 = 0, wait2 = 0, reset;
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    var playerDiv1 = document.getElementById("playerdiv1");
    var playerDiv2 = document.getElementById('playerdiv2');
    var resultDiv = document.getElementById('resultdiv');
    
    if (repeatGame > 0) {
        return;
    }
    
    
    function compare (value1, value2) {
        if (value1 > value2) {
            return value1;
        }
        else if (value1 < value2) {
            return value2;
        }
        else return -1;
    }

    repeatGame++;
    players[0] = deckOfCards.deck.pop();
    players[1] = deckOfCards.deck.pop();
    playerDiv1.innerHTML = playerDiv1.innerHTML + player1;
    deal1 = document.createElement("BUTTON");
    t = document.createTextNode("Deal");
    deal1.appendChild(t);
    playerDiv1.appendChild(deal1);
    deal1.id = 'p1';
    playerDiv2.innerHTML = playerDiv2.innerHTML + player2;    
    deal2 = document.createElement("BUTTON");
    t = document.createTextNode("Deal");
    deal2.appendChild(t);
    playerDiv2.appendChild(deal2);
    deal2.id = 'p2';
        
    document.getElementById('p1').onclick = function () {
        if (wait1 === 0) {
            playerDiv1.innerHTML = playerDiv1.innerHTML + ' ' + players[0].name + '<br>';
            wait1++;
        }
        compute(wait1, wait2);
    }
    
    document.getElementById('p2').onclick = function () {
        if (wait2 === 0) {
            playerDiv2.innerHTML = playerDiv2.innerHTML + ' ' + players[1].name + '<br>'; 
            wait2++;
        }
        compute(wait1, wait2);
    }
    
    function compute (wait1, wait2) {
        if (wait1 === 1 && wait2 === 1) {
            result = compare(players[0].rank, players[1].rank);
            if (result === -1) {
                resultDiv.innerHTML = resultDiv.innerHTML + '<br>' + 'IT IS A DRAW!';
                reset = document.createElement("BUTTON");
                t = document.createTextNode("Play Again");
                reset.appendChild(t);
                resultDiv.appendChild(reset);
                reset.id = 'reset';
                document.getElementById('reset').onclick = function () {
                    playerDiv1.innerHTML = '';
                    playerDiv2.innerHTML = '';
                    resultDiv.innerHTML = '';
                    wait1 = 0;
                    wait2 = 0;
                    result = 0;
                    repeatGame = 0;
                    deckOfCards.deck.push(players[0]);
                    deckOfCards.deck.push(players[1]);
                    deckOfCards.shuffleDeck();
                }
            }
            else if (result === players[0].rank) {
                resultDiv.innerHTML = resultDiv.innerHTML + '<br>' + player1 + ' WINS! <br>';
                reset = document.createElement("BUTTON");
                t = document.createTextNode("Play Again");
                reset.appendChild(t);
                resultDiv.appendChild(reset);
                reset.id = 'reset';
                document.getElementById('reset').onclick = function () {
                    playerDiv1.innerHTML = '';
                    playerDiv2.innerHTML = '';
                    resultDiv.innerHTML = '';
                    wait1 = 0;
                    wait2 = 0;
                    result = 0;
                    repeatGame = 0;
                    deckOfCards.deck.push(players[0]);
                    deckOfCards.deck.push(players[1]);
                    deckOfCards.shuffleDeck();
                }
            }
            else {
                resultDiv.innerHTML = resultDiv.innerHTML + '<br>' + player2 + ' WINS! <br>';
                reset = document.createElement("BUTTON");
                t = document.createTextNode("Play Again");
                reset.appendChild(t);
                resultDiv.appendChild(reset);
                reset.id = 'reset';
                document.getElementById('reset').onclick = function () {
                    playerDiv1.innerHTML = '';
                    playerDiv2.innerHTML = '';
                    resultDiv.innerHTML = '';
                    wait1 = 0;
                    wait2 = 0;
                    result = 0;
                    repeatGame = 0;
                    deckOfCards.deck.push(players[0]);
                    deckOfCards.deck.push(players[1]);
                    deckOfCards.shuffleDeck();
                }
            }
        }
        else return;
    }
    /*var newDiv = document.createElement("DIV");
    resultDiv.appendChild(newDiv);
    newDiv.style = "width: 20%; float: left; border: 1px solid blue;";
    newDiv.id = 'newDivision';
    newDiv.innerHTML = 'Hello';
    console.log("Is this working?");*/    
}