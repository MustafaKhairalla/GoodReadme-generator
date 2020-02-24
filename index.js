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
  }]
  )
  .then(function({ username , Email , ProjectTitle , Description }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      const avatar = res.data.avatar_url;
      const userEmail = res.data.email;

      let displayAvatar = "<img src='" + avatar + "'/>"

      console.log(Email);
      let infoData = [
        username, "\n",
        displayAvatar, "\n",
        Email, "\n",
        ProjectTitle, "\n",
        Description
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
