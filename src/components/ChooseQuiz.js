import React, { useEffect, useState } from 'react';

import QuizApp from "./QuizApp"
import quizdata from './QuizData'
import '../Style.scss'
export default function ChooseQuiz() {


    const [buttonChat, SetbuttonChat] = useState(false);
    const [buttonChat2, SetbuttonChat2] = useState(false);
    const [buttonChat3, SetbuttonChat3] = useState(false);



    return (
        <>
            <div id="quizzes">

                <div class="quiz1">
                    <h2>{quizdata[0].quizTitle}</h2>
                    {buttonChat ? <QuizApp id="0" /> : null}
                    <hr></hr>
                    <button className="btn btn-secondary" onClick={() => SetbuttonChat(!buttonChat)}>
                        {buttonChat ? "Zamknij quiz!" : "Start quiz!"}
                    </button>
                </div>

                <div class="quiz2">
                    <h2>{quizdata[1].quizTitle}</h2>
                    {buttonChat2 ? <QuizApp id="1" /> : null}
                    <hr></hr>
                    <button className="btn btn-secondary" onClick={() => SetbuttonChat2(!buttonChat2)}>
                        {buttonChat2 ? "Zamknij quiz!" : "Start quiz!"}</button>

                </div>
                <div class="quiz3">
                    <h2>{quizdata[2].quizTitle}</h2>
                    {buttonChat3 ? <QuizApp id="2" /> : null}
                    <hr></hr>
                    <button className="btn btn-secondary" onClick={() => SetbuttonChat3(!buttonChat3)}>
                        {buttonChat3 ? "Zamknij quiz!" : "Start quiz!"}</button>

                </div>
            </div>

        </>
    )
}