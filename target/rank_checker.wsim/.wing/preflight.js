"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const cloud = $stdlib.cloud;
const util = $stdlib.util;
const http = $stdlib.http;
const expect = $stdlib.expect;
class RankChecker extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
    console.log("RankChecker constructor called");
    this.userName = this.node.root.new("@winglang/sdk.cloud.Secret", cloud.Secret, this, "UserSecret", { name: "dataForSeoUsername" });
    console.log("RankChecker got first secret");
    this.password = this.node.root.new("@winglang/sdk.cloud.Secret", cloud.Secret, this, "PasswordSecret", { name: "dataForSeoPassword" });
    console.log("RankChecker got second secret");
  }
  static _toInflightType() {
    return `
      require("./inflight.RankChecker-1.js")({
        $http_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(http.Util, "@winglang/sdk/http", "Util"))},
        $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
        $util_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(util.Util, "@winglang/sdk/util", "Util"))},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const RankCheckerClient = ${RankChecker._toInflightType(this)};
        const client = new RankCheckerClient({
          $this_password: ${$stdlib.core.liftObject(this.password)},
          $this_userName: ${$stdlib.core.liftObject(this.userName)},
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  _supportedOps() {
    return [...super._supportedOps(), "checkRank", "$inflight_init"];
  }
  _registerOnLift(host, ops) {
    if (ops.includes("$inflight_init")) {
      RankChecker._registerOnLiftObject(this.password, host, []);
      RankChecker._registerOnLiftObject(this.userName, host, []);
    }
    if (ops.includes("checkRank")) {
      RankChecker._registerOnLiftObject(this.password, host, ["value"]);
      RankChecker._registerOnLiftObject(this.userName, host, ["value"]);
    }
    super._registerOnLift(host, ops);
  }
}
module.exports = { RankChecker };
//# sourceMappingURL=preflight.js.map