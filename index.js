const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([{
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
    type: "input",
    message: "Enter your GitHub E-mail:",
    name: "Email"
  },
  {
    type: "input",
    message: "Enter your Project title:",
    name: "ProjectTitle"
  },
  {
    type: "input",
    message: "Describe your project:",
    name: "Description"
  },
  {
    type: "input",
    message: "What is the Installation prosses:",
    name: "Installation"
  },
  {
    type: "input",
    message: "What is usage of the application:",
    name: "Usage"
  },
  {
    type: "input",
    message: "What is License of the application:",
    name: "License"
  },
  {
    type: "input",
    message: "Who are the Contributers:",
    name: "Contributing"
  }]
  )
  .then(function({ username , Email , ProjectTitle , Description , Installation , Usage , License , Contributing}) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      const avatar = res.data.avatar_url;
      const userEmail = res.data.email;

      let displayAvatar = "<img src='" + avatar + "'/>"

      console.log(Email);
      let infoData = [
        "Name: " , username, "\n",
        "Image: " , displayAvatar, "\n",
        "Email is: " , Email, "\n",
        "Title: ",ProjectTitle, "\n",
        "Description: ",Description, "\n",
        "Table of Contents", "\n",
        "Installation: ", Installation, "\n",
        "Usage: ", Usage, "\n",
        "License: ", License, "\n",
        "Contributing: ", Contributing, "\n",

      ]
      // const avatar = res.data.map(function() {
      //   //return ava.owner.avatar_url;
      //   console.log(owner.avatar_url);
      // });
      //console.log(user)
      //const repoNamesStr = repoNames.join("\n");
      //console.log(ava.avatar_url);

        fs.writeFile("README.md", infoData.join("") , function(err) {
          if (err) {
            throw err;
          }

      //   console.log(`Saved ${repoNames.length} repos`);
       });
    });
  });
