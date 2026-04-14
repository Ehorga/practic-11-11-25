import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const idTimeOut = setTimeout(()=>{navigate("/" ,{replace: true })}, 3000) 

    return () => {
        clearTimeout(idTimeOut)
    };
    }, [navigate]);
    return (
        <div>
            <h1>NotFoundPage</h1>
        </div>
    );
}

export default NotFoundPage;
