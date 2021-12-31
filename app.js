var http = require('http')
var fs=require('fs'); //用来读取文件
const {resolve} = require('path')
const os = require('os')
function getIPAdress() {
  let interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
      var iface = interfaces[devName]
      for (var i = 0; i < iface.length; i++) {
          let alias = iface[i];
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
              // console.log(alias.address);
              return alias.address
          }
      }
  }
}
console.log(getIPAdress())
var serve = http.createServer((req, res) => {
  var url = req.url
  let file = resolve('./index.html')
  if (req.url === '/') {
    file = resolve('./public/index.html')
    console.log('index',file)
  }else {
    file = resolve('./' + req.url)
    console.log('请求资源文件',file)
  }
  fs.readFile(file,function(err,data){
    if(err){
      res.writeHeader(404,{
          'content-type' : 'text/html;charset="utf-8"'
      });
      res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
      res.end();
    }else{
      if (req.url == '/') {
        res.writeHeader(200,{
          'content-type' : 'text/html;charset="utf-8"'
        });
        res.write(data);//将index.html显示在客户端
        res.end();
      }else {
        let type = req.url.split('.')[req.url.split('.').length - 1]
        switch(type){
          case 'js': res.writeHeader(200,{
            'content-type' : 'text/javascript;charset="utf-8"'
          });break
          case 'css': res.writeHeader(200,{
            'content-type' : 'text/css;charset="utf-8"'
          });break
        }
        res.write(data);//将index.html显示在客户端
        res.end();
      }
    }
  })
}).listen(3100)

function getFileResponse (url) {
  
}
console.log(`
服务开启成功
本地地址： http://localhost:3100
IP地址： http://${getIPAdress()}:3100
`)