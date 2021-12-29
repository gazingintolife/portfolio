import Header from "../components/header";
import Footer from "../components/footer";
import ExperienceContent from "../components/experienceContent";
import InterestsContent from "../components/interestsContent";
import ProjectsContent from "../components/projectsContent";

export default function home () {
    return (
        <div className="text-white bg-black">
          <Header/>
         <div className = "flex flex-col justify-center">
            <div className = " flex flex-col-reverse md:grid md:grid-cols-9 place-items-center">
                <div className = "flex flex-col md:col-start-1 col-span-6 place-items-center text-left mx-16 p-4">
                    <h3 className="text-4xl my-4">I am a <span className="font-bold text-blue-600">Specialized</span> (Full Stack Web Development) <span className="font-bold text-blue-600">Generalist</span> (Problem Solver, MVP Development, Product Management and all things startup )</h3>
                    <p className="text-left text-xl my-8">
                        I have bootstrapped <a href="/experiences" target="_blank"><span className="font-bold text-blue-600 underline decoration-inherit">two tech startups</span></a> to existence, operated an <a  href="https://avinashrathee.notion.site/Independent-business-manager-fb0d34a059664cf9ab113d3458124be7" target="_blank" ><span className="font-bold text-blue-600 underline decoration-inherit">Independent Business</span></a>, 
                        designed <span className="font-bold text-blue-600">ML based solution</span> and <a href="/projects" target="_blank"><span className="font-bold text-blue-600 underline decoration-inherit">built web apps</span></a> without any prior experience/training in any of the said fields.
                    </p>
                </div>
                <img className="h-full w-full md:col-start-7 col-span-2 mx-16 p-4" src="me.png"/>
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