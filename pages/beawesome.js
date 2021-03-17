import currentUser from '../utils/currentUser';
import NavbarNaked from '../components/NavbarNaked';
import FooterNaked from '../components/FooterNaked';
import Button from '../components/Button';
import ContactChannels from '../components/ContactChannels';
import Markdown from '../components/Markdown';
import style from '../styles/About.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';

const Home = props => {

  const page = props.page;
  const user = props.user[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavbarNaked logo={user.logoFooter.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email="gord@centum.ca" phone="9998887777" showWhatsAppButton={false} />

      <section className={`${style.ax_presentation} ${style.ax_about}`}>
        <div className={style.ax_container}>
          <div className={style.ax_presentation_text_fake}>
            <h1 style={{ fontSize: '28px', color: '##910023' }}>1. Working with Centum makes me better looking</h1>

          </div>
          <div className={style.ax_presentation_photo_fake} >
            <img src="/assets/gord.png" alt="Gord Ross" />
          </div>
        </div>
      </section>
      <FooterNaked
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

  const data = axios.get(`https://centumapi.herokuapp.com/page-about`).then(res => {
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

export default Home;
