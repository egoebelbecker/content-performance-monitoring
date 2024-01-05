"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $http_Util, $util_Util }) {
  class RankChecker {
    constructor({ $this_bodyString, $this_password, $this_userName }) {
      this.$this_bodyString = $this_bodyString;
      this.$this_password = $this_password;
      this.$this_userName = $this_userName;
    }
    async checkRank() {
      const auth = (await $util_Util.base64Encode(String.raw({ raw: ["", ":", ""] }, (await this.$this_userName.value()), (await this.$this_password.value()))));
      const headers = ({"Content-Type": "application/json", "Authorization": ("Basic " + auth)});
      const url = "https://api.dataforseo.com/v3/serp/google/organic/live/regular";
      const response = (await $http_Util.post(url, ({"headers": headers, "body": this.$this_bodyString})));
      const myResponse = ({"status_code": response.status, "body": response.body});
      return myResponse;
    }
  }
  return RankChecker;
}
//# sourceMappingURL=inflight.RankChecker-1.js.map