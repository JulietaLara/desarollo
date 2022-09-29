import React from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export const ProductsPage = () => {

    const { id } = useParams()
    const [ params ] = useSearchParams()

    const navigate = useNavigate() 
    useEffect(() => {
        navigate('/login')
        
    }, [])

    return (
        <div>
            Products Page { id } { paramas.get('sort') }
        </div>
    );
}


