import { useEffect, useState } from "react";
import '../App.css';

export default function ScrollHools() {

    const [scrollY, setscrollY] = useState(0);
    const [name, setname] = useState("juan");

    useEffect(() => {
        console.log("moviendo el scroll");
        const detectarScroll = () => setscrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll);
            console.log("Fase de desmontaje");
        };
    }, [scrollY]);

    useEffect(() => {
        console.log("Fase de montaje");
    }, []);

    useEffect(() => {
        console.log("Fase de actualizacion");
    });

    useEffect(() => {

        return () => {
            console.log("Fase de desmontaje");
        };
    });



    return (
        <>
            <h2> Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll y del Navegador {scrollY} px</p>
            <div className="div">
                hola
            </div>
        </>
    )
}