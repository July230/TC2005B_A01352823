/*
Ian Julián Estrada Castro - A01352823 
Laboratorio 21: Creación de Consultas Utilizando SQL con Funciones Agregadas y Sub-consultas
En este laboratorio se va a trabajar con la base de datos rcortese cuyo modelo relacional es el siguiente:

Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)

Para hacer las consultas, es necesario haber creado la base de datos y también haberla cargado con datos
*/

# La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

USE rcortese;

SELECT
	SUM(cantidad) AS Total,
    SUM(E.Cantidad * (1 + (M.PorcentajeImpuesto / 100))) AS Importe_Total
FROM entregan E, materiales M
WHERE E.clave = M.clave
AND YEAR(Fecha) = 1997;

# Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas
SELECT P.razonsocial AS 'Razón social del proveedor', COUNT(E.RFC) AS 'Número de entregas', 
		SUM((E.cantidad * M.precio) + M.impuesto) AS 'Importe total'
FROM proveedores P, entregan E, materiales M
WHERE P.RFC = E.RFC
AND E.Clave = M.Clave
GROUP BY P.RFC;

# Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT M.clave AS 'Clave del material', 
	M.descripcion AS 'Descripcion', 
    SUM(E.cantidad) AS 'Total entregado', 
    MIN(E.cantidad) AS 'Cantidad mínima entregada', 
    MAX(E.cantidad) AS 'Cantidad máxima entregada', 
    SUM(E.Cantidad * (1 + (M.PorcentajeImpuesto / 100))) AS 'Importe total'
FROM materiales M
JOIN entregan E ON M.clave = E.clave
GROUP BY M.clave, M.descripcion
HAVING AVG(E.cantidad) > 400;


# Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT P.rfc AS 'RFC del proveedor', 
		P.razonsocial AS 'Razón social del proveedor', 
		M.clave AS 'Clave del material', 
        M.descripcion AS 'Descripcion del material', 
        AVG(E.cantidad) AS 'Cantidad promedio de cada material entregado'
FROM proveedores P
JOIN entregan E ON E.rfc = P.rfc
JOIN materiales M ON E.clave = M.clave
GROUP BY P.rfc, P.razonsocial, M.clave, M.descripcion
HAVING AVG(E.cantidad) >= 500;



# Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.
SELECT P.rfc AS 'RFC del proveedor', 
		P.razonsocial AS 'Razón social del proveedor', 
		M.clave AS 'Clave del material', 
        M.descripcion AS 'Descripcion del material', 
        AVG(E.cantidad) AS 'Cantidad promedio de cada material entregado'
FROM proveedores P
JOIN entregan E ON E.rfc = P.rfc
JOIN materiales M ON E.clave = M.clave
GROUP BY P.rfc, P.razonsocial, M.clave, M.descripcion
HAVING 
	CASE
		WHEN AVG(E.cantidad) < 370 THEN 'Menor a 370'
        WHEN AVG(E.cantidad) > 450 THEN 'Mayor a 450'
	END IS NOT NULL;


# Utilizando la sentencia
# INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
# Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.

INSERT INTO materiales (clave, descripcion, precio, impuesto, porcentajeimpuesto) VALUES
	('2001', 'Ladrillo', '50', '5', '3'),
    ('2002', 'Alambre 5m', '120', '12', '3.02'),
    ('2003', 'Madera', '80', '8', '3.04'),
    ('2004', 'PET', '90', '9', '3.06'),
    ('2005', 'Caucho', '150', '15', '3.10');

# Con base en lo que se explica en la lectura sobre consultas con roles y subconsultas, plantea y ejecuta las siguientes consultas:

# Clave y descripción de los materiales que nunca han sido entregados.
SELECT clave, descripcion
FROM materiales M
WHERE clave NOT IN (
		SELECT DISTINCT clave FROM entregan
        );

# Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT P.razonsocial
FROM proveedores P
JOIN entregan E ON P.rfc = E.rfc
JOIN proyectos PR ON E.numero = PR.numero
WHERE PR.denominacion = 'Vamos México'
AND P.razonsocial IN (
	SELECT P2.razonsocial
    FROM proveedores P2
    JOIN entregan E2 ON P2.rfc = E2.rfc
    JOIN proyectos PR2 ON E2.numero = PR2.numero
    WHERE PR2.denominacion = 'Querétaro Limpio'
    );
    
# Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

SELECT M.descripcion 
FROM materiales M
WHERE M.clave NOT IN (
	SELECT DISTINCT clave
	FROM entregan
    WHERE numero IN (
		SELECT numero
        FROM proyectos
        WHERE denominacion = 'CIT Yucatán'
		)
	);

INSERT INTO proveedores (rfc, razonsocial) VALUES
	('VAGO780901', 'El Taller');

INSERT INTO entregan (clave, rfc, numero, fecha, cantidad) VALUES
	('2003', 'VAGO780901', '5004', '1999-09-05', '300'),
    ('2003', 'VAGO780901', '5004', '1999-09-10', '300'),
    ('2003', 'VAGO780901', '5004', '1999-09-15', '300'),
    ('2003', 'VAGO780901', '5004', '1999-09-20', '300'),
    ('2003', 'VAGO780901', '5004', '1999-09-25', '300');

# Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.

SELECT P.razonsocial, AVG(E.cantidad) AS 'Promdio de cantidad por entrega'
FROM proveedores P
JOIN entregan E ON E.rfc = P.rfc
GROUP BY P.razonsocial 
HAVING AVG(E.cantidad) > (
	SELECT AVG(E2.cantidad)
    FROM entregan E2
    WHERE E2.rfc = 'VAGO780901'
	);

INSERT INTO entregan (clave, rfc, numero, fecha, cantidad) VALUES
	('2003', 'VAGO780901', '5005', '2000-01-12', '200'),
    ('2003', 'VAGO780901', '5005', '2000-01-16', '250'),
    ('2003', 'VAGO780901', '5005', '2000-01-20', '150'),
    ('2003', 'VAGO780901', '5005', '2000-01-24', '100'),
    ('2003', 'VAGO780901', '5005', '2000-01-28', '300'),
    ('2003', 'VAGO780901', '5005', '2001-02-15', '250'),
    ('2003', 'VAGO780901', '5005', '2001-02-20', '250'),
    ('2003', 'VAGO780901', '5005', '2001-02-24', '150'),
    ('2003', 'VAGO780901', '5005', '2001-03-5', '200'),
    ('2003', 'VAGO780901', '5005', '2001-03-10', '100');
    

# RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT P.razonsocial, P.RFC
FROM proveedores P
WHERE P.RFC IN (
		SELECT E.RFC 
        FROM entregan E
		JOIN proyectos PR ON E.numero = PR.numero
		WHERE PR.denominacion = 'Infonavit Durango'
        AND YEAR(E.fecha) = 2000
        GROUP BY E.rfc
        HAVING SUM(E.cantidad) > (SELECT SUM(E2.cantidad) 
								FROM entregan E2
                                JOIN proyectos PR2 ON E2.numero = PR2.numero
								WHERE PR2.denominacion = 'Infonavit Durango'
                                AND YEAR(E2.fecha) = 2001
                                AND E2.rfc = E.rfc)
		);

							