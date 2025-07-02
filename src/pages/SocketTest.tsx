import singleSocket from "singleSocket";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

const SocketTest = () => {
    const token = useSelector((state:RootState) => state.auth.access);

    useEffect(() => {
        // Subscribe on mount
        const unsubscribe = singleSocket.subscribe((msg) => {
            console.log(msg);
        });

        // Cleanup on unmount
        return () => {
            unsubscribe();
        };
    }, []);

    const handleSend = () => {
        singleSocket.send({type:"auth", message:token});
        singleSocket.send({type:"query", message:"get_active_users"});
    }

    return (
        <>
        <button onClick={handleSend}>Send Ping</button>
        </>
    );
};

export default SocketTest;