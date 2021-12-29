import Header from "../components/header";
import Footer from "../components/footer";
import 'tailwindcss/tailwind.css'
import ProjectsContent from "../components/projectsContent";

export default function projects () {
    return (
        <div className="h-100">
            <Header/>

                <div className = "flex flex-col">
                    <div className = "block">
                        <h2 className = "flex flex-row text-5xl m-8 py-8 justify-center text-center leading-relaxed">
                            Prototype {">"} Portfolio {">"} Resume {">"} Degree
                        </h2>
                    </div>
                    <ProjectsContent/>
                </div>

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
          
          
        </div>
    );
}