import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

function NavbarCom() {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to={"/"}>
                    <h3>RecipeBook</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto align-items-center">

                        <Nav.Link as={NavLink} to={"/recipeForm"}>
                            <h5>RecipeForm</h5>
                            </Nav.Link>
                        <Nav.Link as={NavLink} to={"/recipeList"}>
                            <h5>RecipeList</h5>
                        </Nav.Link>
                        <Nav.Link>
                            <Button className='btn-lg' onClick={()=>navigate("/login")}>Log in</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCom;