const ImageContainer = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="animate-pulse">
      <div className="rounded-lg h-72 bg-gray-100"></div>
    </div>
  ));
};

export default ImageContainer;
