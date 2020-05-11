import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Link to='/parent'>Toparent</Link>
            <Link to='/children'>Tochildren</Link>
        </div>
    )
}
export default App