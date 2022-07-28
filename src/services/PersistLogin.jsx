import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from './useAuth';

const PersistLogin = () => {

    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useAuth();

    useEffect(() => {

        auth?.token && setIsLoading(false);
        
    }, []);

    return (
        <div>PersistLogin</div>
    )
}

export default PersistLogin