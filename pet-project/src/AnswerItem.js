import React from "react";
import { Card } from "react-bootstrap";

const AnswerItem = (props) =>{
    return (
        <Card >
            <Card.Body style={style.col}>
                Answer Options here
            </Card.Body>
        </Card>
    )
}
const style = {
    col:{
        width:'100%',
        border: '3px solid rgba(0, 0, 0, 0.05)'
    }
}
export default AnswerItem;