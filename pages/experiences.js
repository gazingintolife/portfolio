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
                        <h2 className = "flex flex-row text-5xl m-8 py-8 justify-center text-center leading-relaxed">
                            A mind streched by experience <br/> can never go back to it’s old dimensions.
                        </h2>
                    </div>
                    <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center">
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

            <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
                <Footer/>  
            </footer>
          
          
        </div>
    );
}