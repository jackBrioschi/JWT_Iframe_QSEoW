# JWT_Iframe_QSEoW
This is a repo that shows how to configure a JWT integration with Iframe on Qlik Sense Enterprise on Windows


#Instruction

1) Clone the repository 
2) npm install     -   To install the npm packages for server.js
3) Replace your server port inside server.js
4) Replace your server name and your virtual proxy name (if differs) inside jwtsample.html
5) Replace the JWT token in "Bearer ..." with your own JWT
6) type node server.js to startup the server
7) go to http://localhost:8080/ (please type your port if differs from 8080) to display your mashup
