import { createContext, useState } from "react";
import SearchBar from "./components/SearchBar";
import callData from "./hooks/callData";
import Images from "./components/images";
import Wrapper from "./components/Wrapper";


// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = callData(
    `search/photos?page=1&query=fashion&per_page=24&client_id=${import.meta.env.VITE_API_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  console.log(value);

  return (
    <ImageContext.Provider value={value}>
        <Wrapper>
          <SearchBar />
        </Wrapper>
        <Images />
    </ImageContext.Provider>
  );
}

export default App;
