import Progress from "./Progress.jsx"
import { useState } from 'react';
import flashcards from "../data/flashcards.json"
import FlashCard from "./FlashCard.jsx";
const FlashCardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Flipped, setFlipped] = useState(false);
    return (
        <div>
            <h1>Flash Card Container</h1>
            <p>This is the flash card container component.</p>
            <div className="flash-card-container">
                <Progress progress={currentIndex} total={flashcards.length}/>
                <FlashCard currentIndex = {currentIndex}/>
            </div>
        </div>
    )
}

export default FlashCardContainer;