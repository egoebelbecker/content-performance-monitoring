bring cloud;
bring util;
bring http;
bring expect;

  struct Response {
    status_code: num;
    body: str;
  }


  pub class RankChecker {
    userName: cloud.Secret;
    password: cloud.Secret;
    bodyString: str;


    new(keyword: str?) {
      this.userName = new cloud.Secret(
          name: "dataForSeoUsername",
      ) as "UserSecret";

      this.password = new cloud.Secret(
          name: "dataForSeoPassword",
      ) as "PasswordSecret";

      let bodyJson = Json [{
        "language_code": "en",
        "location_code": 2840,
        "keyword": keyword
      }];

      this.bodyString = Json.stringify(bodyJson);
  
    }

    pub inflight checkRank(): Response {
      let auth = util.base64Encode("{this.userName.value()}:{this.password.value()}");
  
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Basic " + auth
      };

      let url = "https://api.dataforseo.com/v3/serp/google/organic/live/regular";

      let response = http.post(url, {
        headers:
          headers,
        body: 
          this.bodyString
        });
  
      let myResponse = Response {
        status_code: response.status,
        body: response.body
      };
      return myResponse;

    }

  }












