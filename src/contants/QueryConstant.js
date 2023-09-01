const obtenerProspectos = `
select hr.idLocation,o.tipoDocumento ,o.nombreCompletos ,SUM(hr.numberLead) as 'numberLead', MAX(hr.created_at) as 'created_at' 
from historicoReferencia hr 
inner join operador o on hr.idOperador =o.id 
where MONTH(hr.created_at)= :fromDateMonth and YEAR (hr.created_at) =:fromDateYear and o.tipoDocumento =  IFNULL(:tipoDocumento , o.tipoDocumento) and hr.idLocation = IFNULL(:location , hr.idLocation) and o.id  = IFNULL(:operador , o.id)  
GROUP by hr.idLocation
`

const obtenerPackage = `
select  tr.*,r.* 
from tourReserva tr
inner join reservation r on r.id = tr.idReservation 
where tr.idTours = IFNULL(:idTours,tr.idTours) and  tr.idTransport = IFNULL(:idTransport,tr.idTransport) and tr.activo =1 and r.activo  =1
`
const findPackages = `
select tr.passenger,tr.fechaReserva  ,p2.*,r.hotel ,c.nombreCompletos  as 'colaborador',p3.name as 'destino' ,t.plate 
from tourReserva tr 
inner join reservation r  on tr.idReservation  = r.id 
inner join persons p2  on r.idPerson  = p2.id 
inner join collaborators c  on r.idCollaborator  = c.id 
inner join products p3  on tr.idTours  = p3.id 
inner join transport t on t.id = tr.idTransport 
where tr.idTours = IFNULL(:idTours,tr.idTours)  and tr.idTransport = IFNULL(:idTransport,tr.idTransport) and tr.activo =1 and r.activo =1 
`

module.exports = {
    obtenerProspectos,
    obtenerPackage,
    findPackages
}
