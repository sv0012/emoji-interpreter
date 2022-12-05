import { useState } from 'react';
import './App.css';

function App() {
  const [meaning, setMeaning] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState("")
  
  const emojiInputHandler = (e)=>{
   let userInput = e.target.value;
   let value = emojiData[userInput];
   if (value === undefined){
    setMeaning("The value isn't available in our database");
   }else{
    setMeaning(value);
    setCurrentEmoji(userInput);
   }
  }

  const handleEmojiClick = (emoji)=>{
    setMeaning(emojiData[emoji]);
    setCurrentEmoji(emoji)
  }
  
  const emojiData = {
    "😊" :"Smiling emoji",
    "😳":"Disbelief emoji",
    "😔":"Sad emoji", 
    "🥡":"Takeout Box emoji", 
    "❤️":"Love emoji", 
    "😑":"Annoyance emoji",
  }
  const emojis = Object.keys(emojiData);
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <div className='output'>
      <span>Current Emoji: {currentEmoji} </span>
      <span>Emoji Meaning: {meaning} </span>
      </div>
     
      <h2>Emojis we know!!!</h2>
      {
        emojis.map((item)=>{
          return (
            <span key={item} onClick={()=>handleEmojiClick(item)} style={{fontSize:"2rem",padding:"0.5rem",cursor:"pointer"}}>{item}</span>
          )
        })
      }
    </div>
  );
}

export default App;
