-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eshop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema eshop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eshop` DEFAULT CHARACTER SET utf8 ;
USE `eshop` ;

-- -----------------------------------------------------
-- Table `eshop`.`CATEGORIES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eshop`.`CATEGORIES` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_category`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eshop`.`PRODUCTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eshop`.`PRODUCTOS` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(450) NULL,
  `category` INT NULL,
  `price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id_productos`),
  INDEX `fk_cat_prod_idx` (`category` ASC) VISIBLE,
  CONSTRAINT `fk_cat_prod`
    FOREIGN KEY (`category`)
    REFERENCES `eshop`.`CATEGORIES` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eshop`.`CLIENTES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eshop`.`CLIENTES` (
  `id_clientes` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `dateBirth` DATE NULL,
  `address:streetAddress` VARCHAR(45) NULL,
  `address:city` VARCHAR(45) NULL,
  `address:state` VARCHAR(45) NULL,
  `address:postalCode` VARCHAR(45) NULL,
  `historial_compras` INT NULL,
  PRIMARY KEY (`id_clientes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eshop`.`CARRITO_COMPRA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eshop`.`CARRITO_COMPRA` (
  `id_carrito_compra` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NULL,
  `id_producto` INT NULL,
  `cantidad` INT NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`id_carrito_compra`),
  INDEX `fk_carr_prod_idx` (`id_producto` ASC) VISIBLE,
  INDEX `fk_carr_clie_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_carr_prod`
    FOREIGN KEY (`id_producto`)
    REFERENCES `eshop`.`PRODUCTOS` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carr_clie`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `eshop`.`CLIENTES` (`id_clientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eshop`.`REVIEWS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eshop`.`REVIEWS` (
  `name` VARCHAR(45) NULL,
  `comment` VARCHAR(45) NULL,
  `stars` INT NULL,
  `date` DATE NULL,
  `id_prod` INT NOT NULL,
  `id_clie` INT NOT NULL,
  INDEX `id_prod_rev_idx` (`id_prod` ASC) VISIBLE,
  INDEX `id_clie_rev_idx` (`id_clie` ASC) VISIBLE,
  PRIMARY KEY (`id_prod`, `id_clie`),
  CONSTRAINT `id_prod_rev`
    FOREIGN KEY (`id_prod`)
    REFERENCES `eshop`.`PRODUCTOS` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_clie_rev`
    FOREIGN KEY (`id_clie`)
    REFERENCES `eshop`.`CLIENTES` (`id_clientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eshop`.`VENTAS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eshop`.`VENTAS` (
  `id_venta` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NULL,
  `id_producto` INT NULL,
  `cantidad` INT NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`id_venta`),
  INDEX `fk_ventas_cliente_idx` (`id_cliente` ASC) VISIBLE,
  INDEX `fk_ventas productos_idx` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_ventas_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `eshop`.`CLIENTES` (`id_clientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas productos`
    FOREIGN KEY (`id_producto`)
    REFERENCES `eshop`.`PRODUCTOS` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
