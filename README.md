# Alcancei

This project born with a mission to take an easiest tool for every investment advisor in Brasil.

## Starting application

### Step 1 - We start using terminal 
The first thing you must do , its access the project folder after git clone <br>
* ```sh
  cd yourprojectfolder
  ```
Inside the project folder you must execute in that order 2 commands 
* ```sh
   make start
  ```
* ```sh
   node api/index.js 
  ```
### Step 2 - Good. Every image was built :)


### Everthing All right, Its time to use the app
make a call to
* ```sh
    curl --location --request GET 'http://localhost:3000/getWallet' \
    --header 'login: {login}' \
    --header 'senha: {passworld}' 
  ```  
You must send de credentials cei from b3 , for the project can make an crawler investor datas and process the file.

