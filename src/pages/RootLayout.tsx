import { Container} from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import './Extra.css'
import Navi from "../components/Navi";

const RootLayout = () => {
    return (<>

 <Navi/>

        <Container>
            <Outlet />
        </Container>
    <footer>
        &copy; 2023
        <p>ibrahimbabalola8@gmail.com</p>
    </footer>
    </>);
}

export default RootLayout;