import currentUser from '../../utils/currentUser';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import style from '../../styles/Posts.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';

const Post = props => {

  const calculator = props.calculators[0];
  const user = props.user[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar faviconURL={user.siteIcon.url} logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />

      <section className={style.ax_post}>
        <div className={style.ax_container}>
          <h1>{calculator.pagetitle}</h1>

          <article className={style.ax_post_content}>
            <iframe src={calculator.pagelink} className={style.ax_iframe}></iframe>
            <div className={style.ax_post_cta}>
              <Button sizing="large" color="highlight" isLink linkPath={user.applicationLink} label="Apply Now" blank />
            </div>
          </article>
          <aside className={style.ax_sidebar}>

          </aside>
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

export async function getStaticPaths() {
  const res = await fetch('https://centumapi.herokuapp.com/calculators')
  const calculators = await res.json()

  const paths = calculators.map((calculator) => `/calculators/${calculator.slug}`)
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const data = axios.get(`https://centumapi.herokuapp.com/calculators?slug_eq=${params.slug}`).then(res => {
    return res.data;
  }).then(async calculators => {
    const { data } = await axios.get(`https://centumapi.herokuapp.com/users?email_eq=${currentUser.email}`);
    const user = data;

    return {
      props: {
        calculators,
        user
      }
    }

  }).catch(error => {
    console.log(error)
  });

  return data;
}




export default Post;
