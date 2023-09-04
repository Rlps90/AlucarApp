import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name, registrationDate, email, premiumPlan) {
  return { name, registrationDate, email, premiumPlan}
}

const linhas = [
  createData('Renan', '02/01/2023', 'renan@gmail.com', true),
  createData('Pedro', '24/04/2023', 'pedro@gmail.com', false),
  createData('Joana', '15/11/2022', 'joana@gmail.com', false),
]

const Read = () => {
	return (
		<TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align='right'>Registrado em</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Premium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {linhas.map((linha) => (
            <TableRow key={linha.name} sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
              <TableCell component='th' scope='row'>
                {linha.name}
              </TableCell>
              <TableCell align="right">{linha.registrationDate}</TableCell>
              <TableCell align="right">{linha.email}</TableCell>
              <TableCell align="right">{linha.premiumPlan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	)
}
export default Read
