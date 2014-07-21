var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "ffms-link",
  label: "Firefox Marketplace",
  icon: {
    "16": "./16.png",
    "32": "./32.png",
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://marketplace.firefox.com/");
}