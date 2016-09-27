# FA_API_DEMO
the demo API server using Node.js
This is a simple version of Node.js api server code. 
1: Go to the FA_API_DEMO folder from terminal. 
2. npm install
3. node app.js

To test the api you can use postman which can be download here:
https://www.getpostman.com/

test POST:
Put json formated content using following template in the http request body and post to http://localhost:3000/api/deviceData/
  {
    "deviceID": "0xf8f005f738ba",  
    "temperature": "34400",
    "humidity": "45300",
    "voc": "2354",
    "dust": "350"
  }

After you click send, you’ll see “Success” on the console in Postman if the operation succeed 


Test get:

you can either use Postman or just simply type the url in the browser:
http://localhost:3000/api/deviceData/{DeviceID}

The available deviceIDs are 0xf8f005f418d7, 0xf8f005f4134a, and 0xf8f005f738ba.
You can also post new DeviceID then use get request to see the result 
