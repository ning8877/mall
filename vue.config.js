const path = require('path');//引入path模块

function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports={
    devServer:{
        port:8080,
        open:true,
    },
    configureWebpack: {
        resolve: {
          alias: {
            'assets':'@/assets',
            'common':'@/components/common',
            'components':'@/components',
            'views':'@/views',
            'network':'@/network',
          }
        }
    }
}

