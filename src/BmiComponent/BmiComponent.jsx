
import styles from "./BmiComponent.module.css"
import "./BmiComponent.module.css"
import React, {useState} from "react"
import underweightImg from "../assets/underweight.png"
import normalImg from"../assets/healthy.png"
import overweightImg from"../assets/overweight.png"


function BmiComponent () {
    const [bmi,setBmi] = useState("")
    const [message,setMessage] = useState("")
    const [weight,setWeight] = useState(0)
    const [height,setHeight] = useState(0)

    let calcBmi = (e) => {
        //prevent submitting 
        e.preventDefault();
        
        if (weight === 0 || height === 0) {
            alert("Please enter a valid weight and height")
        }else {
            let bmi = weight / ((height /100)**2);
            setBmi(bmi.toFixed(1))
            //logic for message

            if (bmi < 25) {
                setMessage("You are underweight")
            }else if (bmi >= 25 && bmi < 30){
                setMessage("You are Healthy")
            }else {
                setMessage('You are overweight')
            }
        }
    }
    const handleWeight = (e) => {
        setWeight(e.target.value);
    }

    let reload = () => {
        window.location.reload()
    }
        //show image based on bmi calculation
      let imgSrc;

      if (bmi < 1) {
        imgSrc = null;
      }else {
        if (bmi<25){
            imgSrc = underweightImg;
        }else if (bmi >= 25 && bmi < 30){
            imgSrc = normalImg;
        }else {
            imgSrc = overweightImg;
        }
      }




    return (
        <>
        <div className={styles.app}>
            <div className={styles.container}>
                <h1 className={styles.title}>BMI Calculator</h1>
            <form onSubmit={calcBmi}>
                <div className={styles.inputs}>
                    <label>Weight(kg)</label>
                    <input type="number" value={weight} onChange={handleWeight} />
                    <br />
                    <label >Height(m)</label>
                    <input type="number" value={height} onChange={(e) => {
                        setHeight(e.target.value)
                    }}/>
                </div>
                <div >
                    <button type="submit" className={styles.btn}>Submit</button>
                    <button type="submit" className={styles.outline} onClick={reload}>Reload</button>
                </div>
            </form>
                <div className={styles.message}>
                    <h1>Your BMI is:{bmi}</h1>
                    <p>{message}</p>
                </div>

                <div className={styles.img}>
                    <img src={imgSrc} alt="" />
                </div>
            </div>

        </div>
        
        
        
        </>
    )
}


export default BmiComponent;