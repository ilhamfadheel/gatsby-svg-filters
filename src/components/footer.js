import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => (
    <footer
        style={{
            textAlign: "center",
            paddingBottom: 10,
            background: `linear-gradient(0deg, rgba(114,121,139,1) 0%, rgba(255,255,255,1) 50%)`,
        }}
    >
    © {new Date().getFullYear()} 
    {` `} <a href="https://ilhamfadhil.com" 
            style={{
                color: `#0366d6`,
                textDecoration: "none",

            }}
    >Ilham Fadhil</a>
    <br></br> Built with    
    {` `}<i className="fas fa-code"></i>
    {` and`}
    {` `}<i className="far fa-heart"></i>
  </footer>
)

export default Footer
