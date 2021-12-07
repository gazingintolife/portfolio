import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
import 'tailwindcss/tailwind.css'

export default function experiences () {
    return (
        <div className="h-100">
            <Header/>

                <div className = "flex flex-col">
                    <div className = "block">
                        <h2 className = "flex flex-row text-5xl my-8 py-8 justify-center text-center leading-relaxed">
                            A mind streched by experience <br/> can never go back to it’s old dimensions.
                        </h2>
                    </div>
                    <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center">
                        <h4>
                            Experiences 
                        </h4>
                    </div>

                    <div className = "flex flex-row mx-8 space-x-6 justify-evenly">
                        <div className = "">
                            <a href = "https://avinashrathee.notion.site/Ananta-AI-Inc-afe283f2d2da41b7b89f546d4fcf8751"> <Cards title = "Founder" img = "ananta.png"/> </a>
                        </div>
                        <div className = "">
                            <a href = ""> <Cards title = "Founder" img="tsb.png"/> </a>
                        </div>
                        <div className = "">
                            <a href = ""> <Cards title = "Manager" img = "sm.png"/> </a>
                        </div>
                    </div>
                </div>

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
          
          
        </div>
    );
}