import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'

function HOME() {

    const isLogged = useSelector(state => state.LogReducer);
    const api_key = 'dd32c1edcdcaa2ef3be79570c191e5ea';

    useEffect(() => {
        // Update the document title using the browser API
        console.log('userEffect was trigger')
    });
    return (<div>This is the home page</div>);
}

export default HOME;