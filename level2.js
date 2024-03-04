document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    const cardArray = [
      {
        name: 'air-balloon',
        img: 'level2/air-balloon.jpg'
      },
      {
        name: 'air',
        img: 'level2/air.jpg'
      },
      {
        name: 'airplane',
        img: 'level2/airplane.jpg'
      },
      {
        name: 'airplane2',
        img: 'level2/airplane2.jpg'
      },
      {
        name: 'helicoper2',
        img: 'level2/helicoper2.jpg'
      },
      {
        name: 'helicopter',
        img: 'level2/helicopter.jpg'
      },
      {
        name: 'plane',
        img: 'level2/plane.jpg'
      },
      {
        name: 'plane2',
        img: 'level2/plane2.jpg'
      },
      {
        name: 'plane3',
        img: 'level2/plane3.jpg'
      },
      {
        name: 'air-balloon',
        img: 'level2/air-balloon.jpg'
      },
      {
        name: 'air',
        img: 'level2/air.jpg'
      },
      {
        name: 'airplane',
        img: 'level2/airplane.jpg'
      },
      {
        name: 'airplane2',
        img: 'level2/airplane2.jpg'
      },
      {
        name: 'helicoper2',
        img: 'level2/helicoper2.jpg'
      },
      {
        name: 'helicopter',
        img: 'level2/helicopter.jpg'
      },
      {
        name: 'plane',
        img: 'level2/plane.jpg'
      },
      {
        name: 'plane2',
        img: 'level2/plane2.jpg'
      },
      {
        name: 'plane3',
        img: 'level2/plane3.jpg'
      }
      
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('#grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank1.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank1.png')
        cards[optionTwoId].setAttribute('src', 'images/blank1.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank1.png')
        cards[optionTwoId].setAttribute('src', 'images/blank1.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })














