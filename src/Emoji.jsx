import { useState } from "react";
import happyEmoji from "./assets/happy.png"
import sadEmoji from "./assets/sad.png"

function Emoji() {
    const [mood, setMood] = useState('happy');
  
    const handleMoodChange = () => {
      setMood(mood === 'happy' ? 'sad' : 'happy');
    }
  
    const emojiImage = mood === 'happy' ? happyEmoji : sadEmoji;
    // Checks if the mood is happy, if so, happyEmoji is assigned to emojiImage, and so forth.
  
    return (
      <div>
        <img src={emojiImage} alt="Emoji" className="emoji"/>
        <button onClick={handleMoodChange}>Change Mood</button>
      </div>
    );
  }
  
  export default Emoji;