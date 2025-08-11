//css
import './App.css';
//react
import { useCallback, useEffect, useState } from 'react';
//data
import { wordsList } from "./data/words"
//components
import StarScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages =[
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 1, name: "end"},
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  
  const pickwordAndCategory = () => {
    //escolha uma categoria aleatória
  const categories = Object.keys(words)
  const category = categories[Math.floor(Math.random() * categories.length)]
  console.log(category)

  //escolha uma palavra aleatória
 const word = words[category][Math.floor(Math.random() * words[category].length)]
 console.log(word)

 return [word, category]

}
  // comece o jogo de palavras secretas
  const startGame = () => {
    //escolha a palavra e escolha a categoria
   const[word, category ] = pickwordAndCategory()

   // pegar a palavra e transformar em letras 
   let wordLetters = word.split("")
   wordLetters = wordLetters.map(letter => letter.toLowerCase())
   console.log(word, category)
   console.log(wordLetters)

   // set estados
   setPickedWord(word)
   setPickedCategory(category)
   setLetters(letters)

    setGameStage(stages[1].name)
  }

  //progredir na entrada da letra
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }
// reestartar o jogo
   const retry = () =>{
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
    {gameStage === 'start' && <StarScreen startGame = {startGame} />}
    {gameStage === 'game' && <Game verifyLetter = {verifyLetter} />}
    {gameStage === 'end' && <GameOver retry = {retry} />}
    </div>
  );
}

export default App;
