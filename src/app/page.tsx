"use client";
import { useState } from "react";
import { RandomFox } from "../../components/RandomFox";

const random = (): number => Math.floor(Math.random()*123)+1;

type ImageItem = {
    id: string,
    url: string,
  }

const generateId = () => Math.random().toString(36).substr(2,9);

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>> ([
    { id: generateId(), url:`https:\/\/randomfox.ca\/images\/${random()}.jpg`},
    { id: generateId(), url:`https:\/\/randomfox.ca\/images\/${random()}.jpg`},
    { id: generateId(), url:`https:\/\/randomfox.ca\/images\/${random()}.jpg`},
    { id: generateId(), url:`https:\/\/randomfox.ca\/images\/${random()}.jpg`},
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello Platzi</h1>
      {images.map((image) => (
        <div key={image.id} className="p-4">
          <RandomFox image={image.url}/>
        </div>
      ))}
    </main>
  );
}
