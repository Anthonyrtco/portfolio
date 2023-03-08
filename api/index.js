'use strict'
const { request } = require('express')
/* eslint-env node, es6 */

//IMPORTE LE PAQUET EXPRESS//
const express = require('express')

const PORT= 6300

//Créé une application express//
const app = express()

//quatre methodes 'post'donner 'put'=remplacer 'delete'=supprimer 'get'=prendre//
app.get ('/', (req, res)=> {
    res.send('hello world')
})

app.listen(PORT, () =>{

    console.log (`serveur démarré : https://anthonyrtco.github.io/Portfolio-projet/:${PORT}`)

})

