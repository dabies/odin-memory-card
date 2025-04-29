import { useEffect, useState } from 'react'

import './styles/App.css';
import Header from './components/header';
import InstructionsModal from './components/instructions';
import CardGrid from './components/cardGrid';
import Footer from './components/footer';
import WinnerModal from './components/winner';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isInstructionsOpen, setIsIntructionsOpen] = useState(true);
  const [clickedCards, setClickedCards] = useState([]);
  const [hasPlayerWon, setHasPlayerWon] = useState(false);
  const [pokeCards, setPokeCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const pokemonList = [
    'gengar', 'snorlax', 'alakazam', 'zoroark', 'typhlosion', 'rotom',
    'rayquaza', 'lucario', 'dragonite', 'excadrill', 'hydreigon', 'doublade'
  ];

  useEffect (() => {
    const loadPokemonData = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const fetchedCards = await Promise.all(
          pokemonList.map(async (pokemonName, index) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if(!response.ok) {
              throw new Error (`Could not fetch ${pokemonName}`);
            }
            const data = await response.json();
            return {
              id: index + 1,
              name: pokemonName,
              image: data.sprites.other['official-artwork']?.front_default || data.sprites.front_default
            };
          })
        );
        setPokeCards(fetchedCards);
      } catch(err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadPokemonData(); 
  }, []);

  function openInstructions() {
    setIsIntructionsOpen(true);
  }

  function closeInstructions() {
    setIsIntructionsOpen(false);
  }

  function closeWinnerModal() {
    setHasPlayerWon(false);
  }

  function handleCardClick(id) {
    if(isLoading || errorMessage || hasPlayerWon) {
      return;
    }

    let currentScore = score;
    console.log("clickedCards:", clickedCards);
    const isCardAlreadyClicked = clickedCards.includes(id);

    if(isCardAlreadyClicked) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(currentScore + 1);
      setClickedCards([...clickedCards, id]);
    }
    
    if (highScore < currentScore + (isCardAlreadyClicked ? 0 : 1)) {
      setHighScore(currentScore + (isCardAlreadyClicked ? 0 : 1));
    }

    if (score === 11) {
      setHasPlayerWon(true);
      setScore(0);
      setClickedCards([]);
    }

    const shuffledCards = [...pokeCards].sort(() => Math.random() - 0.5);
    setPokeCards(shuffledCards);
  }

  if (isLoading) {
    return <div>Loading Pokemon...</div>
  }

  if (errorMessage) {
    return <div>Error loading Pokemon: {errorMessage}</div>
  }


  return (
    <>
      <Header score={score} highScore={highScore} openInstructions={openInstructions}></Header>
      <InstructionsModal isOpen={isInstructionsOpen} onClose={closeInstructions}></InstructionsModal>
      <WinnerModal gameOver={hasPlayerWon} onClose={closeWinnerModal}></WinnerModal>
      <div className="card-div">
        <CardGrid cardArray={pokeCards} handleClick={handleCardClick}></CardGrid>
      </div>
      <Footer></Footer>
    </>
  )
  
}

export default App
