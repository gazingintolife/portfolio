import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
import 'tailwindcss/tailwind.css'

export default function interests () {
    return (
        <div className="h-100">
            <Header/>

                <div className = "flex flex-col">
                    <div className = "block">
                        <h2 className = "flex flex-row text-5xl my-8 py-8 justify-center text-center leading-relaxed">
                            We are what we repeatedly do.
                        </h2>
                    </div>
                    <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center">
                        <h4>
                            Interests 
                        </h4>
                    </div>

                    <div className = "flex flex-row mx-8 space-x-6 justify-evenly">
                        <div className = "">
                            <a href = "https://avinashrathee.notion.site/Ananta-AI-Inc-afe283f2d2da41b7b89f546d4fcf8751"> <Cards title = "Books" img = "books.png"/> </a>
                        </div>
                        <div className = "">
                            <a href = ""> <Cards title = "Podcasts" img="pod.png"/> </a>
                        </div>
                        <div className = "">
                            <a href = ""> <Cards title = "Reading Material" img = "sm.png"/> </a>
                        </div>
                    </div>
                </div>

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
          
          
        </div>
    );
}