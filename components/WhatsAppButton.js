import style from '../styles/Whatsapp.module.scss';

const WhatsAppButton = props => {
  return (
    <>
      <a href={`https://api.whatsapp.com/send?phone=${props.phone}`} target="_blank" className={style.ax_whatsapp_button}>
        <img src="/assets/whatsapp.svg" alt="Chat in WhatsApp" />
      </a>
    </>
  )
}

export default WhatsAppButton;