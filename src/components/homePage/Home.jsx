import React, { useEffect } from 'react';
import styled from 'styled-components'
import logo from '../images/logo.svg'
import searchIcon from '../images/search-icon.svg'
import exit from '../images/exitIcon.svg'
import bell from '../images/bellIcon.svg'
import profile from '../images/profile.svg'
import plus from '../images/plusIcon.svg'
import axios from 'axios';

const Home = () => {
    //axios error 401 
    useEffect(() => {
        axios.get('https://0001.uz/myself').then(res => console.log(res)).catch(e => console.log('catch:' + e))
    })
    const value = () => {
        const input = document.querySelector('#input')
        input.value = ''
    }
    const addBook = () => {
        const book = document.querySelector('.Book-Container')
        book.classList.add('addCreateBook')
    }
    const Close = () => {
        const exit = document.querySelector('.Book-Container')
        console.log(exit);
        exit.classList.remove('addCreateBook')
    }
    return (
        <Wrapper>
            <header>
                <div>
                    <img src={logo} className='logo' alt="Logo" />
                    <div className='inputImg'>
                        <img className='search' src={searchIcon} alt="" />
                        <input id='input' type="text" placeholder='Search for any training you want' />
                        <img onClick={value} className='exit' src={exit} alt="" />
                    </div>
                </div>

                <div className='profile'>
                    <a href="/signup">Sign Up</a>
                    <a href="/signin">Sign In</a>
                    <img src={bell} alt="" />
                    <img src={profile} alt="" />
                </div>
            </header>
            <main>
                <div className='main-head'>
                    <h1>You’ve got <span>7 book</span></h1>
                    <div>
                        <input type="text" placeholder='Enter your name' />
                        <div>
                            <img className='plus' src={plus} alt="" />
                            <button onClick={addBook}>Create a book</button>
                        </div>

                    </div>
                </div>
                <p>Your task today</p>
            </main>
            <CreateBook>
                <div className='Book-Container'>
                    <div className='Container'>
                        <div className='title'>
                            <span>Create a book</span>
                            <img className='exit' onClick={Close} src={exit} alt="" />
                        </div>
                        <div className="inputs">
                            <div className='input-title'>
                                <label >Title</label>
                                < input type="text" name="name" placeholder="Enter your title" />
                            </div>
                            <div className='input-author'>
                                <label >Author</label>
                                < input type="text" name="author" placeholder="Enter your author" />
                            </div>
                            <div className='input-cover'>
                                <label >Cover</label>
                                < input type="text" name="cover" placeholder="Enter your cover" />
                            </div>
                            <div className='input-published'>
                                <label >Published</label>
                                < input type="password" name="published" placeholder="Enter your publishes" />
                            </div>
                            <div className='input-pages'>
                                <label >Pages</label>
                                < input type="password" name="pages" placeholder="Enter your pages" />
                            </div>
                        </div>
                        <div className='btns'>
                            <button>Close</button>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </CreateBook>

        </Wrapper >
    );
}

export default Home;
const Wrapper = styled.div`
    header{
        display: flex;
        padding: 12px 0;
        align-items: center;
        justify-content: space-between;
        .logo{
            width: 11vw;
        }
        div{
            display: flex;
            gap: 24px;
            .inputImg{
                height: 48px;
                position: relative;
                input{
                    display: flex;
                    height: 48px;
                    border-radius: 6px;
                    font-size: 1vw;
                    width: 380px;
                    align-items: center;
                    gap: 12px;
                    position: relative;
                    padding: 12px 62px;
                    border: none;
                    background: none;
                       
                       &:focus{
                        outline: none;
                        background: white;
                            
                       }
                       
                    }
                    .search{
                        position: absolute;
                        top: 12px;
                        left: 29px;
                        z-index: 100;
                    }
                    .exit{
                        position:absolute;
                        top: 14px;
                        right: 14px;
                        cursor: none;
                    }
            }
        } 
        .profile{
            a{
                text-decoration: none;
                padding:12px 15px;
                background-color: #fff;
                color: black;
                border: 1px solid black;
                border-radius: 12px;
            } 
            img{
                width: 2vw;
                cursor: pointer;
            }  
        }
    }
    main{
        width: 100%;
        height: 100%;
        color: #fff;
        .main-head{
            display: flex;
            justify-content: space-between;
            h1{
                font-family: 'Mulish', sans-serif;
                font-size: 3vw;
                font-weight: 700;
                line-height: 45px;
                span{
                    color: #6200EE;
                    font-family: 'Mulish', sans-serif;
                }

            }
            div{
                display: flex;
                align-items: center;
                gap: 24px;
                input{
                    width:320px;
                    height:47px;
                    border: none;
                    border-radius: 4px;
                    padding:14px 16px;
                    font-size: 1vw;
                    &::placeholder{
                        color:  #b3b3b3;
                    }

                }
                div{
                    position: relative;
                button{
                    width:181px;
                    height: 40px;
                    padding: 10px 24px;
                    border-radius: 4px;
                    background: #6200EE;
                    font-size: 1vw;
                    color: #fff;
                    border: none;
                    position: relative;
                    cursor: pointer;
                    font-family: 'Mulish', sans-serif;
                }
                .plus{
                    position: absolute;
                    top: 12px;
                    left: 15px;
                    z-index: 100;
                }
                }
         
            }
            p{
                font-size: 1.1vw;
            }
       
        }
    }
    @media (max-width:391px) {
        header{
            display: block;
            .logo{
                width: 30vw;
            }
            div{
                div{
                    margin-bottom: 12px;
                    width: 2vw;
                }
            }
            .profile{
                img{
                    width: 7vw;
                }
            }
        }
        main{
            .main-head{
                display: block;

                h1{
                    font-size: 9vw;
                    margin-bottom: 15px;
        
                }
                div{
                    display: block;
                  input{
                    font-size: 4vw;
                  }
                    div{
                        button{
                        font-size: 4vw;
                        margin-top: 12px;
                        }
                        .plus{
                            top: 46%;
                            left: 10px;
                        }
                    }
            }
            }
          
        }
        
    }
`
const CreateBook = styled.div`
.addCreateBook{
    display: flex !important;
}
.Book-Container{
    width: 100%;
    height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background: #1515157A;
    
    
    .Container{
        width: 430px;
        background-color: #fff;
        padding: 24px 28px;
        border-radius: 12px;
        z-index: 1000;
        .title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                font-size: 20px;
                font-weight: 600;
            }
            img{
                width: 24px;
                height: 24px;
                cursor: pointer;
                &:active{
                    transform: scale(0.9);
                }
            }
        }

        .inputs{
            display: flex;
            flex-direction: column;

        .input-title,.input-author,.input-cover,.input-published,.input-pages{
             position: relative;
             margin-top: 28px;

             label {
                 display: block;
                 text-align: start;
             }
             input {
                 width: 374px;
                 height: 47px;
                 padding: 14px 16px;
                 border-radius: 6px;
                 border: 1px solid #EBEBEB;
                 &:focus {
                     outline: none;
                 }
             }
         }
        }
         .btns{
             display: flex;
             gap: 12px;
             margin-top: 28px;
             button{
                 width: 181px;
                 height: 40px;
                 background-color: #6200EE;
                 color: #fff;
                 border-radius: 4px;
                 font-size: 16px;
                 padding: 10px 24px;
                 border: none;
                 font-family: 'Mulish', sans-serif;

                    &:first-child{
                        border: 1px solid #6200EE;
                        background-color: white;
                        color: #6200EE;
                    }
             }
            }
         }
    }
`

