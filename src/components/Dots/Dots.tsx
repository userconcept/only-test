import type { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import styles from './Dots.module.scss';

type Props = {
    className: string;
    quantity: number;
    current: string;
    setPeriod: Dispatch<SetStateAction<number>>;
}

function Dots({
    className,
    quantity,
    current,
    setPeriod
}: Props) {
    return (
        <div
            className={clsx(
                styles.Dots,
                className
            )}
        >
            {Array.from({ length: quantity }).map((_, i) => (
                <div
                    className={clsx(
                        styles.Dots__item,
                        ++i === +current && styles.Dots__item_active
                    )}
                    key={i}
                    onClick={() => setPeriod(--i)}
                >
                    {i}
                </div>
            ))}
        </div>
    );
}

export default Dots;
