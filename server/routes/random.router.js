const express = require('express');
const router = express.Router();
const axios = require( 'axios' );
require ( 'dotenv' ).config();

router.get('/', (req, res) => {
    console.log( 'in giphy GET' );
    axios.get( `https://api.www.documentcloud.org/api/documents` ).then( ( response )=>{
        res.send( response.data.results[0].canonical_url );
    }).catch( ( err )=>{
        res.sendStatus( 500 );
    })
})

module.exports = router;