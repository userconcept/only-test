import { createElement } from 'react';
import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

import styles from './Title.module.scss';

type Props = {
    className?: string;
    tag: "h1" | "h2" | "h3";
    size: "large" | "middle" | "small";
}

function Title({
    className,
    tag,
    size,
    children
}: PropsWithChildren<Props>) {

    const cnGroup = clsx(
        styles.Title,
        styles[`Title_${size}`],
        className
    );

    return createElement(
        `${tag}`,
        { className: cnGroup },
        children
    );
}

export default Title;
