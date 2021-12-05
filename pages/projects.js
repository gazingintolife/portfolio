import Header from "../components/header";
import Cards from "../components/cards";
import Footer from "../components/footer";

export default function projects () {
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
                    <a href = ""> <Cards title = "Project 1"/> </a>
                </div>
                <div className = "col">
                    <a href = ""> <Cards title = "Project 2"/> </a>
                </div>
                <div className = "col">
                    <a href = ""> <Cards title = "Project 3"/> </a>
                </div>
            </div>
          </div>

          <Footer/>
        </div>
    );
}