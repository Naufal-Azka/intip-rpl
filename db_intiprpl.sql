-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 20, 2025 at 10:56 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_intiprpl`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_hari`
--

CREATE TABLE `tb_hari` (
  `id_hari` int NOT NULL,
  `nama_hari` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_hari`
--

INSERT INTO `tb_hari` (`id_hari`, `nama_hari`) VALUES
(1, 'Senin'),
(2, 'Selasa'),
(3, 'Rabu'),
(4, 'Kamis'),
(5, 'Jum\'at');

-- --------------------------------------------------------

--
-- Table structure for table `tb_jadwal`
--

CREATE TABLE `tb_jadwal` (
  `id_jadwal` int NOT NULL,
  `id_hari` int NOT NULL,
  `id_lab` int NOT NULL,
  `id_jamPelajaran` int NOT NULL,
  `id_kelas` int NOT NULL,
  `status` enum('isi','kosong','tidak') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_jadwal`
--

INSERT INTO `tb_jadwal` (`id_jadwal`, `id_hari`, `id_lab`, `id_jamPelajaran`, `id_kelas`, `status`) VALUES
(1, 1, 1, 1, 1, 'isi');

-- --------------------------------------------------------

--
-- Table structure for table `tb_jampelajaran`
--

CREATE TABLE `tb_jampelajaran` (
  `id_jamPelajaran` int NOT NULL,
  `id_hari` int NOT NULL,
  `waktu_mulai` time NOT NULL,
  `waktu_selesai` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_jampelajaran`
--

INSERT INTO `tb_jampelajaran` (`id_jamPelajaran`, `id_hari`, `waktu_mulai`, `waktu_selesai`) VALUES
(1, 1, '08:00:00', '08:40:00'),
(2, 1, '08:40:00', '09:15:00'),
(3, 1, '09:15:00', '09:55:00'),
(4, 1, '09:55:00', '10:30:00'),
(5, 1, '10:45:00', '11:25:00'),
(6, 1, '11:25:00', '12:00:00'),
(7, 1, '12:50:00', '13:30:00'),
(8, 1, '13:30:00', '14:10:00'),
(9, 1, '14:10:00', '14:50:00'),
(10, 1, '14:50:00', '15:30:00'),
(11, 2, '07:00:00', '07:45:00'),
(12, 2, '07:45:00', '08:25:00'),
(13, 2, '08:25:00', '09:10:00'),
(14, 2, '09:10:00', '09:50:00'),
(15, 2, '10:05:00', '10:50:00'),
(16, 2, '10:50:00', '11:35:00'),
(17, 2, '12:40:00', '13:25:00'),
(18, 2, '13:25:00', '14:05:00'),
(19, 2, '14:05:00', '14:50:00'),
(20, 2, '14:50:00', '15:30:00'),
(21, 3, '07:30:00', '08:15:00'),
(22, 3, '08:15:00', '08:55:00'),
(23, 3, '08:55:00', '09:40:00'),
(24, 3, '09:40:00', '10:20:00'),
(25, 3, '10:35:00', '11:20:00'),
(26, 3, '11:20:00', '12:00:00'),
(27, 3, '12:40:00', '13:25:00'),
(28, 3, '13:25:00', '14:05:00'),
(29, 3, '14:05:00', '14:50:00'),
(30, 3, '14:50:00', '15:30:00'),
(31, 4, '07:00:00', '07:45:00'),
(32, 4, '07:45:00', '08:25:00'),
(33, 4, '08:25:00', '09:10:00'),
(34, 4, '09:10:00', '09:50:00'),
(35, 4, '10:05:00', '10:50:00'),
(36, 4, '10:50:00', '11:35:00'),
(37, 4, '12:40:00', '13:25:00'),
(38, 4, '13:25:00', '14:05:00'),
(39, 4, '14:05:00', '14:50:00'),
(40, 4, '14:50:00', '15:30:00'),
(41, 5, '07:00:00', '07:45:00'),
(42, 5, '07:45:00', '08:30:00'),
(43, 5, '08:30:00', '09:15:00'),
(44, 5, '09:15:00', '10:00:00'),
(45, 5, '10:15:00', '10:55:00'),
(46, 5, '10:55:00', '11:35:00'),
(47, 5, '12:40:00', '13:20:00'),
(48, 5, '13:20:00', '14:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kelas`
--

CREATE TABLE `tb_kelas` (
  `id_kelas` int NOT NULL,
  `nama_kelas` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_kelas`
--

INSERT INTO `tb_kelas` (`id_kelas`, `nama_kelas`) VALUES
(1, 'X PPLG 1'),
(2, 'X PPLG 2'),
(3, 'XI PPLG 1'),
(4, 'XI PPLG 2'),
(5, 'XII PPLG 1'),
(6, 'XII PPLG 2');

-- --------------------------------------------------------

--
-- Table structure for table `tb_lab`
--

CREATE TABLE `tb_lab` (
  `id_lab` int NOT NULL,
  `nama` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_lab`
--

INSERT INTO `tb_lab` (`id_lab`, `nama`) VALUES
(1, 'RPL 1'),
(2, 'RPL 2'),
(3, 'RPL 3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_hari`
--
ALTER TABLE `tb_hari`
  ADD PRIMARY KEY (`id_hari`);

--
-- Indexes for table `tb_jadwal`
--
ALTER TABLE `tb_jadwal`
  ADD PRIMARY KEY (`id_jadwal`),
  ADD KEY `id_hari` (`id_hari`,`id_lab`,`id_jamPelajaran`,`id_kelas`),
  ADD KEY `id_lab` (`id_lab`),
  ADD KEY `id_kelas` (`id_kelas`),
  ADD KEY `id_jamPelajaran` (`id_jamPelajaran`);

--
-- Indexes for table `tb_jampelajaran`
--
ALTER TABLE `tb_jampelajaran`
  ADD PRIMARY KEY (`id_jamPelajaran`),
  ADD KEY `id_hari` (`id_hari`);

--
-- Indexes for table `tb_kelas`
--
ALTER TABLE `tb_kelas`
  ADD PRIMARY KEY (`id_kelas`);

--
-- Indexes for table `tb_lab`
--
ALTER TABLE `tb_lab`
  ADD PRIMARY KEY (`id_lab`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_hari`
--
ALTER TABLE `tb_hari`
  MODIFY `id_hari` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tb_jadwal`
--
ALTER TABLE `tb_jadwal`
  MODIFY `id_jadwal` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_jampelajaran`
--
ALTER TABLE `tb_jampelajaran`
  MODIFY `id_jamPelajaran` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `tb_kelas`
--
ALTER TABLE `tb_kelas`
  MODIFY `id_kelas` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tb_lab`
--
ALTER TABLE `tb_lab`
  MODIFY `id_lab` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_jadwal`
--
ALTER TABLE `tb_jadwal`
  ADD CONSTRAINT `tb_jadwal_ibfk_1` FOREIGN KEY (`id_lab`) REFERENCES `tb_lab` (`id_lab`),
  ADD CONSTRAINT `tb_jadwal_ibfk_2` FOREIGN KEY (`id_kelas`) REFERENCES `tb_kelas` (`id_kelas`),
  ADD CONSTRAINT `tb_jadwal_ibfk_3` FOREIGN KEY (`id_jamPelajaran`) REFERENCES `tb_jampelajaran` (`id_jamPelajaran`),
  ADD CONSTRAINT `tb_jadwal_ibfk_4` FOREIGN KEY (`id_hari`) REFERENCES `tb_hari` (`id_hari`);

--
-- Constraints for table `tb_jampelajaran`
--
ALTER TABLE `tb_jampelajaran`
  ADD CONSTRAINT `tb_jampelajaran_ibfk_1` FOREIGN KEY (`id_hari`) REFERENCES `tb_hari` (`id_hari`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
