import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';

import styles from './Period.module.scss';

type Props = {
    className: string;
    start: number;
    end: number;
}

function Period({
    className,
    start,
    end
}: Props) {
    const startRef = useRef<HTMLDivElement>(null);
    const endRef = useRef<HTMLDivElement>(null);

    const prevStart = useRef(start);
    const prevEnd = useRef(end);

    const animateDigit = (
        el: HTMLElement,
        from: number,
        to: number,
        duration = 0.5
    ) => {
        const obj = { val: from };

        return gsap.to(obj, {
            val: to,
            duration,
            roundProps: 'val',
            onUpdate() {
                el.textContent = obj.val.toString();
            }
        });
    };

    useEffect(() => {
        if (!startRef.current || !endRef.current) return;

        const animateNumber = (
            el: HTMLElement,
            from: number,
            to: number
        ) => {
            const fromStr = from.toString();
            const toStr = to.toString();

            const maxLen = Math.max(fromStr.length, toStr.length);
            const fromPadded = fromStr.padStart(maxLen, '0');
            const toPadded = toStr.padStart(maxLen, '0');

            el.innerHTML = '';

            for (let i = 0; i < maxLen; i++) {
                const span = document.createElement('span');
                span.textContent = fromPadded[i];
                el.appendChild(span);
            }

            for (let i = 0; i < maxLen; i++) {
                const digitEl = el.children[i] as HTMLElement;
                const fromDigit = Number(fromPadded[i]);
                const toDigit = Number(toPadded[i]);

                animateDigit(digitEl, fromDigit, toDigit, 0.5);
            }
        };

        animateNumber(startRef.current, prevStart.current, start);
        animateNumber(endRef.current, prevEnd.current, end);

        prevStart.current = start;
        prevEnd.current = end;
    }, [start, end]);

    return (
        <div className={clsx(
            styles.Period,
            className
        )}>
            <div className={clsx(
                styles.Period__time,
                styles.Period__time_start
            )}
                ref={startRef}
            />
            <div className={clsx(
                styles.Period__time,
                styles.Period__time_end
            )}
                ref={endRef}
            />
        </div>
    );
}

export default Period;
