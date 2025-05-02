import Progress from "./Progress.jsx"
import { useState } from 'react';
import flashcards from "../data/flashcards.json"
import FlashCard from "./FlashCard.jsx";
const FlashCardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Flipped, setFlipped] = useState(false);

    const handleFlipped = ()=>{
        setFlipped(!Flipped);
    }
    return (
        <div>
            <h1>Flash Card Container</h1>
            <p>This is the flash card container component.</p>
            <div className="flash-card-container">
                <Progress progress={currentIndex} total={flashcards.length}/>
                <FlashCard currentIndex = {currentIndex} Flipped = {Flipped}/>
                <div className="flash-card-buttons">
                    <button onClick={handleFlipped}>{Flipped ? `Show Answer` : `Hide Answer`}</button>
                </div>
            </div>
        </div>
    )
}

export default FlashCardContainer;