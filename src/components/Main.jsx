import { useState } from "react";
import numbers from "../data/numbers"

export default function Main() {

    const [extractNumber, setExtractNumber] = useState()

    const [extracted, setExtracted] = useState(0)


    function extract_number() {

        let dummy = Math.floor(Math.random() * 90) + 1;
        setExtracted(dummy)

        if (extracted == numbers) {
            setExtractNumber(numbers)
                .classList.add('active');

        }
        console.log(extracted);
        console.log(extractNumber);

    }

    return (
        <>
            <div className="container">
                <div className="tombola-grid">
                    {
                        numbers.map(number => (
                            <div key={number} className="tombola-cell">{number}</div>
                        ))
                    }
                </div>
                <div className="tombola-extraction">
                    <button className="btn btn-success" onClick={extract_number}>Estrai</button>
                    <p>{extracted}</p>
                </div>

            </div>
        </>
    )
}