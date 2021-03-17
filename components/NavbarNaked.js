import { useState } from 'react';
import Router from 'next/router'
import Link from "next/link";
import style from '../styles/Navbar.module.scss';
import Head from 'next/head';
import NProgress from 'nprogress';
import WhatsAppButton from './WhatsAppButton';

export const customLoader = () => {
  return (
    `
      <div class="${style.ax_loading_bar} bar" role="bar">
        <div class="${style.ax_loading_peg} peg">
        </div>
      </div>
      <div class="${style.ax_loading_spinner} spinner" role="spinner">
        <div class="${style.ax_loading_spinner_icon} spinner-icon">
        </div>
      </div>
   `
  )
}

NProgress.configure({
  template: customLoader()
});

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


const Navbar = (props) => {
  const [megaMenu, setMegaMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(false);

  const handleMegaMenu = () => {
    let isOpen = !megaMenu;
    setMegaMenu(isOpen);
  }

  const handleMobileMenu = () => {
    let isMobileOpen = !mobileMenu;
    setMobileMenu(isMobileOpen);
  }

  const handleMobileSubmenu = () => {
    let isMobileSubmenuOpen = !mobileSubmenu;
    setMobileSubmenu(isMobileSubmenuOpen);
  }

  Router.events.on('routeChangeStart', () => {
    handleMegaMenu();
  })

  const formatPhone = () => {
    const phone = props.phone;
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  }

  const formatedPhone = formatPhone();

  return (
    <>
      <Head>
        <title>{props.siteTitle}</title>
      </Head>
      {props.showWhatsAppButton ? <WhatsAppButton phone={props.phone} /> : ''}
      <div className={`${style.ax_overlay} ${megaMenu ? style.ax_overlay_open : ''}`}></div>
      <header className={style.ax_header}>
        <section className={style.ax_topbar}>
          <p><span>Email: </span>{props.email}  <span>Phone: </span>{formatedPhone}</p>
        </section>
        <section className={`${style.ax_navbar} ${props.logo2 ? style.ax_navbar_2_logos : ''}`}>
          <div className={style.ax_logo}>
            <img src={props.logo} layout="fill" />
          </div>
          <h1 style={{ width: '1300px', fontFamily: 'Montserrat, sans-serif', fontSize: '36px', textAlign: 'left' }}>5 Reasons I am Awesome! <span style={{ fontSize: '24px', marginLeft: '32px' }}>By Gord Ross</span></h1>


          <div className={style.ax_logo_2}>
            {props.logo2 ? <img src={props.logo2} layout="fill" /> : ''}
          </div>
        </section>
      </header>



      <div className={`${style.ax_btn_menu_mob} ${mobileMenu ? style.ax_btn_menu_mob_open : ''} ${mobileSubmenu ? style.ax_hide_btn_menu_mob : ''}`} onClick={handleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`${style.ax_mobile_menu} ${mobileMenu ? style.ax_menu_mob_open : ''} ${mobileSubmenu ? style.ax_submenu_mob_open : ''}`}>

      </div>
    </>
  )
}

export default Navbar;