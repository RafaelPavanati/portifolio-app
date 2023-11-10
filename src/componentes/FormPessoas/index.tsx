import React, {useEffect, useState} from 'react';
import IPessoas from "../../interfaces/IPessoas";
import http from "../../http";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, FormControlLabel, Switch, TextField} from "@mui/material";

const ListaPessoas = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let [pessoa, setPessoa] = useState<IPessoas>({cpf: "", dataNascimento: "", funcionario: true, id: 0, nome: ""})
    let itemId: number;
    // @ts-ignore
    itemId = location.state?.itemId;
    const salvar = () => {
        const request = (itemId) ? http.put<IPessoas>(`/pessoas/${itemId}`, pessoa) : http.post<IPessoas>('/pessoas', pessoa)
        request.then(resposta => {
            setPessoa(resposta.data)
        })
            .catch(erro => {
                console.log(erro)
            })
    }
    useEffect(() => {
            const request = (itemId) ? http.get<IPessoas>(`/pessoas/${itemId}`) : http.get<IPessoas>('/pessoas')

            request.then(resposta => {
                setPessoa(resposta.data)
            })
                .catch(erro => {
                    console.log(erro)
                })
        }, []
    )


    return (<section>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField value={pessoa.nome} id="outlined-basic" label="NOME" variant="outlined"/>
            </div>
            <div>
                <TextField value={pessoa.cpf} id="outlined-basic" label="CPF" variant="outlined"/>
            </div>
            <div>
                <TextField value={pessoa.dataNascimento} id="outlined-basic" label="DATA NASCIMENTO"
                           variant="outlined"/>
            </div>
            <FormControlLabel
                control={
                    <Switch checked={pessoa.funcionario}/>
                }
                label="FUNCIONARIO"
            />
            <div>
                <Button onClick={() => {
                    salvar();
                }
                } variant="outlined">Salvar</Button>
            </div>

        </Box>
    </section>)
}

export default ListaPessoas




