import { useEffect, useState } from "react";

function Reloj({ hora }) {
    return <h3>{hora}</h3>
}




export default function RelojHooks() {


    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000)
        } else {
            clearInterval(temporizador);

        }

        return () => {
            console.log("fase de desmontajes");
            clearInterval(temporizador);
        };


    }, [visible])


    return (
        <>
            <h2> Reloj Con Hooks</h2>
            {visible && <Reloj hora={hour} />}
            <button onClick={() => setVisible(true)}>iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>

        </>
    );
}