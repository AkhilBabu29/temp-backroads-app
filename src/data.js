import img1 from "./images/tour-1.jpeg"
import img2 from "./images/tour-2.jpeg"
import img3 from "./images/tour-3.jpeg"
import img4 from "./images/tour-4.jpeg"
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
]

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
]

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
]

export const tours = [
  {
    id: 1,
    image: img1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime",
    icon: "fas fa-map",
    place: "china",
    days: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: img2,
    date: "October 1th, 2020",
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime",
    icon: "fas fa-map",
    place: "Indonesia",
    days: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    image: img3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime",
    icon: "fas fa-map",
    place: "Hong Kong",
    days: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    image: img4,
    date: "December 5th, 2020",
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime",
    icon: "fas fa-map",
    place: "Kenya",
    days: "20 days",
    price: "from $3300",
  },
]
