-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema loany
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema loany
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loany` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `loany` ;

-- -----------------------------------------------------
-- Table `loany`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`productos` (
  `pd_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `pd_nombre` VARCHAR(45) NOT NULL COMMENT '',
  `pd_importe_minimo` DECIMAL(11,2) NOT NULL COMMENT '',
  `pd_importe_maximo` DECIMAL(11,2) NOT NULL COMMENT '',
  `pd_montos` INT NOT NULL COMMENT '',
  `pd_interes_mensual` DECIMAL(3,1) NOT NULL COMMENT '',
  `pd_max_cuotas` INT NOT NULL COMMENT '',
  `pd_gastos_activacion` DECIMAL(6,2) NOT NULL COMMENT '',
  `pd_comentarios` VARCHAR(1000) NULL COMMENT '',
  `pd_estado` INT NOT NULL COMMENT '',
  `pd_fecha_creacion` DATETIME NOT NULL COMMENT '',
  `pd_fecha_ultima_modificacion` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`pd_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`clientes_datos_identificativos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`clientes_datos_identificativos` (
  `cl_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `cl_nombre` VARCHAR(45) NOT NULL COMMENT '',
  `cl_apellido` VARCHAR(45) NOT NULL COMMENT '',
  `cl_fecha_nacimiento` DATE NOT NULL COMMENT '',
  `cl_tipo_documento` VARCHAR(45) NOT NULL COMMENT '',
  `cl_numero_documento` VARCHAR(45) NOT NULL COMMENT '',
  `cl_fecha_creacion` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`cl_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`grupos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`grupos` (
  `gr_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `gr_nombre` VARCHAR(45) NOT NULL COMMENT '',
  `gr_comision` DECIMAL(2,1) NOT NULL COMMENT '',
  `gr_nombre_referente` VARCHAR(45) NOT NULL COMMENT '',
  `gr_apellido_referente` VARCHAR(45) NULL COMMENT '',
  `gr_telefono` VARCHAR(45) NOT NULL COMMENT '',
  `gr_fax` VARCHAR(45) NOT NULL COMMENT '',
  `gr_correo_electronico` VARCHAR(45) NOT NULL COMMENT '',
  `gr_comentarios` VARCHAR(1000) NULL COMMENT '',
  `gr_estado` TINYINT(1) NOT NULL COMMENT '',
  `gr_fecha_creacion` DATETIME NOT NULL COMMENT '',
  `gr_fecha_ultima_modificacion` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`gr_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`clientes_historial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`clientes_historial` (
  `cl_id_historial` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `clientes_datos_identificativos_cl_id` INT NOT NULL COMMENT '',
  `grupos_gr_id` INT NOT NULL COMMENT '',
  `cl_celular` VARCHAR(45) NOT NULL COMMENT '',
  `cl_otro_numero` VARCHAR(45) NULL COMMENT '',
  `cl_correo_electronico` VARCHAR(45) NOT NULL COMMENT '',
  `cl_estado_civil` INT NOT NULL COMMENT '',
  `cl_hijos` INT NOT NULL COMMENT '',
  `cl_nombre_conyuge` VARCHAR(45) NULL COMMENT '',
  `cl_apellido_conyuge` VARCHAR(45) NULL COMMENT '',
  `cl_direccion_residencia` VARCHAR(45) NOT NULL COMMENT '',
  `cl_codigo_postal` VARCHAR(45) NOT NULL COMMENT '',
  `cl_ciudad` VARCHAR(45) NOT NULL COMMENT '',
  `cl_pais` VARCHAR(45) NOT NULL COMMENT '',
  `cl_tiempo_residiendo` INT NOT NULL COMMENT '',
  `cl_propiedad` INT NOT NULL COMMENT '',
  `cl_pago_mensual` DECIMAL(11,2) NOT NULL COMMENT '',
  `cl_telefono_residencia` VARCHAR(45) NULL COMMENT '',
  `cl_nombre_propietario` VARCHAR(45) NULL COMMENT '',
  `cl_apellido_propietario` VARCHAR(45) NULL COMMENT '',
  `cl_nivel_academico` INT NOT NULL COMMENT '',
  `cl_titulo` VARCHAR(45) NOT NULL COMMENT '',
  `cl_centro_estudio` VARCHAR(45) NOT NULL COMMENT '',
  `cl_empresa` VARCHAR(45) NOT NULL COMMENT '',
  `cl_telefono_empresa` VARCHAR(45) NOT NULL COMMENT '',
  `cl_cargo` VARCHAR(45) NOT NULL COMMENT '',
  `cl_antiguedad` INT NOT NULL COMMENT '',
  `cl_ingreso_mensual` DECIMAL(11,2) NOT NULL COMMENT '',
  `cl_cobro` INT NOT NULL COMMENT '',
  `cl_conyuge_nivel_academico` INT NULL COMMENT '',
  `cl_conyuge_titulo` VARCHAR(45) NULL COMMENT '',
  `cl_conyuge_centro_estudio` VARCHAR(45) NULL COMMENT '',
  `cl_conyuge_empresa` VARCHAR(45) NULL COMMENT '',
  `cl_conyuge_telefono_empresa` VARCHAR(45) NULL COMMENT '',
  `cl_conyuge_cargo` VARCHAR(45) NULL COMMENT '',
  `cl_conyuge_antiguedad` INT NULL COMMENT '',
  `cl_conyuge_ingreso_mensual` DECIMAL(11,2) NULL COMMENT '',
  `cl_conyuge_cobro` INT NULL COMMENT '',
  `cl_otra_fuente_ingresos` INT NULL COMMENT '',
  `cl_otra_ocupacion` VARCHAR(45) NULL COMMENT '',
  `cl_otra_empresa` VARCHAR(45) NULL COMMENT '',
  `cl_telefono_otra_empresa` VARCHAR(45) NULL COMMENT '',
  `cl_otro_ingreso_mensual` DECIMAL(11,2) NULL COMMENT '',
  `cl_nombre_banco_1` VARCHAR(45) NOT NULL COMMENT '',
  `cl_numero_cuenta_1` VARCHAR(45) NOT NULL COMMENT '',
  `cl_nombre_banco_2` VARCHAR(45) NULL COMMENT '',
  `cl_numero_cuenta_2` VARCHAR(45) NULL COMMENT '',
  `cl_nombre_banco_tarjeta_1` VARCHAR(45) NOT NULL COMMENT '',
  `cl_limite_credito_tarjeta_1` DECIMAL(11,2) NOT NULL COMMENT '',
  `cl_nombre_banco_tarjeta_2` VARCHAR(45) NULL COMMENT '',
  `cl_limite_credito_tarjeta_2` DECIMAL(11,2) NULL COMMENT '',
  `cl_marca_vehiculo` VARCHAR(45) NOT NULL COMMENT '',
  `cl_modelo_vehiculo` VARCHAR(45) NOT NULL COMMENT '',
  `cl_ano_vehiculo` INT NOT NULL COMMENT '',
  `cl_placa_vehiculo` VARCHAR(45) NOT NULL COMMENT '',
  `cl_valor_vehiculo` DECIMAL(11,2) NOT NULL COMMENT '',
  `cl_nombre_completo_relacion_1` VARCHAR(45) NOT NULL COMMENT '',
  `cl_tipo_relacion_1` INT NOT NULL COMMENT '',
  `cl_telefono_relacion_1` VARCHAR(45) NOT NULL COMMENT '',
  `cl_nombre_completo_relacion_2` VARCHAR(45) NOT NULL COMMENT '',
  `cl_tipo_relacion_2` INT NOT NULL COMMENT '',
  `cl_telefono_relacion_2` VARCHAR(45) NOT NULL COMMENT '',
  `cl_comentarios` VARCHAR(1000) NULL COMMENT '',
  `cl_fecha_creacion_historial` DATETIME NOT NULL COMMENT '',
  `cl_fecha_modificacion_historial` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`cl_id_historial`)  COMMENT '',
  INDEX `fk_clientes_historial_clientes_datos_ide_idx` (`clientes_datos_identificativos_cl_id` ASC)  COMMENT '',
  INDEX `fk_clientes_historial_grupos1_idx` (`grupos_gr_id` ASC)  COMMENT '',
  CONSTRAINT `fk_clientes_historial_clientes_datos_ident1`
    FOREIGN KEY (`clientes_datos_identificativos_cl_id`)
    REFERENCES `loany`.`clientes_datos_identificativos` (`cl_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_historial_grupos1`
    FOREIGN KEY (`grupos_gr_id`)
    REFERENCES `loany`.`grupos` (`gr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
KEY_BLOCK_SIZE = 16;


-- -----------------------------------------------------
-- Table `loany`.`solicitudes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`solicitudes` (
  `sl_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `clientes_cl_id` INT NOT NULL COMMENT '',
  `clientes_historial_cl_id_historial` INT NOT NULL COMMENT '',
  `productos_pd_id` INT NOT NULL COMMENT '',
  `sl_fecha_recepcion` DATE NOT NULL COMMENT '',
  `sl_producto` INT NOT NULL COMMENT '',
  `sl_cantidad_solicitada` DECIMAL(11,2) NOT NULL COMMENT '',
  `sl_numero_cuenta_transferencia` VARCHAR(45) NOT NULL COMMENT '',
  `sl_nombre_banco_transferencia` VARCHAR(45) NOT NULL COMMENT '',
  `sl_comentarios` VARCHAR(1000) NULL COMMENT '',
  `sl_estado` INT NOT NULL COMMENT '',
  `sl_prestamo_finalizado` TINYINT(1) NOT NULL COMMENT '',
  `sl_fecha_creacion` DATETIME NOT NULL COMMENT '',
  `sl_fecha_ultima_modificacion` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`sl_id`)  COMMENT '',
  INDEX `fk_solicitud_producto1_idx` (`productos_pd_id` ASC)  COMMENT '',
  INDEX `fk_solicitud_cliente1_idx` (`clientes_cl_id` ASC)  COMMENT '',
  INDEX `fk_solicitud_clientes_historial1_idx` (`clientes_historial_cl_id_historial` ASC)  COMMENT '',
  CONSTRAINT `fk_solicitud_producto1`
    FOREIGN KEY (`productos_pd_id`)
    REFERENCES `loany`.`productos` (`pd_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_solicitud_cliente1`
    FOREIGN KEY (`clientes_cl_id`)
    REFERENCES `loany`.`clientes_datos_identificativos` (`cl_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_solicitudes_clientes_historial_datos_adiccionales1`
    FOREIGN KEY (`clientes_historial_cl_id_historial`)
    REFERENCES `loany`.`clientes_historial` (`cl_id_historial`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`prestamos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`prestamos` (
  `pr_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `solicitudes_sl_id` INT NOT NULL COMMENT '',
  `pr_nombre_producto` VARCHAR(45) NOT NULL COMMENT '',
  `pr_cantidad` DECIMAL(11,2) NOT NULL COMMENT '',
  `pr_gastos_activacion` DECIMAL(6,2) NOT NULL COMMENT '',
  `pr_interes_mensual` DECIMAL(3,1) NOT NULL COMMENT '',
  `pr_amortizacion` INT NOT NULL COMMENT '',
  `pr_cuotas` INT NOT NULL COMMENT '',
  `pr_forma_pago` INT NOT NULL COMMENT '',
  `pr_total_devolucion` DECIMAL(11,2) NOT NULL COMMENT '',
  `pr_comentarios` VARCHAR(1000) NULL COMMENT '',
  `pr_estado` INT NOT NULL COMMENT '',
  `pr_fecha_activacion` DATE NOT NULL COMMENT '',
  `pr_fecha_caducidad` DATE NOT NULL COMMENT '',
  `pr_fecha_finalizacion` DATE NULL COMMENT '',
  `pr_fecha_ultima_modificacion` DATETIME NOT NULL COMMENT '',
  `pr_cargo_mora` DECIMAL(3,1) NOT NULL COMMENT '',
  `pr_dias_gracia_mora` INT NOT NULL COMMENT '',
  `pr_dias_frecuencia_mora` INT NOT NULL COMMENT '',
  `pr_gastos_recobro_mora` DECIMAL(8,2) NOT NULL COMMENT '',
  PRIMARY KEY (`pr_id`)  COMMENT '',
  INDEX `fk_prestamo_solicitud_idx` (`solicitudes_sl_id` ASC)  COMMENT '',
  CONSTRAINT `fk_prestamo_solicitud`
    FOREIGN KEY (`solicitudes_sl_id`)
    REFERENCES `loany`.`solicitudes` (`sl_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`formas_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`formas_pago` (
  `fp_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `fp_nombre` VARCHAR(45) NOT NULL COMMENT '',
  `fp_meses` DECIMAL(3,1) NOT NULL COMMENT '',
  `fp_dias` INT NOT NULL COMMENT '',
  PRIMARY KEY (`fp_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`productos_has_formas_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`productos_has_formas_pago` (
  `productos_pd_id` INT NOT NULL COMMENT '',
  `formas_pago_fp_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`productos_pd_id`, `formas_pago_fp_id`)  COMMENT '',
  INDEX `fk_productos_has_formas_pago_formas_pago1_idx` (`formas_pago_fp_id` ASC)  COMMENT '',
  INDEX `fk_productos_has_formas_pago_productos1_idx` (`productos_pd_id` ASC)  COMMENT '',
  CONSTRAINT `fk_productos_has_formas_pago_productos1`
    FOREIGN KEY (`productos_pd_id`)
    REFERENCES `loany`.`productos` (`pd_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_has_formas_pago_formas_pago1`
    FOREIGN KEY (`formas_pago_fp_id`)
    REFERENCES `loany`.`formas_pago` (`fp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`amortizaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`amortizaciones` (
  `am_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `am_nombre` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`am_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`frecuencias_mora`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`frecuencias_mora` (
  `fr_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `fr_nombre` VARCHAR(45) NOT NULL COMMENT '',
  `fr_intervalo_dias` INT NOT NULL COMMENT '',
  PRIMARY KEY (`fr_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`mora`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`mora` (
  `frecuencias_mora_fr_id` INT NOT NULL COMMENT '',
  `mr_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `mr_cargo` DECIMAL(3,1) NOT NULL COMMENT '',
  `mr_cargo_minimo` DECIMAL(3,1) NOT NULL COMMENT '',
  `mr_cargo_maximo` DECIMAL(3,1) NOT NULL COMMENT '',
  `mr_incremento_cargo` DECIMAL(3,1) NOT NULL COMMENT '',
  `mr_dias_gracia` INT NOT NULL COMMENT '',
  `mr_dias_gracia_minimo` INT NOT NULL COMMENT '',
  `mr_dias_gracia_maximo` INT NOT NULL COMMENT '',
  `mr_gastos_recobro` DECIMAL(8,2) NOT NULL COMMENT '',
  `mr_gastos_recobro_minimo` DECIMAL(8,2) NOT NULL COMMENT '',
  `mr_gastos_recobro_maximo` DECIMAL(8,2) NOT NULL COMMENT '',
  `mr_incremento_gastos_recobro` DECIMAL(8,2) NOT NULL COMMENT '',
  `mr_cobro_compulsivo` INT NULL COMMENT '',
  `mr_fecha_modificacion` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`mr_id`)  COMMENT '',
  INDEX `fk_mora_frecuencias_mora1_idx` (`frecuencias_mora_fr_id` ASC)  COMMENT '',
  CONSTRAINT `fk_mora_frecuencias_mora1`
    FOREIGN KEY (`frecuencias_mora_fr_id`)
    REFERENCES `loany`.`frecuencias_mora` (`fr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`estados_cuota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`estados_cuota` (
  `ec_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `ec_nombre` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`ec_id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`cuotas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`cuotas` (
  `prestamos_pr_id` INT NOT NULL COMMENT '',
  `estados_cuota_ec_id` INT NOT NULL COMMENT '',
  `ct_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `ct_cantidad` DECIMAL(11,2) NOT NULL COMMENT '',
  `ct_amortizado` DECIMAL(11,2) NOT NULL COMMENT '',
  `ct_intereses` DECIMAL(11,2) NOT NULL COMMENT '',
  `ct_saldo_prestamo` DECIMAL(11,2) NOT NULL COMMENT '',
  `ct_fecha_pago` DATE NOT NULL COMMENT '',
  `ct_cantidad_mora` DECIMAL(11,2) NOT NULL COMMENT '',
  PRIMARY KEY (`ct_id`)  COMMENT '',
  INDEX `fk_cuotas_prestamos1_idx` (`prestamos_pr_id` ASC)  COMMENT '',
  INDEX `fk_cuotas_estados_cuota1_idx` (`estados_cuota_ec_id` ASC)  COMMENT '',
  CONSTRAINT `fk_cuotas_prestamos1`
    FOREIGN KEY (`prestamos_pr_id`)
    REFERENCES `loany`.`prestamos` (`pr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cuotas_estados_cuota1`
    FOREIGN KEY (`estados_cuota_ec_id`)
    REFERENCES `loany`.`estados_cuota` (`ec_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loany`.`formas_cobro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loany`.`formas_cobro` (
  `fc_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `fc_nombre` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`fc_id`)  COMMENT '')
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `loany`.`productos`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`productos` (`pd_id`, `pd_nombre`, `pd_importe_minimo`, `pd_importe_maximo`, `pd_montos`, `pd_interes_mensual`, `pd_max_cuotas`, `pd_gastos_activacion`, `pd_comentarios`, `pd_estado`, `pd_fecha_creacion`, `pd_fecha_ultima_modificacion`) VALUES (1, 'Avance de sueldo Standard', 1000.00, 3000.00, 5, 30.0, 1, 0.00, '', 1, '2015-10-08 01:46:09', '2015-10-07 22:48:56');
INSERT INTO `loany`.`productos` (`pd_id`, `pd_nombre`, `pd_importe_minimo`, `pd_importe_maximo`, `pd_montos`, `pd_interes_mensual`, `pd_max_cuotas`, `pd_gastos_activacion`, `pd_comentarios`, `pd_estado`, `pd_fecha_creacion`, `pd_fecha_ultima_modificacion`) VALUES (2, 'Avance de sueldo Premium', 3500.00, 5000.00, 4, 30.0, 1, 0.00, '', 1, '2015-10-08 01:46:35', '2015-10-07 22:50:29');
INSERT INTO `loany`.`productos` (`pd_id`, `pd_nombre`, `pd_importe_minimo`, `pd_importe_maximo`, `pd_montos`, `pd_interes_mensual`, `pd_max_cuotas`, `pd_gastos_activacion`, `pd_comentarios`, `pd_estado`, `pd_fecha_creacion`, `pd_fecha_ultima_modificacion`) VALUES (3, 'Avance de sueldo Platinum', 5000.00, 20000.00, 16, 30.0, 6, 200.00, '', 1, '2015-10-08 17:29:09', '2015-11-19 14:49:01');
INSERT INTO `loany`.`productos` (`pd_id`, `pd_nombre`, `pd_importe_minimo`, `pd_importe_maximo`, `pd_montos`, `pd_interes_mensual`, `pd_max_cuotas`, `pd_gastos_activacion`, `pd_comentarios`, `pd_estado`, `pd_fecha_creacion`, `pd_fecha_ultima_modificacion`) VALUES (4, 'Avance de sueldo Diamond', 5000.00, 30000.00, 26, 20.0, 24, 300.00, '', 1, '2015-10-08 17:47:28', '2015-11-20 23:27:48');
INSERT INTO `loany`.`productos` (`pd_id`, `pd_nombre`, `pd_importe_minimo`, `pd_importe_maximo`, `pd_montos`, `pd_interes_mensual`, `pd_max_cuotas`, `pd_gastos_activacion`, `pd_comentarios`, `pd_estado`, `pd_fecha_creacion`, `pd_fecha_ultima_modificacion`) VALUES (5, 'Avance de sueldo Gold', 5000.00, 10000.00, 11, 20.0, 12, 200.00, '', 2, '2015-11-21 22:11:16', '2015-12-17 23:32:41');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`clientes_datos_identificativos`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`clientes_datos_identificativos` (`cl_id`, `cl_nombre`, `cl_apellido`, `cl_fecha_nacimiento`, `cl_tipo_documento`, `cl_numero_documento`, `cl_fecha_creacion`) VALUES (1, 'Fabio', 'Schettino', '1978-07-07', 'cedula', '123-1234567-1', '2015-11-19 12:42:49');
INSERT INTO `loany`.`clientes_datos_identificativos` (`cl_id`, `cl_nombre`, `cl_apellido`, `cl_fecha_nacimiento`, `cl_tipo_documento`, `cl_numero_documento`, `cl_fecha_creacion`) VALUES (2, 'Adriano', 'Duval', '1965-10-12', 'cedula', '123-1234567-2', '2015-11-19 12:45:51');
INSERT INTO `loany`.`clientes_datos_identificativos` (`cl_id`, `cl_nombre`, `cl_apellido`, `cl_fecha_nacimiento`, `cl_tipo_documento`, `cl_numero_documento`, `cl_fecha_creacion`) VALUES (3, 'Enrique', 'Himenez', '1978-12-10', 'cedula', '123-1234557-8', '2015-12-10 23:24:26');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`grupos`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (1, 'Claro', 1.0, 'Antonio', 'Alvarez', '(809) 234-5678', '(809) 234-5678', 'antonio.alvarez@claro.com.do', '', 1, '2015-10-04 19:18:48', '2015-11-26 18:53:16');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (2, 'ReadyCredit', 1.5, 'Fabio', 'Schettino', '(809) 234-5678', '(809) 234-5678', 'fabio.schettino@readycredit.net', '', 1, '2015-10-04 19:21:15', '2015-10-05 19:11:09');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (3, 'Telefonica', 2.0, 'Gertrudis', 'Lugo Serrano', '(809) 234-5678', '(809) 234-5678', 'gertrudis.lugo@telefonica.com.do', '', 1, '2015-10-04 19:22:12', '2015-10-04 19:22:12');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (4, 'Juniper', 2.5, 'Miguel Angel', 'Hinojosa', '(809) 234-5678', '(809) 234-5678', 'miguelangel.hinojosa@juniper.com', '', 1, '2015-10-04 19:23:40', '2015-10-04 19:23:40');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (5, 'Microsoft', 3.0, 'Bill', 'Gates', '(809) 234-5678', '(809) 234-5678', 'bill.gates@microsoft.com', '', 1, '2015-10-04 19:24:19', '2015-11-26 18:53:45');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (6, 'Apple', 3.5, 'Steve', 'Jobs', '(809) 234-5678', '(809) 234-5678', 'steve.jobs@apple.com', '', 1, '2015-10-04 19:47:13', '2015-10-04 19:47:13');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (7, 'Orange', 4.0, 'Ugo', 'Martinez', '(809) 234-5678', '(809) 234-5678', 'ugo.martinez@orange.com', '', 1, '2015-10-04 19:54:53', '2015-11-26 18:53:56');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (8, 'Iberia', 4.5, 'Ernesto', 'Ribeiro', '(809) 234-5678', '(809) 234-5678', 'ernesto.riberio@iberia.es', '', 1, '2015-10-04 19:59:27', '2015-11-26 18:54:05');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (9, 'EASports', 5.0, 'George', 'Lucas', '(809) 234-5678', '(809) 234-5678', 'george.lucas@easports.co.uk', '', 1, '2015-10-04 20:03:52', '2015-10-04 20:03:52');
INSERT INTO `loany`.`grupos` (`gr_id`, `gr_nombre`, `gr_comision`, `gr_nombre_referente`, `gr_apellido_referente`, `gr_telefono`, `gr_fax`, `gr_correo_electronico`, `gr_comentarios`, `gr_estado`, `gr_fecha_creacion`, `gr_fecha_ultima_modificacion`) VALUES (10, 'Barcelo Viajes', 1.0, 'Michael', 'Redmond', '(809) 234-5678', '(809) 234-5678', 'michael.ramon@barceloviajes.es', '', 1, '2015-10-04 22:24:37', '2015-11-26 18:54:16');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`clientes_historial`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`clientes_historial` (`cl_id_historial`, `clientes_datos_identificativos_cl_id`, `grupos_gr_id`, `cl_celular`, `cl_otro_numero`, `cl_correo_electronico`, `cl_estado_civil`, `cl_hijos`, `cl_nombre_conyuge`, `cl_apellido_conyuge`, `cl_direccion_residencia`, `cl_codigo_postal`, `cl_ciudad`, `cl_pais`, `cl_tiempo_residiendo`, `cl_propiedad`, `cl_pago_mensual`, `cl_telefono_residencia`, `cl_nombre_propietario`, `cl_apellido_propietario`, `cl_nivel_academico`, `cl_titulo`, `cl_centro_estudio`, `cl_empresa`, `cl_telefono_empresa`, `cl_cargo`, `cl_antiguedad`, `cl_ingreso_mensual`, `cl_cobro`, `cl_conyuge_nivel_academico`, `cl_conyuge_titulo`, `cl_conyuge_centro_estudio`, `cl_conyuge_empresa`, `cl_conyuge_telefono_empresa`, `cl_conyuge_cargo`, `cl_conyuge_antiguedad`, `cl_conyuge_ingreso_mensual`, `cl_conyuge_cobro`, `cl_otra_fuente_ingresos`, `cl_otra_ocupacion`, `cl_otra_empresa`, `cl_telefono_otra_empresa`, `cl_otro_ingreso_mensual`, `cl_nombre_banco_1`, `cl_numero_cuenta_1`, `cl_nombre_banco_2`, `cl_numero_cuenta_2`, `cl_nombre_banco_tarjeta_1`, `cl_limite_credito_tarjeta_1`, `cl_nombre_banco_tarjeta_2`, `cl_limite_credito_tarjeta_2`, `cl_marca_vehiculo`, `cl_modelo_vehiculo`, `cl_ano_vehiculo`, `cl_placa_vehiculo`, `cl_valor_vehiculo`, `cl_nombre_completo_relacion_1`, `cl_tipo_relacion_1`, `cl_telefono_relacion_1`, `cl_nombre_completo_relacion_2`, `cl_tipo_relacion_2`, `cl_telefono_relacion_2`, `cl_comentarios`, `cl_fecha_creacion_historial`, `cl_fecha_modificacion_historial`) VALUES (1, 1, 4, '(809) 234-5678', '', 'fabio@fabio-schettino.com', 2, 0, NULL, NULL, 'Calle Gabriel Alzamora 54', '07009', 'Palma de Mallorca', 'Espana', 4, 2, 30000.00, '', 'David', 'Diez Herrero', 2, 'Perito informatico', 'ITIS F.Giordani', 'Juniper', '(809) 234-5678', 'Visual Designer', 6, 120000.00, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '', '', '', NULL, 'Banco Santander', 'DO28BAGR00000001212453611324', '', '', 'Bankia', 100000.00, '', NULL, 'Renault', 'Clio 1.5 DCI', 2004, '789VLG', 80000.00, 'Gertrudis Luogo Serrano', 1, '(809) 234-5678', 'Augusto Fontana', 1, '(809) 234-5678', '', '2015-11-19 12:42:49', '2015-11-19 12:42:49');
INSERT INTO `loany`.`clientes_historial` (`cl_id_historial`, `clientes_datos_identificativos_cl_id`, `grupos_gr_id`, `cl_celular`, `cl_otro_numero`, `cl_correo_electronico`, `cl_estado_civil`, `cl_hijos`, `cl_nombre_conyuge`, `cl_apellido_conyuge`, `cl_direccion_residencia`, `cl_codigo_postal`, `cl_ciudad`, `cl_pais`, `cl_tiempo_residiendo`, `cl_propiedad`, `cl_pago_mensual`, `cl_telefono_residencia`, `cl_nombre_propietario`, `cl_apellido_propietario`, `cl_nivel_academico`, `cl_titulo`, `cl_centro_estudio`, `cl_empresa`, `cl_telefono_empresa`, `cl_cargo`, `cl_antiguedad`, `cl_ingreso_mensual`, `cl_cobro`, `cl_conyuge_nivel_academico`, `cl_conyuge_titulo`, `cl_conyuge_centro_estudio`, `cl_conyuge_empresa`, `cl_conyuge_telefono_empresa`, `cl_conyuge_cargo`, `cl_conyuge_antiguedad`, `cl_conyuge_ingreso_mensual`, `cl_conyuge_cobro`, `cl_otra_fuente_ingresos`, `cl_otra_ocupacion`, `cl_otra_empresa`, `cl_telefono_otra_empresa`, `cl_otro_ingreso_mensual`, `cl_nombre_banco_1`, `cl_numero_cuenta_1`, `cl_nombre_banco_2`, `cl_numero_cuenta_2`, `cl_nombre_banco_tarjeta_1`, `cl_limite_credito_tarjeta_1`, `cl_nombre_banco_tarjeta_2`, `cl_limite_credito_tarjeta_2`, `cl_marca_vehiculo`, `cl_modelo_vehiculo`, `cl_ano_vehiculo`, `cl_placa_vehiculo`, `cl_valor_vehiculo`, `cl_nombre_completo_relacion_1`, `cl_tipo_relacion_1`, `cl_telefono_relacion_1`, `cl_nombre_completo_relacion_2`, `cl_tipo_relacion_2`, `cl_telefono_relacion_2`, `cl_comentarios`, `cl_fecha_creacion_historial`, `cl_fecha_modificacion_historial`) VALUES (2, 2, 1, '(809) 234-5678', '', 'adriano.duval@gmail.com', 1, 3, 'Maria', 'De la Vega', 'Calle Winston Churcill 34', '12345', 'Santo Domingo', 'Republica Dominicana', 5, 2, 30000.00, '', 'Fernando', 'Sello', 4, 'Ingeniero agronomo', 'UASD', 'Cultivos RD', '(809) 234-5678', 'Responsable de analisis', 7, 200000.00, 0, 4, 'Doctora en medicina', 'UASD', 'Hospital Dario Contreras', '(809) 234-5678', 'Pediatra', 7, 170000.00, NULL, 0, '', '', '', NULL, 'Banco Santander', 'DO28BAGR00000001212453611324', '', '', 'Bankia', 100000.00, '', NULL, 'Renault', 'Megane 1.9 DCI', 2013, '234SDA', 150000.00, 'Fabio Schettino', 1, '(809) 234-5678', 'Jonathan Matesanz', 2, '(809) 234-5678', '', '2015-11-19 12:45:51', '2015-11-19 12:46:28');
INSERT INTO `loany`.`clientes_historial` (`cl_id_historial`, `clientes_datos_identificativos_cl_id`, `grupos_gr_id`, `cl_celular`, `cl_otro_numero`, `cl_correo_electronico`, `cl_estado_civil`, `cl_hijos`, `cl_nombre_conyuge`, `cl_apellido_conyuge`, `cl_direccion_residencia`, `cl_codigo_postal`, `cl_ciudad`, `cl_pais`, `cl_tiempo_residiendo`, `cl_propiedad`, `cl_pago_mensual`, `cl_telefono_residencia`, `cl_nombre_propietario`, `cl_apellido_propietario`, `cl_nivel_academico`, `cl_titulo`, `cl_centro_estudio`, `cl_empresa`, `cl_telefono_empresa`, `cl_cargo`, `cl_antiguedad`, `cl_ingreso_mensual`, `cl_cobro`, `cl_conyuge_nivel_academico`, `cl_conyuge_titulo`, `cl_conyuge_centro_estudio`, `cl_conyuge_empresa`, `cl_conyuge_telefono_empresa`, `cl_conyuge_cargo`, `cl_conyuge_antiguedad`, `cl_conyuge_ingreso_mensual`, `cl_conyuge_cobro`, `cl_otra_fuente_ingresos`, `cl_otra_ocupacion`, `cl_otra_empresa`, `cl_telefono_otra_empresa`, `cl_otro_ingreso_mensual`, `cl_nombre_banco_1`, `cl_numero_cuenta_1`, `cl_nombre_banco_2`, `cl_numero_cuenta_2`, `cl_nombre_banco_tarjeta_1`, `cl_limite_credito_tarjeta_1`, `cl_nombre_banco_tarjeta_2`, `cl_limite_credito_tarjeta_2`, `cl_marca_vehiculo`, `cl_modelo_vehiculo`, `cl_ano_vehiculo`, `cl_placa_vehiculo`, `cl_valor_vehiculo`, `cl_nombre_completo_relacion_1`, `cl_tipo_relacion_1`, `cl_telefono_relacion_1`, `cl_nombre_completo_relacion_2`, `cl_tipo_relacion_2`, `cl_telefono_relacion_2`, `cl_comentarios`, `cl_fecha_creacion_historial`, `cl_fecha_modificacion_historial`) VALUES (3, 1, 4, '(809) 234-5678', '(809) 234-5678', 'fabio@fabio-schettino.com', 1, 1, 'Nieve', 'Alvarez', 'Calle Gabriel Alzamora 54', '07009', 'Palma de Mallorca', 'Espana', 4, 2, 30000.00, '(809) 234-5678', 'David', 'Diez Herrero', 2, 'Perito informatico', 'ITIS F.Giordani', 'Juniper', '(809) 234-5678', 'Visual Designer', 6, 120000.00, 0, 4, 'Abogado', 'UASD', 'Govierno', '(809) 234-5678', 'Responsable de relaciones exteriores', 3, 200000.00, NULL, 3, 'Video maker', 'Video Edit', '(809) 234-5678', 80000.00, 'Banco Santander', 'DO28BAGR00000001212453611324', 'Banco Sabadel', 'DO28BAGR00000001212453611324', 'Bankia', 100000.00, 'Bankia', 80000.00, 'Renault', 'Clio 1.5 DCI', 2004, '789VLG', 80000.00, 'Gertrudis Luogo Serrano', 1, '(809) 234-5678', 'Augusto Fontana', 1, '(809) 234-5678', '', '2015-11-19 12:50:08', '2015-11-19 12:50:08');
INSERT INTO `loany`.`clientes_historial` (`cl_id_historial`, `clientes_datos_identificativos_cl_id`, `grupos_gr_id`, `cl_celular`, `cl_otro_numero`, `cl_correo_electronico`, `cl_estado_civil`, `cl_hijos`, `cl_nombre_conyuge`, `cl_apellido_conyuge`, `cl_direccion_residencia`, `cl_codigo_postal`, `cl_ciudad`, `cl_pais`, `cl_tiempo_residiendo`, `cl_propiedad`, `cl_pago_mensual`, `cl_telefono_residencia`, `cl_nombre_propietario`, `cl_apellido_propietario`, `cl_nivel_academico`, `cl_titulo`, `cl_centro_estudio`, `cl_empresa`, `cl_telefono_empresa`, `cl_cargo`, `cl_antiguedad`, `cl_ingreso_mensual`, `cl_cobro`, `cl_conyuge_nivel_academico`, `cl_conyuge_titulo`, `cl_conyuge_centro_estudio`, `cl_conyuge_empresa`, `cl_conyuge_telefono_empresa`, `cl_conyuge_cargo`, `cl_conyuge_antiguedad`, `cl_conyuge_ingreso_mensual`, `cl_conyuge_cobro`, `cl_otra_fuente_ingresos`, `cl_otra_ocupacion`, `cl_otra_empresa`, `cl_telefono_otra_empresa`, `cl_otro_ingreso_mensual`, `cl_nombre_banco_1`, `cl_numero_cuenta_1`, `cl_nombre_banco_2`, `cl_numero_cuenta_2`, `cl_nombre_banco_tarjeta_1`, `cl_limite_credito_tarjeta_1`, `cl_nombre_banco_tarjeta_2`, `cl_limite_credito_tarjeta_2`, `cl_marca_vehiculo`, `cl_modelo_vehiculo`, `cl_ano_vehiculo`, `cl_placa_vehiculo`, `cl_valor_vehiculo`, `cl_nombre_completo_relacion_1`, `cl_tipo_relacion_1`, `cl_telefono_relacion_1`, `cl_nombre_completo_relacion_2`, `cl_tipo_relacion_2`, `cl_telefono_relacion_2`, `cl_comentarios`, `cl_fecha_creacion_historial`, `cl_fecha_modificacion_historial`) VALUES (4, 1, 4, '(809) 234-5678', '(809) 234-5678', 'fabio@fabio-schettino.com', 1, 1, 'Nieve', 'Alvarez', 'Calle Gabriel Alzamora 54', '07009', 'Palma de Mallorca', 'Espana', 4, 2, 30000.00, '(809) 234-5678', 'David', 'Diez Herrero', 2, 'Perito informatico', 'ITIS F.Giordani', 'Juniper', '(809) 234-5678', 'Visual Designer', 6, 120000.00, 4, 4, 'Abogado', 'UASD', 'Govierno', '(809) 234-5678', 'Responsable de relaciones exteriores', 3, 200000.00, 3, 3, 'Video maker', 'Video Edit', '(809) 234-5678', 80000.00, 'Banco Santander', 'DO28BAGR00000001212453611324', 'Banco Sabadel', 'DO28BAGR00000001212453611324', 'Bankia', 100000.00, 'Bankia', 80000.00, 'Renault', 'Clio 1.5 DCI', 2004, '789VLG', 80000.00, 'Gertrudis Luogo Serrano', 1, '(809) 234-5678', 'Augusto Fontana', 1, '(809) 234-5678', '', '2015-11-19 16:02:13', '2015-11-19 16:06:23');
INSERT INTO `loany`.`clientes_historial` (`cl_id_historial`, `clientes_datos_identificativos_cl_id`, `grupos_gr_id`, `cl_celular`, `cl_otro_numero`, `cl_correo_electronico`, `cl_estado_civil`, `cl_hijos`, `cl_nombre_conyuge`, `cl_apellido_conyuge`, `cl_direccion_residencia`, `cl_codigo_postal`, `cl_ciudad`, `cl_pais`, `cl_tiempo_residiendo`, `cl_propiedad`, `cl_pago_mensual`, `cl_telefono_residencia`, `cl_nombre_propietario`, `cl_apellido_propietario`, `cl_nivel_academico`, `cl_titulo`, `cl_centro_estudio`, `cl_empresa`, `cl_telefono_empresa`, `cl_cargo`, `cl_antiguedad`, `cl_ingreso_mensual`, `cl_cobro`, `cl_conyuge_nivel_academico`, `cl_conyuge_titulo`, `cl_conyuge_centro_estudio`, `cl_conyuge_empresa`, `cl_conyuge_telefono_empresa`, `cl_conyuge_cargo`, `cl_conyuge_antiguedad`, `cl_conyuge_ingreso_mensual`, `cl_conyuge_cobro`, `cl_otra_fuente_ingresos`, `cl_otra_ocupacion`, `cl_otra_empresa`, `cl_telefono_otra_empresa`, `cl_otro_ingreso_mensual`, `cl_nombre_banco_1`, `cl_numero_cuenta_1`, `cl_nombre_banco_2`, `cl_numero_cuenta_2`, `cl_nombre_banco_tarjeta_1`, `cl_limite_credito_tarjeta_1`, `cl_nombre_banco_tarjeta_2`, `cl_limite_credito_tarjeta_2`, `cl_marca_vehiculo`, `cl_modelo_vehiculo`, `cl_ano_vehiculo`, `cl_placa_vehiculo`, `cl_valor_vehiculo`, `cl_nombre_completo_relacion_1`, `cl_tipo_relacion_1`, `cl_telefono_relacion_1`, `cl_nombre_completo_relacion_2`, `cl_tipo_relacion_2`, `cl_telefono_relacion_2`, `cl_comentarios`, `cl_fecha_creacion_historial`, `cl_fecha_modificacion_historial`) VALUES (5, 2, 1, '(809) 234-5678', '', 'adriano.duval@gmail.com', 1, 5, 'Maria', 'De la Vega', 'Calle Winston Churcill 34', '12345', 'Santo Domingo', 'Republica Dominicana', 5, 2, 30000.00, '', 'Fernando', 'Sello', 4, 'Ingeniero agronomo', 'UASD', 'Cultivos RD', '(809) 234-5678', 'Responsable de analisis', 7, 250000.00, 3, 4, 'Doctora en medicina', 'UASD', 'Hospital Dario Contreras', '(809) 234-5678', 'Pediatra', 7, 200000.00, 4, 0, '', '', '', NULL, 'Banco Santander', 'DO28BAGR00000001212453611324', '', '', 'Bankia', 100000.00, '', NULL, 'Renault', 'Megane 1.9 DCI', 2013, '234SDA', 150000.00, 'Fabio Schettino', 1, '(809) 234-5678', 'Jonathan Matesanz', 2, '(809) 234-5678', '', '2015-11-26 18:58:27', '2015-11-26 18:58:27');
INSERT INTO `loany`.`clientes_historial` (`cl_id_historial`, `clientes_datos_identificativos_cl_id`, `grupos_gr_id`, `cl_celular`, `cl_otro_numero`, `cl_correo_electronico`, `cl_estado_civil`, `cl_hijos`, `cl_nombre_conyuge`, `cl_apellido_conyuge`, `cl_direccion_residencia`, `cl_codigo_postal`, `cl_ciudad`, `cl_pais`, `cl_tiempo_residiendo`, `cl_propiedad`, `cl_pago_mensual`, `cl_telefono_residencia`, `cl_nombre_propietario`, `cl_apellido_propietario`, `cl_nivel_academico`, `cl_titulo`, `cl_centro_estudio`, `cl_empresa`, `cl_telefono_empresa`, `cl_cargo`, `cl_antiguedad`, `cl_ingreso_mensual`, `cl_cobro`, `cl_conyuge_nivel_academico`, `cl_conyuge_titulo`, `cl_conyuge_centro_estudio`, `cl_conyuge_empresa`, `cl_conyuge_telefono_empresa`, `cl_conyuge_cargo`, `cl_conyuge_antiguedad`, `cl_conyuge_ingreso_mensual`, `cl_conyuge_cobro`, `cl_otra_fuente_ingresos`, `cl_otra_ocupacion`, `cl_otra_empresa`, `cl_telefono_otra_empresa`, `cl_otro_ingreso_mensual`, `cl_nombre_banco_1`, `cl_numero_cuenta_1`, `cl_nombre_banco_2`, `cl_numero_cuenta_2`, `cl_nombre_banco_tarjeta_1`, `cl_limite_credito_tarjeta_1`, `cl_nombre_banco_tarjeta_2`, `cl_limite_credito_tarjeta_2`, `cl_marca_vehiculo`, `cl_modelo_vehiculo`, `cl_ano_vehiculo`, `cl_placa_vehiculo`, `cl_valor_vehiculo`, `cl_nombre_completo_relacion_1`, `cl_tipo_relacion_1`, `cl_telefono_relacion_1`, `cl_nombre_completo_relacion_2`, `cl_tipo_relacion_2`, `cl_telefono_relacion_2`, `cl_comentarios`, `cl_fecha_creacion_historial`, `cl_fecha_modificacion_historial`) VALUES (6, 3, 2, '(809) 234-5678', '', 'enrique.himene@hotmail.com', 2, 1, NULL, NULL, 'Calle Rafael Alcover 8', '07009', 'Palma de Mallorca', 'Espana', 6, 2, 30000.00, '', 'Miguel', 'Duval', 2, 'Perito informatico', 'ITIS Giordani', 'ReadyCredit', '(809) 234-5678', 'Gerente administrativo', 4, 200000.00, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '', '', '', NULL, 'Banco Santander', 'DO28BAGR00000001212453611324', '', '', 'Banco Santander', 100000.00, '', NULL, 'Renault', 'Megane 1.9 DCI', 2013, '234SDA', 150000.00, 'Fabio Schettino', 2, '(809) 234-5678', 'Jonathan Matesanz', 2, '(809) 234-5678', '', '2015-12-10 23:24:26', '2015-12-10 23:25:18');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`solicitudes`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (20, 1, 4, 2, '2015-11-27', 2, 3500.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-11-27 19:07:06', '2015-11-27 19:07:06');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (26, 1, 4, 3, '2015-11-27', 3, 6000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 3, 0, '2015-11-27 19:28:11', '2015-11-27 19:36:10');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (28, 1, 4, 2, '2015-11-27', 2, 4000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 3, 0, '2015-11-27 20:14:46', '2015-11-27 20:14:46');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (29, 1, 4, 2, '2015-11-27', 2, 4000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 3, 0, '2015-11-27 20:15:09', '2015-11-27 20:15:09');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (30, 1, 4, 2, '2015-11-28', 2, 4000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', 'El prestamo ha sido eliminado el dia: 5-12-2015', 2, 1, '2015-11-28 17:50:03', '2015-12-05 13:02:41');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (31, 2, 5, 4, '2015-12-05', 4, 10000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-05 13:01:24', '2015-12-05 13:01:24');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (32, 2, 5, 4, '2015-12-05', 4, 30000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', 'El prestamo ha sido eliminado el dia: 6-12-2015\r\n\r\nEl prestamo ha sido eliminado el dia: 6-12-2015', 2, 1, '2015-12-05 13:05:59', '2015-12-06 21:15:30');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (33, 1, 4, 1, '2015-12-06', 1, 1000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', 'El prestamo ha sido eliminado el dia: 6-12-2015', 2, 1, '2015-12-06 21:07:22', '2015-12-06 21:10:15');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (34, 1, 4, 3, '2015-12-06', 3, 10000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-06 21:11:14', '2015-12-06 21:11:14');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (35, 1, 4, 3, '2015-12-06', 3, 20000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-06 21:12:41', '2015-12-06 21:12:41');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (36, 1, 4, 2, '2015-12-06', 2, 4500.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-06 21:14:13', '2015-12-06 21:14:13');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (37, 1, 4, 1, '2015-12-06', 1, 1000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-06 21:36:11', '2015-12-06 21:36:11');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (38, 1, 4, 1, '2015-12-10', 1, 1000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-10 21:59:28', '2015-12-10 21:59:28');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (39, 2, 5, 1, '2015-12-10', 1, 3000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 0, '2015-12-10 22:35:21', '2015-12-10 22:35:21');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (40, 1, 4, 2, '2015-12-17', 2, 3500.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-17 23:34:37', '2015-12-17 23:35:20');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (41, 1, 4, 3, '2015-12-17', 3, 20000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-17 23:42:06', '2015-12-17 23:42:06');
INSERT INTO `loany`.`solicitudes` (`sl_id`, `clientes_cl_id`, `clientes_historial_cl_id_historial`, `productos_pd_id`, `sl_fecha_recepcion`, `sl_producto`, `sl_cantidad_solicitada`, `sl_numero_cuenta_transferencia`, `sl_nombre_banco_transferencia`, `sl_comentarios`, `sl_estado`, `sl_prestamo_finalizado`, `sl_fecha_creacion`, `sl_fecha_ultima_modificacion`) VALUES (42, 1, 4, 1, '2015-12-18', 1, 2000.00, 'DO28BAGR00000001212453611324', 'Banco Santander', '', 2, 1, '2015-12-18 00:07:26', '2015-12-18 00:07:26');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`prestamos`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (28, 20, 'Avance de sueldo Premium', 3500.00, 0.00, 30.0, 1, 1, 1, 4025.00, '', 4, '2015-11-27', '2015-12-12', '2015-11-27', '2015-11-27 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (37, 31, 'Avance de sueldo Diamond', 10000.00, 300.00, 20.0, 1, 6, 2, 18041.00, '', 3, '2015-12-05', '2016-06-05', '2015-12-05', '2015-12-05 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (38, 30, 'Avance de sueldo Premium', 4000.00, 0.00, 30.0, 1, 1, 1, 4600.00, '', 3, '2015-12-05', '2015-12-20', '2015-12-05', '2015-12-05 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (42, 33, 'Avance de sueldo Standard', 1000.00, 0.00, 30.0, 1, 1, 1, 1150.00, '', 3, '2015-12-06', '2015-12-21', '2015-12-06', '2015-12-06 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (43, 34, 'Avance de sueldo Platinum', 10000.00, 200.00, 30.0, 1, 6, 2, 22703.00, '', 3, '2015-12-06', '2016-06-06', '2015-12-06', '2015-12-06 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (44, 35, 'Avance de sueldo Platinum', 20000.00, 200.00, 30.0, 1, 6, 2, 45406.00, '', 3, '2015-12-06', '2016-06-06', '2015-12-06', '2015-12-06 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (45, 36, 'Avance de sueldo Premium', 4500.00, 0.00, 30.0, 1, 1, 1, 5175.00, '', 3, '2015-12-06', '2015-12-21', '2015-12-06', '2015-12-06 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (46, 32, 'Avance de sueldo Diamond', 30000.00, 300.00, 20.0, 1, 3, 2, 42725.00, '', 3, '2015-12-06', '2016-03-06', '2015-12-10', '2015-12-06 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (47, 37, 'Avance de sueldo Standard', 1000.00, 0.00, 30.0, 1, 1, 1, 1150.00, '', 3, '2015-12-06', '2015-12-21', '2015-12-06', '2015-12-06 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (48, 38, 'Avance de sueldo Standard', 1000.00, 0.00, 30.0, 1, 1, 1, 1150.00, '', 3, '2015-12-10', '2015-12-25', '2015-12-10', '2015-12-10 00:00:00', 2.5, 2, 1, 0.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (49, 39, 'Avance de sueldo Standard', 3000.00, 0.00, 30.0, 1, 1, 1, 3450.00, '', 2, '2015-12-10', '2015-12-25', NULL, '2015-12-10 00:00:00', 10.0, 3, 2, 1000.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (50, 40, 'Avance de sueldo Premium', 3500.00, 0.00, 30.0, 1, 1, 1, 4025.00, '', 3, '2015-12-17', '2016-01-01', '2015-12-17', '2015-12-17 00:00:00', 10.0, 3, 2, 1000.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (51, 41, 'Avance de sueldo Platinum', 20000.00, 200.00, 30.0, 1, 6, 2, 45407.00, '', 4, '2015-12-17', '2016-06-17', '2015-12-17', '2015-12-17 00:00:00', 10.0, 3, 2, 1000.00);
INSERT INTO `loany`.`prestamos` (`pr_id`, `solicitudes_sl_id`, `pr_nombre_producto`, `pr_cantidad`, `pr_gastos_activacion`, `pr_interes_mensual`, `pr_amortizacion`, `pr_cuotas`, `pr_forma_pago`, `pr_total_devolucion`, `pr_comentarios`, `pr_estado`, `pr_fecha_activacion`, `pr_fecha_caducidad`, `pr_fecha_finalizacion`, `pr_fecha_ultima_modificacion`, `pr_cargo_mora`, `pr_dias_gracia_mora`, `pr_dias_frecuencia_mora`, `pr_gastos_recobro_mora`) VALUES (52, 42, 'Avance de sueldo Standard', 2000.00, 0.00, 30.0, 1, 1, 1, 2300.00, '', 4, '2015-12-18', '2016-01-02', '2016-03-07', '2015-12-18 00:00:00', 10.0, 3, 2, 1000.00);

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`formas_pago`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`formas_pago` (`fp_id`, `fp_nombre`, `fp_meses`, `fp_dias`) VALUES (1, 'Quincenal', 0.5, 15);
INSERT INTO `loany`.`formas_pago` (`fp_id`, `fp_nombre`, `fp_meses`, `fp_dias`) VALUES (2, 'Mensual', 1.0, 30);
INSERT INTO `loany`.`formas_pago` (`fp_id`, `fp_nombre`, `fp_meses`, `fp_dias`) VALUES (3, 'Trimestral', 3.0, 90);
INSERT INTO `loany`.`formas_pago` (`fp_id`, `fp_nombre`, `fp_meses`, `fp_dias`) VALUES (4, 'Semestral', 6.0, 180);
INSERT INTO `loany`.`formas_pago` (`fp_id`, `fp_nombre`, `fp_meses`, `fp_dias`) VALUES (5, 'Anual', 12.0, 360);

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`productos_has_formas_pago`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (1, 1);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (2, 1);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (3, 1);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (4, 1);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (5, 1);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (3, 2);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (4, 2);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (5, 2);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (4, 3);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (5, 3);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (4, 4);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (5, 4);
INSERT INTO `loany`.`productos_has_formas_pago` (`productos_pd_id`, `formas_pago_fp_id`) VALUES (4, 5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`amortizaciones`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`amortizaciones` (`am_id`, `am_nombre`) VALUES (1, 'Método francés');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`frecuencias_mora`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`frecuencias_mora` (`fr_id`, `fr_nombre`, `fr_intervalo_dias`) VALUES (1, 'Diaria', 1);
INSERT INTO `loany`.`frecuencias_mora` (`fr_id`, `fr_nombre`, `fr_intervalo_dias`) VALUES (2, 'Interdiaria', 2);
INSERT INTO `loany`.`frecuencias_mora` (`fr_id`, `fr_nombre`, `fr_intervalo_dias`) VALUES (3, 'Semanal', 7);
INSERT INTO `loany`.`frecuencias_mora` (`fr_id`, `fr_nombre`, `fr_intervalo_dias`) VALUES (4, 'Mensual', 30);

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`mora`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`mora` (`frecuencias_mora_fr_id`, `mr_id`, `mr_cargo`, `mr_cargo_minimo`, `mr_cargo_maximo`, `mr_incremento_cargo`, `mr_dias_gracia`, `mr_dias_gracia_minimo`, `mr_dias_gracia_maximo`, `mr_gastos_recobro`, `mr_gastos_recobro_minimo`, `mr_gastos_recobro_maximo`, `mr_incremento_gastos_recobro`, `mr_cobro_compulsivo`, `mr_fecha_modificacion`) VALUES (2, 1, 10.0, 0.0, 10.0, 0.5, 3, 0, 15, 1000.00, 0.00, 50000.00, 500.00, NULL, '2015-12-10 22:34:47');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`estados_cuota`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`estados_cuota` (`ec_id`, `ec_nombre`) VALUES (1, 'Activa');
INSERT INTO `loany`.`estados_cuota` (`ec_id`, `ec_nombre`) VALUES (2, 'Mora');
INSERT INTO `loany`.`estados_cuota` (`ec_id`, `ec_nombre`) VALUES (3, 'Finalizada');
INSERT INTO `loany`.`estados_cuota` (`ec_id`, `ec_nombre`) VALUES (4, 'Finalizada con mora');

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`cuotas`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (28, 4, 116, 4025.00, 3500.00, 525.00, 0.00, '2015-12-12', 100.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (37, 3, 125, 3008.00, 1008.00, 2000.00, 8992.00, '2016-01-05', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (37, 3, 126, 3007.00, 1208.60, 1798.40, 7783.40, '2016-02-05', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (37, 3, 127, 3007.00, 1450.32, 1556.68, 6333.08, '2016-03-05', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (37, 3, 128, 3007.00, 1740.38, 1266.62, 4592.70, '2016-04-05', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (37, 3, 129, 3007.00, 2088.46, 918.54, 2504.24, '2016-05-05', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (37, 3, 130, 3006.00, 2505.15, 500.85, 0.00, '2016-06-05', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (38, 3, 131, 4600.00, 4000.00, 600.00, 0.00, '2015-12-20', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (42, 3, 181, 1150.00, 1000.00, 150.00, 0.00, '2015-12-21', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (43, 3, 182, 3783.94, 783.94, 3000.00, 9216.06, '2016-01-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (43, 3, 183, 3783.94, 1019.13, 2764.82, 8196.93, '2016-02-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (43, 3, 184, 3783.94, 1324.86, 2459.08, 6872.07, '2016-03-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (43, 3, 185, 3783.94, 1722.32, 2061.62, 5149.74, '2016-04-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (43, 3, 186, 3783.94, 2239.02, 1544.92, 2910.73, '2016-05-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (43, 3, 187, 3783.94, 2910.73, 873.22, 0.00, '2016-06-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (44, 3, 188, 7567.89, 1567.89, 6000.00, 18432.11, '2016-01-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (44, 3, 189, 7567.89, 2038.25, 5529.63, 16393.86, '2016-02-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (44, 3, 190, 7567.89, 2649.73, 4918.16, 13744.14, '2016-03-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (44, 3, 191, 7567.89, 3444.65, 4123.24, 10299.49, '2016-04-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (44, 3, 192, 7567.89, 4478.04, 3089.85, 5821.45, '2016-05-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (44, 3, 193, 7567.89, 5821.45, 1746.44, 0.00, '2016-06-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (45, 3, 194, 5175.00, 4500.00, 675.00, 0.00, '2015-12-21', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (46, 3, 195, 14241.76, 8241.76, 6000.00, 21758.24, '2016-01-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (46, 3, 196, 14241.76, 9890.11, 4351.65, 11868.13, '2016-02-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (46, 3, 197, 14241.76, 11868.13, 2373.63, 0.00, '2016-03-06', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (47, 3, 198, 1150.00, 1000.00, 150.00, 0.00, '2015-12-21', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (48, 3, 199, 1150.00, 1000.00, 150.00, 0.00, '2015-12-25', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (49, 2, 200, 3450.00, 3000.00, 450.00, 0.00, '2015-12-25', 1033.08);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (50, 3, 201, 4025.00, 3500.00, 525.00, 0.00, '2016-01-01', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (51, 3, 202, 7567.89, 1567.89, 6000.00, 18432.11, '2016-01-17', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (51, 3, 203, 7567.89, 2038.25, 5529.63, 16393.86, '2016-02-17', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (51, 3, 204, 7567.89, 2649.73, 4918.16, 13744.14, '2016-03-17', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (51, 3, 205, 7567.89, 3444.65, 4123.24, 10299.49, '2016-04-17', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (51, 3, 206, 7567.89, 4478.04, 3089.85, 5821.45, '2016-05-17', 0.00);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (51, 4, 207, 7567.89, 5821.45, 1746.44, 0.00, '2015-12-09', 1004.15);
INSERT INTO `loany`.`cuotas` (`prestamos_pr_id`, `estados_cuota_ec_id`, `ct_id`, `ct_cantidad`, `ct_amortizado`, `ct_intereses`, `ct_saldo_prestamo`, `ct_fecha_pago`, `ct_cantidad_mora`) VALUES (52, 4, 208, 2300.00, 2000.00, 300.00, 0.00, '2016-01-02', 1019.53);

COMMIT;


-- -----------------------------------------------------
-- Data for table `loany`.`formas_cobro`
-- -----------------------------------------------------
START TRANSACTION;
USE `loany`;
INSERT INTO `loany`.`formas_cobro` (`fc_id`, `fc_nombre`) VALUES (1, 'Diaria');
INSERT INTO `loany`.`formas_cobro` (`fc_id`, `fc_nombre`) VALUES (2, 'Semanal');
INSERT INTO `loany`.`formas_cobro` (`fc_id`, `fc_nombre`) VALUES (3, 'Quincenal');
INSERT INTO `loany`.`formas_cobro` (`fc_id`, `fc_nombre`) VALUES (4, 'Mensual');

COMMIT;

