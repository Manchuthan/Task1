-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2024 at 09:10 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

CREATE TABLE `userdetails` (
  `userID` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `userGroup` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`userID`, `name`, `userGroup`) VALUES
(1, 'Bessie Cooper', 'Sales'),
(2, 'Cody Fisher', 'Human Resources'),
(3, 'Ronald Richards', 'Marketing'),
(4, 'Cameron Williamson', 'Marketing'),
(5, 'Jerome Bell', 'Marketing'),
(6, 'Jenny Wilson', 'Design'),
(7, 'Marvin McKinney', 'Design'),
(8, 'Courtney Henry', 'Design'),
(9, 'Kartyn Murphy', 'Human Resources'),
(10, 'Esther Howard', 'Design'),
(11, 'Steve Smith', 'Design'),
(12, 'Lasith Malinga', 'Design');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
