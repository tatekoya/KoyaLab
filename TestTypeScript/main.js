"use strict";
var hoge;
(function (hoge) {
    hoge["Red"] = "\u8D64";
    hoge["Green"] = "\u7DD1";
    hoge["Blue"] = "\u9752";
    hoge["Yellow"] = "\u9EC4";
})(hoge || (hoge = {}));
;
let color = hoge.Red;
console.log(color);
