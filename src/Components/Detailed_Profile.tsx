import Exp_Profile from './Exp_Profile'
import Button from 'react-bootstrap/Button'
import {useState, useCallback, memo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {faWrench} from '@fortawesome/free-solid-svg-icons'
function Detailed_Profile() {
    const [introContent, setIntroContent] = useState(JSON.parse(localStorage!.getItem('introduction')!)||"")
    const [intro, setIntro] = useState((introContent!=="")?true:false)
    const handleIntroduction = useCallback(() => {
        if(introContent!=="")
        {
            setIntro(prev=>!prev)
            localStorage.setItem('introduction',JSON.stringify(introContent))
        }
    },[introContent])
    return(
        <div style={{ backgroundColor:'white', border:'2px solid ', borderRadius:4, boxShadow:"0 0 5px 1px #D3D3D3"}} className="w-100 mt-3 border-secondary mb-3" >
            <div className="d-flex justify-content-around pt-3 align-items-center">
                <Exp_Profile/>
            </div>
            <div className="d-flex justify-content-around pt-3 pb-3 align-items-center">
                <div className="w-100 d-flex flex-column" style={{minHeight:50, backgroundColor:'white', marginLeft:20,marginRight:20}} >
                    <span style={{color:"#333", fontSize:14}}>
                    Introduction:
                    </span>
                    {introContent!==""?<div style={{fontSize:14}}>
                        {introContent}
                        {intro&&
                        <FontAwesomeIcon onClick={handleIntroduction} className="primary text-primary" icon={faWrench as IconProp} style={{marginLeft:10, cursor:'pointer'}}/>
                        }
                        </div>:<div style={{fontSize:14}}>Write something here.</div>}
                    <div className="d-flex w-100 justify-content-between align-items-center" >
                        {!intro&&
                        <>
                        <textarea onChange={(e)=>{setIntroContent(e.target.value)}} style={{color:"#333", fontSize:14}} rows={3} cols={35} value={introContent}/>
                        <Button variant="outline-success" onClick={handleIntroduction}>Set</Button>
                        </>
                        }
                    </div>
                </div>
            </div>
            <div style={{fontSize:12, color:"#333", marginLeft:10}}>Note: You can click the level number and watch the effect</div>
        </div>
    )
}
export default memo(Detailed_Profile)