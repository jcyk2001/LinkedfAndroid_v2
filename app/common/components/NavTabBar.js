import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {COLOR} from '../vars'

export default class NavTabBar extends Component {

  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    tabNames: React.PropTypes.array, // 保存Tab名称
    tabIconNames: React.PropTypes.array, // 保存Tab图标
  }
  constructor(props) {
    super(props)
    this.tabIcons = []
  }
  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue.bind(this));
  }
  setAnimationValue({ value, }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  }
  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }
  render() {
    return (
      <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    )
  }
  renderTabOption(tab, i) {
    const color = this.props.activeTab == i? "#2196f3" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
    var image;
    if (i == 0) {
        image = this.props.tabIconNames[i];
        if (this.props.activeTab == i) {
          image = 'home_page_courses'
        }
    }
    if (i == 1) {
        image = this.props.tabIconNames[i];
        if (this.props.activeTab == i) {
          image = 'home_page_search'
        }
    }
    if (i == 2) {
        image = this.props.tabIconNames[i];
        if (this.props.activeTab == i) {
          image = 'home_page_mine'
        }
    }
    return (
      <TouchableOpacity onPress={()=>this.props.goToPage(i)} key={i} style={styles.tab,this.props.style}>
          <View style={styles.tabItem}>
              <Image
                  source={{uri:image}}  // 图标
                  style={{width:20,height:20,marginBottom:8,resizeMode: Image.resizeMode.contain}}
                  />
              <Text style={{color: color,fontSize:10}}>
                  {this.props.tabNames[i]}
              </Text>
          </View>
      </TouchableOpacity>
     );
  }
}

const styles = StyleSheet.create({
  tabs: {
		flexDirection: 'row',
		// height: 50,，
    backgroundColor: COLOR.BG,
    borderColor: COLOR.gray_light,
    borderTopWidth: 1
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
    marginTop: 8
	},
});
