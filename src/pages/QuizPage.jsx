import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'
import quizData from '../data/quiz'
import ROUTES from '../const'
import styles from './Quizpage.module.css'

export default function QuizPage() {
const [quizIndex, setQuizIndex] = useState(0);
const [answerLogs, setAnswerLogs] = useState([]);
const navigation = useNavigate();
const Max_Quiz_Length = quizData.length;

const handleClick = (clickedIndex) => {
    if(clickedIndex === quizData[quizIndex].answerIndex) {
        setAnswerLogs(prev => [...prev, true]);
    } else {
        setAnswerLogs(prev => [...prev, false]);
    }
    setQuizIndex(prev => prev + 1);
}

useEffect(() => {
    if(answerLogs.length === Max_Quiz_Length) {
        const correctNum = answerLogs.filter(answer =>answer === true).length;
        navigation(ROUTES.RESULT, {
            state: {
                maxQuizLen: Max_Quiz_Length,
                correctNum: correctNum, 
            }
        });
    }
}, [answerLogs, Max_Quiz_Length, navigation]);

return(
<>
    {quizData[quizIndex] && <Display> {`Q${quizIndex + 1}. ${quizData[quizIndex].question}`} </Display>}
    <br />
    {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => 
    <Button key={index} onClick={()=> handleClick(index)}> {option} </Button>
    )}
</>
)
}
