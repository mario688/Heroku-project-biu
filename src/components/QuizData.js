const quizdata=[
    {
         quizTitle:"Quizz nr 1.",
         questions:[
            {   
                typOfQuestion:'open',
                questionText: 'Wpisz cos',
                answerOptions: [
                    { answerText: 'cos', isCorrect:"cos" },
                   
                ],
            }, 
           
          {   
            typOfQuestion:'choice',     
              questionText: 'Stolica Polski?',
              answerOptions: [
                  { answerText: 'New York', isCorrect: false },
                  { answerText: 'London', isCorrect: false },
                  { answerText: 'Polska', isCorrect: true },
                  { answerText: 'Dublin', isCorrect: false },
              ],
          },
          {   
            typOfQuestion:'multiChoice',   
            questionText: 'Kwadrat to?',
            answerOptions: [
                { answerText: 'prostokąt', isCorrect: true },
                { answerText: '4-kąt', isCorrect: true },
                { answerText: '5-kąt', isCorrect: false },
                { answerText: 'równoległobok', isCorrect: true },
            ],
        },  
          { 
            typOfQuestion:'choice',   
            questionText: 'HTML jest językiem programowania',
            answerOptions: [
                { answerText: 'prawda', isCorrect: true },
                { answerText: 'fałsz', isCorrect: false },
              
            ],
        },
          {     
            typOfQuestion:'choice',  
              questionText: 'Z czego jest robiony majonez',
              answerOptions: [
                  { answerText: 'pomidorów', isCorrect: false },
                  { answerText: 'jajek ', isCorrect: true },
                  { answerText: 'krzesła', isCorrect: false },
                  { answerText: 'chleba', isCorrect: false },
              ],
          },
          { 
            typOfQuestion:'choice',    
            questionText: 'Jak nazywa się gwiazda w naszym układzie?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Słońce', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
         ]
     },


     {
      quizTitle:"Quizz nr 2.",
      questions:[
       {     openQuestion:false,
           questionText: 'What is the capital of France?',
           answerOptions: [
               { answerText: 'New York', isCorrect: false },
               { answerText: 'London', isCorrect: false },
               { answerText: 'Paris', isCorrect: true },
               { answerText: 'Dublin', isCorrect: false },
           ],
       },
       {     openQuestion:false,
           questionText: 'Who is CEO of Tesla?',
           answerOptions: [
               { answerText: 'Jeff Bezos', isCorrect: false },
               { answerText: 'Elon Musk', isCorrect: true },
               { answerText: 'Bill Gates', isCorrect: false },
               { answerText: 'Tony Stark', isCorrect: false },
           ],
       },
      ]
  },

]

 
 export default quizdata