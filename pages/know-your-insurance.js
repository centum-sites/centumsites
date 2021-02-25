import currentUser from '../utils/currentUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardWithIcon from '../components/CardWithIcon';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import style from '../styles/MortgageProcess.module.scss';
import axios from 'axios';


const Insurances = props => {

  const page = props.page;
  const user = props.user[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />
      <section className={style.ax_mortgage_process}>
        <div className={style.ax_container}>
          <h1>Know your insurance</h1>
          <div className={style.ax_process_list}>
            <CardWithIcon title="Home (Fire) Insurance" icon="/assets/home.svg" hasButton linkUrl="/posts/home-fire-insurance" buttonLabel="Larn More" openInBlank={false} cardWide={false} />
            <CardWithIcon title="Mortgage Protection Payment" icon="/assets/umbrella.svg" hasButton linkUrl="/posts/mortgage-payment-protection-insurance" buttonLabel="Larn More" openInBlank={false} />
            <CardWithIcon title="Mortgage Default Insurance" icon="/assets/payment.svg" hasButton linkUrl="/posts/mortgage-default-insurance" buttonLabel="Larn More" openInBlank={false} />
          </div>
          <div className={style.ax_process_cta}>
            <h3>{page.ctaTitle}</h3>
            <p>{page.ctaDescription}</p>

            <Button sizing="large" color="highlight" isLink linkPath={user.applicationLink} label="Apply Now" blank />

          </div>
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

  const data = axios.get(`http://localhost:1338/page-mortgage-process`).then(res => {
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

export default Insurances;