import React, {useEffect, useState} from 'react';
import IPessoas from "../../interfaces/IPessoas";
import http from "../../http";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ListaPessoas = () => {
    const navigate = useNavigate();

    const [pessoas, setPessoas] = useState<IPessoas[]>([])

    useEffect(() => {
        http.get<IPessoas[]>('/pessoas')
            .then(resposta => {
                setPessoas(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])


    return (<section>
        <Button onClick={() => {
            navigate("/pessoa");
        }
        } variant="outlined">Cadastrar</Button>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Nome</TableCell>
                        <TableCell align="left">CPF</TableCell>
                        <TableCell align="left">Data Nascimento</TableCell>
                        <TableCell align="left">Funcionario</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pessoas.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="left">{row.nome}</TableCell>
                            <TableCell align="left">{row.cpf}</TableCell>
                            <TableCell align="left">{row.dataNascimento}</TableCell>
                            <TableCell align="left">{row.funcionario}</TableCell>
                            <Button variant="outlined" onClick={() => {
                                // @ts-ignore
                                navigate("/pessoa", {
                                    state: {
                                        itemId: row.id
                                    }
                                });
                            }}>editar</Button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </section>)
}

export default ListaPessoas




