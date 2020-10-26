/* const path = require('path')
const webpack = require('webpack')

module.exports={
    entry:'./src/main.js',
    output:{
        //这个需要绝对路径,path.resolve()拼接路径，__dirname是自动存在的
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js',
        //publicPath:'dist/' //所有涉及到url的东西都会自动加上这个路径前缀，为了图片的显示问题
    },
    module:{
        rules:[
            {
                test:/\.css$/, //以.css结尾的文件
                use:['style-loader','css-loader']
                //css-loader只负责加载css文件，style-loader负责将样式添加到DOM中
                //使用多个loader时，从右向左起效果，先加载再处理
            },
            {
                test:/\.less$/, //以.less结尾的文件
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                },{
                    loader:'less-loader'
                }]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        exclude:[],
                        //当加载的图片，小于limit时，会将图片编译成base64字符串格式
                        //当加载的图片，大于limit时候，需要使用file-loader模块进行加载
                        limit:8192,//限制图片的大小
                        name:'img/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test:/\.m?js$/,
                    //进行es6转化时，只转化src文件中的就可，下面的不需要进行转化
                    exclude:/(node-Modules|bower_components)/,
                    use:{
                        loader:'babel-loader',
                        options:{
                            presets:['es2015']
                        }
                    }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ],
    },
    resolve:{
        //引入时，不用写文件的后缀名
        extensions:['.js','.css','.vue'],
        alias:{ //alias 别名
            'vue$':'vue/dist/bue.esm.js',
        }
    },
    plugins:[
        new HtmlWebPlugin({
            template:'index.html'
            //template表示根据什么模板来生成index.html
        })
    ]
} */

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
            '@': resolve('src'),
            'assets': resolve('src/assets'),
            'components':resolve('src/components'),
            'views':resolve('src/views'),
          }
        }
      },
    
    // resolve:{
    //     extentions:['.js','.vue','.json'],
    //     alias:{
    //         '@': resolve('src'),
    //         'assets': resolve('src/assets'),
    //         'components':resolve('src/components'),
    //     }

    // },
    // chainWebpack: (config)=>{
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    //         .set('assets',resolve('src/assets'))
    //         .set('components',resolve('src/components'))
    //         .set('views',resolve('src/views'))
            
    // }

}

