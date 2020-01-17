const path = require('path')

function resolve(dir){
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                '@': resolve('src')
            }
        }
    },

    chainWebpack(config){

        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },

    pages: {
    //   /** 这里是Vue Cli3里面的示例 */
      index: {
        entry: 'src/pages/index/main.js',
        template: 'public/index.html',
        filename: 'index.html',   // 在dist/index.html输出
        // template中的title标签需要是<title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page', 
        // 在这个页面中包含的块，默认情况下会包含提取出来的通用chunk和vendor chunk
        // chunk: ['chunk-vendors', 'chunk-common', 'index']  
      },
    //   // 当使用只有入口的字符串格式时，模板会被推导为public/subpage.html（对应template默认设置）, 
    //   // 并且如果找不到的话 就回退到public/index.html。
    //   // 输出文件名会被推导为 subpage.html（对应filename 默认值）
    //   // 简写形式
    //   subpage: 'src/subpage/main.js',
      
      /** 这里是简书上的例子 */
      console: {
        // 应用入口配置 相当于单页面应用的main.js 必须项
        entry: 'src/pages/console/main.js',
        // 应用的模板 相当于单页面应用中的public/index.html 可选项，省略时默认与模块名一致
        tempalte: 'public/index.html',
        // 编译后在dist目录的输出文件名，可选 默认与模块名一致
        filename: 'console/index.html',
        // 标题 可选 一般情况不使用 通常是在路由切换时设置title
        title: 'Console Page',
        // 包含的模块  可选
        // chunks: ['consoleT']
      }
    },
}
