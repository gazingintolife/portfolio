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
                        <h2 className = "flex flex-row text-5xl m-8 py-8 justify-center text-center leading-relaxed">
                            We are what we repeatedly do.
                        </h2>
                    </div>
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

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
          
          
        </div>
    );
}