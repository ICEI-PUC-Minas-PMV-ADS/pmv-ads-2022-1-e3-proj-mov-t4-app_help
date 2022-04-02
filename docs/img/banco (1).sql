-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema site
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema site
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `site` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema teste
-- -----------------------------------------------------
USE `site` ;

-- -----------------------------------------------------
-- Table `site`.`tbprestador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `site`.`tbprestador` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL,
  `cnpj` VARCHAR(45) NULL,
  `email` VARCHAR(255) NULL,
  `senha` VARCHAR(255) NULL,
  `nome_do_comercio` VARCHAR(255) NULL,
  `servico_do_comercio` VARCHAR(100) NULL,
  `valor_servico` DOUBLE(12,2) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `site`.`tbusuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `site`.`tbusuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL,
  `cpf` VARCHAR(45) NULL,
  `data_nascimento` DATETIME NULL,
  `email` VARCHAR(255) NULL,
  `senha` VARCHAR(255) NULL,
  `chassi` VARCHAR(255) NULL,
  `endereco` VARCHAR(255) NULL,
  `numero` VARCHAR(10) NULL,
  `bairro` VARCHAR(100) NULL,
  `cidade` VARCHAR(100) NULL,
  `estado` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `site`.`tbsolicitacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `site`.`tbsolicitacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_utilizacao` DATETIME NULL,
  `valor_final` DOUBLE(12,2) NULL,
  `tbsolicitacaocol` VARCHAR(45) NULL,
  `prestadorID` INT NOT NULL,
  `usuarioID` INT NOT NULL,
  `status` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tbsolicitacao_tbprestador_idx` (`prestadorID` ASC) VISIBLE,
  INDEX `fk_tbsolicitacao_tbusuario1_idx` (`usuarioID` ASC) VISIBLE,
  CONSTRAINT `fk_tbsolicitacao_tbprestador`
    FOREIGN KEY (`prestadorID`)
    REFERENCES `site`.`tbprestador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbsolicitacao_tbusuario1`
    FOREIGN KEY (`usuarioID`)
    REFERENCES `site`.`tbusuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
