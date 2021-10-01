const TabList = ({viewCompleted, setViewCompleted}) => {

    const displayCompleted = (status) => {
        if(status) {
            setViewCompleted(true);
        } else {
            setViewCompleted(false);
        }
    }

    return(
        <div className="nav nav-tabs">
            <span className={viewCompleted ? "nav-link active" : "nav-link"}
                onClick={() => displayCompleted(true)}>
                Complete
            </span>
            <span className={viewCompleted ? "nav-link" : "nav-link active" }
                onClick={() => displayCompleted(false)}>
                Incomplete
            </span>
        </div>
    );

}

export default TabList;