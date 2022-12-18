var randomEmail = function(domain){
    var name = Math.random().toString(36).substring(7);
    var email = name + "@" + domain;
    return email;
}
    var inputDomain = "gmail.com";
    var emailAdd = randomEmail(inputDomain);
    console.log("email:   "+ emailAdd);
