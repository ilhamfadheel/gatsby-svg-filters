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
      <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: 15,
          }}
        >
          <img alt="Gatsby" style={{margin: 0}} src="https://ilhamfadhil.com/wp-content/uploads/2019/08/cropped-cropped-IF.png" width="25" />
        </Link>
      </h5>
      <h6 style={{ margin: 0 }}>
        <Link
          to="/page-2"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Turbulence Effect
        </Link>
      </h6>
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
