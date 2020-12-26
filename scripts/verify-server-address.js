var crypto = require('crypto');
var url = require('url');
var http = require('http')

const webchat_token = process.argv[2]
const port = process.argv[3]===undefined? 8081 : process.argv[3]

wechat = function(req,res){
    var query = url.parse(req.url,true).query;
    var signature = query.signature;
    var timestamp = query.timestamp;
    var nonce = query.nonce;
    var echostr = query.echostr;
    if(check(timestamp,nonce,signature, webchat_token)){
        res.end(echostr);
    }else{
        res.end("It is not from weixin");
    }
};
 
function check(timestamp,nonce,signature,token){
    var currSign,tmp;
    tmp = [token,timestamp,nonce].sort().join("");
    currSign = crypto.createHash("sha1").update(tmp).digest("hex");
    return (currSign === signature);  
};


http.createServer(wechat).listen(port, ()=>console.log('listening on', port))
