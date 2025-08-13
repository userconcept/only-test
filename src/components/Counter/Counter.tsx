import type { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import ButtonArrow from '../ButtonArrow/ButtonArrow.tsx';

import IconArrowLeft from '../../assets/images/icon_arrow_left.svg?react';
import IconArrowRight from '../../assets/images/icon_arrow_right.svg?react';

import styles from './Counter.module.scss';

type Props = {
    className: string;
    quantity: number;
    current: string;
    setPeriod: Dispatch<SetStateAction<number>>;
}

function Counter({
    className,
    quantity,
    current,
    setPeriod
}: Props) {
    return (
        <div
            className={clsx(
                styles.Counter,
                className
            )}
        >
            <div className={styles.Counter__numbers}>
                <span className={styles.Counter__number}>
                    {current}
                </span>
                <span className={styles.Counter__separator}>/</span>
                <span className={styles.Counter__number}>
                    {quantity}
                </span>
            </div>
            <div className={styles.Counter__buttons}>
                <ButtonArrow
                    className={clsx(
                        styles.Counter__ButtonArrow,
                        styles.Counter__ButtonArrow_left,
                        +current === 1 && styles.Counter__ButtonArrow_disabled
                    )}
                    text="Влево"
                    onClick={() => setPeriod(
                        (current) => {
                            if ((current - 1) >= 0) {
                                return current - 1;
                            } else {
                                return current;
                            }
                        }
                    )}
                >
                    <IconArrowLeft />
                </ButtonArrow>
                <ButtonArrow
                    className={clsx(
                        styles.Counter__ButtonArrow,
                        styles.Counter__ButtonArrow_right,
                        +current === quantity && styles.Counter__ButtonArrow_disabled
                    )}
                    text="Вправо"
                    onClick={() => setPeriod(
                        (current) => {
                            if ((current + 1) === quantity) {
                                return current;
                            } else {
                                return current + 1;
                            }
                        }
                    )}
                >
                    <IconArrowRight />
                </ButtonArrow>
            </div>
        </div>
    );
}

export default Counter;
