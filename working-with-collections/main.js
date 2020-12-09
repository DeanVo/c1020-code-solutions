/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Ed',
    hand: []
  },
  {
    name: 'Double D',
    hand: []
  },
  {
    name: 'Eddy',
    hand: []
  },
  {
    name: 'Rolf',
    hand: []
  }
];

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

let deck = [];

function createDeck() {
  for (let i = 0; i < ranks.length; i++) {
    for (let x = 0; x < suits.length; x++) {
      const newCard = {
        rank: '',
        suit: ''
      };
      newCard.rank = ranks[i];
      newCard.suit = suits[x];
      deck.push(newCard);
    }
  }
}

createDeck();

deck = _.shuffle(deck);

function dealCards() {
  for (let i = 0; i < players.length; i++) {
    const dealCards = deck.splice(_.random(0, deck.length), 2);
    if (players[i].hand.length !== 2) {
      players[i].hand.push(dealCards);
    }
  }
}

dealCards();

function determineScore(playerIndex) {
  let score = 0;
  const playerHand = players[playerIndex].hand[0];

  for (const key in playerHand) {
    if (playerHand[key].rank === 'ace') {
      score += 11;
    } else if (playerHand[key].rank === 'jack' || playerHand[key].rank === 'queen' || playerHand[key].rank === 'king') {
      score += 10;
    } else if (playerHand[key].rank) {
      score += parseInt(playerHand[key].rank);
    }
  }
  return score;
}

function determineWinner() {
  const scoresArray = [];

  for (let i = 0; i < players.length; i++) {
    players[i].score = determineScore(i);
    scoresArray.push(players[i]);
  }

  const findWinner = _.maxBy(scoresArray, 'score');
  const winner = findWinner.name;

  console.log(`${winner} is the winner with a score of ${findWinner.score}!`);
}

determineWinner();
