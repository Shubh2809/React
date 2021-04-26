import React from 'react';
import { Card, CardBody } from 'reactstrap';

function Header(){
    return (
        <div>
            <Card className='my-2 bg-warning'>
                <CardBody>
                    <h1 align ='center' className = 'my-4 text-color-info'>Welcome to IPL Cricket</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}

export default Header;