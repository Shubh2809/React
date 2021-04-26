import React from 'react';
import { version } from 'react-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, CardBodyProps, Button, Container } from 'reactstrap';
import axios from 'axios';
import base_url from './../RESTapi/bootapi';
import { toast } from 'react-toastify';

function Player( {player, update} ) {

const deletepalyer = (id)=>{
    axios.delete(`${base_url}/players/${id}`).then(
        
        (response)=>{
            console.log(response.data);
            toast.success("Players has been Deleted...", {position: 'bottom-center',});
            update(id);
        },

        (error) => {
            console.log(error);
            toast.error("Something went Wrong", {position: 'bottom-center',});
       }
    )

}

    return (
        <div>
            <Card className = 'text-center'>
                <CardBody>
                    <CardSubtitle className ="font-weight-bold">{player.name}.</CardSubtitle>
                    <CardText>He represents {player.team} and He is {player.role} </CardText>
                    <CardText></CardText>
                    <Container>
                        <Button color ='danger'onClick ={()=>{
                            deletepalyer(player.id);
                        }
                        }>Delete</Button>
                        <Button color ='info ml-3'>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};

export default Player;