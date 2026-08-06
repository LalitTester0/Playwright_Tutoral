import { chromium, defineConfig } from "@playwright/test";


const Config=
({
testDir:'./tests',
timeout: 40*1000,
expect:{
  timeout :5000,
},
reporter:'allure-playwright',

use:{
  browserName:'chromium',
  headless : true,
  screenshot: true,
  trace:'retain-on-failure'
}


})

export default Config;