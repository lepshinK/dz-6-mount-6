// App.js
import { useState, useEffect } from "react";
import { createConnection } from "./chat";
import TokyoGhoulRoom from "./tokyoGhoul";
import ElfenLiedRoom from "./elfenLied";
import YourAprillRoom from "./yourAprilLie";
import DarlingInTheRoom from "./DarlingInTheFranxx";

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:123')

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        }
    }, [roomId, serverUrl]);

    return (
        <>
            {roomId === "tokyoGhoul" && <TokyoGhoulRoom />}
            {roomId === "elfenLied" && <ElfenLiedRoom />}
            {roomId === "yourAprillLie" && <YourAprillRoom />}
            {roomId === "DarlingInTheFranxx" && <DarlingInTheRoom />}

        </>
    );
}

export default function App() {
    const [roomId, setRoomId] = useState("tokyoGhoul");
    const [show, setShow] = useState(false);

    return (
        <>
            <label>
               <div style={{marginTop:"25px",margin:"auto",textAlign:"center"}}>Выберите комнату:{""}</div>
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)}
                        style={{
                            backgroundColor: show ? 'red' : 'gray',
                        }}
                >
                    <option value="tokyoGhoul">tokyoGhoul</option>
                    <option value="elfenLied">elfenLied</option>
                    <option value="yourAprillLie">yourAprillLie</option>
                    <option value="DarlingInTheFranxx">DarlingInTheFranxx</option>
                </select>
            </label>
            <button
                style={{
                    backgroundColor: show ? 'red' : 'gray',
                    border: '1px solid black',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }}
                onClick={() => setShow(!show)}>
                {show ? "Закрыть чат" : "Открыть чат"}
            </button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
        </>
    );
}
