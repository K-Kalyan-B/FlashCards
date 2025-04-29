import Progress from "./Progress.jsx"


const FlashCardContainer = () => {
    return (
        <div>
            <h1>Flash Card Container</h1>
            <p>This is the flash card container component.</p>
            <div className="flash-card-container">
                <Progress progress={60} total={100}/>
                {/* Flash cards will be rendered here */}
            </div>
        </div>
    )
}

export default FlashCardContainer;