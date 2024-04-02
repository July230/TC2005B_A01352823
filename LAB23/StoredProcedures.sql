/*
Laboratorio 23: Manipulación de datos utilizando Stored Procedures

Antes de empezar, hay que saber que una función y procedimiento tienen sus diferencias

La función tiene un valor de retorno
Un procedimiento suele no tener valor de retorno
Ambos tienen diferentes formas de llamarse

Al usar Stored Procedures, se recomienda que los parametros tengan un nombre diferente a los nombres de las columnas de la respectiva tabla

*/

USE rcortese;

# Para crear un Procedure básico, se ejecuta el siguiente comando base
/*
CREATE PROCEDURE nombreProcedure()
BEGIN 
	Comando de SQL
END 
*/
# Aquí existe la opción de hacerlo de forma más directa a través de 'Stored Procedures' ubicado en la barra lateral izquierda en la DB
# Con esa opción se creo 'consultarMateriales'
# Con el Procedure creado, es necesario llamarlo. Depende del gestor, en este caso es con CALL

CALL consultarMateriales(); # Esto devolvera la tabla de materiales

# Para crear un Procedure con parámetros es ligeramente diferente
/*
CREATE PROCEDURE nombreProcedure((IN | OUT | INOUT) (nombreParametro [tipoDato(longitud)]))
BEGIN
	Comando de SQL
END
*/

/*
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarMaterialPlus`(IN uClave INT, IN uDescripcion VARCHAR(40), IN uPrecio FLOAT, IN uImpuesto FLOAT, IN uPorcentajeImpuesto DECIMAL(6,2))
BEGIN
	INSERT INTO materiales VALUES (uClave, uDescripcion, uPrecio, uImpuesto, uPorcentajeImpuesto);
END
*/

# Lo siguiente registrará un nuevo material en la tabla materiales
CALL registrarMaterialPlus (2010, 'Pintura roja', 200, 20, 10);
CALL registrarMaterialPlus (2006, 'Pintura turquesa', 200, 20, 10);

/*
CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarMaterialPlus`(IN uClave INT)
BEGIN
	DELETE FROM materiales 
    WHERE Clave = uClave;
END
*/

CALL eliminarMaterialPlus (2010); # Esto eliminará un registro de la tabla materiales