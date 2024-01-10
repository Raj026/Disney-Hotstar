import styled from "styled-components";

const Home = (props) => {
    return (
        <Container>Home
            <h1>HEkki</h1>
            <h1>Hello</h1>
            <h2>Hello</h2>
        </Container>
        
    ); 
};

const Container = styled.main`
    position: relative;
    background: url("/images/home-background.png");
`;

export default Home;