import { useState } from 'react'

import './App.css'

function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState("")
  let calBmi = (e)=>{
    e.preventDefault()
    if(weight ===0 || height===0){
      alert("Please enter a valid weight and height")
    }
    else{
      let bmi = (weight/ (height * height)*20)
      setBmi(bmi.tofixed(1))

      if(bmi<25){
        setMessage("you are underweight")
      }
      else if(bmi>= 25 && bmi <10){
        setMessage("You are a healthy weight")
      }
      else{
        setMessage("you are over weight")
      }
    }
  }

  //reload 
  let reload = ()=>{
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Claculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Height (lbs)</label>
            <input type='text' placeholder='Enter weight value' value={weight} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter weight value' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className="btn" type='submit'>Submit</button>
            <button className="btn btn-outline" onClick={reload} type='submit'>Reload</button>
          </div>

          <div className="center">
            <h1>Your BMI is:{bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default App
