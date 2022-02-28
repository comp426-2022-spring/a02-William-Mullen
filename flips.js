import { coinFlips,countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

var args = minimist(process.argv.slice(2))
var num = args.number;

if (num == undefined) {
    num = 1;
}

var arr = coinFlips(num)
console.log(arr)
console.log(countFlips(arr))