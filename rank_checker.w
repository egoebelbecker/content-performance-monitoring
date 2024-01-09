bring cloud;
bring util;
bring http;
bring expect;

  pub struct Response {
    status_code: num;
    body: str;
  }


  pub class RankChecker {
    userName: cloud.Secret;
    password: cloud.Secret;


    new() {
      log("RankChecker constructor called");
      this.userName = new cloud.Secret(
          name: "dataForSeoUsername",
      ) as "UserSecret";
      log("RankChecker got first secret");

      this.password = new cloud.Secret(
          name: "dataForSeoPassword",
      ) as "PasswordSecret";
      log("RankChecker got second secret");

    }

    pub inflight checkRank(keyword: str?): Response {
      let auth = util.base64Encode("{this.userName.value()}:{this.password.value()}");
  
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Basic " + auth
      };


      let bodyJson = Json [{
        "language_code": "en",
        "location_code": 2840,
        "keyword": keyword ?? "foobar"
      }];


      let url = "https://api.dataforseo.com/v3/serp/google/organic/live/regular";

      let response = http.post(url, {
        headers:
          headers,
        body: 
            Json.stringify(bodyJson)
        });
  
      let myResponse = Response {
        status_code: response.status,
        body: response.body
      };
      return myResponse;

    }

  }












