import { pageLinks } from "../data"
const PageLinks = ({ mainLink, subLink }) => {
  return (
    <ul className={mainLink} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={subLink}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
