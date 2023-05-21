"use client";
import { useState } from "react";
import { RandomFox } from "../../components/RandomFox";
import type { MouseEventHandler } from "react";

const random = (): number => Math.floor(Math.random()*123)+1;

type ImageItem = {
    id: string,
    url: string,
  }

const generateId = (): string => Math.random().toString(36).substr(2,9);

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>> ([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (): void => {
    const newFoxItem: ImageItem = { 
      id: generateId(), 
      url:`https:\/\/randomfox.ca\/images\/${random()}.jpg`
    };
    setImages([
      ...images,
      newFoxItem
    ])
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello Platzi</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map((image) => (
        <div key={image.id} className="p-4">
          <RandomFox image={image.url}/>
        </div>
      ))}
    </main>
  );
}
