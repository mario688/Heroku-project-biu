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
		setOpenScore(0);
		if(quizdata[props.id].questions[currentQuestion].typOfQuestion=='open'){
			if(isCorrect==document.getElementById('openQuestion').value){
				setScore(score + 1);
			
			}
		
		}else if(quizdata[props.id].questions[currentQuestion].typOfQuestion=='multiChoice'){
			if($('.checkMulti1:checked').val()=='true'){
				setOpenScore(1)
			}else if($('.checkMulti1:checked').val()=='false'){
				setOpenScore(0)
			}else if($('.checkMulti1').val()=='false'){
				setOpenScore(1)
			}else if($('.checkMulti1').val()=='true'){
				setOpenScore(0)
			}
			if($('.checkMulti2:checked').val()=='true'){
				setOpenScore(1)
			}else if($('.checkMulti2:checked').val()=='false'){
				setOpenScore(0)
			}else if($('.checkMulti2').val()=='false'){
				setOpenScore(1)
			}else if($('.checkMulti2').val()=='true'){
				setOpenScore(0)
			}
			if($('.checkMulti3:checked').val()=='true'){
				setOpenScore(1)
			}else if($('.checkMulti3:checked').val()=='false'){
				setOpenScore(0)
			}else if($('.checkMulti3').val()=='false'){
				setOpenScore(1)
			}else if($('.checkMulti3').val()=='true'){
				setOpenScore(0)
			}
			if($('.checkMulti4:checked').val()=='true'){
				setOpenScore(1)
			}else if($('.checkMulti4:checked').val()=='false'){
				setOpenScore(0)
			}else if($('.checkMulti4').val()=='false'){
				setOpenScore(1)
			}else if($('.checkMulti4').val()=='true'){
				setOpenScore(0)
			}
			
				
			
				
			
		}else if(quizdata[props.id].questions[currentQuestion].typOfQuestion=='choice'){
			if (isCorrect) {
				setScore(score + 1);
				
			}
				

		}

		setScore(score+OpenScore)

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
						 <span>Question {currentQuestion + 1}</span>/{quizdata[props.id].questions.length}
					 </div>
					 		<h1>OpenScore:{OpenScore}</h1>
					 		<h1>Score:{score}</h1>
					 <div className='question-text'>{quizdata[props.id].questions[currentQuestion].questionText}</div>
				 </div>
				 <div className='answer-section'>
				 {(() => {
     					   if (quizdata[props.id].questions[currentQuestion].typOfQuestion=='open') {
     							return (
									<>
									<input id="openQuestion" type="text"></input><br></br>
									
									<button className="mr-2 mb-2 btn btn-secondary" onClick={() => handleAnswerOptionClick(quizdata[props.id].questions[currentQuestion].answerOptions[0].isCorrect)}>Potwierdź</button>
									</>
          						)
       						 } else if (quizdata[props.id].questions[currentQuestion].typOfQuestion=='choice') {
         						 return (
            						<div> {quizdata[props.id].questions[currentQuestion].answerOptions.map((answerOption) => (
										<>
										<button className="mr-2 mb-2 btn btn-secondary" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
										
										</>
								   ))
									}</div>
         						 )
							 } else if (quizdata[props.id].questions[currentQuestion].typOfQuestion=='multiChoice') {
								return (<>

								<input className="checkMulti1" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[0].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[0].answerText}<br></br>
								<input className="checkMulti2" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[1].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[1].answerText}<br></br>
								<input className="checkMulti3" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[2].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[2].answerText}<br></br>	
								<input className="checkMulti4" type="checkbox" value={quizdata[props.id].questions[currentQuestion].answerOptions[3].isCorrect} ></input>{quizdata[props.id].questions[currentQuestion].answerOptions[3].answerText}<br></br>	
											   
											   
											
											

								<button className="mr-2 mb-2 btn btn-secondary" onClick={() => handleAnswerOptionClick()}>Potwierdź</button>		
									

								
								
								
								 
								  </>
								)
						   }else {
         						 return (
            						<div>catch all</div>
          						)
       						 }
      			})()}





				 </div>
			 </>
		 )}
	 </div>
	);
}