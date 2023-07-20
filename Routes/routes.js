import express from "express";
import bodyParser from "body-parser";
import user from "../models/mongooseSchema.js";

const Router = express.Router();

Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/users', async (req, res) => {
    console.log("Calling Get Api")
    try {
      const users = await user.find();
      console.log("Get api called successfully");
      res.json( {
        "Success" : true,
        "data": {
          "length" : users.length,
           "users": users
        },
        "messgage": "Get Data Successfuly"
      } );
    } catch (error) {
        console.log(`${error}`)
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  });

Router.post('/student', async (req, res) => {
    try {
        console.log(`${req.body["name"]}`)
        const { name, email } = req.body;
        const newUser = new user({
            name: name,
            email: email,
          });
        await newUser.save();
        res.json( {
          "Success" : true,
          "data": newUser,
          "messgage": "New User Registered Successfuly"
        } );
        res.status(200).json();
    } catch (error) {
        console.log(`${error}`)
      res.status(400).json({ error: `${error}` });
    }
  });


  export default Router;