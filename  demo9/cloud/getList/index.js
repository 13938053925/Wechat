// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  cloud.database().collection("list").get({
    success(res){
      console.log(res)
    },
    fail:console.error
  })
}