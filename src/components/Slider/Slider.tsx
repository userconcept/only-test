import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ButtonSwiper from '../ButtonSwiper/ButtonSwiper.tsx';
import Title from '../Title/Title.tsx';

import type { EventType } from '../../types/Event.types.ts';

import IconArrowLeft from '../../assets/images/icon_arrow_left.svg?react';
import IconArrowRight from '../../assets/images/icon_arrow_right.svg?react';

import styles from './Slider.module.scss';

type Props = {
    className: string;
    data: EventType[];
}

function Slider({
    className,
    data
}: Props) {
    return (
        <div className={clsx(
            styles.Slider,
            className
        )}>
            <div className={styles.Slider__buttons}>
                <ButtonSwiper
                    className={clsx(
                        styles.Slider__ButtonSwiper,
                        styles.Slider__ButtonSwiper_left,
                        'swiper-button-prev'
                    )}
                    text="Влево"
                >
                    <IconArrowLeft />
                </ButtonSwiper>
                <ButtonSwiper
                    className={clsx(
                        styles.Slider__ButtonSwiper,
                        styles.Slider__ButtonSwiper_right,
                        'swiper-button-next'
                    )}
                    text="Вправо"
                >
                    <IconArrowRight />
                </ButtonSwiper>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={false}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 25
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 80
                    }
                }}
                className={styles.Slider__list}
            >
                {data.map((item: EventType) => (
                    <SwiperSlide
                        className={styles.Slider__item}
                        key={item.id}
                    >
                        <Title
                            className={styles.Slider__itemTitle}
                            tag="h3"
                            size="small"
                        >
                            {item.title}
                        </Title>
                        <p className={styles.Slider__text}>{item.text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
