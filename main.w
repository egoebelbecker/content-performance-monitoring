bring cloud;
bring util;
bring http;
bring expect;
bring "./rank_checker.w" as rankChecker;

let checker = new rankChecker.RankChecker("javascript");


test "authenticated" {

  let response = checker.checkRank();
  log("Body: " + response.body);
    expect.equal(response.status_code, 200);
}