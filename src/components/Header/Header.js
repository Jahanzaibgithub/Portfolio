import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white" }}>

        <img src="./logo.svg" height={50} width={50}/> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Jahanzaib Sarwar</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <li>
        <Link href="#education" legacyBehavior>
          <NavLink>Education</NavLink>
        </Link>
      </li>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Jahanzaibgithub">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jahanzaib-sarwar-a58b9a24a">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/jahanzaib5947?igshid=ZDc4ODBmNjlmNQ==">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

