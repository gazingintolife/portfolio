import Header from "../components/header";
import Footer from "../components/footer";
import 'tailwindcss/tailwind.css'
import InterestsContent from "../components/interestsContent";

export default function interests () {
    return (
        <div className="h-100 bg-black text-white">
            <Header/>

                <div className = "flex flex-col">
                    <div className = "block">
                        <h2 className = "flex flex-row text-5xl m-8 py-8 justify-center text-center leading-relaxed">
                            We are what we repeatedly do.
                        </h2>
                    </div>
                    <InterestsContent/>
                </div>

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
          
          
        </div>
    );
}