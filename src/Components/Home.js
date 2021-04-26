import React , { useState,useEffect } from 'react';
import IPL2021 from './IPL2021.jpg';

function Home() {

    useEffect(()=>{
        document.title="Welcome To IPL" 
    },[]);

    return (
        <div>
            <img src = {IPL2021} width = '730' />
        </div>
    );
}

export default Home;