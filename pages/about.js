import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";

export default function home () {
    return (
        <div>
          <Header/>

          <div className = "flex flex-col justify-center">
            <div className = "grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div className = "col">
                    <h2>Text Here</h2>
                </div>

                <div className = "col">
                    <img />
                </div>
            </div>

            <div className = "my-8 pb-8 border">
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

            <div className = "my-8 pb-8">
                <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center">
                    <h4>
                        Projects 
                    </h4>
                </div>
                <div className = "flex flex-row mx-8 space-x-6 justify-evenly">
                    <div className = "">
                        <a href = "https://avinashrathee.notion.site/Ananta-AI-Inc-afe283f2d2da41b7b89f546d4fcf8751"> <Cards title = "The Smart Buyer" img = "books.png"/> </a>
                    </div>
                    <div className = "">
                        <a href = ""> <Cards title = "CRUD App" img="pod.png"/> </a>
                    </div>
                    <div className = "">
                        <a href = ""> <Cards title = "To-Do App" img = "sm.png"/> </a>
                    </div>
                </div>
            </div>

            <div className = "my-8 pb-8">
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
            
          </div>

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
        </div>
    );
}