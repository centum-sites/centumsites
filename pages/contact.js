import currentUser from '../utils/currentUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactChannels from '../components/ContactChannels';
import style from '../styles/Contact.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = props => {

  const page = props.page;
  const user = props.user[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar faviconURL={user.siteIcon.url} logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />

      <section className={`${style.ax_presentation} ${style.ax_contact}`}>
        <div className={style.ax_container}>
          <div className={style.ax_presentation_photo}>
            <img src={page.image.url} alt={page.title} />
          </div>
          <div className={style.ax_presentation_text}>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
          </div>
        </div>
      </section>
      <section className={style.ax_contact_contact}>
        <div className={style.ax_container}>
          <ContactChannels address={user.address} phone={user.phone} email={user.email} />
        </div>
      </section>
      <Footer
        logo={user.logoFooter.url}
        email={user.email}
        address={user.address}
        fax={user.fax ? user.fax : false}
        phone={user.phone}
        facebook={user.facebook}
        instagram={user.instagram}
        twitter={user.twitter}
        linkedin={user.linkedin}
        youtube={user.youtube}
      />
    </motion.div>
  )
}


export const getStaticProps = async () => {

  const data = axios.get(`https://centumapi.herokuapp.com/page-contact`).then(res => {
    return res.data;
  }).then(async page => {
    const { data } = await axios.get(`https://centumapi.herokuapp.com/users?email_eq=${currentUser.email}`);
    const user = data;

    return {
      revalidate: 1,
      props: {
        page,
        user
      }
    }

  }).catch(error => {
    console.log(error)
  });

  return data;

}

export default Contact;
