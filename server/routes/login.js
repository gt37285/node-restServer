const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')



app.post('/login', (req,res) => {
    let body = req.body
    
    Usuario.findOne({email: body.email},(err,usuarioDB) => {
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                message: 'usuario o contraseña incorrectos'
            })
        }

        if( !bcrypt.compareSync( body.password,usuarioDB.password ) ){
            return res.status(400).json({
                ok: false,
                message: 'usuario o contraseña incorrectos'
            })
        }

        let token = jwt.sign({
            usuario: usuarioDB
        },process.env.Semilla,{
            expiresIn: process.env.VencimientoToken
        })

        res.json({
            ok: true,
            token,
            usuario: usuarioDB
        })
    })
})


module.exports = app;