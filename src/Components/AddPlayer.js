
import axios from 'axios';
import React,{Fragment, useState,useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container ,Col, CustomInput} from 'reactstrap';
import base_url from './../RESTapi/bootapi'
import base_urll from './../RESTapi/bootapii'
import { toast } from 'react-toastify';

function AddPlayer() {

    useEffect(()=>{
        document.title="IPL || Add Players" 
    },[]);

    const [players , setplayers]=useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(players);
        DataServer(players);
        e.preventDefault();
    }

    //creating function to post data on server
    const DataServer = (data) => {
        axios.post(`${base_url}/players`,data).then(
            
            (response)=>{
                console.log(response.data);
                toast.success("Players has been Added...", {position: 'bottom-center',});
                setplayers({ })
            },

            (error) => {
                console.log(error);
                toast.error("Something went Wrong", {position: 'bottom-center',});
           }
        )
    }

    return (
        <Fragment>
            <h3 className = 'text-center'>Fill the Player Details Here</h3>
            
            <Form onSubmit={handleForm}>

                <FormGroup>
                    <Label for ='userid'>Player Id</Label>
                    <Input
                        autoComplete='off'
                        placeholder="Enter Id Here" 
                        type="text" 
                        name="userid" 
                        id="userid"
                        onChange = {(e)=> {
                            setplayers({...players, id: e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for = 'username'>Player Name</Label>
                    <Input 
                        autoComplete='off'
                        placeholder="Enter Name Here" 
                        type="text" 
                        name="username" 
                        id="name"
                        onChange ={(e)=>{
                            setplayers({...players, name: e.target.value});
                        }}
                   />
                </FormGroup>

                <FormGroup>
                    <Label for="team">Player Team</Label>
                    <Input 
                        autoComplete='off'
                        placeholder = "Select Team here"
                        type="select"
                        name="team" 
                        id="team"
                        onChange = {(e)=>{
                            setplayers({...players, team : e.target.value});
                        }}
                    > 
                    <option >Select Team Here</option>
                    <option>(RCB) Royal Challangers Banglore</option>
                    <option>(CSK) Chennai Super Kings</option>
                    <option>(DC) Delhi Daredevils</option>
                    <option>(MI) Mumbai Indians</option>
                    <option>(PBKS) Punjab Kings X1</option>
                    <option>(SRH) Sunrisers Hyderabad</option>
                    <option>(KKR) Kolkata Knight Riders</option>
                    <option>(RR) Rajasthan Royals</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="role">Player Role</Label>
                    <CustomInput
                        Input autoComplete='off'
                        type="select" 
                        id="role" 
                        name="role"
                        onChange = {(e)=>{
                            setplayers({...players, role: e.target.value});
                        }}
                    >
                         
                        <option>Select Role Here</option>
                        <option>Batsman</option>
                        <option>Bowler</option>
                        <option>All-Rounder</option>
                        <option>WK-Batsman</option>
                    </CustomInput>
                </FormGroup>

                <Container className = 'text-center'>
                    <Button type= 'submit' color = 'success ml-3' >Add</Button>
                    <Button type='reset' color = 'warning ml-4'>Clear</Button>
                </Container>

            </Form>

        </Fragment>
    );
}

export default AddPlayer;