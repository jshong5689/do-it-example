function TodaysPlanApp(props){
    const{onButtonCLick, hasPlan} = props;
    return(
        <div className="body">
            {hasPlan ? <TodaysPlan/> : null}
            <button onClick={onButtonClick}>
                계획없음
            </button>
        </div>
    )
}