import {height_number_squares, width_number_squares} from '../constances/BG_SIZES'
import {NO_COLOR} from '../constances/BLOCKS_COLORS'

function CHECK_GET_SCORE(array:string[]):number[]
{
    let solution:number[] = []
    for(let i = 0; i<height_number_squares; i++)
    {
        let layerStart:number = i*width_number_squares
        let layerEnd:number = layerStart+width_number_squares
        for(let j = layerStart; j<layerEnd;j++)
        {
            if(array[j]===NO_COLOR)
            {
                break
            }
            if(j===layerEnd-1 && array[j]!==NO_COLOR) solution.push(i)
        }
    }
    return solution
}

export default CHECK_GET_SCORE