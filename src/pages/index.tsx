import { useEffect, useState } from "react";

interface CatCategory {
  id: number;
  name: string;
}

interface SearchCatImage {
  breeds: string[];
  categoryis: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}

type SearchCatImageResponse = SearchCatImage[];

const catImages: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg"
]

const randomCatImage = (): string => {
  const index = Math.floor(Math.random() * catImages.length);
  return catImages[index];
};

const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
}

fetchCatImage().then((image) => {
  console.log(`猫の画像: ${image.url}`);
})

const IndexPage = () => {
  const [catImage, setCatImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCatImage(randomCatImage());
  })

  const handleClick = () => {
    setCatImage(randomCatImage());
  }

  return (
    <div>
      <button onClick={handleClick}>きょうのにゃんこ🐱</button>
      <div style={{ marginTop: 8 }}>
        <img src={catImage} />
      </div>
    </div>
  );
};

export default IndexPage;