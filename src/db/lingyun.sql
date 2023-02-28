/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80029 (8.0.29)
 Source Host           : localhost:3306
 Source Schema         : lingyun

 Target Server Type    : MySQL
 Target Server Version : 80029 (8.0.29)
 File Encoding         : 65001

 Date: 28/02/2023 11:31:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ly_addresses
-- ----------------------------
DROP TABLE IF EXISTS `ly_addresses`;
CREATE TABLE `ly_addresses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL COMMENT '用户ID',
  `consignee` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '收货人',
  `phone` bigint NOT NULL COMMENT '收货人电话',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '收货人地址',
  `is_default` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否默认地址',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ly_carts
-- ----------------------------
DROP TABLE IF EXISTS `ly_carts`;
CREATE TABLE `ly_carts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `goods_id` int NOT NULL COMMENT '商品id',
  `user_id` int NOT NULL COMMENT '用户id',
  `number` int NOT NULL COMMENT '产品数量',
  `selected` tinyint(1) NOT NULL DEFAULT 1 COMMENT '勾选状态',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ly_goods
-- ----------------------------
DROP TABLE IF EXISTS `ly_goods`;
CREATE TABLE `ly_goods`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品名',
  `goods_price` decimal(10, 2) NOT NULL COMMENT '商品价格',
  `goods_num` int NOT NULL COMMENT '商品库存',
  `goods_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品图片',
  `goods_discounts` decimal(10, 2) NOT NULL DEFAULT 0.00 COMMENT '商品优惠价格',
  `goods_shop` int NOT NULL COMMENT '商品所属店铺',
  `goods_classify` int NOT NULL COMMENT '商品分类码',
  `goods_sell` int NOT NULL DEFAULT 0 COMMENT '商品已售卖数',
  `goods_data` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品详细信息',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ly_orders
-- ----------------------------
DROP TABLE IF EXISTS `ly_orders`;
CREATE TABLE `ly_orders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL COMMENT '用户id',
  `address_id` int NOT NULL COMMENT '地址id',
  `goods_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品信息',
  `total` decimal(10, 2) NOT NULL COMMENT '总价',
  `order_number` char(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '订单编号',
  `status` int NOT NULL DEFAULT 0 COMMENT '订单状态, 0:未支付,1:已支付,2:已发货,3:已签收,4:取消;',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ly_users
-- ----------------------------
DROP TABLE IF EXISTS `ly_users`;
CREATE TABLE `ly_users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` bigint NOT NULL COMMENT '用户名,唯一',
  `user_pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户密码',
  `user_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户网名',
  `user_portrait` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'ly_123456789' COMMENT '用户头像',
  `user_shop` bigint NOT NULL DEFAULT 0 COMMENT '用户店铺号',
  `is_admin` bigint NOT NULL DEFAULT 0 COMMENT '是否为管理员',
  `user_age` bigint NOT NULL DEFAULT 18 COMMENT '用户年龄',
  `user_sex` bigint NOT NULL DEFAULT 0 COMMENT '用户性别,0为保密,1为男性,2为女性',
  `user_explained` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户个性签名',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_name`(`user_name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
