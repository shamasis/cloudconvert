/*
 Node wrapper for API of cloudconvert.org
 Copyright (c) 2013 Shamasis Bhattacharya <mail@shamasis.net>
*/
(function(){var a="undefined"===typeof window?require&&require("xmlhttprequest").XMLHttpRequest:window.XMLHttpRequest,b;b=function(b){b=(b||"")+"";this.apiKey=function(){return b};this.processCount=0};b.prototype={start:function(b,d){var c=new a;c.onreadystatechange=function(){4===this.readyState&&200<=c.status&&300>c.status&&this.processCount++};c.overrideMimeType&&c.overrideMimeType("text/plain");c.open("POST","https://api.cloudconvert.org/process");c.setRequestHeader("X-CloudConvert-ApiKey",this.apiKey());
c.send(["inputformat=",escape(b),"&outputformat=",escape(d)].join(""))}};b.prototype.constructor=b;(module||window).exports={Converter:b}})();
