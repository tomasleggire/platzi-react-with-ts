import { useRef, useEffect, useState } from "react";

type Props = {
    image: string,
};

export const RandomFox = (props: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null); //Si no sabemos el valor inicial del ref, lo inicializamos con null, para evitar problemas con ts
    const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    useEffect(() => {
        //Nuevo observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // onIntersection --> console.log
                if (entry.isIntersecting) {
                    setSrc(props.image);
                };
            });
        });
        //observe node
        if (node.current) {
            observer.observe(node.current);
        };
        //desconectar
        return () => {
            observer.disconnect();
        }
    }, [props.image])

    return <img ref={node}  width={320} height="auto" src={src} style={style}/>
}

const style = {
    borderRadius: '10px',
    backgroundColor: 'gray',
}