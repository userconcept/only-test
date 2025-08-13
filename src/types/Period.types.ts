import type { EventType } from './Event.types.ts';

export type PeriodType = {
    id: string;
    name: string;
    start: number;
    end: number;
    events: EventType[];
}
