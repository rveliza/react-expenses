import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = props => {
    // useState returns an array.  First element is the variable, second is a function.

    const [title, setTitle] = useState(props.title);
    console.log("ExpenseItem evaluated by React");

    const clickHandler = () => {
        setTitle('updated!')
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;