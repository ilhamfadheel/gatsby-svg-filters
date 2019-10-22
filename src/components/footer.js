import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => (
    <footer
        style={{
            textAlign: "center",
        }}
    >
    © {new Date().getFullYear()} 
    {` `} <a href="https://ilhamfadhil.com" 
            style={{
                color: "purple",
                textDecoration: "none",

            }}
    >Ilham Fadhil</a>, Built with    
    {` `}<i className="fas fa-code"></i>
    {` and`}
    {` `}<i className="far fa-heart"></i>
  </footer>
)

export default Footer
