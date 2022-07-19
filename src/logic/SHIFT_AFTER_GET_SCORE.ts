import {width_number_squares, height_number_squares} from '../constances/BG_SIZES'
import {NO_COLOR} from '../constances/BLOCKS_COLORS'

function SHIFT_AFTER_GET_SCORE(array:string[],layerIndex:number[]):void
{
    let size = layerIndex.length
    let deletePart:string[] =  []
    let remainPart:string[] = []
    let solution:string[] = []
        // let startPart:string[] = array.slice(0,layerIndex[0]*width_number_squares)
        // let deletePart:string[] = array.slice(layerIndex[0]*width_number_squares,(layerIndex[size-1]+1)*width_number_squares)
        // let endPart:string[] = array.slice((layerIndex[size-1]+1)*width_number_squares)
        // // Shifting the layer
    
        // // 1. fullfill deletePart with NO_COLOR
        // for(let i = 0; i<deletePart.length; i++)
        // {
        //     deletePart[i] = NO_COLOR
        // }
    
        // // 2. concat time   
        // solution = deletePart.concat(startPart,endPart)
        // for(let i = 0; i<array.length; i++)
        // {
        //     array[i]=solution[i]
        // }


    // 1. fullfill deletePart with NO_COLOR
        for(let i = 0; i<size*width_number_squares; i++)
        {
            deletePart[i] = NO_COLOR
        }
    // 2. get the remaining array
    let k = 0
        for(let i = 0; i<height_number_squares; i++)
        {
            let forDel = false
            layerIndex.forEach(part => {if(part===i) forDel = true})
            if(!forDel)
            for(let j=width_number_squares*i; j<width_number_squares*i+10;j++)
            {
                remainPart[k++]=array[j]
            }
        }
        // 3. get solution
        solution = deletePart.concat(remainPart)
        for(let i = 0; i<array.length; i++)
        {
                array[i]=solution[i]
        }
}

export default SHIFT_AFTER_GET_SCORE