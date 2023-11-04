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
          "images/image-2.jpg",
          "images/image-3.jpg",
          "images/image-4.jpg",
        ]}
        width="400"
        height="300"
        alt="Honey"
      />
    </div>
  );
}

export default App;
