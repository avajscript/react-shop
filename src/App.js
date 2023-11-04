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
          "images/image-1.png",
          "images/image-2.png",
          "images/image-3.png",
          "images/image-4.png",
        ]}
        width="400"
        height="300"
        alt="Honey"
      />
    </div>
  );
}

export default App;
