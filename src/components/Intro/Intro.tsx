import Calendar from '../Calendar/Calendar.tsx';

import styles from './Intro.module.scss';

function Intro() {
    return (
        <section className={styles.Intro}>
            <Calendar />
        </section>
    );
}

export default Intro;
