import Link from 'next/link';
import style from '../styles/Footer.module.scss';


const Footer = props => {

  const formatPhone = phone => {
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  }

  const formatedPhone = formatPhone(props.phone);


  const faxNumber = () => {

    if (props.fax) {
      const formatedFax = formatPhone(props.fax);
      return (
        <div className={style.ax_footer_contact}>
          <img src="/assets/fax.svg" />
          <div>
            <h3>Fax</h3>
            <p>{formatedFax}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <footer className={style.ax_footer}>
      <div className={style.ax_container}>
        <div className={style.ax_footer_content}>
          <div className={style.ax_footer_logo}>
            <img src={props.logo} alt={props.brokerage} />
          </div>

          <div>
            <div className={style.ax_footer_contact}>
              <img src="/assets/paper-plane.svg" />
              <div>
                <h3>Email</h3>
                <p>{props.email}</p>
              </div>
            </div>

            <div className={style.ax_footer_contact}>
              <img src="/assets/mobile-phone.svg" />
              <div>
                <h3>Phone</h3>
                <p>{formatedPhone}</p>
              </div>
            </div>

            {faxNumber()}

            <div className={style.ax_footer_contact}>
              <img src="/assets/location-pin.svg" />
              <div>
                <h3>Address</h3>
                <p>{props.address}</p>
              </div>
            </div>
          </div>

          <div className={style.ax_footer_social}>
            {props.facebook ? <Link href={props.facebook}><a><img src="/assets/facebook.svg" alt="facebook" /> facebook</a></Link> : ''}
            {props.instagram ? <Link href={props.instagram}><a><img src="/assets/instagram.svg" alt="instagram" /> instagram</a></Link> : ''}
            {props.linkedin ? <Link href={props.linkedin}><a><img src="/assets/linkedin.svg" alt="linkedin" /> linkedin</a></Link> : ''}
            {props.twitter ? <Link href={props.twitter}><a><img src="/assets/twitter.svg" alt="twitter" /> twitter</a></Link> : ''}
            {props.youtube ? <Link href={props.youtube}><a><img src="/assets/youtube.svg" alt="youtube" /> youtube</a></Link> : ''}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;