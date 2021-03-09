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

  console.log(props.faviconURL)

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={props.faviconURL} />
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
          <nav className={style.ax_menu}>
            <Link href="/" >Home</Link>
            <Link href="/about">About</Link>
            <Link href="/mortgage-process" >Mortgage Process</Link>
            <Link href="/mortgage-calculators" >Calculators</Link>
            <button className={style.ax_has_submenu} onClick={handleMegaMenu}>Learn</button>
            <Link href="/faq" >FAQ</Link>
            <Link href="/contact" >Contact</Link>
          </nav>

          <div className={style.ax_logo_2}>
            {props.logo2 ? <img src={props.logo2} layout="fill" /> : ''}
          </div>
        </section>
      </header>

      <div className={`${style.ax_megamenu} ${megaMenu ? style.ax_megamenu_open : style.ax_megamenu_close} `}>
        <nav>
          <h3>Learning Centre</h3>
          <Link href="/posts/about-learning-centre" >About Learning Centre</Link>
          <Link href="/posts/the-mortgage-process-explained" >The Mortgage Process</Link>
          <Link href="/posts/why-use-a-mortgage-broker" >Why Use a Mortgage Broker</Link>
          <Link href="/posts/mortgage-101-the-basics" >Mortgage 101</Link>
          <Link href="/posts/costs" >Costs</Link>
          <Link href="/posts/whats-a-rate-hold" >What's a Rate Hold</Link>
          <Link href="/posts/home-fire-insurance" >Home (Fire) Insurance</Link>
          <Link href="/posts/mortgage-payment-protection-insurance" >Mortgage (Payment Protection) Insurance</Link>
          <Link href="/posts/mortgage-default-insurance" >Mortgage Default Insurance</Link>
          <Link href="/posts/the-mortgage-payment" >The Mortgage Payment</Link>
          <Link href="/posts/payment-strategy-extra-payments" >Payment Strategy – Extra Payments</Link>
          <Link href="/posts/credit-basics" >Credit Basics</Link>
        </nav>
        <nav>
          <h3>Mortgage Solutions</h3>
          <Link href="/posts/finding-the-right-solution" >Finding the Right Solution</Link>
          <Link href="/posts/mortgage-renewals" >Mortgage Renewals</Link>
          <Link href="/posts/mortgage-refinancing" >Mortgage Refinancing</Link>
          <Link href="/posts/home-equity-loans" >Home Equity Loans</Link>
          <Link href="/posts/self-employed-loans" >Self Employed Loans</Link>
          <Link href="/posts/purchase-plus-improvements" >Purchase Plus Improvements</Link>
          <Link href="/posts/debt-consolidation" >Debt Consolidation</Link>
        </nav>
        <button className={style.ax_close_megamenu} onClick={handleMegaMenu}>Close</button>
      </div>

      <div className={`${style.ax_btn_menu_mob} ${mobileMenu ? style.ax_btn_menu_mob_open : ''} ${mobileSubmenu ? style.ax_hide_btn_menu_mob : ''}`} onClick={handleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`${style.ax_mobile_menu} ${mobileMenu ? style.ax_menu_mob_open : ''} ${mobileSubmenu ? style.ax_submenu_mob_open : ''}`}>
        <nav>
          <Link href="/" >Home</Link>
          <Link href="/about">About</Link>
          <Link href="/mortgage-process" >Mortgage Process</Link>
          <Link href="/mortgage-calculators" >Calculators</Link>
          <div href="#" className={style.ax_has_submenu_mob} onClick={handleMobileSubmenu}>Learn</div>
          <div className={`${style.ax_submenu_mob}`}>
            <button onClick={handleMobileSubmenu}>Back</button>
            <div className={style.ax_submenu_mob_inner}>
              <h3>Learning Centre</h3>
              <Link href="/posts/about-learning-centre" >About Learning Centre</Link>
              <Link href="/posts/the-mortgage-process-explained" >The Mortgage Process</Link>
              <Link href="/posts/why-use-a-mortgage-broker" >Why Use a Mortgage Broker</Link>
              <Link href="/posts/mortgage-101-the-basics" >Mortgage 101</Link>
              <Link href="/posts/costs" >Costs</Link>
              <Link href="/posts/whats-a-rate-hold" >What's a Rate Hold</Link>
              <Link href="/posts/home-fire-insurance" >Home (Fire) Insurance</Link>
              <Link href="/posts/mortgage-payment-protection-insurance" >Mortgage (Payment Protection) Insurance</Link>
              <Link href="/posts/mortgage-default-insurance" >Mortgage Default Insurance</Link>
              <Link href="/posts/the-mortgage-payment" >The Mortgage Payment</Link>
              <Link href="/posts/payment-strategy-extra-payments" >Payment Strategy – Extra Payments</Link>
              <Link href="/posts/credit-basics" >Credit Basics</Link>
              <h3>Mortgage Solutions</h3>
              <Link href="/posts/finding-the-right-solution" >Finding the Right Solution</Link>
              <Link href="/posts/mortgage-renewals" >Mortgage Renewals</Link>
              <Link href="/posts/mortgage-refinancing" >Mortgage Refinancing</Link>
              <Link href="/posts/home-equity-loans" >Home Equity Loans</Link>
              <Link href="/posts/self-employed-loans" >Self Employed Loans</Link>
              <Link href="/posts/purchase-plus-improvements" >Purchase Plus Improvements</Link>
              <Link href="/posts/debt-consolidation" >Debt Consolidation</Link>
            </div>
          </div>
          <Link href="/faq" >FAQ</Link>
          <Link href="/contact" >Contact</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar;