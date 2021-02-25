const GoogleMap = props => {
  return (
    <iframe src={props.embedSrc} width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
  )
}

//https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7093.564827594488!2d-114.09729984271256!3d51.05393908409718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fea1ba82deb%3A0xa52b9002ec27e690!2sAxiom%20Mortgage%20Solutions!5e0!3m2!1sen!2sca!4v1607994365135!5m2!1sen!2sca

export default GoogleMap;