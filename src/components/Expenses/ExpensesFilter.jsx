import './ExpensesFilter.css';

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        // console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="">Filter by year</label>
                <select value={props.selected} name="" id="" onChange={dropdownChangeHandler}>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;