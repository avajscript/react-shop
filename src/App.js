import Carousel from "./components/Carousel";
import MultiCarousel from "./components/MultiCarousel";

function App() {
  return (
    <div className="App">
      {/* <Carousel
        image="/images/honey.jpg"
        width="400"
        height="300"
        alt="Honey"
      /> */}
      <MultiCarousel
        images={[
          "/images/honey.jpg",
          "/images/honey-farm.jpg",
          "/images/IMG_4568.jpg",
          "/images/IMG_4586.jpg",
        ]}
        width="400"
        height="300"
        alt="Honey"
      />
    </div>
  );
}

export default App;
