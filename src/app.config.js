export default {
  pages: [
    'pages/home/home',
    'pages/index/index',
    'pages/cate/cate',
    'pages/cart/cart',
    'pages/user-login/user-login',
    'pages/user-login-email/user-login-email',
    'pages/user/user',
    'pages/webview/webview'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/home/home",
      iconPath: "./assets/tab-bar/home.png",
      selectedIconPath: "./assets/tab-bar/home-active.png",
      text: "首页"
    }, {
      pagePath: "pages/cate/cate",
      iconPath: "./assets/tab-bar/cate.png",
      selectedIconPath: "./assets/tab-bar/cate-active.png",
      text: "分类"
    }, {
      pagePath: "pages/cart/cart",
      iconPath: "./assets/tab-bar/cart.png",
      selectedIconPath: "./assets/tab-bar/cart-active.png",
      text: "购物车"
    }, {
      pagePath: "pages/user/user",
      iconPath: "./assets/tab-bar/user.png",
      selectedIconPath: "./assets/tab-bar/user-active.png",
      text: "个人"
    }]
  }
}
