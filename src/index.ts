export type Vector<T> = T[];

export const vmap = <T, U, V>(
  f: (t: T, u: U) => V,
) => (
  ts: Vector<T>,
) => (
  us: Vector<U>,
) =>
  ts.map((t, d) => f(t, us[d]))
;

export const vadd = vmap((a: number, b: number) => a + b);
export const vsub = vmap((a: number, b: number) => a - b);
export const vmul = vmap((a: number, b: number) => a * b);
export const vdiv = vmap((a: number, b: number) => a / b);
export const vsquare = (v: Vector<number>) => v.map(x => x * x);
export const vsum = (v: Vector<number>) => v.reduce((sum, x) => x + sum, 0);
export const vproduct = (v: Vector<number>) => v.reduce((product, x) => x * product, 1);
