import flashcards from '../data/flashcards.json';

const FlashCard = ({currentIndex}) => {
   return (
    <div>
        <div className="flashcard">
            <h3>{flashcards[currentIndex].answer}</h3>
        </div>
    </div>
   );
   
};

export default FlashCard;