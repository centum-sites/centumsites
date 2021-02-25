import currentUser from '../utils/currentUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
      <Navbar logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />

      <section className={`${style.ax_presentation} ${style.ax_about}`}>
        <div className={style.ax_container}>
          <div className={style.ax_presentation_text}>
            <h1>{user.bioTitle}</h1>
            <Markdown>{user.bio}</Markdown>
            <Button sizing="large" color="highlight" isLink linkPath={user.applicationLink} label="Apply Now" blank />
          </div>
          <div className={style.ax_presentation_photo}>
            <img src={user.photo.url} alt={user.firstname} />
            <h3>{user.firstname} {user.lastname}</h3>
            <p>{user.position}</p>
            <p>{user.license ? user.license : ''}</p>
          </div>
        </div>
      </section>
      <section className={style.ax_about_contact}>
        <div className={style.ax_container}>
          <h3>{page.contact.subtitle}</h3>
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

  const data = axios.get(`http://localhost:1338/page-about`).then(res => {
    return res.data;
  }).then(async page => {
    const { data } = await axios.get(`http://localhost:1338/users?email_eq=${currentUser.email}`);
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
