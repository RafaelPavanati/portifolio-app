import axios from 'axios';
import {useEffect, useState} from 'react';
import IProjetos from '../../interfaces/IProjetos';

const ListaProjetos = () => {

    const [projetos, setPortifolio] = useState<IProjetos[]>([])

    useEffect(() => {
        axios.get<IProjetos[]>('http://localhost:8000/api/projetos/')
            .then(resposta => {
                setPortifolio(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])


    return (<section>
        {projetos?.map(item => {

            }
            // <Restaurante restaurante={item} key={item.id}/>
        )}
    </section>)
}

export default ListaProjetos
