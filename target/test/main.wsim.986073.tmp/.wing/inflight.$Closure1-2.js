"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $checker, $std_Json }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const result = (await $checker.checkRank(((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(request.vars, "keyword")));
      return ({"status": 200, "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(result)});
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-2.js.map