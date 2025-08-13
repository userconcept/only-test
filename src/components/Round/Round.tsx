import type { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

import styles from './Round.module.scss';

type Props = {
    className: string;
    title: string;
    dots: number;
    period: number;
    setPeriod: Dispatch<SetStateAction<number>>;
}

function Round({
    className,
    title,
    dots,
    period,
    setPeriod
}: Props) {
    const step = 360 / dots;

    const initialRotation = -45;

    const rotation = initialRotation - step * period;

    const rotateToPeriod = (period: number) => {
        setPeriod(period);
    };

    return (
        <div className={clsx(
            styles.Round,
            className
        )}>
            <div className={styles.Round__tooltip}>{title}</div>
            <div
                className={styles.Round__rotate}
                style={{
                    transform: `rotate(${rotation}deg)`
                }}>
                {Array.from({ length: dots }).map((_, i) => {
                    const angle = step * i;
                    const numberRotation = -(rotation + angle);

                    return <div
                        key={i}
                        className={clsx(
                            styles.Round__dot,
                            i === period && styles.Round__dot_active
                        )}
                        style={{
                            "--i": i,
                            "--dots": dots,
                        } as React.CSSProperties}
                        onClick={() => rotateToPeriod(i)}
                    >
                        <span
                            className={styles.Round__number}
                            style={{
                                transform: `rotate(${numberRotation}deg)`
                            }}
                        >
                            {i + 1}
                        </span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Round;
