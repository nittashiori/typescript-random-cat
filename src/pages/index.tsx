import { useEffect, useState } from "react";

const catImages: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg"
]

const randomCatImage = (): string => {
  const index = Math.floor(Math.random() * catImages.length);
  return catImages[index];
};

const fetchCatImage = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
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