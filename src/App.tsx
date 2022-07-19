import React, {FC} from 'react';
import {useEffect, useRef, useState, useCallback} from 'react'
import clsx from 'clsx'

import INITIAL_BLOCKS_ARRAY from './variables/INITIAL_BLOCKS_ARRAY'
import INITIAL_BLOCK from './variables/INITIAL_BLOCK';
import SPEED from './constances/SPEED'

import BG_DRAW from './draw/BG_DRAW'
import BLOCKS_DRAW from './draw/BLOCKS_DRAW'
import SET_BLOCK_TO_ARRAY from './logic/SET_BLOCK_TO_ARRAY'
import ERASE_OLD_BLOCK from './logic/ERASE_OLD_BLOCK';
import ROTATE_BLOCK from './logic/ROTATE_BLOCK'
import MOVE_BLOCK_AUTO from './logic/MOVE_BLOCK_AUTO'
import MOVE_BLOCK_MANUALLY from './logic/MOVE_BLOCK_MANUALLY'
import CREATE_BLOCK from './logic/CREATE_BLOCK'
import CHECK_GET_SCORE from './logic/CHECK_GET_SCORE'
import SHIFT_AFTER_GET_SCORE from './logic/SHIFT_AFTER_GET_SCORE';
import * as HANDLE_STOP_BYWALL from './logic/HANDLE_STOP_BYWALL'

import STOP_BYLEFTWALL from './logic/STOP_BYLEFTWALL'
import STOP_BYRIGHTWALL from './logic/STOP_BYRIGHTWALL'
import STOP_BYBOTTOMWALL from './logic/STOP_BYBOTTOMWALL'
import STOP_BYOLDBLOCK from './logic/STOP_BYOLDBLOCK'

import BLOCK from './type/BLOCK_TYPE'

import Popup from './Components/Popup'
import Score from './Components/Score'
import JoyStick from './Components/JoyStick'
import Pause from './Components/Pause'
import SpinButton from './Components/SpinBlock'

import Event_bus from './Components/Event_bus'


function App() {
  // const [array,setArray] = useState(INITIAL_BLOCKS_ARRAY)
  // const [block,setBlock] = useState(INITIAL_BLOCK)

  ///////////////////////////////////////////////////////////////////// normal version
  // const canvasRef = useRef<HTMLCanvasElement>(null)
  // let array = INITIAL_BLOCKS_ARRAY
  // let block = INITIAL_BLOCK
  // let direction:string = ""
  // let score = 0
  // let scoreRef = useRef<HTMLHeadingElement>(null)

  // useEffect(()=>{
  //   // set Init score
  //   scoreRef.current!.textContent = `${score}`
  //   // function handle for event Keydown
    // function handleKeyDown(e:KeyboardEvent)
    // {
    //   direction=e.key
  
    //   ERASE_OLD_BLOCK(array,block)
    //   let testBlock:BLOCK = JSON.parse(JSON.stringify(block))
  
    //   if(direction==='d'||direction==='s'||direction==='a')
    //   {
    //     MOVE_BLOCK_MANUALLY(testBlock,direction)
    //     if(!STOP_BYRIGHTWALL(testBlock)
    //     &&!STOP_BYBOTTOMWALL(testBlock)
    //     &&!STOP_BYLEFTWALL(testBlock))
    //     {
    //       if(!STOP_BYOLDBLOCK(array,testBlock))
    //       {
    //         block=testBlock
    //       }
    //     }
    //   }
    //   else if(e.code==="Space")
    //   {
    //     ROTATE_BLOCK(testBlock)
    //     // Wont stop if is stoped by wall
    //     while(STOP_BYRIGHTWALL(testBlock))
    //     {
    //       HANDLE_STOP_BYWALL.HANDLE_STOP_BYRIGHTWALL(testBlock)
    //     }
    //     while(STOP_BYLEFTWALL(testBlock))
    //     {
    //       HANDLE_STOP_BYWALL.HANDLE_STOP_BYLEFTWALL(testBlock)
    //     }
    //     while(STOP_BYBOTTOMWALL(testBlock))
    //     {
    //       HANDLE_STOP_BYWALL.HANDLE_STOP_BYBOTTOMWALL(testBlock)
    //     }
  
    //     // only stop when stucked at old blocks
    //     if(!STOP_BYOLDBLOCK(array,testBlock))
    //     block=testBlock
    //   }
  
    //   SET_BLOCK_TO_ARRAY(array,block)
    //   BG_DRAW(canvasRef.current!)
    //   BLOCKS_DRAW(array,canvasRef.current!)

    // }
  //   // listen for event key down
  //   window.addEventListener('keydown',handleKeyDown)

  //   // first draw all the initials to the board

  //   BG_DRAW(canvasRef.current!)
  //   SET_BLOCK_TO_ARRAY(array,block)
  //   BLOCKS_DRAW(array,canvasRef.current!)

  //   // setInterval every 300ms

  //   let beingPlay = 
  //   setInterval(()=>{

  //   ERASE_OLD_BLOCK(array,block)

  //   let testBlock:BLOCK = JSON.parse(JSON.stringify(block))
  //   MOVE_BLOCK_AUTO(testBlock);

    // if(!STOP_BYBOTTOMWALL(testBlock))
    // {
    //   if(STOP_BYOLDBLOCK(array,testBlock))
    //   {
    //     SET_BLOCK_TO_ARRAY(array,block);
    //     BG_DRAW(canvasRef.current!)
    //     BLOCKS_DRAW(array,canvasRef.current!)
    //     block = CREATE_BLOCK()
    //   }
    //   else block = testBlock
    // }
    // else {
    //   SET_BLOCK_TO_ARRAY(array,block);
    //   BG_DRAW(canvasRef.current!)
    //   BLOCKS_DRAW(array,canvasRef.current!)
    //   block = CREATE_BLOCK()
    // }

    
  //   // check lose only when create block
  //   if(STOP_BYOLDBLOCK(array,block))
  //   {
  //     window.removeEventListener('keydown',handleKeyDown)
  //     clearInterval(beingPlay)
  //   }

  //   let get_score_array = CHECK_GET_SCORE(array)
  //   if(get_score_array.length!==0)
  //   {
  //     SHIFT_AFTER_GET_SCORE(array,get_score_array)
  //     score=score+get_score_array.length
  //     scoreRef.current!.textContent = `${score}`
  //   }
  //   SET_BLOCK_TO_ARRAY(array,block);
  //   BG_DRAW(canvasRef.current!)
  //   BLOCKS_DRAW(array,canvasRef.current!)
  //   },SPEED)
  // },[])
  // return (
  //   <div className='position-relative'>
  //     <canvas ref={canvasRef} className='rounded border-primary' style={{border:"3px solid"}}>
  //     </canvas>
  //     <div className='position-absolute justify-content-center align-items-center
  //     rounded d-flex flex-column border-primary' 
  //     style={{ width:100, height:100, backgroundColor:"white", top:0, left:'calc(-100px - 50px)', border:"3px solid"}}>
  //       <h3 className = 'text-center text-primary'>Score</h3>
  //       <h3 className = 'text-center text-primary'
  //       ref={scoreRef}
  //       ></h3>
  //      </div>
  //   </div>
  //     );
  ////////////////////////////////////////////////////////////////////////////// reactjs version
  const [popUp,setPopUp] = useState(true)
  const [isStoped,setIsStoped] = useState(false)
  const [isStart,setIsStart] = useState(false)
  const [isEnd,setIsEnd] = useState(false)
  const [response,setResponse] = useState(()=>{
    let width = window.innerWidth
    if(width<850)
    {
      return true
    }
    else
    {
      return false
    }
  })
  const [gameEngine,setGameEngine] = useState(0)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  let pauseRef = useRef<any>(null)
  let scoreRef = useRef<any>(null)
  let beingPlay = useRef<NodeJS.Timer|null>(null)
  let block = useRef<BLOCK|null>(null)
  let array = useRef<string[]|null>(null)
  let forFirstS = useRef<number>(0)


  // set initstate
  useEffect(()=>{
    localStorage.setItem('exp',JSON.stringify(6000))
    array.current! = JSON.parse(JSON.stringify(INITIAL_BLOCKS_ARRAY))
    block.current! = INITIAL_BLOCK
    scoreRef!.current!.setScore('0')
    window.addEventListener('resize',handleResize)
    Event_bus.on("Home_clicked",handleHomeClicked)
  },[])

  // for the first setInterval game Engine
  useEffect(()=>{
    if(!popUp)
    {
      beingPlay.current = setInterval(()=>{
        setGameEngine(prev=>prev+1)
      },SPEED)
    }
    else
    {
      clearInterval(beingPlay.current!)
    }
  },[popUp])

  // game engine, everything in the game will depend on this useEffect
  useEffect(()=>{


    window.addEventListener('keydown',handleKeyDown)

    SET_BLOCK_TO_ARRAY(array.current!,block.current!);
    BG_DRAW(canvasRef.current!, response)
    BLOCKS_DRAW(array.current!,canvasRef.current!, response)
    
    

    let testBlock:BLOCK = JSON.parse(JSON.stringify(block.current!))
    ERASE_OLD_BLOCK(array.current!,block.current!)
    MOVE_BLOCK_AUTO(testBlock);

    if(!STOP_BYBOTTOMWALL(testBlock))
    {
      if(STOP_BYOLDBLOCK(array.current!,testBlock))
      {
        SET_BLOCK_TO_ARRAY(array.current!,block.current!);
        BG_DRAW(canvasRef.current!, response)
        BLOCKS_DRAW(array.current!,canvasRef.current!, response)
        block.current! = CREATE_BLOCK()
      }
      else 
      block.current! = testBlock
    }
    else {
      SET_BLOCK_TO_ARRAY(array.current!,block.current!);
      BG_DRAW(canvasRef.current!, response)
      BLOCKS_DRAW(array.current!,canvasRef.current!, response)
      block.current! = CREATE_BLOCK()
    }

    forFirstS.current! = 0

    if(STOP_BYOLDBLOCK(array.current!,block.current!))
    {
      let score = parseInt(scoreRef!.current!.getScore())
      let exp = parseInt(localStorage.getItem('exp')||'0')
      let oldExp = parseInt(localStorage.getItem('oldExp')||'0')
      if(oldExp!==exp)
      localStorage.setItem('oldExp',JSON.stringify(exp))
      localStorage.setItem('exp',JSON.stringify(exp+score))
      setPopUp(prev=>!prev)
      setIsEnd(prev=>!prev)
    }

    let get_score_array = CHECK_GET_SCORE(array.current!)
    if(get_score_array.length!==0)
    {
      SHIFT_AFTER_GET_SCORE(array.current!,get_score_array)
      let score = parseInt(scoreRef!.current!.getScore())
      scoreRef.current!.setScore(`${score+get_score_array.length}`)
    }

    return () => {
      window.removeEventListener('keydown',handleKeyDown)
    }

  },[gameEngine])

  // small functions
  
  const handleResize = useCallback(()=>
  {
    const width = window.innerWidth
    if(width<850)
    {
      setResponse(true)
    }
    else
    {
      setResponse(false)
    }
  }
  ,[])

  // function handlePause() {
  //   pauseRef!.current!.innerHTML = (pauseRef!.current!.innerHTML==="Pause") ? "Continue" : "Pause"
  //   setIsStoped(prev=>!prev)
  //   setPopUp(prev=>!prev)
  // }
  const handleKeyDown = useCallback((e:KeyboardEvent)=>
  {
    let direction=e.key
    ERASE_OLD_BLOCK(array.current!,block.current!)
    let testBlock:BLOCK = JSON.parse(JSON.stringify(block.current!))
    // because block.current now aldready is set plus one in bottom direction
    // in the first press S if we plus one in bottom direction
    // it will make the setArray to be plus two so it will move 2 in the first Press
    // if(forFirstS.current! ===0 && direction ==='s')
    // {HANDLE_STOP_BYWALL.HANDLE_STOP_BYBOTTOMWALL(testBlock);forFirstS.current! = 1}

    if(direction==='d'||direction==='s'||direction==='a')
    {
      MOVE_BLOCK_MANUALLY(testBlock,direction)
      if(!STOP_BYRIGHTWALL(testBlock)
      &&!STOP_BYBOTTOMWALL(testBlock)
      &&!STOP_BYLEFTWALL(testBlock))
      {
        if(!STOP_BYOLDBLOCK(array.current!,testBlock))
        {
          block.current! = testBlock
        }
      }
    }
    else if(e?.code==="Space")
    {
      ROTATE_BLOCK(testBlock)
      // Wont stop if is stoped by wall
      while(STOP_BYRIGHTWALL(testBlock))
      {
        HANDLE_STOP_BYWALL.HANDLE_STOP_BYRIGHTWALL(testBlock)
      }
      while(STOP_BYLEFTWALL(testBlock))
      {
        HANDLE_STOP_BYWALL.HANDLE_STOP_BYLEFTWALL(testBlock)
      }
      while(STOP_BYBOTTOMWALL(testBlock))
      {
        HANDLE_STOP_BYWALL.HANDLE_STOP_BYBOTTOMWALL(testBlock)
      }
      if(!STOP_BYOLDBLOCK(array.current!,testBlock))
      block.current! =testBlock
    }
    if(forFirstS.current! === 0 && direction==='s')
    {
      HANDLE_STOP_BYWALL.HANDLE_STOP_BYBOTTOMWALL(block.current!)
      forFirstS.current! = 1
    }
    SET_BLOCK_TO_ARRAY(array.current!,block.current!)
    BG_DRAW(canvasRef.current!, response)
    BLOCKS_DRAW(array.current!,canvasRef.current!, response)
  }
  ,[response])

  const handlePlayAgain = useCallback(()=>
    {
      setIsEnd(prev=>!prev);setIsStart(prev=>!prev);
      scoreRef.current!.setScore(`0`) 
      array.current! = JSON.parse(JSON.stringify(INITIAL_BLOCKS_ARRAY))
      block.current! = CREATE_BLOCK()
      BG_DRAW(canvasRef.current!, response)
      BLOCKS_DRAW(array.current!,canvasRef.current!, response)
    } ,[])

    const handleHomeClicked = useCallback(()=>
    {
      setPopUp(true)
      setIsStart(false)
      scoreRef.current!.setScore(`0`) 
      array.current! = JSON.parse(JSON.stringify(INITIAL_BLOCKS_ARRAY))
      block.current! = CREATE_BLOCK()
    } ,[])

  return (
    <>
        
      {popUp && !isStart &&<Popup forWelcome handlePopUp={()=>{setPopUp(prev=>!prev);setIsStart(prev=>!prev)}} />}
      {popUp && isEnd && <Popup forLose score={parseInt(scoreRef!.current!.getScore())} handlePopUp={handlePlayAgain} />}
      {isStoped && <Popup forStop handlePopUp={pauseRef.current!.handlePause} />}  
      
      {isStart && <h3 style={{fontSize:response?15:""}}>
        {response?"Use joystick to move and press the button to spin your block!":"Use A, S, D and Space to play, do not forget to turn off unikey!"}
        </h3>}
      <div className={clsx("position-relative",{'d-none':!isStart})}>
        <canvas ref={canvasRef} 
        className='rounded border-primary position-relative' style={{border:"3px solid"}}>
        </canvas>

        {/* <FlexColumnDiv specialClassName='rounded border-primary position-absolute'
        style={{ width:response?50:100, height:response?50:100, backgroundColor:"white", top:0, left:response?-65:-150, border:"3px solid"}}
        >
        <h3 className = 'text-center text-primary' style={{fontSize:response?15:"", paddingTop:5}}>Score</h3>
        <h3 className = 'text-center text-primary' style={{fontSize:response?15:""}}
        ref={scoreRef}
        ></h3>
        </FlexColumnDiv> */}

        {/* with memo for no reload */}
        <Score ref={scoreRef} response={response}/>


        {/* <FlexColumnDiv style={{top:0,right:response?-40:-80}} specialClassName="position-absolute">
        <Button ref={pauseRef} onClick={handlePause} style={{top:0}}
        className={
          clsx('position-absolute',
          {'btn-success':isStoped}
          )} >Pause</Button>
        </FlexColumnDiv> */}

        {/* with memo for no reload */}
        <Pause ref={pauseRef} response={response} isStoped={isStoped} setIsStoped={setIsStoped} setPopUp={setPopUp}/>
        {
          response && 
          <JoyStick specialClassName="position-absolute" handleKeyDown={handleKeyDown}></JoyStick>
        }
        {
          response && 
          <SpinButton specialClassName="position-absolute" handleKeyDown={handleKeyDown}></SpinButton>
        }
      </div>
    </>

      );
}

export default App;
