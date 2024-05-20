import logo from "../images/logo.svg"
import PageLinks from "./NewPageLinks"
import SocialLinks from "./NewSocialLinks"
const NewNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <PageLinks mainLink="nav-links" subLink="nav-link" />
          <SocialLinks newMainLink="nav-icons" newSubLink="nav-icon" />
        </div>
      </nav>
    </>
  )
}
export default NewNavbar
