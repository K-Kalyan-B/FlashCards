import flashcards from '../data/flashcards.json';

const FlashCard = ({currentIndex,Flipped}) => {
   return (
    <div>
        <div className="flashcard">
            {Flipped ? <h2>{flashcards[currentIndex].question}</h2> : <h2>{flashcards[currentIndex].answer}</h2>}
        </div>
    </div>
   );
   
};

export default FlashCard;