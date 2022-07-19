import FlexColumnDiv from './FlexColumnDiv'
import {memo, forwardRef, useRef, useImperativeHandle} from 'react'
import clsx from 'clsx'
import Button from 'react-bootstrap/Button'
function Pause( {response, isStoped, setIsStoped, setPopUp}:{response:boolean, isStoped:boolean, setIsStoped:any, setPopUp:any}, ref:any):JSX.Element
{
    const pauseRef = useRef<HTMLButtonElement>(null)
    function handlePause() {
        pauseRef!.current!.innerHTML = (pauseRef!.current!.innerHTML==="Pause") ? "Continue" : "Pause"
        setIsStoped((prev:boolean)=>!prev)
        setPopUp((prev:boolean)=>!prev)
      }
    useImperativeHandle(ref,()=>{
      return{
        handlePause
      }
    })
    return (
        <FlexColumnDiv style={{top:0,right:response?-40:-80}} specialClassName="position-absolute">
        <Button ref={pauseRef} onClick={handlePause} style={{top:0}}
        className={
          clsx('position-absolute',
          {'btn-success':isStoped}
          )} >Pause</Button>
        </FlexColumnDiv>
    )
}
export default memo(forwardRef(Pause))