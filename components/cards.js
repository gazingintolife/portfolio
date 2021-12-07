import 'tailwindcss/tailwind.css'
export default function Cards (props) {
    return (
        <div className = 
        "p-4 hover:shadow-2xl rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out " >
            <img className = "inline-block h-72" src = {props.img} />
            <h3 className ="font-sans text-2xl text-center ">{props.title}</h3>
        </div>
    )
}