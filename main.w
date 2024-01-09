bring cloud;
bring util;
bring http;
bring expect;
bring "./rank_checker.w" as rankChecker;

let checker = new rankChecker.RankChecker();
let api = new cloud.Api();
log("Starting rank checker");
api.get("/rank/:keyword", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {

  let search = request.vars.get("keyword");
  log("Checking rank for " + search);

  let result = checker.checkRank(search);
  return cloud.ApiResponse{
    status: 200,
    body: Json.stringify(result)
  };
});

