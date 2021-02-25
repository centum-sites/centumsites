import axios from 'axios';

const fetchUSer = async function getStaticProps() {

  const data = axios.get(`https://axiomapi.herokuapp.com/users?email_eq=${process.env.NEXT_PUBLIC_USER_EMAIL}`).then(res => {
    let user = res.data;

    console.log('userData: ', user);

    return {
      props: { user },
      revalidate: 1
    }

  }).catch(err => {
    console.log(err)
  });

}

export default fetchUSer;