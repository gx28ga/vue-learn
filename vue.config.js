module.exports = {
    runtimeCompiler: true,
    devServer: {
        // 设置代理
        proxy: {
          "/api": {
            target: "http://localhost:9999/", 
            
            changeOrigin: true, 
            
          }
        }
      }
    

}