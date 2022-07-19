import POINT from './POINT_TYPE'
type SHAPES = {
    I_shape:Array<POINT[]>,
    L_shape:Array<POINT[]>,
    L_shape_reverse:Array<POINT[]>,
    Z_shape:Array<POINT[]>,
    Z_shape_reverse:Array<POINT[]>,
    square_shape:Array<POINT[]>,
    [key:string]:Array<POINT[]>
}
export default SHAPES 