"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $checker, $expect_Util }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const response = (await $checker.checkRank());
      console.log(("Body: " + response.body));
      (await $expect_Util.equal(response.status_code, 200));
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-2.js.map