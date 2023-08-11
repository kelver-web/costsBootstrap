import savings from '../../assets/savings.svg'
import LinkButton from '../LinkButton'
import Badge from 'react-bootstrap/Badge';

function Home() {
  return (
    <>
      <section className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-white'>Bem vindo ao <Badge className='bg-warning'>Costs</Badge></h1>
        <p className='text-white'>Começe a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton />
        <img src={savings} alt="Costs" id="image" className='img-fluid mt-4' />
      </section>
    </>
  )
}

export default Home
