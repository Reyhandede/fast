import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Container from "./components/Container";
import Start from "./components/Start";
import Finish from "./components/Finish";
import TimePrev from "./components/TimePrev";
import TimeNext from "./components/TimeNext";

import React, { useState, useEffect } from 'react';
import Leaderboard from "./components/Leaderboard";
import Loading from "./components/Loading";
import Deneme from "./components/Deneme";




function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [earned, setEarned] = useState(0);
  const [userName,setUserName]=useState(null);
  const [questionLength, setQuestionLength] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [sayCorrectAnswer, setSayCorrectAnswer] = useState(null);
  const [randomOption, setRandomOption] = useState(null);






  return (
    <div className="app">
        
        <Router>
    <Switch>
   
    <Route exact path="/">
         <Loading
         userName={userName}
         setUserName={setUserName}
         nickName={nickName}
         
         >


         </Loading>
      
       
       
      </Route> 

      <Route exact path="/start">
      <Start userName={userName}
            setUserName={setUserName}
            /> 
      </Route> 

      
      <Route exact path="/container">
      <Container
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setEarned={setEarned}
                    questionLength={questionLength}
                    setQuestionLength={setQuestionLength}
                    setNickName={setNickName}
                    nickName={nickName}
                    
                    earned={earned}
                    timeOut={timeOut}
                    sayCorrectAnswer={ sayCorrectAnswer}
                    setSayCorrectAnswer={setSayCorrectAnswer}
                    randomOption={randomOption} setRandomOption={setRandomOption}
                    

                  />
       
      </Route> 

      <Route exact path="/finish">
     <Finish/>
      </Route> 
      <Route exact path="/leaderboard">
      <Leaderboard/>
      </Route> 
      </Switch>

  
       
      </Router>

      
    </div>

  );

}


export default App;
