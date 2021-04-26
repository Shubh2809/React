import React, { useState,useEffect,success } from 'react';
import Player from './Player'
import base_url from './../RESTapi/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify';


function ListP() {

    useEffect(()=>{
        document.title="IPL || List Of Players" 
    },[]);

    //function to connect with server
    const PlayersList =()=>{
        axios.get(`${base_url}/players`).then(
            
            (response)=>{
                console.log(response.data);
                toast.success("Players List has Loaded...", {position: 'bottom-center',});
                setplayers(response.data);
            },

            (error) => {
                console.log(error);
                toast.error("Something went Wrong", {position: 'bottom-center',});
           }
        )
    }

    //calling loading player function
    useEffect(()=>{
        PlayersList();
    },[])


//remove player by id
const updateplayer = (id) => {
    setplayers(players.filter ((c) => c.id !=id));
}


    const [players, setplayers] = useState([
        
    ]);

    return (
        <div className = 'text-center' >
              <h2>List of All Players</h2>
              <p> </p>
              {
                  players.length > 0 
                  
                  ? players.map((item)=>
                    <Player key={item.id} player = {item} update={updateplayer}/> )
                  : "No Players in the IPL"
              
             }
        </div>
    );
};

export default ListP;     