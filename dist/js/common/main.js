require.config({baseUrl:"js",paths:{template:"libs/template-native",director:"libs/director.min",zepto:"libs/zepto.min",common:"common/common",Public:"common/Public",categories:"categories"}}),require(["require","common","director","zepto"],function(){console.log("ok1");var o=location.pathname,e=o.split("/"),i=e[e.length-1],t=i.replace(".html","");require([t],function(){console.log("ok---  "+t)})});