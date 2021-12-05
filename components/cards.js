export default function Cards (props) {
    return (
        <div className = "" >
            <img className = "inline-block h-72 " src = {props.img} />
            <h3 className ="text-center">{props.title}</h3>
        </div>
    )
}