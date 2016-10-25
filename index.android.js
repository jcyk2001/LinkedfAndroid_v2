/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Animated,
} from 'react-native';

import EventCenter from './app/common/components/EventCenter'
import NavTabBar from './app/common/components/NavTabBar'

import ScrollableTabView from 'react-native-scrollable-tab-view';

import PgHome1 from './app/PgHome1';
import PgHome2 from './app/PgHome2';
import PgHome3 from './app/PgHome3';
import PgHome4 from './app/PgHome4';

global.NavTabBarH = 50;

export default class LinkedfAndroid_v2 extends Component {
  render() {
    return (
      <Navigator
        ref={(nav) => { navigator = nav }}
        initialRoute={{id: 'BottomScrollableTab', index: 0}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
    );
  }

  renderScene(route, navigator) {
    let inner = () => {
      let routeId = route.id;
      // let passedProps = Object.assign(route || {}, {navigator: navigator, onPgLoadingDone: this.onPgLoadingDone, onPgLoading: this.onPgLoading})
      let passedProps = Object.assign(route || {});
      switch (routeId) {
        case 'Register':
        return (<Register {...passedProps}/>);
        case 'BottomScrollableTab':
        default:
        return <BottomScrollableTab {...passedProps}/>
      }
    }
    return inner();
  }
}

class BottomScrollableTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTabBarTop: new Animated.Value(0),
      tabNames: ['首页', '法规库', ,'问答', '个人中心',],
      tabIconNames: ['icon1', 'icon2', 'icon3', 'icon4', ],
      tabIconNames_active: ['icon1', 'icon2', 'icon3', 'icon4', ],
    }
    this.renderTabBar = () =>  <NavTabBar style={{ top: this.state.navTabBarTop,
      height: this.state.navTabBarTop.interpolate({
        inputRange: [0, NavTabBarH],
        outputRange: [NavTabBarH, 0]
      }),	flex: 1,justifyContent: 'center',alignItems: 'center',
    }} tabNames={this.state.tabNames} tabIconNames={this.state.tabIconNames} tabIconNames_active={this.state.tabIconNames_active}/>
    this.showTabBar = (isShow: Bool) => {
      Animated.timing( this.state.navTabBarTop, {
        toValue: isShow ? 0 : NavTabBarH
      }).start()
    }
  }

  componentWillMount() {
    EventCenter.on("ShowTabBar", this.showTabBar)
  }

  render() {
    let passedProps = Object.assign( {}, {navigator: navigator, showTabBar: this.showTabBar})
    let style_tab = {}
    return (
      <View style={{flex: 1}}>
        <ScrollableTabView renderTabBar={this.renderTabBar} style={[style_tab]}>
          <PgHome1 tabLabel="key1" {...passedProps} style={styles.tabView}/>
          <PgHome2 tabLabel="key2" {...passedProps} style={styles.tabView}/>
          <PgHome3 tabLabel="key3" {...passedProps} style={styles.tabView}/>
          <PgHome4 tabLabel="key4" {...passedProps} style={styles.tabView}/>
        </ScrollableTabView>
      </View>
    )
  }

  _renderTabBar(){
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LinkedfAndroid_v2', () => LinkedfAndroid_v2);
