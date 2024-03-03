const Tweet = (props) => {
    return (
        <div  class="alert alert-info" role="alert">
            <p><b> {props.username} retweeted: </b>
            <i> {props.originalAuthor}'s Tweet </i> </p>
            <p> Date: {props.date} </p>
            <p> Tweet: <u> {props.msg} </u> </p>
        </div>
    )
}