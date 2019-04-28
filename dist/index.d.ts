export declare type Vector<T> = T[];
export declare const vmap: <T, U, V>(f: (t: T, u: U) => V) => (ts: T[]) => (us: U[]) => V[];
export declare const vadd: (ts: number[]) => (us: number[]) => number[];
export declare const vsub: (ts: number[]) => (us: number[]) => number[];
export declare const vmul: (ts: number[]) => (us: number[]) => number[];
export declare const vdiv: (ts: number[]) => (us: number[]) => number[];
export declare const vsquare: (v: number[]) => number[];
export declare const vsum: (v: number[]) => number;
export declare const vproduct: (v: number[]) => number;
