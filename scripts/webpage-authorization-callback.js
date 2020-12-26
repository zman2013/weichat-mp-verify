const mp_verify_file_content = process.argv[2]
const port = process.argv[3]===undefined? 8081 : process.argv[3]

const http = require('http')
http.createServer((req, res) => {
	res.end(mp_verify_file_content)
}).listen(port,  ()=>console.log('listening on', port))