const Image = ({ data }) => {

  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img
        className="h-72 object-cover w-full rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
    </a>
  );
};

export default Image;
