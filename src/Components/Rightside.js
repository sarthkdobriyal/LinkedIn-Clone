import styled from 'styled-components';
import React from 'react';

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
             <a >
               <Avatar />
             </a>
             <div>
               <span>#Video</span>
               <button>Follow</button>
             </div>
          </li>
        </FeedList>
      </FollowCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area:rightside;
  margin-bottom:100px;
`;

const FollowCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
box-shadow: 0 0 0 1px rgba(0 0 0/ 15%), 0 0 0 rgb(0 0 0/ 20%);
border:none;
position:relative;
padding:12px;
`;

const Title = styled.div`
display: inline-flex;
align-items:center;
justify-content:space-between;
font-size:16px;
width:100%;
color: rgba(0,0,0,0.6); 
`;



const FeedList = styled.div`
margin-top:16px;
li {
  display:flex;
  align-items:center;
  margin:12px 0;
  position:relative;
  font-size:14px;
  & > div{
    display:flex;
    flex-direction:column;
  }
  button{
    background-color:transparent;
    color: rgba(0,0,0,0.6);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
    padding:16px;
    align-items:center;
    box-sizing:border-box;
    border-radius:15px;
    font-weight:600;
    display:inline-flex;
    justify-content:center;
    max-height:32px;
    max-width:480px;
    text-align:center;
    outline:none;
    cursor:pointer;
  }
}
`;
const Avatar = styled.div`
  background-image
`;














export default Rightside;