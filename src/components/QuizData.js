const quizdata = [
    {
        quizTitle: "Quiz React",
        questions: [
            {
                typOfQuestion: 'choice',
                questionText: 'Wszystko w reackcie jest',
                answerOptions: [
                    { answerText: 'modułem', isCorrect: false },
                    { answerText: 'komponentem', isCorrect: true },
                    { answerText: 'pakietem', isCorrect: false },
                    { answerText: 'klasą', isCorrect: false },
                ],
            },
            {
                typOfQuestion: 'open',
                questionText: 'Jaki port jest domyślny, na którym startuje webpack-dev-server',
                answerOptions: [
                    { answerText: '8080', isCorrect: "8080" },

                ],
            },
            {
                typOfQuestion: 'multiChoice',
                questionText: 'Kwadrat to?',
                answerOptions: [
                    { answerText: 'prostokąt', isCorrect: true },
                    { answerText: '4-kąt', isCorrect: true },
                    { answerText: '5-kąt', isCorrect: false },
                    { answerText: 'równoległobok', isCorrect: true },
                ],
            },
            {
                typOfQuestion: 'choice',
                questionText: 'co jest używane do przekazywania danych do zewnętrznego komponentu',
                answerOptions: [
                    { answerText: 'setState', isCorrect: false },
                    { answerText: 'render with arguments', isCorrect: false },
                    { answerText: 'props', isCorrect: true },
                    { answerText: 'PropTypes', isCorrect: false },

                ],
            },
            {
                typOfQuestion: 'choice',
                questionText: 'Co pomaga reactowi, aby dane były jednokierunkowe',
                answerOptions: [
                    { answerText: 'flux', isCorrect: true },
                    { answerText: 'JSX ', isCorrect: false },
                    { answerText: 'dom', isCorrect: false },
                    { answerText: 'props', isCorrect: false },
                ],
            },
            {
                typOfQuestion: 'choice',
                questionText: 'Które z poniższych jest prawidłową sekwencją przepływu danych koncepcji strumienia?',
                answerOptions: [
                    { answerText: 'Dispatcher->Action->Store->View', isCorrect: false },
                    { answerText: 'Action->Dispatcher->View->Store', isCorrect: false },
                    { answerText: 'Action->Dispatcher->Store->View', isCorrect: true },
                    { answerText: 'Action->Store->Dispatcher->View', isCorrect: false },
                ],
            },
        ]
    },


    {
        quizTitle: "Quiz HTML.",
        questions: [
            {
                typOfQuestion: 'choice',
                questionText: 'Wybierz poprawny element HTML dla największego nagłówka',
                answerOptions: [
                    { answerText: '<h6>', isCorrect: false },
                    { answerText: '<h1>', isCorrect: true },
                    { answerText: '<head>', isCorrect: false },
                    { answerText: '<heading>', isCorrect: false },
                ],
            },

            {
                typOfQuestion: 'gapWord',
                sentence: 'Aby utworzyć listę',
                restSentence: 'w HTML używamy znacznika <ul>',
                answerOptions: [
                    { answerText: 'punktowaną', isCorrect: "punktowaną" },

                ],
            },

            {
                typOfQuestion: 'multiChoice',
                questionText: 'Które rodzaje inputów istnieją',
                answerOptions: [
                    { answerText: 'text', isCorrect: true },
                    { answerText: 'radio', isCorrect: true },
                    { answerText: 'video', isCorrect: false },
                    { answerText: 'image', isCorrect: true },
                    { answerText: 'password', isCorrect: true },
                ],
            },


            {
                typOfQuestion: 'open',
                questionText: 'Jaki jest prawidłowy element HTML do wstawiania końca wiersza?',
                answerOptions: [
                    { answerText: '<br>', isCorrect: "<br>" },
                ],
            },
            {
                typOfQuestion: 'choice',
                questionText: 'Kto tworzy standardy internetowe?',
                answerOptions: [
                    { answerText: 'Internet Explorer', isCorrect: false },
                    { answerText: 'The World Wide Web Consortium', isCorrect: true },
                    { answerText: 'Microsoft', isCorrect: false },
                    { answerText: 'Google', isCorrect: false },
                ],
            },
            {
                typOfQuestion: 'open',
                questionText: 'Podaj rozwinięcie skrótu HTML',
                answerOptions: [
                    { answerText: 'HyperText Markup Language', isCorrect: "HyperText Markup Language" },
                ],
            },
            {
                typOfQuestion: 'choice',
                questionText: 'Elementy blokowe są zwykle wyświetlane bez rozpoczynania nowego wiersza.',
                answerOptions: [
                    { answerText: 'prawda', isCorrect: false },
                    { answerText: 'fałsz', isCorrect: true },
                ],
            },

        ]
    },
    {
        quizTitle: "Quiz CSS",
        questions: [
            {
                typOfQuestion: 'choice',
                questionText: 'Co oznacza skrót CSS?',
                answerOptions: [
                    { answerText: 'Creative Style Sheets', isCorrect: false },
                    { answerText: 'Cascading Style Sheets  ', isCorrect: true },
                    { answerText: 'Computer Style Sheets', isCorrect: false },
                    { answerText: 'Colorful Style Sheets', isCorrect: false },
                ],
            },

            {
                typOfQuestion: 'choice',
                questionText: 'Jaki jest poprawny kod HTML do odwoływania się do zewnętrznego arkusza stylów?',
                answerOptions: [
                    { answerText: '<style src="mystyle.css">', isCorrect: false },
                    { answerText: '<link rel="stylesheet" type="text/css" href="mystyle.css">  ', isCorrect: true },
                    { answerText: '<stylesheet>mystyle.css</stylesheet>', isCorrect: false },
                ],
            },

            {
                typOfQuestion: 'multiChoice',
                questionText: 'Jaka jest poprawna składnia CSS?',
                answerOptions: [
                    { answerText: 'body {color: black;}', isCorrect: true },
                    { answerText: '.nameClass{width:100px;}', isCorrect: true },
                    { answerText: '{bodycolor=black;}', isCorrect: false },
                    { answerText: '.nameClass{width:100%;}', isCorrect: true },

                ],
            },


            {
                typOfQuestion: 'open',
                questionText: 'Która właściwość jest używana do zmiany koloru tła?',
                answerOptions: [
                    { answerText: 'background-color', isCorrect: "background-color" },
                ],
            },
            {
                typOfQuestion: 'choice',
                questionText: 'Która właściwość CSS jest używana do zmiany koloru tekstu elementu?',
                answerOptions: [
                    { answerText: 'text-color', isCorrect: false },
                    { answerText: 'color', isCorrect: true },
                    { answerText: 'fgcolor', isCorrect: true },
                ],
            },

        ]
    },

]


export default quizdata