import {SHOPCARTURL} from "../constants/FetchApiUrl";

/**
 * 根据用户的信息获取当前的购物车列表
 * @param cb
 */
var getShopCartListByUser =  function (cb) {
  fetch(SHOPCARTURL).then(response=>{
    response.json().then(data=>{
      cb(data);
    })
  });
}


module.exports = {
  getShopCartListByUser
}
