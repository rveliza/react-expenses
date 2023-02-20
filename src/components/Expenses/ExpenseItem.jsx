import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react'; // allow us to define values as state

import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    // let title = props.title;
    const [title, setTitle] = useState(props.title); // returns an array, first value is the variable itself, second is the updating function.

    const clickHandler = () => {
        setTitle('Updated!')
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;