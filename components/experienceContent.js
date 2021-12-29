import React from "react";
import Cards from "./cards";

export default function experienceContent () {
    return (
        <div>
            <div className = "flex flex-row justify-center mb-8 py-8 text-3xl text-center font-extrabold">
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
    );
}