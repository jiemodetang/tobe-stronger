import React from 'react';
import { Link ,useHistory} from 'react-router-dom';

const App = () => {

    return (
        <div>
            {/* <div onClick={()=>{
               history.push("/parent");
            }}>
                1111
            </div> */}
            <Link to='/children'>Tochildren</Link>
            <br />
            <br />
            <Link to='/parent'>Toparent</Link>
            <div>
            --------------------------------------------------
            </div>
            <br />
            <br />
        </div>
    )
}
export default App