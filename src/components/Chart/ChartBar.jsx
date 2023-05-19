const ChartBar = props => {
    let barFillHeight = '10%';
    if(props.max >0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '10%'
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chat-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;