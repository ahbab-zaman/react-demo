import card1 from "../assets/card-1.jpeg"
import card2 from "../assets/card-2.jpeg"
import card3 from "../assets/card-3.jpeg"
import card4 from "../assets/card-4.webp"
import card5 from "../assets/card-5.webp"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

const cards = [
  {
    title: "CHALLENGES",
    image: card2,
    icon: icon1,
  },
  {
    title: "EVENTS",
    image: card3,
    icon: icon2,
  },
  {
    title: "COURSES",
    image: card4,
    icon: icon3,
  },
  {
    title: "BLOGS",
    image: card5,
    icon: icon4,
  },
];

const Cards = () => {
  return (
    <div className="dashboard-container">
      <img src={card1} alt="Banner" className="banner-image" />

      <div className="cards-grid">
        {cards.map((card) => (
          <div
            key={card.title}
            className="card"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute">
            <img src={card.icon} alt={card.title} className="icon" />
            <h2 className="title">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
