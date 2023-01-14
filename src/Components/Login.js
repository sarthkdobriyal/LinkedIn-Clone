import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin>Sign In</Signin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your Professional Community</h1>
          <img src="/images/login-hero.svg" alt="LoginHero" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            SignIn with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Form = styled.div`
  margin-top:100px;
  width:408px;

  @media (max-width:768px){
    margin-top:20px;
  }

`;

const Google = styled.button`
display:flex;
justify-content:center;
background-color:#fff;
align-items:center;
height:56px;
width:100%;
border-radius:28px;
box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%), inset 0 0 0 2px rgba(0 0 0 / 0%), inset 0 0 0 1px rgba(0 0 0 / 0%);
border:none;
vertical-align:middle;
z-index:0;
transition-duration: 167ms;
font-size:20px;
color:rgba(0,0,0,0.6);
cursor:pointer;

& > img{
  margin-right:10px;
}

&:hover{
background-color:rgba(207,207,207,0.25);
color: rgba(0 ,0, 0 ,0.75);

`;

const Hero = styled.div`
width:100%;

h1 {
  padding-bottom:0px;
  font-size:70px;
  
  color:#2977c9;
  font-weight:200;
  line-height:70px;
  
  @media (max-width: 768px){
    flex-direction:column;
    text-align:center;
    font-size:20px;
    width:100%;
    line-height:2;
  }
}

img {
  
  z-index: -1;
    position:absolute;
    width: 500px;
    height:670px;
    top:60px;
    right: -50px;
    @media (max-width: 768px){
      top:230px;
      width: initial;
      position: initial;
      height:initial;
    }
}
`;

const Section = styled.section`
  display:flex;
  align-content:start;
  min-height:700px;
  padding-bottom:138px;
  padding-top:70px;
  
  position:relative;
  flex-wrap:wrap;
  width: 100%;
  max-width:1128px;
  align-items:center;
  margin:auto;
  
  
  @media (max-width: 768px){
    padding-top:40px;
    margin:auto;
    min-height:0px;
  }
`;

const Join = styled.a`
  font-size:16px;
  padding: 10px 12px;
  text-decoration:none;
  border-radius:4px;
  color:rgba(0,0,0,0.6)
  margin-right:12px;
  cursor:pointer;

  &:hover{
    background-color:rgba(0,0,0,0.09);
    color:#0a66c2;
    border-radius:24px;
    text-decoration:none;
  }
`;

const Signin = styled.a`
  margin:10px;
  box-shadow:inset 0 0 0 1px #0a66c2;
  border-radius:24px;
  transition-duration:167ms;
  padding:10px 24px;
  font-size:16px;
  font-weight:600px;
  line-height:40px;
  text-align:center;
  backgroun-color:rgba(0,0,0,0);
  cursor:pointer;
  
  &:hover{
  background-color:rgba(112,181,249,0.15);
  color: #0a66c2;
  text-decoration:none;
  }
`;

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
position:relative;
justify-content:space-between;
flex-wrap: nowrap;

& > a {
  width:135px;
  height:34px;
}

@media (max-width:768px){
  padding: 10px 5px;
}
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
