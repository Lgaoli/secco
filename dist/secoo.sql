/*
Navicat MySQL Data Transfer

Source Server         : db
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : secoo

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-03-25 12:29:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) NOT NULL,
  `money` float(255,0) NOT NULL,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `changdi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('13', '【包税】CHANEL/香奈儿 COCO女士摩登可可小姐香水EDP', '13135', '../img/tp.jpg', '../images/tp7.jpg', '../images/tp.jpg', '美国');
INSERT INTO `list` VALUES ('12', 'VERSACE/范思哲晶钻女用香水（香恋水晶/粉钻）', '2323', '../img/tp5.jpg', '../images/tp7.jpg', '../images/tp5.jpg', '香港');
INSERT INTO `list` VALUES ('11', '【包税】BURBERRY/博柏利男士香水布格伦敦香水EDT', '639', '../img/tp7.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('10', '【免税】DIOR/迪奥 冰火奇葩  (白毒药）EDP 女士香水  100ml', '4547', '../img/tp098.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('9', '【包税】CHANEL/香奈儿  邂逅清新绿色邂逅淡香水 两种规格可选', '4677', '../img/tp11.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('7', 'CHANEL/香奈儿 邂逅清新淡香水 50ml', '7875', '../img/tp1.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('5', '【包税】DIOR/迪奥  女士香水 真我Edt 淡香100ml', '5688', '../img/tp6.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '英国');
INSERT INTO `list` VALUES ('6', 'DIOR/迪奥小姐花漾淡香水100ml', '5642', '../img/tp4.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('3', 'GUCCI/古驰罪爱男士淡香水(原罪男士)', '54545', '../img/tp11.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '泰国');
INSERT INTO `list` VALUES ('4', 'DIOR/迪奥小姐花漾淡', '5442', '../img/tp123469.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '新加波');
INSERT INTO `list` VALUES ('2', '【包税】CHANEL/香奈儿  邂逅柔情粉邂逅淡香水 两种规格可选', '8787', '../img/tp1231.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('14', '【包税】CHANEL/香奈儿  邂逅柔情粉邂逅淡香水 两种规格可选', '8787', '../img/tp1231.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('15', 'GUCCI/古驰罪爱男士淡香水(原罪男士)', '54545', '../img/tp11.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '泰国');
INSERT INTO `list` VALUES ('16', 'DIOR/迪奥小姐花漾淡', '5442', '../img/tp123469.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '新加波');
INSERT INTO `list` VALUES ('17', '【包税】DIOR/迪奥  女士香水 真我Edt 淡香100ml', '5688', '../img/tp6.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '英国');
INSERT INTO `list` VALUES ('18', 'DIOR/迪奥小姐花漾淡香水100ml', '5642', '../img/tp4.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('19', 'CHANEL/香奈儿 邂逅清新淡香水 50ml', '7875', '../img/tp1.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('20', 'CHANEL/香奈儿  N°5五号香水 50ml', '858', '../img/tp2.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('21', '【包税】CHANEL/香奈儿  邂逅清新绿色邂逅淡香水 两种规格可选', '4677', '../img/tp11.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('22', '【免税】DIOR/迪奥 冰火奇葩  (白毒药）EDP 女士香水  100ml', '4547', '../img/tp098.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('23', '【包税】BURBERRY/博柏利男士香水布格伦敦香水EDT', '639', '../img/tp7.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('24', 'VERSACE/范思哲晶钻女用香水（香恋水晶/粉钻）', '2323', '../img/tp5.jpg', '../images/tp5.jpg', '../images/tp7.jpg', '香港');
INSERT INTO `list` VALUES ('25', 'dqweq', '8865', '../img/tp5.jpg', '../images/tp5.jpg', '../images/tp7.jpg', ' 大陆');

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(20) NOT NULL,
  `xulie` int(20) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) NOT NULL,
  `num` int(20) NOT NULL,
  `money` int(20) NOT NULL,
  `img` varchar(255) NOT NULL,
  `changdi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`xulie`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('13', '19', '【包税】CHANEL/香奈儿 COCO女士摩登可可小姐香水EDP', '4', '13135', '../img/tp.jpg', '美国');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(16) NOT NULL,
  `password` char(32) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('39', '999@qq.com', '123');
INSERT INTO `user` VALUES ('38', '1233@qq.com', '123');
INSERT INTO `user` VALUES ('37', '123@qq.com', '123');
INSERT INTO `user` VALUES ('36', '13267690537', '1');

-- ----------------------------
-- Table structure for xuanran
-- ----------------------------
DROP TABLE IF EXISTS `xuanran`;
CREATE TABLE `xuanran` (
  `gid` int(20) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) NOT NULL,
  `money` float(255,0) NOT NULL,
  `img` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xuanran
-- ----------------------------
INSERT INTO `xuanran` VALUES ('1', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('2', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('3', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('4', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('5', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('6', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('7', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('8', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('9', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('10', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('11', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('12', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('13', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('14', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('15', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
INSERT INTO `xuanran` VALUES ('16', 'LAURENT PARIS', '15625', 'img/7559837f782349dfb3fcfe9f9b310ce9.jpg', '圣罗兰/圣罗兰18秋冬女士黑色小牛皮金属LOGO徽标仿鳄鱼皮时尚链条单肩斜挎包');
SET FOREIGN_KEY_CHECKS=1;
