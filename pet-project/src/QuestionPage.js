import React from 'react';
import AnswerOptions from './AnswerOptions';
import QuestionComponent from './QuestionComponent';

const QuestionPage = (props) =>{
    return (
        <div>
            Question Number Here
        <div className = "question-page" style={questionPage.splitScreen}>
           
            <div style={questionPage.questionPane}>
            <QuestionComponent />
            </div>
            <div style={questionPage.answerPane}>
            <AnswerOptions />
            </div>  
        </div>
        </div>
    )
}
const questionPage={
    splitScreen:{
        display:'flex',
        flexDirection:'row'
    },
    questionPane:{
        width:'60%',
        height:'100vh',
        border: '3px solid rgba(0, 0, 0, 0.05)'
    },
    answerPane:{
        width:'40%'
    }
}
export default QuestionPage;