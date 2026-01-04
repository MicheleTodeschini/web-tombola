import numbers from "../data/numbers"

export default function Main() {


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
                <p>test</p>
            </div>
        </>
    )
}