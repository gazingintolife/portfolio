import Header from "../components/header";
import Footer from "../components/footer";
import ExperienceContent from "../components/experienceContent";
import InterestsContent from "../components/interestsContent";
import ProjectsContent from "../components/projectsContent";

export default function home () {
    return (
        <div>
          <Header/>
         <div className = "flex flex-col justify-center">
            <div className = "grid md:grid-cols-9 place-items-center">
                <div className = "flex flex-col md:col-start-1 col-span-6 place-items-center text-left mx-16 p-4">
                    <h3 className="text-4xl my-4">I am a <span className="font-bold text-blue-600">Specialized</span> (Full Stack Web Development) <span className="font-bold text-blue-600">Generalist</span> (Problem Solver, MVP Development, Product Management and all things startup )</h3>
                    <p className="text-left">
                        I have bootstrapped <span className="font-bold text-blue-600">two tech startups</span> to existence, operated an <span className="font-bold text-blue-600">Independent Business</span>, 
                        designed <span className="font-bold text-blue-600">ML based solution</span> and <span className="font-bold text-blue-600">built web apps</span> without any prior experience/training in any of the said fields.
                    </p>
                </div>
                <img className="h-full w-auto md:col-start-7 col-span-2 mx-16 p-4" src="me.png"/>
            </div>

            <div className = "my-8 pb-8">
                <ExperienceContent/>
            </div>

            <div className = "my-8 pb-8">
                <InterestsContent/>
            </div>

            <div className = "my-8 pb-8">
               <ProjectsContent/>
            </div>
            
          </div>

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
        </div>
    );
}