function signup(data){
    if(data.username!="" && data.password!=""){
        return "registration successfull";
    }
    else{
        return "please enter all required fields"
    }
}

module.exports = {signup}