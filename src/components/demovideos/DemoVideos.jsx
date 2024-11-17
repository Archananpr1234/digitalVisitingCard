import React from "react";
import { BiLinkExternal } from "react-icons/bi"; // Import the external link icon
import './DemoVideos.css';
import { Element } from 'react-scroll';


const DemoVideos = () => {
    return (
        <Element name="demo" className="demovideo-container">
            <h1>DEMO VIDEOS</h1>
            <div className="underline"></div>
            <p>Digital Business Card Creation Demo Videos</p>

            <div className="content-container">
                {/* YouTube Video Embed */}
                <div className="video-container">
                    <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/I3366P37OTk?si=vcwqobJsnh1O-HIG" // Replace VIDEO_ID with actual video ID
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                
                {/* External Reference Links */}
                <div className="reference-links">
                    <h3>External Reference Links</h3>
                    <ul>
                        <li><a href="#" target="_blank"> <span><BiLinkExternal /></span>VINOTH COMPUTER</a></li>
                        <li><a href="#" target="_blank"> <span><BiLinkExternal /></span>ATLAS REAL ESTATE </a></li>
                        <li><a href="#" target="_blank"> <span><BiLinkExternal /></span>SIVA DIGITAL </a></li>
                        <li><a href="#" target="_blank"> <span><BiLinkExternal /></span>AISS GRAND NETWORKS INC </a></li>
                        <li><a href="#" target="_blank"> <span><BiLinkExternal /></span>LIC OF INDIA </a></li>
                        <li><a href="#" target="_blank"><span><BiLinkExternal /></span>AR TRADERS </a></li>
                        <li><a href="#" target="_blank"><span><BiLinkExternal /></span>AV EXPORTS </a></li>
                        <li><a href="#" target="_blank"><span><BiLinkExternal /></span>SERVICE ENTERPRIE </a></li>
                        <li><a href="#" target="_blank"><span><BiLinkExternal /></span>MSD SNACKS </a></li>
                        <li><a href="#" target="_blank"><span><BiLinkExternal /></span>CLEAN 4 YOU </a></li>
                    </ul>
                </div>
            </div>
        </Element>
    );
}

export default DemoVideos;
