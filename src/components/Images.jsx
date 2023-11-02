import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import ImageContainer from "./ImageContainer";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center font-bold mt-6 text-2xl bg-blue-gray-100 text-black">
        Results for {searchImage || "Fashion"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-2 max-w-8xl mx-auto px-4 grid-rows-10 bg-blue-gray-100 mt-10">
        {isLoading ? (
          <ImageContainer item={24} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default Images;
