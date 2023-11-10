import estilos from './Rodape.module.scss';

const NavBar = () => {
    return (<footer className={estilos.Rodape}>
        <div>
            <p>Copyright &copy; {new Date().getFullYear()} Rafael Pavanati</p>
        </div>
    </footer>)
}

export default NavBar
