/**
 * React Native 原生组件
 */
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'

export default class WebViewRN extends Component {
  render() {
    return (
      <WebView
        style={{ height: '100%' }}
        originWhitelist={['*']}
        source={{ uri: this.props.src }}
      />
    )
  }
}
