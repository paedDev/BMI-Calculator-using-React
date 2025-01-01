
import React , {useState} from "react"
import "../index.css"

function Bmi() {

    const [bmi, setBmi]= useState(0)
    const [weight, setWeight]= useState(0)
    const [height, setHeight]= useState(0)
    const [message, setMessage]= useState("")

    const bmiCalc = () => {

        if (!weight || !height){
            alert("Please input a valid weight and height")
        }else {
            let bmi = (weight/ (height/100)**2)
            setBmi(bmi.toFixed(1))
              
              if(bmi<18.5){
            setMessage("You are underweight")
             }else if (bmi >18.5 && bmi < 30) {
            setMessage("You are normal")
             }else {
             setMessage("You are overweight")
             }
        }
     
      
    }

    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }
    const reload = () =>{
        window.location.reload();
    }

    return (
        <>
        <div className="app">
            <div className="BmiContainer">
                <h1>BMI Caluclator</h1>
                 <div className="input">
                    <label htmlFor="">Weight(kg)</label>
                    <input type="number" onChange={handleWeightChange} />
                    <label htmlFor="">Height(m)</label>
                    <input type="number" onChange={(e) =>{
                        setHeight(e.target.value)
                    }} />
                </div>
                <div className="btn">
                    <button type="submit" onClick={bmiCalc}>Submit</button>
                    <button type="submit" onClick={reload}>reload</button>
                </div>

                <div className="result">
                    <h2>{bmi}</h2>
                    <p>{message}</p>
                </div>
            </div>
        </div>
     
        </>
    )
}
export default Bmi;