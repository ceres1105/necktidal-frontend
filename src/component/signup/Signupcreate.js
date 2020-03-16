import React, { Component } from 'react';
import styled from 'styled-components';
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import Logo from 'component/images/logoimages.png';
import Facebook from 'component/Facebook';

const Flogo = styled(FacebookCircle)` 
  position:relative;
  right:170px;
  color: white;
`
const Tlogo = styled(Twitter)`
  position:relative;
  right:183px;
  color: white;
`
class Signupcreate extends Component {
    state={
        isVerified: false
    };
    render() {
        return (
            <Maindiv>
                <Signuporlogin>Create your account</Signuporlogin>
                <Ddiv>
                    <Windowdiv>
                        <Userid
                        placeholder="Enter Your Email or username"></Userid>
                        <Userpassword
                        placeholder="Create your password"></Userpassword>
                        <Userpasswordconfirm
                        placeholder="Confirm your password"></Userpasswordconfirm>
                        <Continue>Continue</Continue>
                        <Orcontinuewith>or continue with</Orcontinuewith>
                        <Facebookdiv><Facebook/></Facebookdiv>
                        <Twittersdiv><Tlogo size="25"/>Twitter</Twittersdiv>
                    </Windowdiv>
                </Ddiv>
                <Bottom>
                    <Bottomleft>
                        <Tidallogo
                        src={Logo}></Tidallogo>
                        <Aspiro>© 2020 Aspiro AB</Aspiro>
                    </Bottomleft>
                    <Bottomright>
                        <Privacypolicy>Privacy policy</Privacypolicy>
                        <TermsandConditions>Terms and Conditions</TermsandConditions>
                        <Contact>Contact</Contact>
                        <EN>EN</EN>
                    </Bottomright>
                </Bottom>

        </Maindiv>
        )
    }
}



// const Signuplogin = () => {
//     return(
//         <Maindiv>
//                 <Signuporlogin>Sign Up or Log In</Signuporlogin>
//                 <Ddiv>
//                     <Windowdiv>
//                         <Userid
//                         placeholder="Enter Your Email or username"></Userid>
//                         <Continue>Continue</Continue>
//                         <Orcontinuewith>or continue with</Orcontinuewith>
//                         <Facebook><Flogo size="25"/>Facebook</Facebook>
//                         <Twitters><Tlogo size="25"/>Twitter</Twitters>
                    
//                     </Windowdiv>
//                 </Ddiv>
//                 <Bottom>
//                     <Bottomleft>
//                         <Tidallogo
//                         src={Logo}></Tidallogo>
//                         <Aspiro>© 2020 Aspiro AB</Aspiro>
//                     </Bottomleft>
//                     <Bottomright>
//                         <Privacypolicy>Privacy policy</Privacypolicy>
//                         <TermsandConditions>Terms and Conditions</TermsandConditions>
//                         <Contact>Contact</Contact>
//                         <EN>EN</EN>
//                     </Bottomright>
                    
//                 </Bottom>

//         </Maindiv>
//     )
// }

const Maindiv = styled.div`
text-align:center;
color:white;
width:100vw;
height:100vh;
background:linear-gradient(192deg, #171c26, #000) no-repeat center center fixed
`

const Signuporlogin = styled.div`
padding-top:30px;
padding-bottom:30px;
font-size:29px;
font-family:nationale-demibold;
`
const Ddiv = styled.div`
display:flex;
justify-content:center;`


const Windowdiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
line-height: 50px;
width:35%;
border-radius:5px;
font-size:18px;
font-family:nationale-demibold;
background:linear-gradient(to bottom, rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.03476) 19%,rgba(255,255,255,0.03082) 34%,rgba(255,255,255,0.02764) 47%,rgba(255,255,255,0.02556) 56.5%,rgba(255,255,255,0.02388) 65%,rgba(255,255,255,0.02252) 73%,rgba(255,255,255,0.0215) 80.2%,rgba(255,255,255,0.02084) 86.1%,rgba(255,255,255,0.02042) 91%,rgba(255,255,255,0.02016) 95.2%,rgba(255,255,255,0.02004) 98.2%,rgba(255,255,255,0.02) 100%)
`
const Userid = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:20px;
margin-bottom:5px;
width:70%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}
`
const Userpassword = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:20px;
margin-bottom:5px;
width:70%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}
`
const Userpasswordconfirm = styled.input`
color:white;
line-height:5px;
font-family:nationale-regular;
font-size:18px;
border-top:none;
border-left:none;
border-right:none;
border-bottom: 1px solid #78777f;
margin-top:15px;
margin-bottom:30px;
width:70%;
height:55px;
background-color:rgba(0, 0, 0, 0);
:focus{
    outline:none;
    border-bottom:2px solid cyan;
}
`


const Continue = styled.div`
border:1px solid #78777f;
margin-bottom:15px;
width:70%;
height:55px;
border-radius:5px;
color:#78777f;
:hover{
    cursor:not-allowed;
}
`
/* :hover{
    color:black;
    background-color:white;
    transition: all 1s;
} */

const Orcontinuewith = styled.div`
font-size:13px;
font-family:nationale-regular;
margin-bottom:10px;`

const Facebookdiv = styled.div`
margin-bottom:30px;
width:70%;
height:55px;
border:1px solid white;
border-radius:5px;
`

const Twittersdiv = styled.div`
width:70%;
height:55px;
border:1px solid white;
border-radius:5px;
margin-bottom:80px;
:hover{
    color:black;
    background-color:white;
    transition: all 1s;
`







/* footer구간--------------------------- */

const Bottom = styled.div`
font-size:15px;
color:#9B9B9C;
border-top:1px solid #1F2023;
margin-left:3%;
width:94%;
display:flex;
justify-content:space-between;
position:relative;
top:28vh`
const Bottomleft = styled.div`
margin-top:30px;
display:flex;`
const Tidallogo = styled.img`
margin-left:3px;
margin-right:20px;
width:25px;`
const Aspiro = styled.div``
const Bottomright = styled.div`
margin-top:30px;
display:flex;
`
const Privacypolicy = styled.div`
margin-right:20px;`
const TermsandConditions = styled.div`
margin-right:20px;`
const Contact = styled.div`
margin-right:20px;`
const EN = styled.div`
margin-right:20px;`


export default Signupcreate;