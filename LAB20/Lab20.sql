/*
Ian Julián Estrada Castro - A01352823 
Laboratorio 20: Consultas en SQL
En este laboratorio se va a trabajar con la base de datos rcortese cuyo modelo relacional es el siguiente:

Materiales(Clave, Descripción, Costo)
Proveedores(RFC, RazonSocial)
Proyectos(Numero,Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)

Para hacer las consultas, es necesario haber creado la base de datos y también haberla cargado con datos
*/

use rcortese;

SELECT * FROM materiales;

SELECT * FROM materiales
WHERE clave = 1000;

SELECT clave, rfc, fecha FROM entregan;

SELECT * FROM materiales, entregan
WHERE materiales.clave = entregan.clave;

SELECT * FROM entregan,proyectos
WHERE entregan.numero <= proyectos.numero;

(SELECT * FROM entregan WHERE clave=1450)
UNION
(SELECT * FROM entregan WHERE clave=1300);

SELECT * FROM entregan 
WHERE clave=1300 OR clave=1400;

SELECT clave 
FROM entregan 
WHERE numero = 5001 
AND clave IN (SELECT clave FROM entregan WHERE numero = 5018);

SELECT *
FROM entregan
WHERE clave NOT IN (SELECT clave FROM entregan WHERE clave = 1000);

SELECT * FROM entregan,materiales;

SELECT COUNT(*) FROM materiales;
SELECT COUNT(*) FROM entregan;
SELECT COUNT(*) FROM entregan,materiales;

SELECT DISTINCT descripcion 
FROM entregan e, materiales m
WHERE e.clave = m.clave 
AND fecha BETWEEN '2000-01-01' AND '2000-12-31';

SELECT e.numero, p.denominacion, e.cantidad, e.fecha
FROM entregan e, proyectos p
WHERE e.numero = p.numero 
AND fecha BETWEEN '2000-01-01' AND '2000-12-31'
ORDER BY e.numero DESC;

SELECT * FROM materiales where descripcion LIKE 'Si%';

SELECT CONCAT(descripcion, ', ', precio) as material FROM materiales;

SELECT rfc FROM entregan WHERE rfc LIKE '[A-D]%';
SELECT rfc FROM entregan WHERE rfc LIKE '[^A]%';
SELECT numero FROM entregan WHERE numero LIKE '___6';

SELECT rfc 
FROM entregan 
WHERE rfc LIKE 'A%' OR RFC LIKE 'B%' OR RFC LIKE 'C%' OR RFC LIKE 'D%';

SELECT rfc 
FROM entregan 
WHERE rfc NOT LIKE 'A%';

SELECT clave,rfc,numero,fecha,cantidad
FROM entregan
WHERE numero Between 5000 and 5010;

SELECT clave,rfc,numero,fecha,cantidad
FROM entregan
WHERE fecha Between '2001-01-01' and '2001-12-31';

SELECT rfc,cantidad, fecha,numero
FROM entregan
WHERE numero Between 5000 and 5010 AND
Exists ( SELECT rfc
FROM proveedores
WHERE razonsocial LIKE 'La%' and entregan.rfc = proveedores.rfc);

SELECT rfc,cantidad, fecha,numero
FROM entregan
WHERE numero Between 5000 and 5010 
AND rfc NOT IN ( SELECT rfc
FROM proveedores
WHERE razonsocial LIKE 'La%');

SELECT rfc, cantidad, fecha, numero
FROM entregan
WHERE numero BETWEEN 5000 AND 5010 
AND cantidad > ALL (
    SELECT cantidad
    FROM entregan
    WHERE cantidad <= 50
);

SELECT * FROM proyectos
LIMIT 2;

SELECT TOP numero FROM proyectos;

SELECT numero FROM proyectos
LIMIT 10;

ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);

UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;

SELECT SUM(e.cantidad * (m.precio* (m.PorcentajeImpuesto / 100))) AS ImporteTotal
FROM entregan e, materiales m
WHERE e.clave = m.clave;

CREATE VIEW nombrevista (clave , descripcion, precio)
AS SELECT clave, descripcion, precio
FROM materiales;

SELECT * FROM nombrevista;

CREATE VIEW VistaJoin AS
SELECT m.clave, m.descripcion, m.precio, e.rfc, e.numero, e.fecha, e.cantidad
FROM materiales m, entregan e
WHERE m.clave = e.clave;

SELECT * FROM VIstaJoin;

CREATE VIEW VMateriales1300_1400 AS
SELECT *
FROM entregan 
WHERE clave = 1300 OR clave = 1400;

SELECT * FROM VMateriales1300_1400;

CREATE VIEW Descripciones2000 AS
SELECT DISTINCT m.descripcion 
FROM entregan e
JOIN materiales m ON e.clave = m.clave
WHERE fecha BETWEEN '2000-01-01' AND '2000-12-31';

SELECT * FROM Descripciones2000;

CREATE VIEW VistaRFC_AD AS
SELECT rfc 
FROM entregan 
WHERE rfc LIKE 'A%' OR rfc LIKE 'B%' OR rfc LIKE 'C%' OR rfc LIKE 'D%';

SELECT * FROM VistaRFC_AD;

CREATE VIEW VistaEntregas5000_5010 AS
SELECT rfc, cantidad, fecha, numero
FROM entregan
WHERE numero BETWEEN 5000 AND 5010
AND rfc NOT IN (SELECT rfc FROM proveedores WHERE razonsocial LIKE 'La%');

SELECT * FROM VistaEntregas5000_5010;

SELECT m.clave, m.descripcion
FROM materiales m, entregan e, proyectos p
WHERE m.clave = e.clave 
AND e.numero = p.numero
AND p.denominacion = 'México sin ti no estamos completos';

SELECT m.clave, m.descripcion, p.razonsocial
FROM materiales m, entregan e, proveedores p
WHERE m.clave = e.clave AND e.rfc = p.rfc AND p.razonsocial = 'Acme tools';

SELECT e.rfc
FROM entregan e
WHERE fecha BETWEEN '2000-01-01' AND '2000-12-31'
AND e.cantidad >= 300
GROUP BY e.rfc;

SELECT e.clave, SUM(e.cantidad * m.precio) AS TotalEntregado, m.descripcion
FROM entregan e, materiales m
WHERE e.clave = m.clave AND fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY e.clave;


SELECT e.clave, m.descripcion
FROM entregan e, materiales m
WHERE e.clave = m.clave
AND e.fecha BETWEEN '2001-01-01' AND '2001-12-31'
GROUP BY e.clave
ORDER BY SUM(e.cantidad) DESC
LIMIT 1;

SELECT clave, descripcion
FROM materiales
WHERE descripcion LIKE '%ub%';

SELECT p.denominacion, SUM(m.precio * e.cantidad) AS Total
FROM proyectos p, entregan e, materiales m
WHERE p.numero = e.numero AND e.clave = m.clave
GROUP BY p.denominacion;

CREATE VIEW Televisa AS 
SELECT DISTINCT rfc
FROM entregan
WHERE numero = (
	SELECT numero 
    FROM proyectos 
    WHERE denominacion = 'Televisa en accion');
    
CREATE VIEW Educando_Coahuila AS
SELECT DISTINCT rfc 
FROM entregan 
WHERE numero = (
	SELECT numero 
    FROM proyectos 
    WHERE denominacion = 'Educando en Coahuila');
    
SELECT DISTINCT pr.rfc, pr.razonsocial
FROM proveedores pr, Televisa t
WHERE pr.rfc = t.rfc
AND NOT EXISTS (
	SELECT * 
    FROM Educando_Coahuila ec
    WHERE ec.rfc = pr.rfc
);

SELECT DISTINCT pr.rfc, pr.razonsocial
FROM proveedores pr
WHERE pr.rfc IN (
	SELECT DISTINCT e.rfc
    FROM entregan e
    WHERE e.numero = (
		SELECT numero
        FROM proyectos 
        WHERE denominacion = 'Televisa en acción'
	)
) AND pr.rfc NOT IN (
	SELECT DISTINCT e.rfc
	FROM entregan e
	WHERE e.numero = (
		SELECT numero
        FROM proyectos
        WHERE denominacion = 'Educando en Coahuila'
    )
);

SELECT m.clave, m.descripcion, m.precio
FROM materiales m, entregan e1, entregan e2, proyectos p1, proyectos p2
WHERE m.clave = e1.clave
AND m.clave = e2.clave
AND p1.numero = e1.numero
AND p2.numero = e2.numero
AND p1.denominacion = 'Televisa en acción'
AND p2.denominacion = 'Educando en Coahuila';

SELECT m.descripcion AS nombreMaterial, COUNT(e.clave) AS entregado, SUM(e.cantidad * m.precio) AS Total
FROM materiales m, entregan e
WHERE  m.clave = e.clave
GROUP BY m.descripcion;
        