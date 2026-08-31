-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 31, 2026 at 01:42 AM
-- Server version: 5.7.24
-- PHP Version: 8.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `store_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `productName` varchar(404) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stockQuantity` int(11) NOT NULL,
  `supplierID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `productName`, `price`, `stockQuantity`, `supplierID`) VALUES
(1, 'iphone 16', '70000.00', 13, 1),
(2, 'iphone 13', '30000.00', 18, 4),
(3, 'iphone 14', '280000.00', 20, 1),
(5, 'iphone 17', '100000.00', 4, 5),
(7, 'Milk', '15.00', 50, 8),
(8, 'Bread', '25.00', 30, 8);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `saleID` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `quantitySold` int(11) NOT NULL,
  `saleDate` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`saleID`, `productID`, `quantitySold`, `saleDate`) VALUES
(1, 1, 5, '2026-08-30 22:57:34'),
(3, 2, 12, '2026-08-30 22:58:13'),
(4, 3, 2, '2026-08-30 22:58:23'),
(5, 5, 4, '2026-08-30 22:58:35'),
(8, 7, 2, '2025-05-20 23:58:35');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `supplierID` int(11) NOT NULL,
  `supplierName` varchar(404) NOT NULL,
  `contactNumber` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`supplierID`, `supplierName`, `contactNumber`) VALUES
(1, 'eslam_3laa', '010034245523'),
(4, 'ahmed', '01004037295'),
(5, 'malk', '01104037295'),
(8, 'FreshFoods', '01001234567');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `p_s_FK` (`supplierID`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`saleID`),
  ADD KEY `Sale_p_fk` (`productID`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`supplierID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `saleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `supplierID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `p_s_FK` FOREIGN KEY (`supplierID`) REFERENCES `suppliers` (`supplierID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `Sale_p_fk` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
