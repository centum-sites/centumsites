import axios from 'axios';

const fetchStaticPage = page => {

  const pageContent = async function getStaticProps() {

    const data = axios.get(`https://axiomapi.herokuapp.com/page-${page}`).then(res => {

      let page = res.data;

      return {
        props: { page },
        revalidate: 1
      }

    }).catch(err => {
      console.log(err)
    });

    return data;
  }

  return pageContent();
};

export default fetchStaticPage;