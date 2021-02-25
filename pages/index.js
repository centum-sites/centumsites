import currentUser from '../utils/currentUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import CarouselSpecialties from '../components/CarouselSpecialties';
import GoogleMap from '../components/GoogleMap';
import Markdown from '../components/Markdown';
import style from '../styles/Home.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';

const Home = (props) => {

  const page = props.page;
  const user = props.user[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} siteTitle={`${user.firstname} ${user.lastname} - Mortgage Broker`} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />
      <figure className={style.ax_banner}>
        <div className={style.ax_container}>
          <div className={style.ax_banner_info}>
            <h2>{page.banner.title}</h2>
            <p>{page.banner.subtitle}</p>
            <Button sizing="large" color="highlight" isLink linkPath={user.applicationLink} label="Apply Now" blank />
          </div>
        </div>
      </figure>
      <section className={style.ax_text_section}>
        <div className={style.ax_container}>
          <h2>Hi. We're so glad you stopped by!</h2>
          <Markdown>{page.intro.description}</Markdown>
        </div>
      </section>
      <section className={`${style.ax_specialties} ${style.ax_container}`}>
        <h2>Our Specialties</h2>
        <div className={style.ax_container}>
          <CarouselSpecialties carouselData={page.features} appLink={user.applicationLink} />
        </div>
      </section>
      <section className={style.ax_calculator}>
        <div className={style.ax_container}>
          <div className={style.ax_calculator_cta}>
            <div>
              <h3>{page.calculator.title}</h3>
              <Button sizing="large" color="highlight" isLink linkPath="/mortgage-calculators" label="Go To Calculators" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.ax_presentation}>
        <div className={style.ax_container}>
          <div className={style.ax_presentation_text}>
            <h3>{page.presentation.title}</h3>
            <Markdown>{page.presentation.description}</Markdown>
            <p>That's the {user.brokerage} advantage!</p>
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
      <section className={style.ax_map}>
        <div className={style.ax_container}>
          <h3>{page.map.title}</h3>
          <GoogleMap embedSrc={user.mapEmbedSrc} />
          <div className={style.ax_map_address}>
            <p>{user.address}</p>
          </div>
        </div>
      </section>
      <Footer
        logo={user.logoFooter.url}
        email={user.email}
        address={user.address}
        phone={user.phone}
        fax={user.fax ? user.fax : false}
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

  const data = axios.get(`http://localhost:1338/page-home`).then(res => {
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
