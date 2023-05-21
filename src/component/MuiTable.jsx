import React from 'react'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
            <Table aria-label='table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row => (
                            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align='center'>{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Eugine",
    "last_name": "Mehmet",
    "email": "emehmet0@bluehost.com",
    "gender": "Female",
    "ip_address": "65.21.79.62"
  }, {
    "id": 2,
    "first_name": "Lock",
    "last_name": "Kewley",
    "email": "lkewley1@blogspot.com",
    "gender": "Male",
    "ip_address": "47.172.207.97"
  }, {
    "id": 3,
    "first_name": "Corinne",
    "last_name": "Gaskoin",
    "email": "cgaskoin2@issuu.com",
    "gender": "Female",
    "ip_address": "67.201.74.148"
  }, {
    "id": 4,
    "first_name": "Madalyn",
    "last_name": "Chesters",
    "email": "mchesters3@rambler.ru",
    "gender": "Female",
    "ip_address": "186.236.27.179"
  }, {
    "id": 5,
    "first_name": "Maegan",
    "last_name": "Grassot",
    "email": "mgrassot4@blogspot.com",
    "gender": "Female",
    "ip_address": "128.45.72.239"
  }, {
    "id": 6,
    "first_name": "Joey",
    "last_name": "Testo",
    "email": "jtesto5@deliciousdays.com",
    "gender": "Agender",
    "ip_address": "196.139.255.12"
  }, {
    "id": 7,
    "first_name": "Bald",
    "last_name": "Petrusch",
    "email": "bpetrusch6@hc360.com",
    "gender": "Male",
    "ip_address": "24.141.237.171"
  }, {
    "id": 8,
    "first_name": "Callie",
    "last_name": "Watkinson",
    "email": "cwatkinson7@bing.com",
    "gender": "Female",
    "ip_address": "35.117.168.239"
  }, {
    "id": 9,
    "first_name": "Joni",
    "last_name": "Giabucci",
    "email": "jgiabucci8@bloomberg.com",
    "gender": "Non-binary",
    "ip_address": "77.114.33.74"
  }, {
    "id": 10,
    "first_name": "Nataniel",
    "last_name": "Inott",
    "email": "ninott9@storify.com",
    "gender": "Genderfluid",
    "ip_address": "225.146.52.194"
  }]
  

export default MuiTable
