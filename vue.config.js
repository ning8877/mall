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
    },
    // module:{
    //     rules:[
    //         {
    //             test:/\.css$/, 
    //             use:['style-loader','css-loader']
    //         },
    //         {
    //             test:/\.less$/,
    //             use:[{
    //                 loader:'style-loader'
    //             },{
    //                 loader:'css-loader'
    //             },{
    //                 loader:'less-loader'
    //             }]
    //         },
    //         {
    //             test:/\.(png|jpg|gif)$/,
    //             use:[{
    //                 loader:'url-loader',
    //                 options:{
    //                     exclude:[],
    //                     limit:8192,//限制图片的大小
    //                     name:'img/[name].[hash:8].[ext]'
    //                 }
    //             }]
    //         },
    //         {
    //             test:/\.m?js$/,
    //                 exclude:/(node-Modules|bower_components)/,
    //                 use:{
    //                     loader:'babel-loader',
    //                     options:{
    //                         presets:['es2015']
    //                     }
    //                 }
    //         },
    //         {
    //             test:/\.vue$/,
    //             use:['vue-loader']
    //         }
    //     ],
    // },
  /*   plugins:[
        new HtmlWebPlugin({
            template:'index.html'
            //template表示根据什么模板来生成index.html
        })
    ], */

}

