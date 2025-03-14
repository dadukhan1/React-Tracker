import React, { useState } from 'react'
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputCheck = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newInput) => {
    setUserInput((previousValue) => {
      return {
        ...previousValue,
        [inputIdentifier]: +newInput
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputCheck && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputCheck && <Results userInput={userInput} />}
    </>
  )
}

export default App;