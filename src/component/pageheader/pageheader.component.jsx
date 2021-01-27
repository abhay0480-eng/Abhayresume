import React from 'react';

import {Link} from 'react-router-dom';

function Pageheader(){
    return(
        <div>
             <div>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default Pageheader;