import FlexColumnDiv from './FlexColumnDiv'
import {memo, forwardRef, useRef, useImperativeHandle} from 'react'
function Score(props:any, ref:any):JSX.Element
{
    const scoreRef = useRef<HTMLHeadingElement>(null)
    useImperativeHandle(ref,()=>{
        return {
            setScore(score:string){
                scoreRef!.current!.textContent = score
            },
            getScore()
            {
                return scoreRef!.current!.textContent 
            }
        }
    })
    return (
        <FlexColumnDiv specialClassName='rounded border-primary position-absolute'
        style={{ width:props.response?50:100, height:props.response?50:100, backgroundColor:"white", top:0, left:props.response?-65:-150, border:"3px solid"}}
        >
        <h3 className = 'text-center text-primary' style={{fontSize:props.response?15:"", paddingTop:5}}>Score</h3>
        <h3 className = 'text-center text-primary' style={{fontSize:props.response?15:""}}
        ref={scoreRef}
        ></h3>
        </FlexColumnDiv>
    )
}
export default memo(forwardRef(Score))