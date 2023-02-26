import UserRegister from "../views/UserRegister";
import {Row, Col} from "react-bootstrap"
import UserLogin from "../views/UserLogin";

const Home= () => {
	return(
		<>
		<Row>
      <Col className="border-end border-bottom border-start border-3 p-2 m-2 pt-4" md={7}>  
				<UserRegister />
      </Col>
			<Col className="border-end border-bottom border-start border-3 pt-4 p-2 m-2">
				<UserLogin />
      </Col>
    </Row>
		</>
	);
}
export default Home;