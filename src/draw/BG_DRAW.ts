import {BG_WIDTH, BG_HEIGHT, BG_BORDER_WIDTH
    , BG_LINES_WIDTH, BG_SQUARE_WIDTH, TOTAL_SQUARES
    } 
from '../constances/BG_SIZES'
import {BG_COLOR, BG_BORDER_COLOR, BG_LINES_COLOR} from '../constances/BG_COLORS'
type Coordinates = {
    x:number,
    y:number
}
function BG_DRAW(canvas:HTMLCanvasElement, response:boolean):void {
    // draw backgrounds
    let current_width
    let current_height
    let current_square_width
    if(response)
    {
        current_width = BG_WIDTH/2
        current_height = BG_HEIGHT/2
        current_square_width = BG_SQUARE_WIDTH/2
    }
    else
    {
        current_width = BG_WIDTH
        current_height = BG_HEIGHT
        current_square_width = BG_SQUARE_WIDTH
    }
    canvas.width = current_width+BG_BORDER_WIDTH
    canvas.height = current_height+BG_BORDER_WIDTH
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = BG_COLOR
    ctx.fillRect(0,0,canvas.width,canvas.height)
    // draw border
    ctx.beginPath()
    ctx.lineWidth = BG_BORDER_WIDTH
    ctx.strokeStyle = BG_BORDER_COLOR
    ctx.rect(0,0,canvas.width,canvas.height)
    ctx.stroke()
    // draw square's lines
    for(let i = 0; i < TOTAL_SQUARES; i++)
    {
        ctx.beginPath()
        ctx.lineWidth = BG_LINES_WIDTH
        ctx.strokeStyle = BG_LINES_COLOR
        let newI = i*current_square_width
        let point:Coordinates = {
            x:newI%current_width,
            y:Math.floor(newI/current_width)*current_square_width
        }
        ctx.rect(point.x+BG_BORDER_WIDTH/2,point.y+BG_BORDER_WIDTH/2
        ,current_square_width,current_square_width)
        ctx.stroke()
    }
    
}
export default BG_DRAW
