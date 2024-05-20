import { socialLinks } from "../data"
const SocialLinks = ({ newMainLink, newSubLink }) => {
  return (
    <ul className={newMainLink}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={newSubLink}
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLinks
