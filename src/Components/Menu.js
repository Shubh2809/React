import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

//

function Menu() {
    return (
        <div>

        <ListGroup>
            <Link className ='list-group-item list-group-item-action' tag ='a' to='/' action>HOME</Link>
            <Link className ='list-group-item list-group-item-action' tag ='a' to='/add' action>ADD PLAYER</Link>
            <Link className ='list-group-item list-group-item-action' tag ='a' to='/view' action>VIEW PLAYER</Link>
        </ListGroup>
            
        </div>
    );
}

export default Menu;