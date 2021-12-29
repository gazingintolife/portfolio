import React from "react";
import Cards from "./cards";

export default function projectsContent () {
    return (
        <div>
            <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center font-extrabold">
                <h4>
                    Projects 
                </h4>
            </div>

            <div className = "flex flex-col flex-1 md:mx-6 items-center md:flex-row md:space-x-6 md:justify-evenly">
                <div className = "py-6">
                    <a href = "https://avinashrathee.notion.site/Ananta-AI-Inc-afe283f2d2da41b7b89f546d4fcf8751" target="_blank"> <Cards title = "The Smart Buyer" img = "ProjectTSB.png"/> </a>
                </div>
                <div className = "py-6">
                    <a href = "" target="_blank"> <Cards title = "CRUD App" img="crud.png"/> </a>
                </div>
                <div className = "py-6">
                    <a href = "" target="_blank"> <Cards title = "To-Do App" img = "todo.png"/> </a>
                </div>
            </div>
        </div>
    );
}