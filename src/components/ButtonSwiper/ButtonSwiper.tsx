import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './ButtonSwiper.module.scss';

type Props = {
    className: string;
    text: string
}

function ButtonSwiper({
    className,
    text,
    children
}: PropsWithChildren<Props>) {
    return (
        <div
            className={clsx(
                styles.ButtonSwiper,
                className
            )}
        >
            {children}
            <span className={styles.ButtonSwiper__text}>{text}</span>
        </div>
    );
}

export default ButtonSwiper;
