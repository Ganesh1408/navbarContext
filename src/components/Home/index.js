// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="main-container">
              <Navbar />
              <div className="light-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home-logo"
                />
                <h1 className="home-heading-light">Home</h1>
              </div>
            </div>
          ) : (
            <div className="main-container">
              <Navbar />
              <div className="dark-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home-logo"
                />
                <h1 className="home-heading-dark">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
