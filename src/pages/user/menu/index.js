import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import jump from '@utils/jump'
import classNames from 'classnames'
import './index.scss'

import orderImg from './assets/order.png'
import pinImg from './assets/pin.png'
import bargainImg from './assets/bargain.png'
import creditImg from './assets/credit.png'
import serviceImg from './assets/service.png'
import couponImg from './assets/coupon.png'
import redPacketImg from './assets/red-packet.png'
import allowanceImg from './assets/allowance.png'
import gifCardImg from './assets/gif-card.png'
import locationImg from './assets/location.png'
import safeImg from './assets/safe.png'
import contactImg from './assets/contact.png'
import feedbackImg from './assets/feedback.png'
import helpImg from './assets/help.png'

const MENU_LIST = [{
  key: 'order',
  text: '我的订单',
  img: orderImg
  // img: require('./assets/order.png')
}, {
  key: 'pin',
  text: '我的拼团',
  img: pinImg
}, {
  key: 'bargain',
  text: '我的砍价',
  img: bargainImg
}, {
  key: 'credit',
  text: '我的积分',
  img: creditImg
}, {
  key: 'service',
  text: '退换/售后',
  img: serviceImg
}, {
  key: 'coupon',
  text: '优惠券',
  img: couponImg
}, {
  key: 'red-packet',
  text: '红包',
  img: redPacketImg
}, {
  key: 'allowance',
  text: '津贴',
  img: allowanceImg
}, {
  key: 'gif-card',
  text: '礼品卡',
  img: gifCardImg
}, {
  key: 'location',
  text: '地址管理',
  img: locationImg
}, {
  key: 'safe',
  text: '账号安全',
  img: safeImg
}, {
  key: 'contact',
  text: '联系客服',
  img: contactImg
}, {
  key: 'feedback',
  text: '用户反馈',
  img: feedbackImg
}, {
  key: 'help',
  text: '帮助中心',
  url: 'http://m.you.163.com/help',
  img: helpImg
}]
const COUNT_LINE = 3

export default class Menu extends Component {
  handleClick = (menu) => {
    // NOTE 时间关系，此处只实现帮助中心，用于演示多端 webview
    if (menu.key === 'help') {
      jump({ url: menu.url, title: menu.text })
    } else {
      Taro.showToast({
        title: '目前只实现了帮助中心~',
        icon: 'none'
      })
    }
  }

  render () {
    return (
      <View className='user-menu'>
        {MENU_LIST.map((menu, index) => {
          // NOTE 不用伪元素选择器，需自行计算
          const nth = (index + 1) % COUNT_LINE === 0
          const lastLine = parseInt(index / COUNT_LINE) === parseInt(MENU_LIST.length / COUNT_LINE)
          return (
            <View
              key={menu.key}
              className={classNames(
                'user-menu__item',
                nth && 'user-menu__item--nth',
                lastLine && 'user-menu__item--last',
              )}
              onClick={this.handleClick.bind(this, menu)}
            >
              <Image className='user-menu__item-img' src={menu.img} />
              <Text className='user-menu__item-txt'>{menu.text}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
