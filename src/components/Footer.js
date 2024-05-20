import PageLinks from "./NewPageLinks"
import SocialLinks from "./NewSocialLinks"
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks mainLink="footer-links" subLink="footer-link" />
      <SocialLinks newMainLink="footer-icons" newSubLink="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
