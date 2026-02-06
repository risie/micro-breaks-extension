import browser from "webextension-polyfill";

console.log("Hello from the background!");

browser.runtime.onInstalled.addListener((details: any) => {
  console.log("Extension installed:", details);
});
