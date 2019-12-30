import React, { useState, useEffect } from 'react';





export const Content = () => {
  const [hintTitle, setHintTitle] = useState("");
  const [hintText, setHintText] = useState("");
  const [activityTitle, setActivityTitle] = useState("");

  useEffect(() => {
    switch(window.location.search) {
      case "?hint=1":        
        setActivityTitle("Open Your Presents");
        setHintTitle("Hint1");
        setHintText("It's like treasure inside of treasure. Look inside everything until you find your next clue to scan.");
        break;
      case "?hint=2":        
        setActivityTitle("Eat Breakfast");
        setHintTitle("Hint2");
        setHintText("You will find the next clue away in a manger.");
        break;
      case "?hint=3":        
        setActivityTitle("Let's play some video games!!!");
        setHintTitle("Hint3");
        setHintText("We can switch it up by by finding this next clue.");
        break;
      case "?hint=4":        
        setActivityTitle("Pick up some lunch at Chick-Fil-A");
        setHintTitle("Hint4");
        setHintText("Are you stuffed yet? You better keep eating until you find the next clue.");
        break;
      case "?hint=5":        
        setActivityTitle("Get your ears pierced.");
        setHintTitle("Hint5");
        setHintText("This is where you sit when you want to get somewhere fast.");
        break;
      case "?hint=6":        
        setActivityTitle("Check on the kittens.");
        setHintTitle("Hint6");
        setHintText("It may be smelly, but this is where your next clue lies.");
        break;
      case "?hint=7":        
        setActivityTitle("Do a puzzle.");
        setHintTitle("Hint7");
        setHintText("You have seen some kittens, but meow can you put them back together?");
        break;
      case "?hint=8":        
        setActivityTitle("Take a nap.");
        setHintTitle("Hint8");
        setHintText("This is where you sleep on a beautiful sunny day.");
        break;
      case "?hint=9":        
        setActivityTitle("Eat dinner.");
        setHintTitle("Hint9");
        setHintText("Every family dinner night you have to clean below this clue location.");
        break;
      case "?hint=10":        
        setActivityTitle("Eat cake.");
        setHintTitle("Hint10");
        setHintText("Now that we have had something sweet we have enough energy to find the next clue. It's located in one of the main ingredients.");
        break;
      case "?hint=11":        
        setActivityTitle("Laser Tag");
        setHintTitle("Hint11");
        setHintText("I hope you didn't throw the box away. :-)");
        break;
      case "?hint=12":        
        setActivityTitle("Watch a Disney movie");
        setHintTitle("Hint12");
        setHintText("Time to find the final clue, but make sure you get there before the clock strikes Midnight.");
        break;
      case "?hint=13":        
        setActivityTitle("It's almost midnight. Watch the ball drop.");
        setHintTitle("YOU WIN!!! Happy Birthday!!!");
        setHintText("Now go to bed.");
        break;
      default:
        setHintTitle("Start by popping the first balloon and scan the clue inside.");
    }
    
  },[]);

  return (
    <div className="main">
      <h1>Happy Birthday Phoebe!!!</h1>
      <p>Welcome to Phoebe's Birthday Scavanger Hunt.</p>
      <p>You will have to follow the clues, scan secret messages, and have fun all day long.</p>      
      <h2>Activity: { activityTitle }</h2>
      <h2>{ hintTitle }</h2>
      <p className="lead">{ hintText }</p>
    </div>
  )};