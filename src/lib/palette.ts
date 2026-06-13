// Single source of truth is :root in static/css/global.css. Canvas 2d and
// SVG/JS-driven fills can't resolve var(--x), so they read the same values
// from the cascade here. Browser-only (getComputedStyle); call from onMount.

export type CKey =
    | "c1" | "c2" | "c3" | "c4" | "c5"
    | "ok" | "no"
    | "w" | "g1" | "g2" | "g3" | "k1" | "k2";

export const KEYS: CKey[] = [
    "c1", "c2", "c3", "c4", "c5", "ok", "no", "w", "g1", "g2", "g3", "k1", "k2",
];

// theme colors only, in order — the categorical cycle for series/states
export const SERIES: CKey[] = [ "c1", "c2", "c3", "c4", "c5", "g3", "g2", "g1" ];

let cache: Record<CKey, string> | null = null;

export function palette(): Record<CKey, string> {
    if ( cache ) return cache;
    const s = getComputedStyle( document.documentElement );
    cache = Object.fromEntries(
        KEYS.map( ( k ) => [ k, s.getPropertyValue( "--" + k ).trim() ] ),
    ) as Record<CKey, string>;
    return cache;
}

// one palette color, optionally with alpha (0..1) appended as #rrggbbaa
export function ck ( k: CKey, alpha = 1 ): string {
    const hex = palette()[ k ];
    if ( alpha >= 1 ) return hex;
    const a = Math.round( Math.max( 0, alpha ) * 255 ).toString( 16 ).padStart( 2, "0" );
    return hex + a;
}

// categorical color for index i, cycling the SERIES order
export function cat ( i: number ): string {
    return palette()[ SERIES[ ( ( i % SERIES.length ) + SERIES.length ) % SERIES.length ] ];
}
