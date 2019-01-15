-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2019 at 08:00 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `option`
--

CREATE TABLE `option` (
  `o_id` int(11) NOT NULL,
  `q_id` int(11) NOT NULL,
  `o_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `option`
--

INSERT INTO `option` (`o_id`, `q_id`, `o_text`) VALUES
(1, 1, 'a1'),
(2, 1, 'a2'),
(3, 1, 'a3'),
(4, 1, 'a4'),
(5, 1, 'a5'),
(6, 2, 'b1'),
(7, 3, 'c1'),
(8, 4, 'test'),
(9, 5, '1'),
(10, 5, '1'),
(11, 5, '1'),
(12, 5, '1'),
(13, 5, '11'),
(14, 6, 'eee');

-- --------------------------------------------------------

--
-- Table structure for table `que`
--

CREATE TABLE `que` (
  `Id` int(11) NOT NULL,
  `Que` text NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Parent` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `que`
--

INSERT INTO `que` (`Id`, `Que`, `Type`, `Parent`) VALUES
(1, 'a', 3, 0),
(2, 'b', 1, 0),
(3, 'c', 2, 0),
(4, 'test', 1, 0),
(5, 'test1', 3, 0),
(6, 'eee', 2, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `option`
--
ALTER TABLE `option`
  ADD PRIMARY KEY (`o_id`);

--
-- Indexes for table `que`
--
ALTER TABLE `que`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `option`
--
ALTER TABLE `option`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `que`
--
ALTER TABLE `que`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
