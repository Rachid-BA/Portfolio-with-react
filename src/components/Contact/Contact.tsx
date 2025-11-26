import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { Form } from "../Form/Form";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:rachid.bakkass@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:rachid.bakkass@gmail.com">rachid.bakkass@gmail.com</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/rachid-bakkass-605b92190" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/Rachid-BA" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" /></a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}