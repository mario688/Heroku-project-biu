import { render } from '@testing-library/react';
import scoreboard from './ScoreBoardData'
import React, {useEffect, useState } from 'react';
import quizdata from './QuizData'
import ScoreBoardTable from './ScoreBoardTable'
import $ from 'jquery'
export default function QuizApp(props)  {
	const [user,setUser]=useState("");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [OpenScore,setOpenScore]=useState(0);
	
	
	const handleAnswerOptionClick = (isCorrect) => {
		
		if(quizdata[props.id].questions[currentQuestion].typOfQuestion=='open'){
			if(isCorrect==document.getElementById('openQuestion').value){
				setScore(score + 1);
			
			}
		
		}else if(quizdata[props.id].questions[currentQuestion].typOfQuestion=='gapWord'){
			if(isCorrect==document.getElementById('gap').value){
				setScore(score + 1);
			
			}
		
		}else if(quizdata[props.id].questions[currentQuestion].typOfQuestion=='multiChoice'){

			var trueCheckbox = []; 
			var checkboxChecked = []; 
			var checkboxes = document.getElementsByName("input");
		
    			for(var i = 0; i < checkboxes.length; i++) {
					if((checkboxes[i].value === "true")){
						trueCheckbox.push(checkboxes[i])
					}	
      			  if(checkboxes[i].checked && (checkboxes[i].value === "true")) {
					checkboxChecked.push(checkboxes[i])
				}else if(checkboxes[i].checked && (checkboxes[i].value === "false"))
				checkboxChecked.pop()
				}
				

   				 if(trueCheckbox.length==checkboxChecked.length) {
					setScore(score + 1)
   				} 
  				

			
		
			

		}else if(quizdata[props.id].questions[currentQuestion].typOfQuestion=='choice'){
			if (isCorrect) {
			
				setScore(score + 1);
			
			}
				

		}
		
				
		

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizdata[props.id].questions.length) {
			setCurrentQuestion(nextQuestion);
			
			
		} else {
		
				
			if(isCorrect){
				
				scoreboard[props.id].users.push({nick:user,score:score+1})
			}else if(!isCorrect){
				scoreboard[props.id].users.push({nick:user,score:score})
			
			}
				
			setShowScore(true);
			
			
		}
	};

	
	
		useEffect(()=>
		{
			if(user.length<=0){
				var person = prompt("Please enter your name", "Harry Potter");
				setUser(person);
				
			}
			
		});
		
		
		
	
		 
	return (
		
		<div className='app'>
			
		 {showScore ? (
			 <div className='score-section'>
				 
				 Twój wynik {user} to : {score} na {quizdata[props.id].questions.length}<br></br>
				 
					
				 <ScoreBoardTable data={scoreboard[props.id].users} />
				 

				
			 </div>
		 ) : (
			 <>
				 <div className='question-section'>
					 <div className='question-count'>
						 <span>Question {currentQuestion + 1}</span>/{quizdata[props.id].questions.length}<br></br>
						
					 </div>
					 	
					 <div className='question-text'>{quizdata[props.id].questions[currentQuestion].questionText}</div>
				 </div>
				 <div className='answer-section'>
				 {(() => {
     					   if (quizdata[props.id].questions[currentQuestion].typOfQuestion=='open') {
     							return (
									<>
									<input id="openQuestion" className="mr-2 mb-2 btn btn-secondary" type="text"></input><br></br>
									
									<button className="mr-2 mb-2 btn btn-secondary" onClick={() => handleAnswerOptionClick(quizdata[props.id].questions[currentQuestion].answerOptions[0].isCorrect)}>Potwierdź</button>
									</>
          						)
       						 } else if (quizdata[props.id].questions[currentQuestion].typOfQuestion=='choice') {
         						 return (
            						<div> {quizdata[props.id].questions[currentQuestion].answerOptions.map((answerOption) => (
										<>
										<button className="mr-2 mb-2 w-75  btn btn-secondary" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button><br></br>
										
										</>
								   ))
									}</div>
         						 )
							 } else if (quizdata[props.id].questions[currentQuestion].typOfQuestion=='multiChoice') {
								return (<>
								<div id="checkboxlist">
								<input name="input"className="mr-2 mb-2 btn btn-secondary" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[0].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[0].answerText}<br></br>
								<input name="input" className="mr-2 mb-2 btn btn-secondary" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[1].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[1].answerText}<br></br>
								<input name="input" className="mr-2 mb-2 btn btn-secondary" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[2].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[2].answerText}<br></br>	
								<input name="input" className="mr-2 mb-2 btn btn-secondary" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[3].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[3].answerText}<br></br>	
								</div>			   
								
							
											
											<button className="mr-2 mb-2 btn btn-secondary" onClick={() => handleAnswerOptionClick()}>Potwierdź</button>

								 
								  </>
								)
						   }else if (quizdata[props.id].questions[currentQuestion].typOfQuestion=='gapWord') {
         						 return (<>
								
									<div className='question-text'>{quizdata[props.id].questions[currentQuestion].sentence}<input id="gap" placeHolder="........................."type="text"></input>{quizdata[props.id].questions[currentQuestion].restSentence}</div>
									<button className="mr-2 mb-2 btn btn-secondary" onClick={() => handleAnswerOptionClick(quizdata[props.id].questions[currentQuestion].answerOptions[0].isCorrect)}>Potwierdź</button>
									</>
          						)
       						 }
      			})()}





				 </div>
			 </>
		 )}
	 </div>
	);
}