// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="light-navbar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="light-theme-logo"
              />
              <ul className="Route-container">
                <Link to="/" className="link-item">
                  <li className="home-item-light">Home</li>
                </Link>
                <Link to="/about" className="link-item">
                  <li className="about-item-light">about</li>
                </Link>
              </ul>

              <button
                type="button"
                className="button-theme"
                data-testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              </button>
            </div>
          ) : (
            <div className="dark-navbar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="dark-theme-logo"
              />
              <ul className="Route-container">
                <Link to="/" className="link-item">
                  <li className="home-item-dark">Home</li>
                </Link>
                <Link to="/about" className="link-item">
                  <li className="about-item-dark">about</li>
                </Link>
              </ul>

              <button
                type="button"
                className="button-theme"
                data-testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-image"
                  onClick={toggleTheme}
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
