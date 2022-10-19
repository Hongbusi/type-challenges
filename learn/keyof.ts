// https://ts.yayujs.com/handbook/KeyofTypeOperator.html

interface Point { x: number; y: number }
type P = keyof Point // 'x' | 'y'

interface Arrayish { [n: number]: unknown }
type A = keyof Arrayish // number

interface Mapish {[k: string]: boolean}
type M = keyof Mapish // string | number
