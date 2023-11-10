import estilos from './Banner.module.scss';

const Banner = () => {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>Portifólios APP</h1>
      <p>Controle de cadastro de portifólio.</p>
    </div>
  </section>)
}

export default Banner
