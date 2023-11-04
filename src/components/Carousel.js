const Carousel = (props) => {
  return (
    <div>
      <img
        src={props.image}
        height={props.height}
        width={props.width}
        alt={props.alt}
      />
    </div>
  );
};

export default Carousel;
