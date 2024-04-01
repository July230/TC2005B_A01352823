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
    SUM(cantidad * (M.precio + (M.precio * (M.impuesto / 100)))) AS Importe_Total
FROM entregan E, materiales M
WHERE E.clave = M.clave
AND YEAR(Fecha) = 1997;

# Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas
SELECT P.razonsocial AS 'Razón social del proveedor', COUNT(E.RFC) AS 'Número de entregas', SUM((E.cantidad * M.precio) + M.impuesto) AS 'Importe total'
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
    SUM((E.cantidad * M.precio) + M.impuesto) AS 'Importe total'
FROM entregan E
JOIN materiales M ON E.clave = M.clave
WHERE AVG(E.cantidad) > 400;


# Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT P.razonsocial AS 'Razón social del proveedor', AVG(E.cantidad) AS 'Cantidad promedio de cada material entregado', M.clave AS 'Clave del material', M.descripcion AS 'Descripcion del material'
FROM entregan E
JOIN proveedores P ON P.rfc = E.rfc
JOIN materiales M ON M.clave = E.clave
WHERE AVG(E.cantidad) > 500 
GROUP BY (E.cantidad);



# Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.




# Utilizando la sentencia
# INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
# Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.

INSERT INTO materiales (clave, descripcion, precio, impuesto, porcentajeimpuesto) VALUES
	('2001', 'Ladrillo', '50', '5'),
    ('2002', 'Alambre 5m', '120', '12'),
    ('2003', 'Madera', '80', '8'),
    ('2004', 'PET', '90', '9'),
    ('2005', 'Caucho', '150', '15');

# Con base en lo que se explica en la lectura sobre consultas con roles y subconsultas, plantea y ejecuta las siguientes consultas:

# Clave y descripción de los materiales que nunca han sido entregados.


# Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

# RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT P.razonsocial, P.RFC
FROM proveedores P
JOIN entregan E ON E.RFC = P.RFC
WHERE P.RFC IN (SELECT E.RFC FROM entregan E
				JOIN proyectos Pr ON Pr.numero = E.numero
                WHERE 	Pr.denominacion = 'Infonavit Durango')
HAVING (SELECT SUM(Cantidad) FROM entregan 
		WHERE YEAR(E.fecha) = 2000) > (SELECT SUM(Cantidad) FROM entregan WHERE YEAR(E.fecha) = '2001');