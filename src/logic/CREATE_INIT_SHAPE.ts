import POINT from '../type/POINT_TYPE'
import SHAPES from '../type/SHAPES_TYPE'
function CREATE_INIT_SHAPE(type:string,mainPoint:POINT,state:number):POINT[] {
    const I_shape = [
        [{x:mainPoint.x,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y}
            ,{x:mainPoint.x+2,y:mainPoint.y},{x:mainPoint.x+3,y:mainPoint.y}],
        [{x:mainPoint.x,y:mainPoint.y},{x:mainPoint.x,y:mainPoint.y+1}
            ,{x:mainPoint.x,y:mainPoint.y+2},{x:mainPoint.x,y:mainPoint.y+3}],
    ]
    const L_shape = [
        [
            {x:mainPoint.x+2,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y}
            ,{x:mainPoint.x,y:mainPoint.y},{x:mainPoint.x,y:mainPoint.y+1}
        ],
        [
            {x:mainPoint.x+1,y:mainPoint.y+2},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x,y:mainPoint.y}
        ],
        [
            {x:mainPoint.x,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x+2,y:mainPoint.y+1},{x:mainPoint.x+2,y:mainPoint.y}
        ],
        [
            {x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x+1,y:mainPoint.y+2},{x:mainPoint.x+2,y:mainPoint.y+2}
        ],
    ]
    const L_shape_reverse = [
        [
            {x:mainPoint.x+2,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x,y:mainPoint.y+1},{x:mainPoint.x,y:mainPoint.y}
        ],
        [
            {x:mainPoint.x+1,y:mainPoint.y+2},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x+2,y:mainPoint.y}
        ],
        [
            {x:mainPoint.x,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y}
            ,{x:mainPoint.x+2,y:mainPoint.y},{x:mainPoint.x+2,y:mainPoint.y+1}
        ],
        [
            {x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x+1,y:mainPoint.y+2},{x:mainPoint.x,y:mainPoint.y+2}
        ],
    ]
    
    const square_shape = [
        [
            {x:mainPoint.x,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y}
            ,{x:mainPoint.x,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y+1}
        ]
    ]
    
    const Z_shape = [
        [
            {x:mainPoint.x,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y}
            ,{x:mainPoint.x+1,y:mainPoint.y+1},{x:mainPoint.x+2,y:mainPoint.y+1}
        ],
        [
            {x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x,y:mainPoint.y+1},{x:mainPoint.x,y:mainPoint.y+2}
        ]
    ]
    
    const Z_shape_reverse = [
        [
            {x:mainPoint.x,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x+2,y:mainPoint.y}
        ],
        [
            {x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x+1,y:mainPoint.y+1}
            ,{x:mainPoint.x+2,y:mainPoint.y+1},{x:mainPoint.x+2,y:mainPoint.y+2}
        ]
    ]

    const Tank_shape = [
        [
            {x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x,y:mainPoint.y+1}
            ,{x:mainPoint.x+1,y:mainPoint.y+1},{x:mainPoint.x+2,y:mainPoint.y+1}
        ],
        [
            {x:mainPoint.x+2,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y}
            ,{x:mainPoint.x+1,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y+2}
        ],
        [
            {x:mainPoint.x+1,y:mainPoint.y+1},{x:mainPoint.x+2,y:mainPoint.y}
            ,{x:mainPoint.x+1,y:mainPoint.y},{x:mainPoint.x,y:mainPoint.y}
        ],
        [
            {x:mainPoint.x,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y+2}
            ,{x:mainPoint.x+1,y:mainPoint.y+1},{x:mainPoint.x+1,y:mainPoint.y}
        ],
    ]

    const BLOCK_SHAPES:SHAPES = {
        "I_shape":I_shape,
        "L_shape":L_shape,
        "L_shape_reverse":L_shape_reverse,
        "Z_shape":Z_shape,
        "Z_shape_reverse":Z_shape_reverse,
        "square_shape":square_shape,
        "Tank_shape":Tank_shape
    }

    const current_shape = BLOCK_SHAPES[type]
    return current_shape[state]
}

export default CREATE_INIT_SHAPE