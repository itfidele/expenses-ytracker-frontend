
const Grid=(props)=>{

    return <div>
        <div className="grid grid-cols-7 justify-items-center">
            { props.children }
        </div>
    </div>
}

export default Grid;