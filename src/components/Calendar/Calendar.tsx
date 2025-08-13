import { useState } from 'react';
import clsx from 'clsx';

import Round from '../Round/Round.tsx';
import Title from '../Title/Title.tsx';
import Period from '../Period/Period.tsx';
import Slider from '../Slider/Slider.tsx';
import Counter from '../Counter/Counter.tsx';
import Dots from '../Dots/Dots.tsx';

import { Periods } from '../../data/Periods.data.ts';

import styles from './Calendar.module.scss';

function Calendar() {
    const [period, setPeriod] = useState<number>(0);

    return (
        <div className={styles.Calendar}>
            <Round
                className={styles.Calendar__Round}
                title={Periods[period].name}
                dots={Periods.length}
                period={period}
                setPeriod={setPeriod}
            />
            <Title
                className={clsx(
                    styles.Calendar__Title,
                    styles.Calendar__Title_large
                )}
                tag="h1"
                size="large"
            >
                Исторические даты
            </Title>
            <Period
                className={styles.Calendar__Period}
                start={Periods[period].start}
                end={Periods[period].end}
            />
            <Title
                className={clsx(
                    styles.Calendar__Title,
                    styles.Calendar__Title_middle
                )}
                tag="h2"
                size="middle"
            >
                {Periods[period].name}
            </Title>
            <Slider
                key={period}
                className={styles.Calendar__Slider}
                data={Periods[period].events}
            />
            <Counter
                className={styles.Calendar__Counter}
                quantity={Periods.length}
                current={Periods[period].id}
                setPeriod={setPeriod}
            />
            <Dots
                className={styles.Calendar__Dots}
                quantity={Periods.length}
                current={Periods[period].id}
                setPeriod={setPeriod}
            />
        </div>
    );
}

export default Calendar;
