import './ExpenseForm.css';

const ExpenseForm = () => {
    // const titleChangeHandler = () => {
    //     console.log('Title changed!');
    // }
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }
    return(
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" name="" id="" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" name="" id="" min="2023-01-01" max="2030-01-01"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;