import Header from "../components/header";
import Footer from "../components/footer";
import ExperienceContent from "../components/experienceContent";
import 'tailwindcss/tailwind.css'

export default function experiences () {
    return (
        <div className="h-100">
            <Header/>

                <div className = "flex flex-col">
                    <div className = "block">
                        <h2 className = "flex flex-row text-5xl m-8 py-8 justify-center text-center leading-relaxed">
                            A mind streched by experience <br/> can never go back to it’s old dimensions.
                        </h2>
                    </div>
                    <ExperienceContent/>
                </div>

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
          
          
        </div>
    );
}