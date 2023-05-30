"use client";
import { useState } from "react";
import { LazyImage } from "../../components/RandomFox";
import type { MouseEventHandler } from "react";

const random = (): number => Math.floor(Math.random() * 123) + 1;

type ImageItem = {
  id: string;
  url: string;
};

const generateId = (): string => Math.random().toString(36).substr(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
      const id: string = generateId();
      const url: string = `https:\/\/randomfox.ca\/images\/${random()}.jpg`;
      setImages([...images, {id, url}]);
    };

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello Platzi</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map((image) => (
        <div key={image.id} className="p-4">
          <LazyImage
            src={image.url}
            width={320}
            height="auto"
            style={style}
            onClick={() => console.log("Hey")}
            alt="Lobo"
          />
        </div>
      ))}
    </main>
  );
}

const style = {
  borderRadius: '10px',
  backgroundColor: 'gray',
}