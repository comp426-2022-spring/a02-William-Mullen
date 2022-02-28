import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

var args = minimist(process.argv.slice(2))


var cal = args.call;
if ((cal == "heads") | (cal == "tails")) {
    console.log(flipACoin(cal))
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}
