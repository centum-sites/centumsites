import currentUser from '../utils/currentUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Markdown from '../components/Markdown';
import CardWithIcon from '../components/CardWithIcon';
import style from '../styles/Calculators.module.scss';
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

      <section className={style.ax_calculators}>
        <div className={style.ax_container}>
          <h1>{page.pagetitle}</h1>
          <Markdown>
            {page.pagecontent}
          </Markdown>

          <div className={style.ax_calculators_list}>
            <CardWithIcon icon="./assets/calculator.svg" title="Mortgage Loan"
              description="Use this calculator to generate an amortization schedule for your current mortgage. Quickly see how much interest you will pay, and your principal balances."
              hasButton isLink linkUrl="/calculators/mortgage-loan" buttonLabel="Go To Calculator" />

            <CardWithIcon icon="./assets/compare.svg" title="Compare Mortgage"
              description="Determining which mortgage provides you with the best value involves more than simply comparing monthly payments."
              hasButton isLink linkUrl="/calculators/compare-mortgage" buttonLabel="Go To Calculator" />

            <CardWithIcon icon="./assets/qualifier.svg" title="Mortgage Qualifier"
              description="The first steps in buying a house are ensuring you can afford to pay at least 5% of the purchase price of the home as a down payment and determining your budget."
              hasButton isLink linkUrl="/calculators/mortgage-qualifier" buttonLabel="Go To Calculator" />

            <CardWithIcon icon="./assets/payoff.svg" title="Mortgage Payoff"
              description="How much interest can you save by increasing your mortgage payment? View the report to see a complete amortization payment schedule, and how much you can save on your mortgage."
              hasButton isLink linkUrl="/calculators/mortgage-payoff" buttonLabel="Go To Calculator" />

            <CardWithIcon icon="./assets/refinance.svg" title="Mortgage Refinance"
              description="How much interest can you save if you refinance your mortgage? Enter the specifics about your current mortgage, along with new loan amortization, rate and closing costs."
              hasButton isLink linkUrl="/calculators/mortgage-refinance" buttonLabel="Go To Calculator" />


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

  const data = axios.get(`https://centumapi.herokuapp.com//page-calculators`).then(res => {
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

export default Home;
