var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let x=req.query.x;

let random=Math.random().toFixed(2);
let pow=Math.pow(random, random).toFixed(2);
let sign=Math.sign(random).toFixed(2);
let tanh=Math.tanh(random).toFixed(2);
let trunc=Math.trunc(random).toFixed(2);

if(x==undefined){
    x= random;
}
  res.render("computation", { 
    pow: `Math.pow() applied to ${x} is ${pow}`,
    sign: `Math.sign() applied to ${x} is ${sign}`,
    tanh: `Math.tanh() applied to ${x} is ${tanh}`,
    trunc: `Math.trunc() applied to ${x} is ${trunc}`
  });
});

module.exports = router;