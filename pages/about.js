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
                <div className = "flex flex-col flex-1 mx-6 items-center md:flex-row md:justify-center mb-8 py-8 text-3xl text-center">
                    <h4>
                        Experiences 
                    </h4>
                </div>
                <div className = "flex flex-col flex-1 md:mx-6 items-center md:flex-row md:space-x-6 md:justify-evenly">
                    <div className = "py-6">
                        <a href = "https://avinashrathee.notion.site/Ananta-AI-Inc-afe283f2d2da41b7b89f546d4fcf8751" target="_blank"> <Cards title = "Founder" img = "ananta.png"/> </a>
                    </div>
                    <div className = "py-6">
                        <a href = "https://avinashrathee.notion.site/The-Smart-Buyer-830b6e5ec59a45a89be7d8e48e0b9a65" target="_blank"> <Cards title = "Founder" img="tsb.png"/> </a>
                    </div>
                    <div className = "py-6">
                        <a href = "https://avinashrathee.notion.site/Independent-business-manager-fb0d34a059664cf9ab113d3458124be7" target="_blank"> <Cards title = "Manager" img = "sm.png"/> </a>
                    </div>
                </div>
            </div>

            <div className = "my-8 pb-8">
                <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center">
                    <h4>
                        Projects 
                    </h4>
                </div>
                <div className = "flex flex-col flex-1 md:mx-6 items-center md:flex-row md:space-x-6 md:justify-evenly">
                    <div className = "py-6">
                        <a href = "" target="_blank"> <Cards title = "The Smart Buyer" img = "books.png"/> </a>
                    </div>
                    <div className = "py-6">
                        <a href = "" target="_blank"> <Cards title = "CRUD App" img="pod.png"/> </a>
                    </div>
                    <div className = "py-6">
                        <a href = "" target="_blank"> <Cards title = "To-Do App" img = "sm.png"/> </a>
                    </div>
                </div>
            </div>

            <div className = "my-8 pb-8">
                <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center">
                    <h4>
                        Interests 
                    </h4>
                </div>
                <div className = "flex flex-col flex-1 md:mx-6 items-center md:flex-row md:space-x-6 md:justify-evenly">
                    <div className = "py-6">
                        <a href = "https://avinashrathee.notion.site/Books-83b8ede5c2fd42d1b3996d27d6dcb9da" target="_blank"> <Cards title = "Books" img = "books.png"/> </a>
                    </div>
                    <div className = "py-6">
                        <a href = "https://avinashrathee.notion.site/Podcasts-e423890e3a324e80bc1128c84b111ced" target="_blank"> <Cards title = "Podcasts" img="pod.png"/> </a>
                    </div>
                    <div className = "py-6">
                        <a href = "https://avinashrathee.notion.site/Articles-Reading-sources-52f230303ff64696b5bd5384a452528b" target="_blank"> <Cards title = "Reading Material" img = "sm.png"/> </a>
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