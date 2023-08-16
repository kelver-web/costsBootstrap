import Container from 'react-bootstrap/Container'

function Company() {
  return (
    <Container className='px-4 text-justify'>
      <Container className="d-flex justify-content-sm-between align-items-sm-center my-5 px-4">
        <Container className="">
          <h1 className='d-flex text-warning fw-bolder'>Sobre a empresa:</h1>
          <p className='text-warning fw-bolder'>Nome da Empresa: <span className='fw-light'>Lorem ipsum dolor sit amet.</span></p>
          <p className='text-warning fw-bolder'>Descrição: <br /><span className='text-warning fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non iusto minima qui facere numquam et porro facilis sequi ab vero, saepe quidem aliquam rerum exercitationem eligendi nam cupiditate veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit commodi et nostrum, nihil corporis ab architecto eaque eligendi consequuntur expedita laboriosam culpa facilis harum beatae veniam magnam. Voluptate, vitae?</span></p>

          <p className='text-warning fw-bolder'>Nossos Serviços: <br /><span className='text-warning fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non iusto minima qui facere numquam et porro facilis sequi ab vero, saepe quidem aliquam rerum exercitationem eligendi nam cupiditate veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit commodi et nostrum, nihil corporis ab architecto eaque eligendi consequuntur expedita laboriosam culpa facilis harum beatae veniam magnam. Voluptate, vitae?</span></p>

          <p className='text-warning fw-bolder'>Missão: <br /><span className='text-warning fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non iusto minima qui facere numquam et porro facilis sequi ab vero, saepe quidem aliquam rerum exercitationem eligendi nam cupiditate veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit commodi et nostrum, nihil corporis ab architecto eaque eligendi consequuntur expedita laboriosam culpa facilis harum beatae veniam magnam. Voluptate, vitae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ipsum eligendi itaque est nam, amet alias beatae impedit ipsam dolore vitae repudiandae eum, at, cum delectus doloribus quaerat maxime odit.</span></p>

          <p className='text-warning fw-bolder'>Valores: <br />
            <ul className='fw-light px-3'>
              <li>Inovação: Buscamos constantemente novas abordagens e soluções para impulsionar o progresso tecnológico.</li>
              <li>Integridade: Agimos com honestidade, ética e transparência em todas as interações.</li>
              <li>Colaboração: Trabalhamos em estreita colaboração com nossos clientes para alcançar objetivos comuns.</li>
              <li>Excelência: Buscamos a excelência em tudo o que fazemos, buscando constantemente a melhoria.</li>
            </ul>
          </p>
          
          <p className='text-warning'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia incidunt eius numquam corporis veniam eveniet ullam, quaerat illum consectetur. Voluptatum consequatur modi nobis sed dignissimos, soluta nostrum! Dolorum, doloremque natus!</p>
          
        </Container>
      </Container>
      <Container>
        
      </Container>
    </Container>
  )
}

export default Company

