import "./app.css";
import Container from "./components/Container";
import Start from "./components/Start";
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
  const [username,setUsername]=useState(null);
  const [questionLength, setQuestionLength] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [sayCorrectAnswer, setSayCorrectAnswer] = useState(null);
  const [randomOption, setRandomOption] = useState(null);


/* <Start 
username={username}
setUsername={setUsername}

/> 
*/



  return (
    <div className="app">
      
      {!username && !nickName ? (
          <Loading></Loading> ) : (
        <>
          {username && nickName ? (
        <Loading />      ) : (
        <>
          
          {questionNumber === questionLength ||timeOut===0 && sayCorrectAnswer ?  (<h1>Puan:{earned}
            </h1>
          ) : (
            <>

              <div className="notebook-page">

                <div className="topContent">
                  <div class="timer">
                    <div className="time">  {sayCorrectAnswer===false?<TimePrev setTimeOut={setTimeOut} questionNumber={questionNumber} sayCorrectAnswer={sayCorrectAnswer }/>:<TimeNext setTimeOut={setTimeOut} questionNumber={questionNumber} sayCorrectAnswer={sayCorrectAnswer }/>}</div>
                  
                  
                  </div>
                </div>

                
                <div className="bottomContent">
                
          
                
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
                
                  
                
                </div>
              </div>



            </>
          )}
        </>
      )}
        </>
      )}

      
    </div>

  );

}


export default App;
