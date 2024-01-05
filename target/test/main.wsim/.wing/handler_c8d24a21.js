"use strict";
exports.handler = async function(event) {
  return await (
          (await (async () => {
            const $Closure1Client = 
          require("./inflight.$Closure1-2.js")({
            $checker: 
      (await (async () => {
        const RankCheckerClient = 
      require("./inflight.RankChecker-1.js")({
        $http_Util: require("/home/egoebelbecker/.nvm/versions/node/v20.10.0/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/http/http.js").Util,
        $util_Util: require("/home/egoebelbecker/.nvm/versions/node/v20.10.0/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/util/util.js").Util,
      })
    ;
        const client = new RankCheckerClient({
          $this_bodyString: "[{\"language_code\":\"en\",\"location_code\":2840,\"keyword\":\"javascript\"}]",
          $this_password: (function() {
  let handle = process.env.SECRET_HANDLE_c38aef71;
  if (!handle) {
    throw new Error("Missing environment variable: SECRET_HANDLE_c38aef71");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle);
})(),
          $this_userName: (function() {
  let handle = process.env.SECRET_HANDLE_68f60153;
  if (!handle) {
    throw new Error("Missing environment variable: SECRET_HANDLE_68f60153");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle);
})(),
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
            $expect_Util: require("/home/egoebelbecker/.nvm/versions/node/v20.10.0/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/expect/assert.js").Util,
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ).handle(event);
};