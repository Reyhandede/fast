
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import correctTrue from '../audio/true.mp3';
import correctFalse from '../audio/false.mp3';

var questionArr = [];
var answerArr = []
var qRandom, aRandom;
var qLength, qRandom;
var i=0;
let c=0;
        let w=0;
        let userDb={
  
        }
        var liste = [];


export default function Container({randomOption, setRandomOption,setSayCorrectAnswer, username,sayCorrectAnswer,setTimeOut, questionNumber, setQuestionNumber, earned, setEarned, questionLength, setQuestionLength, setNickName, nickName }) {

    const [image, setImage] = useState(null);
    const [questionText, setQuestionText] = useState(null);
    const [answers, setAnwers] = useState();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [canChangeQuestion, setCanChangeQuestion] = useState(null);
    const [randomQuestion, setRandomQuestion] = useState(null);
    const [showLeaderbord, setShowLeaderbord] = useState(null);
    const [cTrue] = useSound(correctTrue);
    const [cFalse] = useSound(correctFalse);
    const [prev, setPrev] = useState(true);
    const [leaderbordTime, setLiderboardTime] = useState(null);
    const [leaderbordCorrect, setLiderboardCorrect] = useState(null);
    const [leaderbordWrong, setLiderboardWrong] = useState(null);
    let answerArry=[];
  


    console.log(setQuestionLength);






    useEffect(() => {
     questionNumber===0? document.querySelector(".previous").disabled=true:document.querySelector(".previous").disabled=false;
        
        Promise.resolve(window.responseJson).then(responseJson => {
            console.log("responseJson",responseJson)
            if (responseJson.status === "success") {
                

                setQuestionLength(responseJson.data.questions.datas.length);
                setNickName(responseJson.data.options.requiredNickName);
                setSayCorrectAnswer(responseJson.data.options.sayCorrectAnswer);
                setCanChangeQuestion(responseJson.data.options.canChangeQuestio);
                setRandomOption(responseJson.data.options.randomOption);
                setRandomQuestion(responseJson.data.options.randomQuestion);
                setShowLeaderbord(responseJson.data.options.showLeaderbord);


              
                    setImage(responseJson.data.questions.datas[questionNumber].question.image)
                    setQuestionText(responseJson.data.questions.datas[questionNumber].question.text)
                    setAnwers(responseJson.data.questions.datas[questionNumber])
                

                   let soruId= responseJson.data.questions.datas[questionNumber].question.id
                   userDb.soruId=soruId;
                   
                   

                 




            }
            else {
                console.error("Access not found!");

            }
 


        })
    }, [questionNumber]);


    useEffect(() => {


        if (canChangeQuestion) {
            document.querySelector(".previous").style.visibility = "hidden";
            document.querySelector(".next").style.visibility = "hidden";
        }

        




    }, [])
  
  


    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };
    const handleClick = (a) => {
         
       
         userDb.cevap=a.id
         console.log(userDb)
         liste[questionNumber]=userDb;
         console.log(liste)
       
         
         
        
        a.correct? c++:w++;
        answerArry[i]=a;
        i++;
        setLiderboardCorrect(c);
        setLiderboardWrong(w);
        setPrev(false)
        setSelectedAnswer(a);
        setClassName("answer active");
        if (sayCorrectAnswer) {
            delay(3000, () => setClassName(a.correct ? "answer correct"  : "answer wrong"))

        }




        delay(5000, () => {
            if (a.correct) {
                if (sayCorrectAnswer) {
                    cTrue();
                }

                delay(1000, () => {
                    if (!canChangeQuestion) {
                        setQuestionNumber((prev) => prev + 1);


                    }

                    setEarned((prev) => prev + 5);
                    setSelectedAnswer(null);
                })


            }
            else {
                if (sayCorrectAnswer) {
                    cFalse();
                }
                delay(1000, () => {
                    setTimeOut(true);
                })
            }
        })
    }

    const prevHandleClick = () => {

        setQuestionNumber((prev) => prev - 1);

    }
    const nextHandleClick = () => {
        setQuestionNumber((prev) => prev + 1);
       
              
             

    }
  


    return (
        <div className="main">

            <div className="question"><div className="image" style={{ backgroundImage: `url(${image})` }}></div> <div className="questionText">{questionText}</div> </div>
            <div className="answers" >
                {
                             answers?.answers.map((a) => (

                                
                            <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text} </div>
                        ))



                }

            </div>


            <div className="questionNumber" >
                <button className="previous" onClick={() => prevHandleClick()}  >&laquo; </button>
                {questionNumber + 1} 
                <button className="next" onClick={() => nextHandleClick()}> &raquo;</button>
            </div>

        </div>

    )
}


