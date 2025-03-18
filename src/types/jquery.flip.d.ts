interface FlipOptions {
    axis?: 'x' | 'y';
    reverse?: boolean;
    trigger?: string;
    speed?: number;
}

interface JQuery {
    flip(options?: FlipOptions): JQuery;
}
