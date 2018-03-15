/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

/**
 * utils函数引入
 **/
import HtmlToJson from './libs/html2json';

/**
 * 主函数入口区
 **/
export const wxParse = (data, imagePadding, DEBUG) => {
  var transData = {}; //存放转化后的数据
    transData = HtmlToJson(data, 'content');
    if (DEBUG) console.log(JSON.stringify(transData, ' ', ' '));
  transData.view = {};
  transData.view.imagePadding = 0;
  if (typeof imagePadding != 'undefined') {
    transData.view.imagePadding = imagePadding;
  }
  return transData;
};
