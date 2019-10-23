import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
      }}
    > 
      <Link
          to="/"
          style={{
            color: `lightgrey`,
            textDecoration: `none`,
          }}
        >
          <img alt="Gatsby" style={{margin: 0}} src="https://ilhamfadhil.com/wp-content/uploads/2019/08/cropped-cropped-IF.png" width="25" />
        </Link>
      <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            paddingRight: 15,
            paddingTop: 10,
          }}>
        <h5 style={{ margin: 0 }}>
          &lt;Home&gt;
        </h5>
      </Link>
      <Link
          to="/page-2"
          style={{
            color: `lightgrey`,
            textDecoration: `none`,
            bottom: 0,
            paddingTop: 10,
          }}>
        <h5 style={{ margin: 0 }}>        
            &lt;Turbulence Effect&gt;
        </h5>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
