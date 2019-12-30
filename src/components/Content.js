import React, { useState, useEffect } from 'react';





export const Content = () => {
  const [hintTitle, setHintTitle] = useState("");
  const [hintText, setHintText] = useState("");
  const [activityTitle, setActivityTitle] = useState("");

  useEffect(() => {
    switch(window.location.search) {
      case "?hint=1":        
        setActivityTitle("Eat Breakfast");
        setHintTitle("Hint1");
        setHintText("Hint1");
        break;
      default:
        setHintTitle("Start by popping the first baloon and scan the clue inside.");
    }
    
  },[]);

  return (
    <div className="main">
      <h1>Happy Birthday Phoebe!!!</h1>
      <p>Welcome to Phoebe's Birthday Scavanger Hunt.</p>
      <p>You will have to follow the clues, scan secret messages, and have fun all day long.</p>
      <h2>{ hintTitle }</h2>
      <h2>{ activityTitle }</h2>
    </div>
  )};