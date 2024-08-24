import { Container, Label, Input, FormGroup, Button } from "reactstrap";
import { AdminLoginPageProps } from "../../../interface/Interfaces";
import Styles from "/public/css/hub.module.css"


const LoginAdminUI = ({handleLoginInputs, handleSubmitLogin}: AdminLoginPageProps) =>{
  
    return (
      <div>
        <h1 className="text-center mt-5">ADMIN LOGIN</h1>
      <div  className={`${Styles.loginBox}`}>
        <Container className="my-1">
          <FormGroup className="text-center">
            <Label for="username">USER NAME</Label>
            <Input name="username" type="text" onChange={handleLoginInputs}/>
          </FormGroup>
        </Container>
        <Container className="mt-5">
          <FormGroup className="text-center">
            <Label for="password">PASSWORD</Label>
            <Input name="password" type="password" onChange={handleLoginInputs}/>
          </FormGroup>
        </Container>
        <Container>
            <FormGroup className="text-center">
                <Button onClick={handleSubmitLogin}>Login</Button>
            </FormGroup>
        </Container>
      </div>
    </div>
    )
} 
export default LoginAdminUI;