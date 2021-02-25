import currentUser from '../../utils/currentUser';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Markdown from '../../components/Markdown';
import CardWithIcon from '../../components/CardWithIcon';
import style from '../../styles/Posts.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';

const Post = props => {

  const post = props.post[0];
  const user = props.user[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />

      <section className={style.ax_post}>
        <div className={style.ax_container}>
          <h1>{post.pagetitle}</h1>

          <article className={style.ax_post_content}>
            <Markdown>
              {post.content}
            </Markdown>
            <div className={style.ax_cards_list}>
              {
                post.postCards.map((card, index) => {
                  console.log(card.icon.url);
                  return (
                    <CardWithIcon key={index} title={card.title} description={card.description} icon={card.icon.url} cardWide={post.widecards} hasLink={card.url ? true : false} linkUrl={card.url} hasButton={card.url ? true : false} buttonLabel="Learn More" />
                  )
                })
              }
            </div>

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

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1338/site-posts')
  const posts = await res.json()

  const paths = posts.map((post) => `/posts/${post.slug}`)
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const data = axios.get(`http://localhost:1338/site-posts?slug_eq=${params.slug}`).then(res => {
    return res.data;
  }).then(async post => {
    const { data } = await axios.get(`http://localhost:1338/users?email_eq=${currentUser.email}`);
    const user = data;

    return {
      props: {
        post,
        user
      }
    }

  }).catch(error => {
    console.log(error)
  });

  return data;
}




export default Post;
