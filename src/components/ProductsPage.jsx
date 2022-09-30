import React from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export const ProductsPage = () => {

    const { id } = useParams()
    const [ params ] = useSearchParams()

    const navigate = useNavigate() 

    // useEffect(() => {
    //     navigate('/login')
        
    // }, [])

    const onLogOut = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (
        <div>
            Products Page { id || 1 } { params.get('sort') }
            <button onClick={ () => onLogOut()}>Logout</button>
        </div>
    );
}


