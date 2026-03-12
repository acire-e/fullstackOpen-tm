import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  /* ----- ----- ----- */ 

  const [counter1, setCounterA] = useState(0)
  const [counter2, setCounterB] = useState(0)
  const [counter3, setCounterC] = useState(0)

  return (
    <div>
      <h1>Give me feedback!</h1>

      <button onClick={() => setCounterA(counter1 + 1)}>
        Good
      </button>

      <button onClick={() => setCounterB(counter2 + 1)}>
        Neutral
      </button>

      <button onClick={() => setCounterC(counter3 + 1)}>
        Bad
      </button>

      <p>all: {counter1 + counter2 + counter3}</p>

      <Statistics 
        counter1={counter1}
        counter2={counter2}
        counter3={counter3}
      />

      <h2> Frases meio motivacionais </h2>
      <p> {anecdotes[selected]} </p>   
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        Proxima frase
      </button> 
    </div>
  )
}


const Statistics = (props) => {

  const good = props.counter1
  const neutral = props.counter2
  const bad = props.counter3

  const total = good + neutral + bad
  const media = total / 3
  const percent = (good * 100) / total

  if ((good!= 0) || (neutral != 0) || (bad != 0)) {
    
    return (
      <div>
        <h2>Estatisticas das Avaliações</h2>
        <p> Boa: {good}  Neutra: {neutral}  Má: {bad} </p>
        <p>Média: {media}</p>
        <p>Percentagem positiva: {percent}%</p>
      </div>
    )
  } else {
    return (
      <div>
        <p> Não há Feedbacks </p>
      </div>
    )
  }
}

export default App
