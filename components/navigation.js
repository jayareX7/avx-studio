import React, { Component } from 'react';
import Link from 'next/link';
import { useUser } from '../utils/hooks'
import { GrEmoji } from 'react-icons/gr';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import Router from 'next/router';




    
 export default function Navigation (){

  const [user, { mutate }] = useUser()

  async function handleLogout() {
    await fetch('/api/user/logout')
    mutate({ user: null })
  }
    
    return (

<>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
  <div className="bg-grad2"> <br />

    <header>

    <nav>
                    <div className="nav-wrapper">
                        <a className="brand-logo btn left tooltipped" data-position="bottom" data-tooltip="Keep smiling"><GrEmoji /></a>
                        <ul id="nav-mobile" className="right">
                            <li><a className={'waves-effect waves-light btn-small tooltipped'} data-position="bottom" data-tooltip="Home" onClick={() => Router.replace("/")}><AiTwotoneHome /></a></li>
                            <li><a className={"waves-effect waves-light btn-small modal-trigger"} href="#modal1">About</a></li>
                            <li><a className={"btn-small notification dropdown-trigger"} data-target='dropdown1'><MdNotifications /><span className="badgen red">1</span></a></li>
                        </ul>
                    </div>

        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/user/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <a role="button" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/user/signup">
                  <a>Sign up</a>
                </Link>
              </li>
              <li>
                <Link href="/user/login">
                  <a>Login</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

    </header>
  


    </div>
  </div>

<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
  <div className="bg-grad1 py-xl-4">
       <div className="row">
     <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
       <img src="/assets/blog/avx-studio-black.png" className="mx-xl-4 mx-lg-4 mx-md-4 mx-sm-4" alt="my image" width="50%" /></div>
       <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
          <div className="float-xl-right float-lg-right float-md-right float-sm-right d-xl-inline d-lg-inline d-md-inline d-sm-inline 
          py-xl-4 py-lg-4 py-md-4 py-sm-4">
        
            <Link href="/">
              <a href="/" className="mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4">
                Home</a>
            </Link>
            <Link href="/about">
              <a href="/about" className="mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4">
                About AVX
              </a>
            </Link>
            <Link href="/services">
              <a href="/services" className="mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4">
                Services
              </a>
            </Link>
            <Link href="/portfolio">
              <a href="/portfolio" className="mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4">
                Past Works
              </a>
            </Link>
            <Link href="/contact">
              <a href="/contact" className="mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4">
                Contact
              </a>
            </Link>
          </div>
          </div>
        </div>
  </div>
  </div>

  </>

    )

 }




        