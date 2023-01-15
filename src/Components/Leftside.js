import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';

const Leftside = (props) => {
  // console.log(props)
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome,{props.user?props.user.displayName:"there"}!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div> 
              <span>Connections</span>
              <span>Grow Your Network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area:leftside;

`;

const ArtCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
transition: box-shadow 83ms;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgba(0 0 0/ 15%), 0 0 0 rgb(0 0 0/ 20%);

`;

const UserInfo = styled.div`
  border-bottom:1px solid rgba(0,0,0,0.15);
  padding:12px 12px 16px;
  word-wrap:break-word;
  word-break:break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  margin: -12px -12px 0; 
  height:64px;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width:72px;
  height:72px; 
  box-sizing:border-box;
  background-clip:content-box;
  background-color:white;
  background-position:center;
  background-size:60%;
  background-repeat:no-repeat;
  border: 2px solid white;
  margin: -38px auto 30px;
  border-radius:50%;
`;

const Link = styled.div`
  font-size:16px;
  line-height:1.5;
  color:rgba(0,0,0,0.9);
  font-weight:600;

`;
const AddPhotoText = styled.div`
  color:#0a66c2;
  margin-top:4px;
  font-size:12px;
  line-height:1.33;
  font-weight:500;
  cursor:pointer;
`;

const Widget = styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding: 12px 0 ;

& > a{
  text-decoration:none;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 4px 12px;
  cursor:pointer;

  &:hover{
    background-color:rgba(0,0,0,0.08);
  }

  div{
    display:flex;
    flex-direction:column;
    text-align:left;
    span{
      font-size:12px;
      line-height:1.333;
      &:first-child{
        color:rgba(0,0,0,0.6);
      }
      &:nth-child(2){
        color:rgba(0,0,0,1);
      }
    }
  }
}

svg{
  color:rgba(0,0,0,1);
}

`;
const Item = styled.div`
  border-color:rgba(0,0,0,0.8);
  text-align:left;
  padding:12px;
  font-size:12px;
  display:block;
  span{
    display:flex;
    align-items:center;
    color:rgba(0,0,0,1);
    svg{
      color:rgba(0,0,0,0.6);
    }
  }

  &:hover{
    background-color:rgba(0,0,0,0.08);
  }


`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align:left;
  display:flex;
  flex-direction:column;

  a{
    color:black;
    padding: 4px 12px 4px 12px;
    font-size:12px;

    &:hover{
      cursor:pointer;
      color:#0a66c2;
    }

    span{
      display:flex;
      align-items:center;
      justify-content: space-between;
    }

    &:last-child{
      color:rgba(0,0,0,0.6);
      text-decoration:none;
      border-top: 1px solid #d6cec2;
      padding:12px;
      &:hover{
        background-color:rgba(0,0,0,0.08);
      }

    }


  }

`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Leftside);
