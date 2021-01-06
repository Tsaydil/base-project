import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './swiper-style.module.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const swiper =  (props) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {props.products.map((product) => (
                <SwiperSlide>
                    <h3>{product.title}</h3>
                    {product.images[0] ? <img className={styles.img_style} src={product.images[0].src} /> : <p>"No Image!"</p>}
                </SwiperSlide>
            ))}




            {/*<SwiperSlide><h3>Slide 1</h3></SwiperSlide>
            <SwiperSlide><h3>Slide 2</h3></SwiperSlide>
            <SwiperSlide><h3>Slide 3</h3></SwiperSlide>
            <SwiperSlide><h3>Slide 4</h3></SwiperSlide>*/}
        </Swiper>
    );
};

export default swiper;


