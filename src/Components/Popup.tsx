import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {levelColors, levelTitles, sumExp, levelArr} from '../constances/Level'
import {useState, useEffect} from 'react'
import Event_bus from './Event_bus'

function Popup({handlePopUp, forStop, forWelcome, forLose, score,}
    :{handlePopUp?:()=>void, forStop?:boolean, forWelcome?:boolean, forLose?:boolean, score?:number}):JSX.Element
{

    let title, text, mainContent
    if(forWelcome)
    {
        title=`Welcome to TriVan's Tetris`
        text="Your presence is my game's honor."
        mainContent="Let's play game"
    }
    if(forStop)
    {
        title="You's recently stoped the game"
        text="Tetris is waiting for you !!!"
        mainContent="Continue"
    }
    if(forLose)
    {
        title="TriVan's whisper:"
        text="Oh no! You are losed"
        mainContent="Would you like to play again?"
    }
    let oldExp = parseInt(localStorage.getItem('oldExp')||"0")
    let exp:number = parseInt(localStorage.getItem('exp')||"0")
    let level = getLevel(exp)!
    let oldLevel = getLevel(oldExp)!
    let hasNewTitle = (levelTitles[oldLevel]!==levelTitles[level])

    const [name,setName] = useState(JSON.parse(localStorage!.getItem('name')!)||"")
    useEffect(()=>{
        Event_bus.on("re_renderName_forPopup",setName)
        return () => {
        Event_bus.remove("re_renderName_forPopup",setName)
        }
    },[])

    function getLevel(cur_exp:number){
        if(cur_exp>sumExp) {
            return levelArr.length
        }
        for(let i = 0; i<levelArr.length; i++)
        {
            if(cur_exp<=levelArr[i])
            {
                return i
            }
            else cur_exp-=levelArr[i]
        }
    }
    return(
        < >
            <div className="position-fixed" style={{top:0, bottom:0, left:0, right:0, zIndex:1
            , backgroundColor:"#333", opacity:0.5}}></div>
            <Card className="position-absolute col-3" style={{top:"50%", left:"50%",
             transform:"translate(-50%,-50%)", zIndex:2, minWidth:250}}>
                <Card.Body>
                    <div className=' d-flex flex-column justify-content-center align-items-center'  style={{top:0}}>
                    <Card.Title>{title}
                    {forWelcome && (((name!==""))?
                    <>
                    , <span className="text-primary">
                        {name}
                    </span>
                    </>
                    :
                    <>
                    <br></br>
                    <span className="text-primary">
                        Do you want to set your name in the profile?
                    </span>
                    </>)
                    }

                    </Card.Title>
                    <Card.Text>
                    {text}

                    {(score!==0) && typeof score !== "undefined" && <span className="text-success" style={{fontWeight:500}}> + {score} exp</span>
                    }
                    {hasNewTitle && typeof score !== "undefined" && (score!==0) &&
                    
                    <>
                    <br></br>
                    <span className = "text-primary">
                        Warmest congratulations on your new Rank :
                    </span> <span style={{fontWeight:500, color:levelColors[level]||"#FA4616"}}>
                        {levelTitles[level]||"Super Challenger"}
                    </span>
                    </>
                    }
                    </Card.Text>
                    <Button variant="primary" onClick={handlePopUp}>{mainContent}</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )

}


export default Popup