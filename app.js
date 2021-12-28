// User data
let name        = 'Emadul islam';
let age         = '2223555555555555555555';
let email       = 'akash@emadulisla.com';
let userName    = "akash1";
let password    = 'A406699A';


// validation
let namePatter        = /^[a-z ]*$/i;
let emailPatter       = /^[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z]{2,6}$/;
let userNamePatter    = /^[a-z]{5,8}[0-9]{1}$/;
let PassPatter        = /^.{8,10}$/;
let agePatter         = /^.{8,10}$/;



let PassPattern = PassPatter.test(password);
let userNamePattern = userNamePatter.test(userName);
let emailPattern = emailPatter.test(email);
let agePattern = agePatter.test(age);
let namePattern = namePatter.test(name);





try{
    if(namePattern == false ||emailPattern ==false|| PassPattern == false || userNamePattern == false||PassPattern ==false){

        throw 'Please input valid value '
        
    }else{

        console.log(`

        Your name    : ${name}
        Your age     : ${age}
        Your email   : ${email}
        Your User    : ${userName}
        Your Pass    : ${password}
        
        
        `)
    }

}catch(err){

    console.error(err)

}


