import React from 'react';
import styled from 'styled-components'
const Signin = () => {
    return (
        <Wrapper>
            <div className='Container'>
                <h1>Sign in</h1>

                <button className='google'>Continue with Google</button>
                <button className='facebook'>Continue with FaceBook</button>
                <div className='line'><span>OR</span></div>
                <div className="post">
                    <div className='input-name'>
                        <label >Your username</label>
                        < input type="text" name="name" placeholder="Enter your username" />
                    </div>
                    <div className='input-email'>
                        <label >Your email</label>
                        < input type="text" name="name" placeholder="Enter your email" />
                    </div>
                    <div className='input-user'>
                        <label >Your username</label>
                        < input type="text" name="name" placeholder="Enter your username" />
                    </div>
                    <div className='input-user'>
                        <label >Your password</label>
                        < input type="password" name="name" placeholder="Enter your password" />
                    </div>
                </div>
                <button className='addBtn'>Enter</button>
                <p>Already signed up? <span>Go to sign in.</span></p>
            </div>
        </Wrapper>
    );
}

export default Signin;
const Wrapper = styled.div`
  padding-top:10vw;
  display: flex;
  justify-content: center;
    .Container{
        width: 31vw;
        top: 165px;
        left: 505px;
        padding: 3vw 2vw;
        border-radius: 12px;
        gap: 36px;
        background-color: #fff;
        text-align: center;
        box-shadow: 0px 4px 32px 0px #3333332b;


        h1{
            font-family: Mulish;
            font-size: 3vw;
            font-weight: 700;
            line-height: 45px;
            margin-bottom: 36px;
        }
        button{
            width:  374px;
            height:  44px;
            display: block;
            background-color: #fff;
            padding: 10px 24px;
            border-radius: 4px;
            border: 1px solid black;
            font-family: 'Mulish', sans-serif;
            font-size: 1vw;
        }
        .google{
            margin-bottom: 16px;
        }
        .facebook{
            margin-bottom: 28px;
        }
        .line{
            position: relative;
            border-bottom: 1px solid black;
            span{
                width: 48px;
                height: 15px;
                position: absolute;
                background-color: white;
                font-size: 1vw;
                top: -13px;
                left: 40%;
         }
        }
        .input-name,.input-email,.input-user{
             position: relative;
             margin-top: 28px;
             label {
                 display: block;
                 text-align: start;
                 font-size: 1vw;

             }
             input {
                 width: 374px;
                 height: 47px;
                 padding: 14px 16px;
                 border-radius: 6px;
                 border: 1px solid #EBEBEB;
                 font-family: 'Mulish', sans-serif;
                    font-size: 1.2vw;
                 &:focus {
                     outline: none;
                 }
             }
         }
         .addBtn{
             width:100%;
             height: 40px;
             padding: 10px 24px;
             background-color: #6200EE;
             color: #fff;
             border-radius: 4px;
             font-size: 1vw;
             margin: 36px 0 12px 0;


         }
         p{
            font-family: 'Mulish', sans-serif;
            text-align: center;
            font-size: 1vw;
            span{
                color: #6200EE;
            }
        }
    }
    

`