// import React from "react"
import '../src/style.css'
import linkedinPic from "public/00_linkedinLevi.jpeg"

export default function Info() {
    return(
        <div className="info-container">
            <img className="img-profile" src={linkedinPic} />
            <h1 className="info-name">Levi Adissi</h1>
            <h2 className="info-title">Product Manager</h2>
            <h3 className="info-site"><a href="https://ladissi.github.io/">ladissi.github.io</a></h3>
            <div className="info-btn-group">
                <button className="info-email-btn">Email</button>
                <button className="info-linkedin-btn">LinkedIn</button>
            </div>
        </div>
    )
}