import style from '../styles/ContactChannels.module.scss';
import Button from './Button';

const ContactChannels = props => {

  const formatPhone = () => {
    const phone = props.phone;
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  }

  const formatedPhone = formatPhone();

  return (
    <>
      <div className={style.ax_contact_channels}>
        <div className={style.ax_channel}>
          <div className={style.ax_channel_icon}>
            <img src="/assets/paper-plane.svg" />
          </div>
          <h3>Email</h3>
          <p>{props.email}</p>
          <Button sizing="small" color="highlight" isLink linkPath={`mailto:${props.email}`} label="Send me a message" blank />
        </div>

        <div className={style.ax_channel}>
          <div className={style.ax_channel_icon}>
            <img src="/assets/mobile-phone.svg" />
          </div>

          <h3>Phone</h3>
          <p>{formatedPhone}</p>
          <Button sizing="small" color="highlight" isLink linkPath={`tel:${props.phone}`} label="Call me now" blank />

        </div>

        <div className={style.ax_channel}>
          <div className={style.ax_channel_icon}>
            <img src="/assets/location-pin.svg" />
          </div>

          <h3>Address</h3>
          <p>{props.address}</p>
          <Button sizing="small" color="highlight" isLink linkPath={`https://www.google.com/maps?saddr=My+Location&daddr='${props.address}'`} label="Get Directions" blank />

        </div>
      </div>
    </>
  )
}

export default ContactChannels;