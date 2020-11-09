module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,  //设计稿的宽高
      viewportHeight:667,
      unitPrecision:5,  //小数位数
      viewportUnit:'vw', //指定单位
      selectorBlackList:['ignore','tab-bar','tab-bar-item'], //不需要转换的内容
      minPixelValue:1, //最小的转换单位
      mediaQuery:false,  //允许在媒体查询中转换px
    }
  }
}