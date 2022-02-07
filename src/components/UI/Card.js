
function Card(props){
    const classes = "shadow-md "+props.className;
    return (
        <div className={classes}>
            { props.children }
        </div>
    );
}

export default Card;