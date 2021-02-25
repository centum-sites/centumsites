import currentUser from '../utils/currentUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import style from '../styles/Faq.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';

const Faq = props => {

  const page = props.page;
  const user = props.user[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />
      <section className={style.ax_faq}>
        <div className={style.ax_container}>
          <h1>{page.title}</h1>

          <div className={style.ax_faq_list}>
            {page.questionList.map((question, index) => {
              return (
                <div ref={question} className={`${style.ax_faq_item} ${style.ax_faq_item_open}`} key={index}>
                  <header><h3>{question.question}</h3></header>
                  <article>{question.answer}</article>
                </div>
              )
            })}
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

  const data = axios.get(`https://centumapi.herokuapp.com//page-faq`).then(res => {
    return res.data;
  }).then(async page => {
    const { data } = await axios.get(`https://centumapi.herokuapp.com//users?email_eq=${currentUser.email}`);
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

export default Faq;
