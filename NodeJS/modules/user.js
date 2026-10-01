function login(data){
    if(data.username=="admin" && data.password==123456){
        return "login successfull";
    }else{
        return "incorrect username or password so please try again";
    }
}

function signup(data){
    if(data.username!=="" && data.password!==""){
        return "registration successfull";
    }else{
        return "please enter all required fields";

    }
}

module.exports={login,signup};