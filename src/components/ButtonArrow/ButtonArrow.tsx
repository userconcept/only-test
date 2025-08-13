import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './ButtonArrow.module.scss';

type Props = {
    className: string;
    text: string
    onClick: () => void;
}

function ButtonArrow({
    className,
    text,
    onClick,
    children
}: PropsWithChildren<Props>) {
    return (
        <div
            className={clsx(
                styles.ButtonArrow,
                className
            )}
            onClick={onClick}
        >
            {children}
            <span className={styles.ButtonArrow__text}>
                {text}
            </span>
        </div>
    );
}

export default ButtonArrow;
