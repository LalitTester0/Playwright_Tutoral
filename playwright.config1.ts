import { chromium, defineConfig } from "@playwright/test";


const Config=
({
testDir:'./tests',
timeout: 40*1000,
expect:{
  timeout :5000,
},
retries:1,
reporter:'html',
projects : [
  {
    name:'safari'
  ,
  use:{
  browserName:'webkit',
  headless : true,
  screenshot: 'on',
  trace:'retain-on-failure'
  }
  },
  {
    name:'chrome execution'
  ,
  use:{
  browserName:'chromium',
  headless : true,
  screenshot: 'on',
  trace:'retain-on-failure'
  }
  },
],})



export default Config;