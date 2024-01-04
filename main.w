bring cloud;
bring util;
bring http;
bring expect;

let userName = new cloud.Secret(
    name: "dataForSeoUsername",
) as "UserSecret";

let password = new cloud.Secret(
    name: "dataForSeoPassword",
) as "PasswordSecret";


test "authenticated" {

  log("{userName.value()}:{password.value()}");
  let auth = util.base64Encode("{userName.value()}:{password.value()}");

  log(auth);

  let keywords = [
    util.base64Encode("javascript")
  ];

  let j = Json [{
    "language_code": "en",
    "location_code": 2840,
    "keyword": "albert einstein"
  }];

  let json = Json.stringify(j);

  log("Body: " + json);

  let headers = {
    "Content-Type": "application/json",
    Authorization: "Basic " + auth
  };

  log("Headers: " + Json.stringify(headers));


  let url = "https://api.dataforseo.com/v3/serp/google/organic/live/regular";

  let response = http.post(url, {
    headers:
      headers,
    body: 
        json
    });
  log("Body: " + response.body);
  expect.equal(response.status, 200);
}