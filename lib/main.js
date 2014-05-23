var { ActionButton } = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var ffms = ActionButton({
    id: "ffms",
    label: "Firefox Marketplace",
    icon: {
      self.data.url("16.png")
      self.data.url("32.png")
    },
    onClick: function() {
      tabs.open("https://marketplace.firefox.com/");
    }
});