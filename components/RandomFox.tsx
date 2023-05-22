import { useRef } from "react";

type Props = {
    image: string,
};

export const RandomFox = (props: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null); //Si no sabemos el valor inicial del ref, lo inicializamos con null, para evitar problemas con ts

    return <img ref={node}  width={320} height="auto" src={props.image} className="rounded"/>
}