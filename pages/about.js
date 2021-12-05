import Header from "../components/header";
import Cards from "../components/cards";

export default function home () {
    return (
        <div>
          <Header/>

          <div className = "container">
            <div className = "row">
                <div className = "col">
                    <h2>Text Here</h2>
                </div>

                <div className = "col">
                    <img />
                </div>
            </div>

            <div className = "row">
                <h3>Experiences</h3>
            </div>
            <div className = "row">
                <div className = "col">
                    <a href = ""> <Cards title = "Experience 1"/> </a>
                </div>
                <div className = "col">
                    <a href = ""> <Cards title = "Experience 2"/> </a>
                </div>
                <div className = "col">
                    <a href = ""> <Cards title = "Experience 3"/> </a>
                </div>
            </div>

            <div className = "row">
                <h3>Projects</h3>
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

            <div className = "row">
                <h3>Interests</h3>
            </div>
            <div className = "row">
                <div className = "col">
                    <a href = ""> <Cards title = "Interest 1"/> </a>
                </div>
                <div className = "col">
                    <a href = ""> <Cards title = "Interest 2"/> </a>
                </div>
                <div className = "col">
                    <a href = ""> <Cards title = "Interest 3"/> </a>
                </div>
            </div>
          </div>
        </div>
    );
}