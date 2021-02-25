
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import Image from 'next/image'
import Button from '../components/Button'; import 'pure-react-carousel/dist/react-carousel.es.css';
import style from '../styles/Carousel.module.scss';

const CarouselSpecialties = (props) => {
  let carousel = props.carouselData;

  return (
    <div className={style.ax_carousel} >
      <CarouselProvider
        className={style.ax_carousel_dkt}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        visibleSlides={3}
        totalSlides={9}
        infinite={true}
        isPlaying={true}
        isIntrinsicHeight={true}
      >
        <Slider>
          {carousel.map((item, index) => {
            return (
              <Slide index={index} key={index}>
                <img src={item.image.url} alt={item.title} title={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Button sizing="medium" color="highlight" isCentered isLink linkPath={props.appLink} label="Get Started" blank />
              </Slide>
            )
          })}

        </Slider>
        <ButtonBack className={style.ax_back} />
        <ButtonNext className={style.ax_next} />
        <DotGroup className={style.ax_dots} showAsSelectedForCurrentSlideOnly={true} />
      </CarouselProvider>


      <CarouselProvider
        className={style.ax_carousel_tablet}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        visibleSlides={2}
        totalSlides={9}
        infinite={true}
        isPlaying={true}
        isIntrinsicHeight={true}
      >
        <Slider>
          {carousel.map((item, index) => {
            return (
              <Slide index={index} key={index}>
                <img src={item.image.url} alt={item.title} title={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Button sizing="medium" color="highlight" isCentered isLink linkPath={props.appLink} label="Get Started" blank />
              </Slide>
            )
          })}

        </Slider>
      </CarouselProvider>

      <CarouselProvider
        className={style.ax_carousel_mob}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        visibleSlides={1}
        totalSlides={9}
        infinite={true}
        isPlaying={true}
        isIntrinsicHeight={true}
      >
        <Slider>
          {carousel.map((item, index) => {
            return (
              <Slide index={index} key={index}>
                <img src={item.image.url} alt={item.title} title={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Button sizing="medium" color="highlight" isCentered isLink linkPath={props.appLink} label="Get Started" blank />
              </Slide>
            )
          })}

        </Slider>
      </CarouselProvider>
    </div>


  )
}

export default CarouselSpecialties;