### Introductions
    This web app just like instagram, but less functions. Only single user picture blog.
    This app is licensed under a MIT license.


### Open Source license
>   1. Node.js [homepage](https://nodejs.org/en/) - [show license](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)
>   2. Express.js [homepage](http://expressjs.com/) - [show license](https://github.com/expressjs/express/blob/master/LICENSE)
>   3. Sequelize.js [homepage](http://sequelizejs.com/) - [show license](https://github.com/sequelize/sequelize/blob/master/LICENSE)
>   4. Semantic-UI [homepage](http://semantic-ui.com/) - [show license](https://github.com/Semantic-Org/Semantic-UI/blob/master/LICENSE.md)
>   5. Vue.js [homepage](http://vuejs.org/) - [show license](https://github.com/vuejs/vue/blob/dev/LICENSE)
>   6. MySQL [homepage](http://www.mysql.com/) - [show license](http://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
>   7. mysqljs [homepage](https://github.com/mysqljs/mysql) - [show license](https://github.com/mysqljs/mysql/blob/master/License)
>   8. EJS [homepage](http://ejs.co/) - [show license](https://github.com/mde/ejs/blob/master/LICENSE)

may be some open source project doesn't in this list.


### Installation

1. install Node.js v6.2.0+

2. npm install pm2 -g

3. install MySQL v5.7.11+ , and set the encoding to utf8

4. install nginx

5. git clone /link/to/this/program , and touch `config.json` in the program top level folder.
    ```javascript
    {
      "name": "insta",
      "version": "1.0.0",
      "description": "instagram like app",
      "main": "index.js",
      "scripts": {
        "start": "echo \"Error: no test specified\" && exit 1",
        "dev": "supervisor ./index.js"
      },
      "author": "Summerlve",
      "license": "MIT",
      "repository": {
        "type": "git",
        "url": "https://github.com/Summerlve/insta"
      },
      "dependencies": {
        "body-parser": "^1.15.2",
        "compression": "^1.6.2",
        "ejs": "^2.5.1",
        "express": "^4.14.0",
        "express-session": "^1.14.0",
        "helmet": "^2.1.2",
        "md5": "^2.1.0",
        "moment": "^2.14.1",
        "multer": "^1.2.0",
        "mysql": "^2.11.1",
        "node-uuid": "^1.4.7",
        "sequelize": "^3.23.6"
      }
    }
    ```

6. cd /path/to/this/program & npm install

7. cd /path/to/this/program/app/assets/page & npm install & npm run build

8. cd /path/to/this/program/app/assets/root & npm install & npm run build

9. start program using pm2, listening the local port, use nginx for reverse proxy

### Config
    Change the config.json file for custom configs
    The initial account: {
        username: "root"
        password: "123456"
    }

### GUI

The following picture pictures may be a little different from the real programs

page interface, '/' or '/page' or '/index'  
![login interface](./images/page-pc.png)

page phone  
![login interface](./images/page-phone.png)

login interface, /login  
![login interface](./images/login.png)

editor interface, /root#!/editor    
![editor interface](./images/editor.png)

select image on pc  
![select image interface](./images/select-img-pc.png)

select image on phone  
![select image interface](./images/select-img-phone.png)

setting interface on pc  
![setting interface](./images/setting-pc.png)

setting interface on phone  
![setting interface](./images/setting-phone.png)
