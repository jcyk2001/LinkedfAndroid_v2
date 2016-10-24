import { Navigator } from 'react-native'
import constantMirror from 'constant-mirror'
const blue_light = '#2196f3'
const red_light = '#F44E57'
const white = '#FFF'
export const COLOR = {
  BG: white,
  Nav_BG: white,
  active: blue_light,
  gray: '#777',
  gray_light: '#ccc',
  gray_lighter: '#eee',
  danger: red_light,
  gainsboro: '#dcdcdc',
  tomato: '#ff6347',
  fontcolor_grey: '#696969',
  fontcolor_white: '#ffffff',
  fontcolor_black: '#404040',
  button_bule: '#348AFF',
}
export const DatePattern = {
	TMSTAMP: "yyyy-MM-dd hh:mm:ss.S",
  DATE: "yyyy-MM-dd",
  TIME: "hh:mm",
  TIME_LONG: "hh:mm:ss",
  DATE_TIME: "yyyy-MM-dd hh:mm",
  MD_TIME: "MM-dd hh:mm"
};
export const AsyncStorageKeys = constantMirror(
  'ONLINE_DOWNLOAD_STATUS_MAIN',
  'ONLINE_DETAIL',
  'ONLINE_DOWNLOAD_LIST',
  'SYS_SET_AUTO_PLAY',
  'SYS_SET_NOWIFI_PLAY',
  'SEARCH_DATA',
  'RESERVEENROOL_DATA'
)
global.NavBarHeight = Navigator.NavigationBar.Styles.General.NavBarHeight
global.StatusBarHeight = 25
