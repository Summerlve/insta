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


### Deployment

1. install Node.js v6.2.0+

2. npm install pm2 -g

3. install MySQL v5.7.11+

4. install nginx

5. git clone /link/to/this/program to your server

6. cd /path/to/this/program & npm install

7. cd /path/to/this/program/app/assets/page & npm install & npm run build

8. cd /path/to/this/program/app/assets/root & npm install & npm run build

9. start program using pm2, listening the local port, use nginx to reverse proxy


### GUI

The following picture pictures may be a little different from the real programs

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
