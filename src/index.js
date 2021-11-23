import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Randomize from  "./components/Randomize";



fetch("https://fastleen.com.asenax.com/api/test/get/1").then(
    response => response.json()
    
).then(responseJson => {
  
var questionArr = [];
var answerArr = []
var qRandom, aRandom;
var qLength, qRandom;

    if (responseJson.status === "success") {
     
      responseJson.data.questions.datas.map(function (e){
        
         Randomize(e.answers);

      })
       /* console.log(responseJson)
        qLength = responseJson.data.questions.datas.length;
        questionArr = [];

        while (questionArr.length < qLength) {
            qRandom = Math.floor(Math.random() * qLength) + 0;
            if (questionArr.indexOf(qRandom) === -1)
                questionArr.push(qRandom);
        }*/
        
        Randomize(responseJson.data.questions.datas)
        console.log(responseJson.data.questions)
        window.questionArr=questionArr;
        window.responseJson=responseJson;
        console.log(questionArr)



    }
})


ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

