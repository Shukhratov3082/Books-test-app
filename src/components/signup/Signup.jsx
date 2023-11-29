import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components'
import google from '../images/googleIcon.svg'
import facebook from '../images/faceBookIcon.svg'
const Signup = () => {
    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [key, setKey] = useState('');
    const [secret, setSecret] = useState('');

    const submit = () => {
        // console.log(name);
        // console.log(gmail);
        // console.log(key);
        // console.log(secret);
        const data = {
            name: name,
            email: gmail,
            key: key,
            secret: secret
        }

        // axios.post('https://0001.uz/signup', data).then(res => console.log(res))
    }


    return (
        <Wrapper>
            <div className='Container'>
                <h1>Sign up</h1>
                <button className='google'> <img src={google} alt="" /> Continue with Google</button>
                <button className='facebook'> <img src={facebook} alt="" /> Continue with FaceBook</button>
                <div className='line'><span>OR</span></div>
                <div className="post">
                    <div className='input-name'>
                        <label >Your name</label>
                        <input onChange={({ target }) => setName(target.value)} type="text" name="name" placeholder="Enter your name" />
                    </div>
                    <div className='input-email'>
                        <label >Your email</label>
                        <input onChange={({ target }) => setGmail(target.value)} type="text" name="email" placeholder="Enter your email" />
                    </div>
                    <div className='input-key'>
                        <label >Your key</label>
                        <input onChange={({ target }) => setKey(target.value)} type="text" name="key" placeholder="Enter your key" />
                    </div>
                    <div className='input-secret'>
                        <label >Your secret</label>
                        <input onChange={({ target }) => setSecret(target.value)} type="text" name="secret" placeholder="Enter your secret" />
                    </div>
                </div>
                <button onClick={submit} className='addBtn'>Button</button>
                <p>Already signed up? <span>Go to sign in.</span></p>
            </div>
        </Wrapper>
    );
}

export default Signup;
const Wrapper = styled.div`
  padding:9vw;
  display: flex;
  justify-content: center;
    .Container{
        width: 31vw;//430px
        top: 165px;
        left: 505px;
        padding:3vw 2vw;
        border-radius: 12px;
        gap: 36px;
        background-color: #fff;
        text-align: center;
        box-shadow: 0px 4px 32px 0px #3333332b;


            h1{
                font-family: 'Mulish', sans-serif;
                font-size: 3vw;
                font-weight: 700;
                line-height: 45px;
                margin-bottom: 36px;
            }
            button{
                width:  26vw;
                height:  44px;
                display: flex;
                align-items: center;
                gap: 6px;
                background-color: #fff;
                padding: 10px 0;
                padding-left:5vw;
                text-align: start;
                border-radius: 4px;
                border: 1px solid black;
                font-family: 'Mulish', sans-serif;
                font-size: 1.1vw;
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
            .input-name,.input-email,.input-secret,.input-key{
                position: relative;
                margin-top: 28px;
                label {
                    display: block;
                    text-align: start;
                    font-size: 1vw;
                }
                input {
                    width: 26vw;
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
                display: block;
                color: #fff;
                background-color: #6200EE;
                border-radius: 4px;
                font-size: 1vw;
                text-align: center;
                padding: 10px 24px;
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
