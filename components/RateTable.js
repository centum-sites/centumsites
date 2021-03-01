const RateTable = props => {

  console.log('MY RATES: ', props.rates[0].tableitem);
  const items = props.rates[0].tableitem;

  const RateItems = items.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.years}</td>
        <td>{item.ourRate}</td>
        <td>{item.bankRate}</td>
      </tr>
    )
  })

  const TableItems = RateItems;

  return (
    <table>
      <thead>
        <tr>
          <th>Term</th>
          <th>Our Rate</th>
          <th>Bank Rate</th>
        </tr>
      </thead>
      <tbody>
        {TableItems}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">
            <p>Updated: Feb 26</p>
            <small>
              Rates may vary between geographic regions and the posted rates on this website may not be available in your area. Please contact your local CENTUM office for more details.
        </small>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export const getStaticProps = async () => {

  const data = await axios.get(`http://localhost:1338/rates`).then(res => {
    console.log('RES: ', res)
    const rates = res.data;
    return {
      revalidate: 1,
      props: {
        rates
      }
    }

  }).catch(error => {
    console.log(error)
  });

  return data;

}

export default RateTable;