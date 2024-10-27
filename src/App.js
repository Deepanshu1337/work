import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Img1 from "./assests/istockphoto-1632091356-2048x2048.jpg";
import Img2 from "./assests/istockphoto-1713107584-2048x2048.jpg";
import Img3 from "./assests/pocket-watch-1637396_1280.jpg";
import fr1 from './assests/SH1.jpg'
import fr2 from './assests/SH2.jpg'
import fr3 from './assests/SH3.jpg'

function App() {
  const carouselItems = [
    {
      title: "First Slide",
      description:
        "Some representative placeholder content for the first slide.",
      backgroundImage: Img1,
      // foregroundImage: "path/to/foreground-image1.jpg"
    },
    {
      title: "Second Slide",
      description:
        "Some representative placeholder content for the second slide.",
      backgroundImage: Img2,
      // foregroundImage: "path/to/foreground-image2.jpg"
    },
    {
      title: "Third Slide",
      description:
        "Some representative placeholder content for the third slide.",
      backgroundImage: Img3,
      // foregroundImage: "path/to/foreground-image3.jpg"
    },
  ];
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              key={index}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="10000"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
              key={index}
            >
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
              <div className="image-container">
                <img
                  src={item.foregroundImage}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default App;
