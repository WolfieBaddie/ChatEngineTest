const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try{
        const r = await axios.put(
            "https://api.chatengine.io/users",
            {username: username, secret: username, first_name: username },
            {headers: {"private-key": "ad9ed5fe-84e3-4f28-8f01-bd1716d127b1" }}
        );
        
        return res.status(r.status).json(r.data);
    }catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }

});

app.listen(3001);