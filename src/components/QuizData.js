const quizdata=[
    {
         quizTitle:"Quizz nr 1.",
         questions:[
            {   
                openQuestion:true,
                questionText: 'Wpisz cos',
                answerOptions: [
                    { answerText: 'cos', isCorrect:"cos" },
                   
                ],
            },   
          {   
              openQuestion:false,     
              questionText: 'Stolica Polski?',
              answerOptions: [
                  { answerText: 'New York', isCorrect: false },
                  { answerText: 'London', isCorrect: false },
                  { answerText: 'Polska', isCorrect: true },
                  { answerText: 'Dublin', isCorrect: false },
              ],
          },
          { 
            openQuestion:false,  
            questionText: 'HTML jest językiem programowania',
            answerOptions: [
                { answerText: 'prawda', isCorrect: true },
                { answerText: 'fałsz', isCorrect: false },
              
            ],
        },
          {     
              openQuestion:false,
              questionText: 'Z czego jest robiony majonez',
              answerOptions: [
                  { answerText: 'pomidorów', isCorrect: false },
                  { answerText: 'jajek ', isCorrect: true },
                  { answerText: 'krzesła', isCorrect: false },
                  { answerText: 'chleba', isCorrect: false },
              ],
          },
          { 
            openQuestion:false,  
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