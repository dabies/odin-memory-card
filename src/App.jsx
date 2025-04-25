import { useState } from 'react'

import './App.css';
import Header from './components/header';
import Card from './components/card';
import InstructionsModal from './components/instructions';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isInstructionsOpen, setIsIntructionsOpen] = useState(true);


  function openInstructions() {
    setIsIntructionsOpen(true);
  }

  function closeInstructions() {
    setIsIntructionsOpen(false);
  }


  return (
    <>
      <Header openInstructions={openInstructions}></Header>
      <InstructionsModal isOpen={isInstructionsOpen} onClose={closeInstructions}></InstructionsModal>
      <div className="card-div">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
        <Card>7</Card>
        <Card>8</Card>
        <Card>9</Card>
        <Card>10</Card>
        <Card>11</Card>
        <Card>12</Card>
      </div>
    </>
  )
  
}

export default App
