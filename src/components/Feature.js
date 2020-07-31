import React from 'react';
import requireAuth from '../components/requireAuth';

const Feature = () => {
    return (
        <div className="container mx-auto text-center p-3 m-3">Feature page</div>
    )
}

export default requireAuth(Feature);