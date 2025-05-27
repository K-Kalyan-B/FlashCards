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
    const handleNext =  ()=>{
        if(Flipped){
            setFlipped(!Flipped);
        }
        setCurrentIndex((currentIndex + 1)%flashcards.length);
    }
    const handlePrevious =  ()=>{
        if(Flipped){
            setFlipped(!Flipped);
        }
        setCurrentIndex((currentIndex - 1 + flashcards.length)%flashcards.length);
    }


    return (
        <div>
            <h1>Flash Card Container</h1>
            <p>This is the flash card container component.</p>
            {/*create a subject menu dropdown to select the subject of flashcards*/}
            <div className="flash-card-container">
                <Progress progress={currentIndex+1} total={flashcards.length}/>
                <FlashCard currentIndex = {currentIndex} Flipped = {Flipped}/>{/*pass Q&A instead of index */}
                <div className="flash-card-buttons">
                    <button className = "buttons" onClick={handlePrevious}>&lt;&lt; Previous</button>
                    <button className = "buttons" onClick={handleFlipped}>{Flipped ? `Hide Answer` : `Show Answer`}</button>
                    <button className = "buttons" onClick={handleNext}>Next &gt;&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default FlashCardContainer;