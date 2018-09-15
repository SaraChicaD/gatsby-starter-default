import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#ffffff ',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: '1.45rem 1.0875rem',
      }}
    >

        <h1
          style={{
            margin: 0,
            fontFamily: 'Montserrat, sans-serif;',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.0625em',
            fontSize: '1.375em',
            lineHeight: 1.09091,
            width: 'max-content',
            display: 'inline-block',
            paddingRight: '20px',
            color: '#000000',
          }}
        >
          <Link
            to="/"
            style={{
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            Sara Inés Calderón
          </Link>
        </h1>
        <p
          style={{
            position: 'relative',
            width: 'max-content',
            display: 'inline',
          }}
        >
        @SaraChicaD
        </p>

    </div>
  </div>
)

export default Header
