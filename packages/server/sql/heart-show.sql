/*
SQLyog Community v12.4.3 (64 bit)
MySQL - 10.1.19-MariaDB : Database - heart-show
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`heart-show` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `heart-show`;

/*Table structure for table `l_form` */

DROP TABLE IF EXISTS `l_form`;

CREATE TABLE `l_form` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `opus_id` int(11) NOT NULL,
  `page_idx` int(11) NOT NULL,
  `content` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Table structure for table `l_log` */

DROP TABLE IF EXISTS `l_log`;

CREATE TABLE `l_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `opus_id` int(11) NOT NULL,
  `ip` text NOT NULL,
  `ua` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8;

/*Table structure for table `l_opus` */

DROP TABLE IF EXISTS `l_opus`;

CREATE TABLE `l_opus` (
  `title` varchar(256) NOT NULL,
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

/*Table structure for table `l_share` */

DROP TABLE IF EXISTS `l_share`;

CREATE TABLE `l_share` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `opus_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `picture` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `l_template` */

DROP TABLE IF EXISTS `l_template`;

CREATE TABLE `l_template` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `opus_id` int(11) NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Table structure for table `l_user` */

DROP TABLE IF EXISTS `l_user`;

CREATE TABLE `l_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `password` varchar(32) NOT NULL,
  `salt` varchar(10) NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
