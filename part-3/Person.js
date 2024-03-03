const Person = (props) => {
    let message;
    let name;
    if(props.name.length > 8) {
        console.log('long', props.name.length)
        name = props.name.slice(0,6)
    } else {
        name = props.name;
    }
    if(props.age > 18){
        message = "please go vote!"
    } else {
        message = "you must be 18."
    }
    return (
        <div class="alert alert-primary" role="alert">
            <h3>{name} {message} </h3>
            <ul> Hobbies {props.hobbies.map(h => <li> {h} </li>)} </ul>
        </div>
    )
}