bring cloud;

// dataForSeoUsername:erik@hitsubscribe.com
// dataForSeoPassword:8b3564dce0e01e5f


let userName = new cloud.Secret(
    name: "dataForSeoUsername",
) as "UserSecret";

let password = new cloud.Secret(
    name: "dataForSeoPassword",
) as "PasswordSecret";



class RankChecker {  
    pub extern "./rank-checker.js" static inflight getDataForSeoResults(username: str, 
                                                                        password: str, 
                                                                        url: str, 
                                                                        key: str): str;
}
  

new cloud.Function(inflight () => {

    let userNameValue = userName.value();
    let passwordValue = password.value();

    let result = RankChecker.getDataForSeoResults(userNameValue, 
                                                  passwordValue, 
                                                  "https://www.proxyrack.com/blog/puppeteer-waitforselector/", 
                                                  "puppeteer waitforselector");

    log(result);
});