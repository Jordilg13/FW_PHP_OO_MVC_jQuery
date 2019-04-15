-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.37-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla comentarios.cart
CREATE TABLE IF NOT EXISTS `cart` (
  `user` int(11) DEFAULT NULL,
  `id_prod` varchar(50) DEFAULT NULL,
  `cant` int(11) DEFAULT NULL,
  `img` varchar(60000) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla comentarios.cart: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` (`user`, `id_prod`, `cant`, `img`, `price`) VALUES
	(13, 'U7013', 2, NULL, NULL),
	(13, 'A1116', 1, NULL, NULL),
	(13, 'A0242', 3, NULL, NULL);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;

-- Volcando estructura para tabla comentarios.likes
CREATE TABLE IF NOT EXISTS `likes` (
  `user_l` varchar(50) DEFAULT 'default',
  `product_code` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla comentarios.likes: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` (`user_l`, `product_code`) VALUES
	('12', 'U7013'),
	('13', 'Y7538'),
	('13', 'Y8566'),
	('13', 'X7561'),
	('13', 'H3531'),
	('12', 'Y8566'),
	('12', 'A1442'),
	('12', 'A1818'),
	('12', 'A1060'),
	('12', 'Y7538'),
	('12', 'A1116');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;

-- Volcando estructura para tabla comentarios.mensajes
CREATE TABLE IF NOT EXISTS `mensajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `asunto` varchar(200) DEFAULT NULL,
  `mensaje` text,
  `hora` time DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla comentarios.mensajes: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
INSERT INTO `mensajes` (`id`, `nombre`, `email`, `asunto`, `mensaje`, `hora`, `fecha`) VALUES
	(1, 'jordi', 'jordi@adad.wa', 'qwer', 'werfgeht354tefheyjri576453qt4', '16:19:32', '2018-12-13'),
	(2, 'laptop', 'hp@saf.es', 'Aviable', 'laptop', '18:48:27', '2018-12-16'),
	(3, 'prova3', 'adas@sad.es11', 'Aviable', '', '19:39:21', '2018-12-16'),
	(4, 'qqqqqqq', 'qqqqq@qq.qq', 'Aviable', '', '19:42:48', '2018-12-16'),
	(5, 'ww', 'adas@sad.es', 'Aviable', '', '19:43:20', '2018-12-16'),
	(6, 'dsfsdf', 'asdf@asd.es', 'Aviable', '', '19:31:21', '2018-12-17'),
	(7, 'wf', 'adas@sad.es', 'Aviable', 'laptop', '19:37:03', '2018-12-17');
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;

-- Volcando estructura para tabla comentarios.products
CREATE TABLE IF NOT EXISTS `products` (
  `product_code` varchar(45) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `m_email` varchar(100) DEFAULT NULL,
  `price` decimal(45,0) DEFAULT NULL,
  `state_product` varchar(45) DEFAULT NULL,
  `product_type` varchar(45) DEFAULT NULL,
  `processor_type` varchar(45) DEFAULT NULL,
  `available_until` varchar(45) DEFAULT NULL,
  `img` varchar(50000) DEFAULT NULL,
  PRIMARY KEY (`product_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla comentarios.products: ~211 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`product_code`, `product_name`, `brand`, `m_email`, `price`, `state_product`, `product_type`, `processor_type`, `available_until`, `img`) VALUES
	('A0242', 'DVU307', 'Vitae Institute', 'non.magna.Nam@nibh.com', 790, 'Available', 'computer', 'i7, i5, i9', '12/06/2020', 'view/img/products/laptop2.jpg'),
	('A1060', 'SXQ926', 'Vivamus Industries', 'tellus@nonummyultricies.edu', 984, 'Unavailable', 'computer', 'i3, i7, i5', '06/01/2020', 'view/img/products/laptop2.jpg'),
	('A1112', 'P6687', 'Medion', 'medion@auto.es', 120, 'Aviable', 'laptop', 'i7', '31/01/2019', 'view/img/products/laptop2.jpg'),
	('A1116', 'autoprod', 'autobrand', 'autoemail@auto.es', 120, 'Available', 'computer', 'i9', '24/01/2019', 'view/img/products/laptop2.jpg'),
	('A1118', 'autoprod', 'autobrand', 'autoemail@auto.es', 120, 'Available', 'laptop', 'i5', '13/01/2019', 'view/img/products/laptop2.jpg'),
	('A1407', 'YFF233', 'Luctus Lobortis Class PC', 'quam@diam.edu', 150, 'Available', 'laptop', 'i7, i3', '21/06/2020', 'view/img/products/laptop2.jpg'),
	('A1442', 'JYE762', 'Ante Bibendum Ullamcorper PC', 'massa@sit.net', 174, 'Available', 'other', 'i3, i9, i7', '18/07/2020', 'view/img/products/laptop2.jpg'),
	('A1818', 'EDM564', 'Porttitor Vulputate Posuere Ltd', 'orci.Ut@aneque.org', 956, 'Unavailable', 'laptop', 'i7, i3, i5, i9', '10/06/2020', 'view/img/products/laptop2.jpg'),
	('A2878', 'XKU979', 'Lacus Mauris Foundation', 'ipsum.dolor@ut.com', 191, 'Unavailable', 'other', 'i5', '09/04/2020', 'view/img/products/laptop2.jpg'),
	('A3487', 'KWY651', 'Donec Consectetuer Incorporated', 'tempus@euarcuMorbi.ca', 360, 'Unavailable', 'other', 'i5, i3, i7', '27/07/2020', 'view/img/products/laptop2.jpg'),
	('A3887', 'ILF013', 'Ornare Elit Consulting', 'enim.gravida.sit@pellentesque.co.uk', 172, 'Available', 'laptop', 'i7', '28/11/2019', 'view/img/products/laptop2.jpg'),
	('A3903', 'EHV538', 'Ut Sem Nulla Corporation', 'sed.est@ornareliberoat.com', 200, 'Available', 'computer', 'i3, i9, i7', '24/11/2019', 'view/img/products/laptop2.jpg'),
	('A5555', 'esketeit', '9999', 'autoemail@auto.es', 120, 'Aviable', 'laptop', 'i3', '08/01/2019', 'view/img/products/laptop2.jpg'),
	('A5558', 'QHI298', 'Non LLP', 'Fusce@lectusNullam.net', 558, 'Unavailable', 'computer', 'i3, i7', '15/02/2020', 'view/img/products/laptop2.jpg'),
	('A7350', 'PWC994', 'At Fringilla Incorporated', 'risus@Lorem.net', 302, 'Unavailable', 'computer', 'i7', '20/11/2020', 'view/img/products/laptop2.jpg'),
	('A7440', 'SSL759', 'Nisi Magna Consulting', 'orci.sem@placerataugueSed.ca', 520, 'Unavailable', 'other', 'i3, i9, i7, i5', '20/08/2020', 'view/img/products/laptop2.jpg'),
	('A8841', 'MSD129', 'Arcu Imperdiet Company', 'velit.in@mi.ca', 188, 'Available', 'other', 'i7', '06/01/2020', 'view/img/products/laptop2.jpg'),
	('A9004', 'BOW196', 'Eu LLP', 'lacus@egestashendrerit.edu', 354, 'Unavailable', 'computer', 'i5', '02/02/2020', 'view/img/products/laptop2.jpg'),
	('B1008', 'CFO567', 'Adipiscing Consulting', 'ut@eratvel.com', 219, 'Available', 'laptop', 'i7, i3, i9', '14/02/2020', 'view/img/products/laptop2.jpg'),
	('B2125', 'RUO206', 'Ipsum LLP', 'sit.amet.orci@malesuadaiderat.com', 601, 'Unavailable', 'laptop', 'i3, i7, i5', '07/05/2020', 'view/img/products/laptop2.jpg'),
	('B7997', 'RXS156', 'Ac Mi Eleifend Consulting', 'erat@at.edu', 449, 'Available', 'other', 'i5', '18/08/2020', 'view/img/products/laptop2.jpg'),
	('B8629', 'KJU930', 'Dictum Industries', 'Aenean@nequenon.co.uk', 727, 'Unavailable', 'laptop', 'i3, i7', '30/06/2020', 'view/img/products/laptop2.jpg'),
	('B9698', 'SLR735', 'Amet Massa Quisque Industries', 'vel.vulputate@justofaucibus.co.uk', 178, 'Unavailable', 'laptop', 'i7, i9', '20/10/2020', 'view/img/products/laptop2.jpg'),
	('B9863', 'XLN730', 'Euismod Urna Corp.', 'vitae.posuere@enim.com', 116, 'Available', 'laptop', 'i9', '18/07/2020', 'view/img/products/laptop2.jpg'),
	('C8384', 'NAB251', 'Sed Tortor Integer Company', 'Ut@convallis.ca', 593, 'Unavailable', 'other', 'i9', '29/08/2020', 'view/img/products/laptop2.jpg'),
	('C8474', 'JJE429', 'Phasellus LLP', 'risus.Donec@etrutrum.co.uk', 359, 'Available', 'other', 'i7', '24/11/2020', 'view/img/products/laptop2.jpg'),
	('D0088', 'VGU660', 'Dui Inc.', 'dis.parturient.montes@necurnasuscipit.net', 827, 'Unavailable', 'computer', 'i5', '07/05/2020', 'view/img/products/laptop2.jpg'),
	('D0847', 'GWF883', 'Donec Vitae Foundation', 'in@nondui.com', 756, 'Available', 'other', 'i9, i3, i7', '25/12/2019', 'view/img/products/laptop2.jpg'),
	('D3289', 'LXM535', 'Dui Semper Et Corp.', 'fringilla@disparturientmontes.ca', 576, 'Unavailable', 'other', 'i3, i9, i7', '26/02/2020', 'view/img/products/laptop2.jpg'),
	('D5100', 'XJE112', 'Cursus Luctus Limited', 'aliquet.Proin@sodalesatvelit.ca', 499, 'Available', 'laptop', 'i7', '08/01/2020', 'view/img/products/laptop2.jpg'),
	('D7451', 'JEJ872', 'Curabitur Ut Consulting', 'Phasellus.dolor@rutrumjustoPraesent.co.uk', 674, 'Available', 'computer', 'i5', '24/01/2020', 'view/img/products/laptop2.jpg'),
	('D9012', 'EIT867', 'Velit Sed Inc.', 'egestas.Aliquam@felis.org', 511, 'Unavailable', 'other', 'i5, i3, i7, i9', '01/01/2020', 'view/img/products/laptop2.jpg'),
	('E0576', 'DYV868', 'Enim PC', 'eget.tincidunt.dui@faucibusorciluctus.org', 277, 'Available', 'other', 'i5, i9', '27/02/2020', 'view/img/products/laptop2.jpg'),
	('E1754', 'VYU382', 'Sed Neque Sed Inc.', 'ipsum.Donec.sollicitudin@egetipsumSuspendisse', 464, 'Available', 'other', 'i7, i5, i3, i9', '02/05/2020', 'view/img/products/laptop2.jpg'),
	('E2180', 'KYO822', 'Tincidunt PC', 'tempor.lorem@ultricies.org', 700, 'Unavailable', 'computer', 'i3, i9, i7', '01/02/2020', 'view/img/products/laptop2.jpg'),
	('E3997', 'NSH366', 'Eu Augue Porttitor Ltd', 'vel.nisl@Quisquepurus.ca', 211, 'Available', 'other', 'i5, i9, i3, i7', '13/05/2020', 'view/img/products/laptop2.jpg'),
	('E5328', 'ONP559', 'Curabitur Vel Lectus Foundation', 'dapibus@justositamet.ca', 574, 'Unavailable', 'other', 'i5', '28/01/2020', 'view/img/products/laptop2.jpg'),
	('E6775', 'FBE696', 'Dignissim Corp.', 'ultrices@tempus.co.uk', 842, 'Available', 'computer', 'i9, i7, i3', '22/07/2020', 'view/img/products/laptop2.jpg'),
	('E6908', 'MAS707', 'Non Luctus Incorporated', 'lobortis.quis@acipsumPhasellus.org', 962, 'Available', 'laptop', 'i3, i5, i7, i9', '20/02/2020', 'view/img/products/laptop2.jpg'),
	('F0439', 'AVR097', 'Egestas Foundation', 'Phasellus.in@Morbi.co.uk', 364, 'Available', 'other', 'i5', '23/10/2020', 'view/img/products/laptop2.jpg'),
	('F1065', 'NPP272', 'Fringilla Donec Institute', 'Duis.risus.odio@eliteratvitae.com', 777, 'Unavailable', 'other', 'i5', '14/11/2020', 'view/img/products/laptop2.jpg'),
	('F1464', 'WDI018', 'Vestibulum Ante Foundation', 'nisi@augueeutellus.edu', 544, 'Unavailable', 'laptop', 'i7, i9', '07/08/2020', 'view/img/products/laptop2.jpg'),
	('F1702', 'HCV752', 'Faucibus Orci Incorporated', 'blandit@Nam.org', 614, 'Unavailable', 'other', 'i5', '19/11/2020', 'view/img/products/laptop2.jpg'),
	('F1966', 'PAN148', 'A PC', 'magna.Lorem@dictum.org', 198, 'Available', 'other', 'i5', '05/11/2020', 'view/img/products/laptop2.jpg'),
	('F4635', 'HVE997', 'Ac Urna Ut Company', 'Nullam@ut.net', 831, 'Unavailable', 'computer', 'i5', '14/04/2020', 'view/img/products/laptop2.jpg'),
	('F7141', 'XCS648', 'Dolor Company', 'sagittis@arcuvel.com', 553, 'Available', 'other', 'i7', '09/10/2020', 'view/img/products/laptop2.jpg'),
	('F8064', 'GCL454', 'Mi Associates', 'torquent@velitin.ca', 402, 'Available', 'laptop', 'i5', '20/08/2020', 'view/img/products/laptop2.jpg'),
	('F9534', 'HXS675', 'Enim Corp.', 'convallis@sodales.co.uk', 351, 'Unavailable', 'laptop', 'i7, i9, i5', '04/01/2020', 'view/img/products/laptop2.jpg'),
	('G0226', 'ZLH161', 'Gravida Sagittis Duis PC', 'amet.risus.Donec@Aliquam.org', 778, 'Unavailable', 'computer', 'i3, i7', '01/10/2020', 'view/img/products/laptop2.jpg'),
	('G0771', 'MHL762', 'Non Ante Bibendum Company', 'dui.Suspendisse.ac@aliquameuaccumsan.org', 965, 'Unavailable', 'laptop', 'i9', '12/09/2020', 'view/img/products/laptop2.jpg'),
	('G3456', 'M999', 'msi', 'msi@auto.es', 120, 'Aviable', 'laptop', 'i7', '24/01/2019', 'view/img/products/laptop2.jpg'),
	('G3544', 'BXA013', 'Ullamcorper Velit In Institute', 'non.enim.Mauris@convallisest.edu', 233, 'Unavailable', 'laptop', 'i3, i5, i9', '25/05/2020', 'view/img/products/laptop2.jpg'),
	('G4860', 'NBZ405', 'Gravida Nunc Foundation', 'risus@felisorciadipiscing.org', 375, 'Available', 'computer', 'i7', '05/06/2020', 'view/img/products/laptop2.jpg'),
	('G6163', 'GXL752', 'Tincidunt Dui LLC', 'sem.vitae.aliquam@eleifend.ca', 384, 'Available', 'laptop', 'i3, i5', '07/08/2020', 'view/img/products/laptop2.jpg'),
	('G7100', 'MGN115', 'Adipiscing Lacus Company', 'Duis@augueeu.net', 774, 'Available', 'computer', 'i9', '15/03/2020', 'view/img/products/laptop2.jpg'),
	('G8213', 'OIQ334', 'Eu Metus Inc.', 'facilisis.magna.tellus@semelit.net', 528, 'Unavailable', 'computer', 'i3, i5', '05/08/2020', 'view/img/products/laptop2.jpg'),
	('H0328', 'PBO232', 'Sit LLP', 'ullamcorper.nisl.arcu@musProinvel.co.uk', 175, 'Available', 'laptop', 'i3', '05/08/2020', 'view/img/products/laptop2.jpg'),
	('H3531', 'AME497', 'Feugiat Placerat Velit Foundation', 'auctor.vitae.aliquet@enimsit.edu', 821, 'Available', 'computer', 'i7, i3, i5, i9', '06/01/2021', 'view/img/products/laptop2.jpg'),
	('H7148', 'HTO727', 'Nisi Foundation', 'Lorem.ipsum@Utnec.edu', 448, 'Available', 'other', 'i7, i5', '11/02/2020', 'view/img/products/laptop2.jpg'),
	('I1551', 'QZD026', 'Vivamus Limited', 'auctor@semconsequat.com', 498, 'Available', 'other', 'i5', '12/12/2019', 'view/img/products/laptop2.jpg'),
	('I4474', 'GTV588', 'Egestas Associates', 'dolor.quam@noncursusnon.net', 986, 'Unavailable', 'laptop', 'i9, i7, i3, i5', '01/03/2020', 'view/img/products/laptop2.jpg'),
	('I4941', 'YYZ213', 'Ultricies Adipiscing Associates', 'at@aliquamerosturpis.co.uk', 895, 'Available', 'computer', 'i9, i7', '12/08/2020', 'view/img/products/laptop2.jpg'),
	('I5529', 'IRK129', 'Porttitor Eros Nec Consulting', 'Nunc@erosnonenim.co.uk', 885, 'Available', 'laptop', 'i5', '26/12/2019', 'view/img/products/laptop2.jpg'),
	('I6975', 'BEG787', 'Phasellus In Felis Associates', 'cursus.et@ultricesa.org', 255, 'Available', 'other', 'i9, i3, i5', '18/09/2020', 'view/img/products/laptop2.jpg'),
	('I8701', 'HOA649', 'Mattis Consulting', 'ut.cursus@lorem.ca', 324, 'Unavailable', 'computer', 'i5', '09/02/2020', 'view/img/products/laptop2.jpg'),
	('I8884', 'GPT693', 'Justo Faucibus Corporation', 'lacus.Cras@dolorelit.net', 493, 'Available', 'computer', 'i5', '08/10/2020', 'view/img/products/laptop2.jpg'),
	('I9750', 'QNV991', 'Eu Metus Ltd', 'gravida.sagittis@neque.co.uk', 883, 'Available', 'laptop', 'i7, i5, i9, i3', '09/11/2020', 'view/img/products/laptop2.jpg'),
	('J1334', 'GVB956', 'Vehicula Risus Nulla Institute', 'ultrices.a@vulputate.com', 888, 'Available', 'computer', 'i5, i9', '12/10/2020', 'view/img/products/laptop2.jpg'),
	('J1997', 'FKA278', 'Dolor Tempus Non LLP', 'interdum@quis.edu', 130, 'Available', 'computer', 'i5', '22/09/2020', 'view/img/products/laptop2.jpg'),
	('J2114', 'IPJ254', 'Lobortis Mauris Suspendisse Corp.', 'rhoncus.Proin@magnis.edu', 121, 'Unavailable', 'other', 'i9, i7, i3, i5', '02/09/2020', 'view/img/products/laptop2.jpg'),
	('J3046', 'ISL104', 'Urna Suscipit PC', 'sit@dui.edu', 985, 'Available', 'computer', 'i5, i7, i9', '25/11/2019', 'view/img/products/laptop2.jpg'),
	('J4453', 'BYB812', 'Ipsum Primis Consulting', 'Cras@NullainterdumCurabitur.edu', 172, 'Available', 'computer', 'i5', '30/12/2019', 'view/img/products/laptop2.jpg'),
	('J4973', 'YKU849', 'Et Company', 'enim.Suspendisse.aliquet@enimEtiam.co.uk', 602, 'Unavailable', 'other', 'i9', '16/01/2020', 'view/img/products/laptop2.jpg'),
	('J5450', 'GNJ535', 'Malesuada Vel Venenatis Industries', 'Etiam.imperdiet@est.com', 725, 'Available', 'laptop', 'i5', '16/02/2020', 'view/img/products/laptop2.jpg'),
	('J6171', 'IDC745', 'Nisi Cum Industries', 'Nam.nulla@elit.com', 918, 'Available', 'other', 'i5', '10/09/2020', 'view/img/products/laptop2.jpg'),
	('J7015', 'UZE333', 'Luctus Et Ltd', 'libero@ultricesiaculisodio.ca', 548, 'Unavailable', 'computer', 'i9, i3', '12/02/2020', 'view/img/products/laptop2.jpg'),
	('J8444', 'UIY682', 'Elementum Sem Vitae Inc.', 'metus@velconvallisin.org', 598, 'Unavailable', 'other', 'i5, i7', '22/12/2020', 'view/img/products/laptop2.jpg'),
	('K1081', 'LRT934', 'Lobortis LLP', 'libero.Proin.mi@etlacinia.co.uk', 962, 'Available', 'laptop', 'i5', '17/12/2019', 'view/img/products/laptop2.jpg'),
	('K1234', 'Screen', 'BenQ', 'benq@auto.es', 120, 'Aviable', 'other', 'i9', '17/01/2019', 'view/img/products/laptop2.jpg'),
	('K3109', 'JPE941', 'Metus Industries', 'pellentesque.massa@amagna.co.uk', 791, 'Available', 'laptop', 'i7, i5, i9, i3', '28/08/2020', 'view/img/products/laptop2.jpg'),
	('K3463', 'ONI524', 'Tempor Erat Associates', 'sociosqu.ad@aaliquet.edu', 936, 'Available', 'other', 'i5, i3, i9, i7', '04/05/2020', 'view/img/products/laptop2.jpg'),
	('K3812', 'YQI629', 'Faucibus Limited', 'sapien@mauris.co.uk', 132, 'Unavailable', 'laptop', 'i9, i7', '07/10/2020', 'view/img/products/laptop2.jpg'),
	('K3821', 'VJZ167', 'Quisque Libero Lacus PC', 'ultrices@urnasuscipitnonummy.edu', 580, 'Unavailable', 'other', 'i5', '23/02/2020', 'view/img/products/laptop2.jpg'),
	('K3908', 'QON338', 'Cursus Vestibulum Mauris Associates', 'ipsum.Curabitur.consequat@pretiumnequeMorbi.c', 327, 'Unavailable', 'laptop', 'i9, i3', '18/05/2020', 'view/img/products/laptop2.jpg'),
	('K5033', 'QOY181', 'Urna Vivamus LLP', 'interdum@eratvel.ca', 522, 'Available', 'computer', 'i7, i5', '09/12/2020', 'view/img/products/laptop2.jpg'),
	('K5178', 'HON013', 'Litora Torquent Corp.', 'Cum@massa.com', 586, 'Available', 'computer', 'i9, i3, i7', '30/08/2020', 'view/img/products/laptop2.jpg'),
	('K5323', 'IJC593', 'Mollis PC', 'non.magna.Nam@magna.edu', 505, 'Available', 'laptop', 'i9, i5', '24/09/2020', 'view/img/products/laptop2.jpg'),
	('K6422', 'CDV093', 'Ligula Inc.', 'diam@luctus.co.uk', 843, 'Unavailable', 'other', 'i5', '08/01/2021', 'view/img/products/laptop2.jpg'),
	('K6500', 'NJZ264', 'Mi Tempor Lorem Institute', 'lorem@primisinfaucibus.edu', 427, 'Available', 'laptop', 'i3', '08/09/2020', 'view/img/products/laptop2.jpg'),
	('K6548', 'QNZ129', 'Ac Libero Nec Incorporated', 'ligula.Nullam.enim@orci.edu', 351, 'Available', 'laptop', 'i3, i7, i5, i9', '09/01/2020', 'view/img/products/laptop2.jpg'),
	('K7350', 'TYE326', 'Justo Eu Arcu Industries', 'torquent.per.conubia@ametmetusAliquam.org', 610, 'Available', 'laptop', 'i7, i3', '01/08/2020', 'view/img/products/laptop2.jpg'),
	('K7670', 'WJO120', 'Nunc LLP', 'interdum@nonvestibulumnec.ca', 169, 'Unavailable', 'other', 'i7, i5, i3', '10/12/2019', 'view/img/products/laptop2.jpg'),
	('L0486', 'WFG062', 'A Nunc In Institute', 'nascetur@euismod.ca', 336, 'Available', 'computer', 'i5', '05/07/2020', 'view/img/products/laptop2.jpg'),
	('L0690', 'EQX841', 'In Consequat Enim Industries', 'Donec@pulvinararcu.com', 498, 'Available', 'computer', 'i5, i9, i7, i3', '11/08/2020', 'view/img/products/laptop2.jpg'),
	('L1234', 'L63', 'HP', 'hp@auto.es', 120, 'Aviable', 'laptop', 'i5', '15/01/2019', 'view/img/products/laptop2.jpg'),
	('L3134', 'XXB564', 'Nec Limited', 'Sed.diam@ac.net', 223, 'Available', 'laptop', 'i9, i7, i3', '02/10/2020', 'view/img/products/laptop2.jpg'),
	('L3695', 'SWQ252', 'Ultricies Dignissim Foundation', 'ipsum.non@lobortis.net', 690, 'Available', 'computer', 'i9, i3', '30/09/2020', 'view/img/products/laptop2.jpg'),
	('L4836', 'YSY209', 'Nunc Lectus Pede LLP', 'Quisque@sed.com', 222, 'Unavailable', 'other', 'i5, i9, i3', '01/12/2020', 'view/img/products/laptop2.jpg'),
	('L6756', 'CTR979', 'Enim Suspendisse Aliquet Limited', 'Ut@blanditmattisCras.co.uk', 518, 'Available', 'other', 'i5', '26/12/2019', 'view/img/products/laptop2.jpg'),
	('L6903', 'OTH089', 'Auctor Inc.', 'semper@purusMaecenas.com', 944, 'Unavailable', 'laptop', 'i5', '14/12/2019', 'view/img/products/laptop2.jpg'),
	('L6943', 'APS608', 'Vulputate Ltd', 'penatibus.et.magnis@interdumligula.net', 468, 'Available', 'computer', 'i3', '25/11/2020', 'view/img/products/laptop2.jpg'),
	('L8172', 'ZUH344', 'Id Inc.', 'facilisis@sit.com', 925, 'Available', 'computer', 'i5, i7, i3, i9', '13/06/2020', 'view/img/products/laptop2.jpg'),
	('L8205', 'IXU950', 'Orci Sem Eget Foundation', 'neque@congue.net', 966, 'Available', 'computer', 'i5, i3', '16/12/2019', 'view/img/products/laptop2.jpg'),
	('M1234', 'Mi6', 'Xiaomi', 'xiaomi@help.com', 120, 'Unaviable', 'other', 'i9', '29/01/2019', 'view/img/products/laptop2.jpg'),
	('M4370', 'NQS980', 'Luctus Et Ltd', 'in.magna.Phasellus@facilisislorem.com', 317, 'Available', 'laptop', 'i5, i9', '11/01/2021', 'view/img/products/laptop2.jpg'),
	('M4562', 'UEM287', 'Libero Donec Consectetuer Institute', 'Sed.molestie.Sed@atlibero.ca', 145, 'Available', 'laptop', 'i9, i5, i3, i7', '29/09/2020', 'view/img/products/laptop2.jpg'),
	('M4811', 'FHA482', 'Vel Sapien Industries', 'Integer.vitae@ullamcorpermagna.ca', 568, 'Available', 'computer', 'i5, i7', '15/12/2019', 'view/img/products/laptop2.jpg'),
	('M6026', 'XGS234', 'Nulla Integer Urna Limited', 'eu.eleifend.nec@nondapibus.ca', 772, 'Available', 'laptop', 'i3, i5', '24/09/2020', 'view/img/products/laptop2.jpg'),
	('M7844', 'YWZ020', 'Odio Etiam LLP', 'porttitor@etcommodo.edu', 549, 'Unavailable', 'other', 'i3, i7', '17/12/2020', 'view/img/products/laptop2.jpg'),
	('M9712', 'YAN189', 'Cras Vehicula Corporation', 'et.ultrices@sodalesnisimagna.edu', 699, 'Available', 'computer', 'i5', '25/01/2020', 'view/img/products/laptop2.jpg'),
	('N0795', 'HNU808', 'Id Nunc Interdum Foundation', 'nec.tempus.mauris@nonsollicitudin.ca', 399, 'Available', 'other', 'i5, i7, i9, i3', '06/10/2020', 'view/img/products/laptop2.jpg'),
	('N1981', 'FLQ065', 'Fringilla Ornare Institute', 'in@Seddictum.ca', 515, 'Available', 'computer', 'i9', '24/11/2020', 'view/img/products/laptop2.jpg'),
	('N3961', 'JOD655', 'Justo Faucibus Lectus PC', 'Aenean.egestas@quispedePraesent.edu', 191, 'Available', 'computer', 'i7, i5, i9, i3', '28/05/2020', 'view/img/products/laptop2.jpg'),
	('N4571', 'TCA622', 'Facilisis Consulting', 'purus@sem.ca', 512, 'Unavailable', 'computer', 'i9, i5, i7, i3', '04/12/2020', 'view/img/products/laptop2.jpg'),
	('N4734', 'JKV358', 'Urna Justo Faucibus Corporation', 'sed.pede.Cum@quis.org', 681, 'Available', 'other', 'i5', '24/02/2020', 'view/img/products/laptop2.jpg'),
	('N5024', 'GEP659', 'Amet Consectetuer LLC', 'Nullam@massa.org', 971, 'Unavailable', 'other', 'i7, i5, i3', '07/11/2020', 'view/img/products/laptop2.jpg'),
	('N6207', 'UDK615', 'Sit Amet Luctus LLC', 'mattis.velit@diamPellentesquehabitant.org', 605, 'Available', 'laptop', 'i9, i5', '04/09/2020', 'view/img/products/laptop2.jpg'),
	('N6218', 'RXD651', 'Morbi Accumsan Laoreet Corporation', 'lacus.Ut.nec@feugiatLorem.ca', 454, 'Unavailable', 'other', 'i3', '13/08/2020', 'view/img/products/laptop2.jpg'),
	('N6806', 'FAP427', 'Felis Orci Adipiscing Foundation', 'ridiculus@Quisque.com', 654, 'Unavailable', 'laptop', 'i5', '06/06/2020', 'view/img/products/laptop2.jpg'),
	('N6950', 'HLD566', 'Interdum Enim Corp.', 'sit.amet@dignissim.org', 172, 'Unavailable', 'laptop', 'i7, i5, i3', '28/03/2020', 'view/img/products/laptop2.jpg'),
	('N8438', 'HUG966', 'Ullamcorper Magna Corporation', 'eleifend.Cras.sed@cursusluctusipsum.ca', 140, 'Available', 'laptop', 'i9, i5, i7', '24/12/2020', 'view/img/products/laptop2.jpg'),
	('N8458', 'CHS563', 'Aliquet Magna A Limited', 'scelerisque@quam.co.uk', 920, 'Available', 'other', 'i5', '29/05/2020', 'view/img/products/laptop2.jpg'),
	('O1025', 'RUD812', 'Habitant Morbi Ltd', 'Nulla@augue.ca', 965, 'Unavailable', 'computer', 'i9', '13/08/2020', 'view/img/products/laptop2.jpg'),
	('O3850', 'KYU392', 'Auctor Nunc Nulla Foundation', 'vitae@quamelementumat.net', 340, 'Available', 'other', 'i5', '30/12/2020', 'view/img/products/laptop2.jpg'),
	('O3961', 'QZX412', 'Donec Est Nunc Corp.', 'a.sollicitudin@pede.co.uk', 446, 'Available', 'other', 'i5', '18/05/2020', 'view/img/products/laptop2.jpg'),
	('O5315', 'VZB146', 'Ipsum Leo Elementum Company', 'mollis.vitae@ultricesaauctor.com', 799, 'Available', 'computer', 'i3, i7', '28/12/2019', 'view/img/products/laptop2.jpg'),
	('O5428', 'HOW964', 'Morbi Institute', 'ipsum.ac@parturientmontes.net', 333, 'Unavailable', 'computer', 'i7, i5, i9, i3', '25/08/2020', 'view/img/products/laptop2.jpg'),
	('O6186', 'VGC335', 'Enim Commodo Hendrerit Consulting', 'Aliquam@egestasrhoncusProin.com', 912, 'Available', 'computer', 'i9', '21/08/2020', 'view/img/products/laptop2.jpg'),
	('O7989', 'WJO039', 'Quis Pede Suspendisse Corp.', 'risus.Nulla@libero.com', 445, 'Available', 'computer', 'i5', '12/03/2020', 'view/img/products/laptop2.jpg'),
	('O9876', 'E109', 'Logitech', 'logi@auto.es', 120, 'Aviable', 'laptop', 'i3,i5', '23/01/2019', 'view/img/products/laptop2.jpg'),
	('P0000', 'autoprod', 'autobrand', 'autoemail@auto.es', 13, 'Aviable', 'laptop', 'i5', '16/01/2019', 'view/img/products/laptop2.jpg'),
	('P1576', 'YAQ360', 'A Facilisis Non Corporation', 'risus.varius.orci@ornaretortor.ca', 902, 'Unavailable', 'computer', 'i9, i7, i3, i5', '08/08/2020', 'view/img/products/laptop2.jpg'),
	('P1887', 'TVY032', 'Faucibus Orci Inc.', 'amet.orci.Ut@nec.com', 859, 'Available', 'computer', 'i3', '25/09/2020', 'view/img/products/laptop2.jpg'),
	('P3715', 'QJE001', 'Libero Corp.', 'lobortis.augue.scelerisque@feugiat.co.uk', 984, 'Unavailable', 'computer', 'i5, i7', '24/03/2020', 'view/img/products/laptop2.jpg'),
	('P4953', 'FDK488', 'Mauris PC', 'et.malesuada.fames@malesuada.org', 859, 'Unavailable', 'laptop', 'i5', '09/01/2021', 'view/img/products/laptop2.jpg'),
	('P5262', 'RES176', 'Et Nunc Corp.', 'Nam.tempor.diam@lobortisultricesVivamus.com', 273, 'Unavailable', 'computer', 'i3, i5', '06/05/2020', 'view/img/products/laptop2.jpg'),
	('P7482', 'CLE170', 'Vel Faucibus Id Industries', 'nec@Quisqueliberolacus.org', 444, 'Unavailable', 'other', 'i5', '15/03/2020', 'view/img/products/laptop2.jpg'),
	('P7982', 'YGR443', 'Metus Vivamus Associates', 'vitae@ligula.org', 243, 'Available', 'laptop', 'i3, i7, i9', '02/07/2020', 'view/img/products/laptop2.jpg'),
	('P8141', 'QWS378', 'Fermentum Associates', 'diam.eu.dolor@sodaleseliterat.edu', 107, 'Available', 'laptop', 'i5', '23/10/2020', 'view/img/products/laptop2.jpg'),
	('Q2392', 'ZNL621', 'Ipsum Porta Elit LLP', 'mauris@In.co.uk', 744, 'Unavailable', 'other', 'i7, i5, i9', '03/09/2020', 'view/img/products/laptop2.jpg'),
	('Q5665', 'ZEI072', 'Urna Justo Foundation', 'Vivamus.molestie.dapibus@vitae.ca', 892, 'Available', 'computer', 'i9, i3, i5, i7', '13/02/2020', 'view/img/products/laptop2.jpg'),
	('Q5787', 'BWI176', 'Pede Cum Sociis Consulting', 'sed@nequeseddictum.edu', 129, 'Unavailable', 'computer', 'i3', '10/03/2020', 'view/img/products/laptop2.jpg'),
	('Q5872', 'FGN464', 'Id Inc.', 'sed.pede@feugiat.ca', 682, 'Available', 'other', 'i5', '27/06/2020', 'view/img/products/laptop2.jpg'),
	('Q6219', 'XGJ583', 'Lorem Ltd', 'magna.tellus.faucibus@arcu.ca', 457, 'Unavailable', 'other', 'i3, i9, i5', '03/09/2020', 'view/img/products/laptop2.jpg'),
	('Q6426', 'ZET678', 'Purus Gravida Industries', 'nec.cursus@velitjustonec.ca', 809, 'Unavailable', 'computer', 'i7, i3, i5', '01/10/2020', 'view/img/products/laptop2.jpg'),
	('Q7170', 'BLG180', 'Arcu Limited', 'Donec.egestas.Aliquam@sodaleseliterat.org', 308, 'Unavailable', 'other', 'i9, i3', '09/10/2020', 'view/img/products/laptop2.jpg'),
	('Q9506', 'LAF633', 'Justo Sit Amet Corporation', 'nibh.dolor@nuncid.net', 500, 'Unavailable', 'laptop', 'i7, i5', '07/06/2020', 'view/img/products/laptop2.jpg'),
	('R1234', 'PO09A', 'logitech', 'logi@auto.es', 120, 'Aviable', 'laptop', 'i3,i5', '23/01/2019', 'view/img/products/laptop2.jpg'),
	('R1855', 'ZSM941', 'Erat Volutpat Nulla LLC', 'nunc.id@velturpisAliquam.ca', 989, 'Available', 'other', 'i5, i9, i7, i3', '06/06/2020', 'view/img/products/laptop2.jpg'),
	('R5088', 'STM681', 'Est Ltd', 'lorem.semper@lorem.com', 401, 'Available', 'other', 'i9, i3, i5, i7', '09/08/2020', 'view/img/products/laptop2.jpg'),
	('R5243', 'ERY374', 'Facilisis Associates', 'sit.amet@enimEtiamimperdiet.net', 386, 'Unavailable', 'computer', 'i5, i9, i3', '14/11/2020', 'view/img/products/laptop2.jpg'),
	('R7480', 'ZWQ649', 'Egestas LLP', 'non.enim@ridiculusmus.edu', 265, 'Unavailable', 'other', 'i7, i5, i9, i3', '21/01/2020', 'view/img/products/laptop2.jpg'),
	('R8957', 'NXZ352', 'Elit Nulla Facilisi Industries', 'sed@ultriciesdignissim.net', 504, 'Unavailable', 'computer', 'i9, i5, i7, i3', '27/03/2020', 'view/img/products/laptop2.jpg'),
	('R9698', 'MDZ460', 'Leo Foundation', 'In.mi.pede@velfaucibus.co.uk', 801, 'Unavailable', 'laptop', 'i9, i5, i7, i3', '23/12/2020', 'view/img/products/laptop2.jpg'),
	('R9731', 'PTX465', 'Cursus A Company', 'ornare.Fusce@loremsitamet.co.uk', 911, 'Available', 'laptop', 'i5, i7, i9', '31/05/2020', 'view/img/products/laptop2.jpg'),
	('S2528', 'QUH843', 'Posuere At Institute', 'eu.eleifend.nec@Sedeget.com', 595, 'Unavailable', 'computer', 'i7, i9', '17/03/2020', 'view/img/products/laptop2.jpg'),
	('S3110', 'XNU532', 'Nisl Limited', 'ante.Nunc.mauris@nondapibusrutrum.co.uk', 944, 'Available', 'laptop', 'i5, i3', '18/11/2020', 'view/img/products/laptop2.jpg'),
	('S3157', 'UKK403', 'Sed Limited', 'ac.fermentum.vel@ascelerisquesed.ca', 602, 'Available', 'laptop', 'i9', '19/04/2020', 'view/img/products/laptop2.jpg'),
	('S5532', 'FPC513', 'Risus In Mi Company', 'posuere.cubilia@viverraDonectempus.ca', 836, 'Unavailable', 'computer', 'i9, i3', '27/06/2020', 'view/img/products/laptop2.jpg'),
	('S5983', 'KLW192', 'Sociis Incorporated', 'aliquet.libero@nec.org', 808, 'Unavailable', 'computer', 'i5, i9, i7, i3', '13/11/2020', 'view/img/products/laptop2.jpg'),
	('S8106', 'MKF714', 'Dictum Augue Associates', 'Duis.dignissim.tempor@placerataugueSed.com', 944, 'Available', 'laptop', 'i3, i7, i5', '26/11/2020', 'view/img/products/laptop2.jpg'),
	('S8564', 'YVF331', 'Id Erat Institute', 'tortor.dictum.eu@egetmetus.net', 350, 'Available', 'other', 'i3, i9, i7', '23/04/2020', 'view/img/products/laptop2.jpg'),
	('T0003', 'JAM269', 'Lorem Ipsum Sodales PC', 'dignissim@egestas.com', 669, 'Unavailable', 'computer', 'i5, i7', '11/02/2020', 'view/img/products/laptop2.jpg'),
	('T0371', 'AQQ471', 'A Dui Associates', 'vitae@Sed.com', 651, 'Unavailable', 'other', 'i5', '04/01/2021', 'view/img/products/laptop2.jpg'),
	('T2464', 'QPN350', 'Molestie Sodales Incorporated', 'et.malesuada.fames@luctusipsumleo.co.uk', 469, 'Unavailable', 'laptop', 'i7, i5', '13/06/2020', 'view/img/products/laptop2.jpg'),
	('T4555', 'LID676', 'Vestibulum Corporation', 'Integer.eu@at.edu', 903, 'Available', 'laptop', 'i7', '11/04/2020', 'view/img/products/laptop2.jpg'),
	('T4937', 'PON271', 'Consectetuer Mauris Id Consulting', 'tristique@ullamcorperDuis.net', 997, 'Unavailable', 'laptop', 'i9, i5', '09/11/2020', 'view/img/products/laptop2.jpg'),
	('T5153', 'JBF862', 'Viverra Foundation', 'urna@idnuncinterdum.edu', 353, 'Available', 'computer', 'i5, i7', '05/12/2019', 'view/img/products/laptop2.jpg'),
	('T7269', 'WVP482', 'Nec Eleifend LLP', 'nec.orci.Donec@accumsanlaoreet.ca', 805, 'Available', 'computer', 'i5', '26/08/2020', 'view/img/products/laptop2.jpg'),
	('T8418', 'RCM786', 'Arcu Corporation', 'eu.euismod.ac@posuerevulputatelacus.com', 941, 'Available', 'laptop', 'i5, i3', '22/02/2020', 'view/img/products/laptop2.jpg'),
	('T9551', 'CLS129', 'Pulvinar Arcu Et Institute', 'nisi.Cum.sociis@ipsumporta.net', 202, 'Unavailable', 'computer', 'i9, i3, i7', '06/08/2020', 'view/img/products/laptop2.jpg'),
	('T9997', 'YZI858', 'Nibh Phasellus Nulla Corp.', 'Sed@mollisnoncursus.com', 625, 'Available', 'laptop', 'i5', '22/12/2020', 'view/img/products/laptop2.jpg'),
	('U0072', 'JOQ568', 'Nisi Magna Inc.', 'neque.tellus@Pellentesquehabitant.ca', 734, 'Available', 'laptop', 'i9, i3, i7, i5', '17/09/2020', 'view/img/products/laptop2.jpg'),
	('U0344', 'VXT004', 'Quis Corporation', 'a.mi@uteros.edu', 186, 'Available', 'laptop', 'i9', '20/02/2020', 'view/img/products/laptop2.jpg'),
	('U2774', 'OPV345', 'Mauris Ipsum Porta Institute', 'feugiat@ornare.org', 432, 'Unavailable', 'computer', 'i7', '17/12/2020', 'view/img/products/laptop2.jpg'),
	('U5043', 'GBA949', 'Imperdiet Ltd', 'consectetuer.euismod@aliquam.ca', 579, 'Available', 'other', 'i3, i5', '31/08/2020', 'view/img/products/laptop2.jpg'),
	('U7013', 'ABE698', 'aaa', 'Curabitur.consequat@semPellentesque.co.uk', 734, 'Available', 'other', 'i5', '18/12/2019', 'view/img/products/laptop2.jpg'),
	('U9354', 'SON089', 'Tincidunt Neque Vitae PC', 'tortor@elit.org', 178, 'Available', 'other', 'i5', '10/03/2020', 'view/img/products/laptop2.jpg'),
	('V4235', 'GQY200', 'Orci Donec Nibh Corporation', 'egestas@eleifendCras.org', 763, 'Available', 'other', 'i7, i9, i3', '10/10/2020', 'view/img/products/laptop2.jpg'),
	('V4734', 'FAD010', 'Elit Nulla Facilisi Corp.', 'ultricies.dignissim.lacus@velitduisemper.org', 270, 'Available', 'computer', 'i9, i3, i5', '11/03/2020', 'view/img/products/laptop2.jpg'),
	('V5470', 'QAG300', 'Donec Fringilla Company', 'ac.orci.Ut@Crasvulputatevelit.edu', 399, 'Unavailable', 'computer', 'i3, i7, i5', '25/07/2020', 'view/img/products/laptop2.jpg'),
	('V7598', 'GNO098', 'Lacus Aliquam Rutrum Inc.', 'Cras@Crasvulputatevelit.ca', 563, 'Unavailable', 'other', 'i5, i9', '07/07/2020', 'view/img/products/laptop2.jpg'),
	('W1992', 'RRH959', 'Hendrerit Foundation', 'erat.volutpat.Nulla@atvelitPellentesque.ca', 122, 'Available', 'laptop', 'i3, i7, i5, i9', '08/06/2020', 'view/img/products/laptop2.jpg'),
	('W3772', 'NCM364', 'Molestie Corp.', 'sit.amet@venenatisvelfaucibus.co.uk', 291, 'Unavailable', 'laptop', 'i9', '28/01/2020', 'view/img/products/laptop2.jpg'),
	('W5050', 'MNK402', 'Facilisis Suspendisse Consulting', 'sociis.natoque@purus.org', 477, 'Unavailable', 'other', 'i5, i9', '26/08/2020', 'view/img/products/laptop2.jpg'),
	('W5536', 'UVY223', 'Metus Aenean Limited', 'ac@aaliquet.edu', 677, 'Available', 'other', 'i5', '29/03/2020', 'view/img/products/laptop2.jpg'),
	('W6185', 'SGX642', 'Et Ipsum Corp.', 'libero@Praesent.edu', 814, 'Unavailable', 'laptop', 'i9, i5, i3, i7', '25/11/2020', 'view/img/products/laptop2.jpg'),
	('W6483', 'SWK043', 'Commodo Tincidunt Nibh Consulting', 'pharetra.felis.eget@euismodindolor.edu', 261, 'Unavailable', 'laptop', 'i3, i7', '17/06/2020', 'view/img/products/laptop2.jpg'),
	('W7368', 'BOK812', 'Neque Inc.', 'Nullam.velit@Nunc.edu', 736, 'Available', 'laptop', 'i3, i5, i7', '28/08/2020', 'view/img/products/laptop2.jpg'),
	('W9513', 'PQV788', 'Mauris Inc.', 'tristique@etpedeNunc.org', 648, 'Available', 'laptop', 'i7', '06/02/2020', 'view/img/products/laptop2.jpg'),
	('W9629', 'ZDE157', 'Enim LLC', 'Nullam.ut.nisi@liberoduinec.edu', 865, 'Unavailable', 'other', 'i9, i5, i7', '04/04/2020', 'view/img/products/laptop2.jpg'),
	('X7561', 'ANH929', 'Ridiculus Associates', 'In.tincidunt.congue@cursuset.org', 666, 'Unavailable', 'laptop', 'i9', '11/05/2020', 'view/img/products/laptop2.jpg'),
	('X7565', 'WBW881', 'Vulputate Incorporated', 'eget@Curabitur.net', 357, 'Unavailable', 'other', 'i3, i9', '04/07/2020', 'view/img/products/laptop2.jpg'),
	('X7775', 'ZPH603', 'Varius Nam Porttitor Incorporated', 'amet@ProinultricesDuis.com', 518, 'Unavailable', 'other', 'i9, i7', '04/01/2021', 'view/img/products/laptop2.jpg'),
	('X7794', 'IZG641', 'Odio Vel Est Inc.', 'semper.pretium.neque@Vivamuseuismod.co.uk', 825, 'Available', 'other', 'i5, i9, i3', '23/07/2020', 'view/img/products/laptop2.jpg'),
	('Y0673', 'XKQ745', 'At Pretium Associates', 'magna.malesuada.vel@nulla.net', 570, 'Available', 'other', 'i5', '06/02/2020', 'view/img/products/laptop2.jpg'),
	('Y0951', 'JWT530', 'Leo Foundation', 'eu.eros.Nam@eratnequenon.edu', 246, 'Unavailable', 'other', 'i5, i7, i3, i9', '23/11/2019', 'view/img/products/laptop2.jpg'),
	('Y2089', 'HLT207', 'Elit Sed Consequat Consulting', 'sem.semper.erat@quam.org', 383, 'Unavailable', 'other', 'i9, i3, i5, i7', '08/03/2020', 'view/img/products/laptop2.jpg'),
	('Y2881', 'LRI969', 'Amet LLC', 'sodales.nisi@dignissim.edu', 770, 'Unavailable', 'laptop', 'i5, i7, i3, i9', '10/02/2020', 'view/img/products/laptop2.jpg'),
	('Y3568', 'QHY363', 'Erat Institute', 'Pellentesque.ut@molestietortornibh.ca', 568, 'Available', 'computer', 'i9, i3', '19/02/2020', 'view/img/products/laptop2.jpg'),
	('Y4428', 'NQB055', 'Tincidunt Ltd', 'risus.Nulla@arcu.ca', 562, 'Available', 'computer', 'i7, i3, i9, i5', '07/12/2019', 'view/img/products/laptop2.jpg'),
	('Y6111', 'KJV170', 'Erat Eget LLP', 'et.magnis.dis@faucibus.net', 661, 'Unavailable', 'laptop', 'i5', '03/03/2020', 'view/img/products/laptop2.jpg'),
	('Y7538', 'ADG068', 'Sollicitudin Commodo Inc.', 'Proin@diamProindolor.org', 361, 'Available', 'computer', 'i3', '23/06/2020', 'view/img/products/laptop2.jpg'),
	('Y8566', 'AEQ009', 'Nascetur Ridiculus Incorporated', 'tempor.diam.dictum@odiosagittis.co.uk', 505, 'Unavailable', 'other', 'i3, i5, i9, i7', '16/03/2020', 'view/img/products/laptop2.jpg'),
	('Y9498', 'CIR767', 'Amet Orci Corp.', 'at.arcu.Vestibulum@rhoncusid.org', 257, 'Available', 'laptop', 'i5', '07/12/2020', 'view/img/products/laptop2.jpg'),
	('Z0652', 'DFQ525', 'Turpis Nulla Aliquet PC', 'Duis.volutpat@SednequeSed.net', 185, 'Unavailable', 'laptop', 'i7, i9, i3, i5', '02/08/2020', 'view/img/products/laptop2.jpg'),
	('Z2368', 'KMK216', 'Nec Foundation', 'elit@tortordictum.edu', 760, 'Available', 'computer', 'i5', '10/12/2019', 'view/img/products/laptop2.jpg'),
	('Z6972', 'SEB731', 'Pharetra Quisque Inc.', 'lectus@quam.edu', 937, 'Available', 'other', 'i5', '21/06/2020', 'view/img/products/laptop2.jpg'),
	('Z7673', 'VIG896', 'Risus Duis A Company', 'ornare@lacus.com', 556, 'Unavailable', 'laptop', 'i5', '02/11/2020', 'view/img/products/laptop2.jpg'),
	('Z9433', 'PEL613', 'Nibh Enim Company', 'lobortis@nonenimMauris.org', 870, 'Unavailable', 'laptop', 'i5', '10/10/2020', 'view/img/products/laptop2.jpg'),
	('Z9475', 'ILN138', 'Mollis Nec Cursus Ltd', 'lacus.Etiam@miDuis.org', 948, 'Unavailable', 'laptop', 'i7, i5, i3', '27/12/2019', 'view/img/products/laptop2.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla comentarios.purchases
CREATE TABLE IF NOT EXISTS `purchases` (
  `id_purchase` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `product` varchar(1000) NOT NULL,
  `cant` varchar(1000) NOT NULL,
  `date` date
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla comentarios.purchases: ~18 rows (aproximadamente)
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
INSERT INTO `purchases` (`id_purchase`, `user`, `product`, `cant`, `date`) VALUES
	(0, 12, '332272963425', '1', '2019-03-11'),
	(0, 12, 'A1818', '1', '2019-03-11'),
	(0, 12, 'A1112', '1', '2019-03-11'),
	(0, 12, 'A0242', '1', '2019-03-11'),
	(0, 12, 'A1407', '1', '2019-03-11'),
	(0, 12, 'A1060', '1', '2019-03-11'),
	(1, 12, 'A1112', '1', '2019-03-12'),
	(1, 12, 'A1116', '1', '2019-03-12'),
	(2, 12, 'A1060', '1', '2019-03-12'),
	(2, 12, 'A0242', '1', '2019-03-12'),
	(2, 12, 'A1112', '3', '2019-03-12'),
	(3, 12, 'A1112', '1', '2019-03-12'),
	(3, 12, '332272963425', '1', '2019-03-12'),
	(4, 12, 'A1060', '4', '2019-03-12'),
	(4, 12, 'A0242', '6', '2019-03-12'),
	(5, 12, 'A1112', '4', '2019-03-12'),
	(5, 12, 'A1060', '1', '2019-03-12'),
	(5, 12, '332272963425', '1', '2019-03-12');
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;

-- Volcando estructura para tabla comentarios.users
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'Client',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla comentarios.users: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`ID`, `name`, `email`, `username`, `password`, `type`) VALUES
	(-1, NULL, '', '', '', 'Unlogged'),
	(1, NULL, 'jordillopis00@gmail.com', 'jordilg13', '$2y$10$kBdz9nXqDaygXCpc1Lo6LuPn4vCM8JtLZdcJ1KsXO8.pPJ5mrtRhm', 'Client'),
	(12, NULL, 'admin@admin.es', 'admin', '$2y$10$J6hq3rxMrfYVZBFsmMbNbOra56.yv287RE90By3BZS/MnrbzJFod.', 'Admin'),
	(13, NULL, 'test@test.es', 'test', '$2y$10$3IcBsEbpj9dRfzXyfUJlPuOGAAumwGtYCRZ0TOKeHHTZ77v5qAYUK', 'Client');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
