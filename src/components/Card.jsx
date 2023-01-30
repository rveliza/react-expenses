import './Card.css';

const Card = (props) => {
    // console.log(props.className);
    const classes = 'card ' + props.className;
    // console.log(classes);
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;