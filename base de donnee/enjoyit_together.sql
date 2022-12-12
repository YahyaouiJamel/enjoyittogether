-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 12, 2022 at 01:24 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enjoyit_together`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrateur`
--

CREATE TABLE `administrateur` (
  `id` int(10) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `login` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `administrateur`
--

INSERT INTO `administrateur` (`id`, `nom`, `prenom`, `login`, `pwd`) VALUES
(0, 'jamel', 'yahyaoui', 'admin', 'admin'),
(1, 'jamel', 'yahyaoui', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

CREATE TABLE `avis` (
  `id_avis` int(10) NOT NULL,
  `membre` varchar(30) NOT NULL,
  `valeur_avis` int(10) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_membre` int(10) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avis`
--

INSERT INTO `avis` (`id_avis`, `membre`, `valeur_avis`, `date`, `id_membre`, `createdAt`, `updatedAt`) VALUES
(13, 'salima', 10, '2022-12-09 20:14:44', 1, '2022-12-09', '2022-12-09'),
(14, 'salima', 6, '2022-12-09 20:14:56', 1, '2022-12-09', '2022-12-09');

-- --------------------------------------------------------

--
-- Table structure for table `commentaire`
--

CREATE TABLE `commentaire` (
  `id_commentaire` int(10) NOT NULL,
  `membre` varchar(30) NOT NULL,
  `voyage` varchar(30) NOT NULL,
  `contenu` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_membre` int(10) NOT NULL,
  `id_voyage` int(10) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `commentaire`
--

INSERT INTO `commentaire` (`id_commentaire`, `membre`, `voyage`, `contenu`, `date`, `id_membre`, `id_voyage`, `createdAt`, `updatedAt`) VALUES
(12, 'salima', 'dddd', 'good voyage ', '2022-09-12 16:27:23', 1, 1, NULL, NULL),
(19, 'salima', 'dddd', 'hello', '2022-12-11 22:52:20', 1, 1, '2022-12-11', '2022-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `invitation`
--

CREATE TABLE `invitation` (
  `id` int(10) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `liste_amis`
--

CREATE TABLE `liste_amis` (
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `email` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `membre`
--

CREATE TABLE `membre` (
  `id_membre` int(10) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `createdAt` varchar(50) DEFAULT NULL,
  `updatedAt` varchar(50) DEFAULT NULL,
  `cin` int(30) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `age` int(30) NOT NULL,
  `telephone` int(10) NOT NULL,
  `genre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `membre`
--

INSERT INTO `membre` (`id_membre`, `nom`, `prenom`, `mail`, `login`, `password`, `createdAt`, `updatedAt`, `cin`, `adresse`, `age`, `telephone`, `genre`) VALUES
(1, 'brinsi', 'salima', 'salima@gmail.com', 'salima', 'salima', '', '', 0, '', 0, 0, ''),
(2, 'gadhgadhi', 'chaima', 'chaima@gmail.com', 'chaima', 'chaima', '', '', 0, '', 0, 0, ''),
(65, 'jamel', 'yahyaoui', 'jamel@gmail.com', 'jamel', '$2b$10$6h12N2XJ/xQqg/YsZRaWdeH', '2022-12-09 23:36:01', '2022-12-09 23:36:01', 7955095, 'tabarka ain sobah', 29, 28024147, '29'),
(66, 'jamel', 'yahyaoui', 'jamel@gmail.com', 'jameljamel', '$2b$10$fVEJK2R14JtxBj8a2aD5F.S', '2022-12-09 23:43:45', '2022-12-09 23:43:45', 7955095, 'tabarka ain sobah', 29, 28024147, '29'),
(67, 'salima', 'brinsi', 'salima@gmail.com', 'brinsi', '$2b$10$JGRiG7nKJmAxIfEP6bZ9qeb', '2022-12-09 23:49:38', '2022-12-09 23:49:38', 7955095, 'jenbouda', 28, 22554478, 'femme'),
(68, 'aa', 'aa', 'qsdsqdqdqd@ZDQD', 'zazazaz', '$2b$10$kiLkDy3e7MSPFbCfQ9jbn.q', '2022-12-09 23:52:44', '2022-12-09 23:52:44', 44545, 'aaa', 14, 454554, 'homme'),
(74, 'yahyaoii', 'jamel', 'jamel@gmail.com', 'jamel01', 'jamel01', NULL, NULL, 79955, 'tabarka tunisie', 30, 28024147, 'Homme'),
(75, 'yahyaoui2022', 'jamel', 'jamel2011@gmail.com', 'jamel01', 'jamel01', NULL, NULL, 79955, 'tabarka tunisie', 30, 28024147, 'Homme'),
(76, 'test', 'validation', 'test@gmail.com', 'jamel02', '$2b$10$anfo8nKpZVlLvz7IpozBZep', '2022-12-10 10:07:43', '2022-12-10 10:07:43', 0, 'beja beja', 30, 280241558, 'h');

-- --------------------------------------------------------

--
-- Table structure for table `newcommentaire`
--

CREATE TABLE `newcommentaire` (
  `id_newcommentaire` int(10) NOT NULL,
  `commentaire` text NOT NULL,
  `membre` varchar(30) NOT NULL,
  `contenu` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_commentaire` int(10) NOT NULL,
  `id_membre` int(10) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newcommentaire`
--

INSERT INTO `newcommentaire` (`id_newcommentaire`, `commentaire`, `membre`, `contenu`, `date`, `id_commentaire`, `id_membre`, `createdAt`, `updatedAt`) VALUES
(3, 'good voyage', 'chaima', 'ppppppppp', '2022-09-13 16:51:09', 12, 2, NULL, NULL),
(5, 'good voyage', 'salima', 'gfdssgj jkkl', '2022-09-13 17:09:58', 12, 1, NULL, NULL),
(6, 'good voyage', 'salima', 'gfdsq hjytr', '2022-09-13 17:13:49', 12, 1, NULL, NULL),
(8, 'good voyage cc', 'chaima', 'wwwwwww', '2022-09-14 16:20:13', 12, 2, NULL, NULL),
(10, 'good voyage', 'salima', 'hhhhhhhhhhh', '2022-12-09 20:16:03', 12, 1, '2022-12-09', '2022-12-09'),
(11, 'good voyage', 'salima', 'ddddd', '2022-12-09 20:16:56', 12, 1, '2022-12-09', '2022-12-09'),
(12, 'good voyage', 'salima', 'noo', '2022-12-11 22:52:40', 12, 1, '2022-12-11', '2022-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `profil`
--

CREATE TABLE `profil` (
  `nom` int(11) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `login` varchar(20) NOT NULL,
  `pwd` int(20) NOT NULL,
  `photo` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `date_reservation` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `membre` varchar(11) NOT NULL,
  `admin` varchar(11) NOT NULL,
  `id_Role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`membre`, `admin`, `id_Role`) VALUES
('', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `type_voyage`
--

CREATE TABLE `type_voyage` (
  `id_type` int(10) UNSIGNED NOT NULL,
  `nom_type` varchar(255) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `type_voyage`
--

INSERT INTO `type_voyage` (`id_type`, `nom_type`, `createdAt`, `updateAt`) VALUES
(1, 'Randonnée\r\n', NULL, NULL),
(2, 'Camping', NULL, NULL),
(3, 'Covoiturage', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `voyage`
--

CREATE TABLE `voyage` (
  `id_voyage` int(10) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `description` text NOT NULL,
  `type` varchar(30) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voyage`
--

INSERT INTO `voyage` (`id_voyage`, `nom`, `date`, `description`, `type`, `createdAt`, `updatedAt`, `img`) VALUES
(1, 'Douz', '2022-09-13', '', 'camping', NULL, NULL, 'https://voyage-tunisie.info/wp-content/uploads/2020/10/Lune-de-miel-sur-le-sol-Tunisien-1026x500.jpg'),
(3, 'bizerte', '2022-09-18', '*Prix 25 DT\r\n*Transport inclus\r\n*Renseignement et Paiement :\r\n28 024 147\r\n', 'Camping', NULL, NULL, 'https://www.tourmag.com/photo/art/default/22144316-24964468.jpg?v=1526029884'),
(6, 'tabarka', '2022-12-08', '', 'camping', NULL, NULL, 'https://voyage-tunisie.info/wp-content/uploads/2017/11/prolong%C3%A9-sous-marine-320x240.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id_avis`),
  ADD KEY `id_membre` (`id_membre`);

--
-- Indexes for table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id_commentaire`),
  ADD KEY `id_membre` (`id_membre`),
  ADD KEY `id_voyage` (`id_voyage`);

--
-- Indexes for table `membre`
--
ALTER TABLE `membre`
  ADD PRIMARY KEY (`id_membre`);

--
-- Indexes for table `newcommentaire`
--
ALTER TABLE `newcommentaire`
  ADD PRIMARY KEY (`id_newcommentaire`),
  ADD KEY `id_commentaire` (`id_commentaire`),
  ADD KEY `id_membre` (`id_membre`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_Role`);

--
-- Indexes for table `type_voyage`
--
ALTER TABLE `type_voyage`
  ADD PRIMARY KEY (`id_type`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `voyage`
--
ALTER TABLE `voyage`
  ADD PRIMARY KEY (`id_voyage`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avis`
--
ALTER TABLE `avis`
  MODIFY `id_avis` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id_commentaire` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `membre`
--
ALTER TABLE `membre`
  MODIFY `id_membre` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `newcommentaire`
--
ALTER TABLE `newcommentaire`
  MODIFY `id_newcommentaire` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id_Role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `type_voyage`
--
ALTER TABLE `type_voyage`
  MODIFY `id_type` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `voyage`
--
ALTER TABLE `voyage`
  MODIFY `id_voyage` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `fk_avis_membre` FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id_membre`);

--
-- Constraints for table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `fk_commentaire_membre` FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id_membre`),
  ADD CONSTRAINT `fk_commentaire_voyage` FOREIGN KEY (`id_voyage`) REFERENCES `voyage` (`id_voyage`);

--
-- Constraints for table `newcommentaire`
--
ALTER TABLE `newcommentaire`
  ADD CONSTRAINT `fk_nc_m` FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id_membre`),
  ADD CONSTRAINT `fk_newc_c` FOREIGN KEY (`id_commentaire`) REFERENCES `commentaire` (`id_commentaire`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
