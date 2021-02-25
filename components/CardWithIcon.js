import style from '../styles/CardWithIcon.module.scss';
import Button from './Button';

const CardWithIcon = props => {
  return (
    <div className={`${props.cardWide ? style.ax_card_wide : style.ax_card_vertical}`}>
      <div className={`${style.ax_card_with_icon}`}>
        <div className={style.ax_card_icon}>
          <img src={props.icon} />
        </div>
        <div className={style.ax_card_body}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>

        {props.hasButton ? <Button sizing="small" color="highlight" isLink linkPath={props.linkUrl} label={props.buttonLabel} blank={props.openInBlank} /> : ''}
      </div>
    </div>
  )
}

export default CardWithIcon;