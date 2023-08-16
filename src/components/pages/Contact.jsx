import Container from "react-bootstrap/Container"

function Contact() {
  return (

    <section className="mb-4">
      <h2 className="h1-responsive fw-bolder text-center my-4 text-warning">Contato</h2>

      <Container className="row">

        <Container className="d-flex justify-content-center align-items-center">
          <Container className="col-md-9 mb-md-0 mb-5 ">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <Container className="row">
              <Container className="col-md-12">
                <Container className="md-form mt-4">
                  <p className="text-center w-responsive mx-auto mb-5 text-warning">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                </Container>
              </Container>
            </Container>
              <Container className="row">
                <Container className="col-md-6">
                  <Container className="md-form mb-0">
                    <label htmlFor="name" className="text-white">Seu nome:</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Nome"/>
                  </Container>
                </Container>
                <Container className="col-md-6">
                  <Container className="md-form mb-0">
                    <label htmlFor="email" className="text-white">Seu melhor e-mail:</label>
                    <input type="text" id="email" name="email" className="form-control" placeholder="E-mail"/>
                  </Container>
                </Container>
              </Container>
              <Container className="row">
                <Container className="col-md-12">
                  <Container className="md-form mt-4">
                    <label htmlFor="subject" className="text-white">Assunto:</label>
                    <input type="text" id="subject" name="subject" className="form-control" placeholder="Assunto"/>
                  </Container>
                </Container>
              </Container>
              <Container className="row">
                <Container className="col-md-12">
                  <Container className="md-form mt-4">
                    <label htmlFor="message" className="text-white">Escreva a sua mensagem:</label>
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                  </Container>
                </Container>
              </Container>
            </form>
            <Container className="text-md-left mt-4 px-4">
              <a type="button" className="btn btn-outline-warning px-5">Enviar</a>
            </Container>
            <Container className="status"></Container>
          </Container>
        </Container>

        <Container className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 01 234 567 89</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@mdbootstrap.com</p>
            </li>
          </ul>
        </Container>

      </Container>

    </section>

  )
}

export default Contact
