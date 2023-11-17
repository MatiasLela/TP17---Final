-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2023 a las 16:26:32
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp17`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id_jugador` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `posicion` char(1) NOT NULL,
  `edad` int(11) NOT NULL,
  `estatura` varchar(10) NOT NULL,
  `peso` int(12) NOT NULL,
  `nacionalidad` varchar(30) NOT NULL,
  `apariciones` int(11) NOT NULL,
  `apariciones_sustituto` int(11) NOT NULL,
  `atajadas` int(11) NOT NULL,
  `goles_concedidos` int(11) NOT NULL,
  `asistencias` int(11) NOT NULL,
  `faltas_cometidas` int(11) NOT NULL,
  `faltas_sufridas` int(11) NOT NULL,
  `tarjetas_amarillas` int(11) NOT NULL,
  `tarjetas_rojas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id_jugador`, `nombre`, `posicion`, `edad`, `estatura`, `peso`, `nacionalidad`, `apariciones`, `apariciones_sustituto`, `atajadas`, `goles_concedidos`, `asistencias`, `faltas_cometidas`, `faltas_sufridas`, `tarjetas_amarillas`, `tarjetas_rojas`) VALUES
(1, 'Fábio1', 'G', 43, '1.88', 86, 'Brasil', 28, 0, 84, 34, 0, 0, 2, 3, 0),
(2, 'Marlon4', 'D', 28, '1.83', 78, 'Brasil', 13, 2, 0, 0, 4, 1, 16, 1, 5),
(3, 'Marcelo12', 'D', 35, '1.73', 72, 'Brasil', 15, 1, 1, 1, 25, 8, 5, 24, 3),
(4, 'Nino33', 'D', 26, '1.88', 82, 'Brasil', 21, 0, 2, 0, 12, 4, 22, 22, 4),
(5, 'John Kennedy9', 'A', 21, '1.73', 71, 'Brasil', 20, 11, 4, 1, 35, 16, 19, 24, 8),
(6, 'Keno11', 'A', 34, '1.78', 72, 'Brasil', 19, 4, 2, 4, 37, 15, 15, 23, 5),
(7, 'Germán Cano14', 'A', 35, '1.78', 81, 'Argentino', 26, 2, 7, 1, 55, 22, 23, 10, 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id_jugador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id_jugador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
