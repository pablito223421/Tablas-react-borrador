import  React from 'react';
import MaterialTable from '@material-table/core';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


function createData(numero, descripcion, ejecucion, area,anio,progreso) {
  return { numero, descripcion, ejecucion, area,anio,progreso };
 }

 const rows = [
  createData("E01","Liderzgo y Compromiso"),
  createData(1,"Objetivo Específico. Verificar el cumplimiento de los grados de los líderes"),
  createData(1.2,"Organizar reuniones del Comité de Seguridad y Salud en el Trabajo", "Presidente del Comité/Jefe SIGG/ Jefe de SSOMA","Administración"),
 ];

function App() {

  return (
    <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>S.No</TableCell>
           <TableCell align="right">N°</TableCell>
           <TableCell align="right">Descripción de la Actividad</TableCell>
           <TableCell align="right">Responsable de la Ejecución</TableCell>
           <TableCell align="right">Área</TableCell>
           <TableCell align="right">Año 2022</TableCell>
           <TableCell align="right">Progreso %</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow key={row.numero}>
             <TableCell component="th" scope="row">
               {row.numero}
             </TableCell>
             <TableCell align="right">{row.numero}</TableCell>
             <TableCell align="right">{row.descripción}</TableCell>
             <TableCell align="right">{row.ejecucion}</TableCell>
             <TableCell align="right">{row.area}</TableCell>
             <TableCell align="right">{row.anio}</TableCell>
             <TableCell align="right">{row.progreso}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
  );
}

export default App;
