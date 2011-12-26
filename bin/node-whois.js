#!/usr/bin/env node

var util = require('util'),
    exec = require('child_process').exec,
    child;

function whois(string) {
  // Let's delegate to the ruby-whois CLI
  // until a full js implementation is available.
  child = exec('ruby-whois ' + string, display);
}

function display(error, stdout, stderr) {
  util.puts(stdout);
}

whois(process.argv[2]);
