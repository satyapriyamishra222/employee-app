import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Icon } from '@material-ui/core';
import React from 'react';
//import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlinedIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import Login from "../Dashboard/index";
import { get } from "../utility/localStorage"

import EditIcon from '@material-ui/icons/Edit';

//import info from "./info.js";

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function Home() {
    let user = get("username");
    // let user = localStorage.getItem("username");
    console.log(user);
    return (
        <><div>
            <h1> welcome {user}  </h1>
        </div><TableContainer component={Paper}>
                <Table
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Delete or Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right"><DeleteIcon /><EditIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    );

}
export default Home;