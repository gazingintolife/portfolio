import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";

export default function experiences () {
    return (
        <div>
            <Header/>

                <div className = "container">
                <div className = "row">
                    <h2>
                        The quote goes here
                    </h2>
                </div>
                <div className = "row">
                    <h4>
                        Projects
                    </h4>
                </div>

                <div className = "row">
                    <div className = "col">
                        <a href = "https://avinashrathee.notion.site/Ananta-AI-Inc-afe283f2d2da41b7b89f546d4fcf8751"> <Cards title = "Founder - Ananta AI"/> </a>
                    </div>
                    <div className = "col">
                        <a href = ""> <Cards title = "Experience 2"/> </a>
                    </div>
                    <div className = "col">
                        <a href = ""> <Cards title = "Experience 3"/> </a>
                    </div>
                </div>
            </div>

          <Footer/>
          
        </div>
    );
}