import { Link } from '@mui/material';
import * as React from 'react';
import BackEnd from '../backEnd/BackEnd';

function FrontEnd() {

    return (
        <div>
            <h1>FrontEnd</h1>
            <Link href="/backEnd" component={BackEnd}>BackEnd</Link>

        </div>
    );
}


export default FrontEnd;