import {levelArr, sumExp, levelTitles, levelColors, radius, radiusCx, radiusCy, Perimeter} from '../constances/Level'
import {useState, useCallback, memo, useEffect} from 'react'
function Exp_Profile()
{
    function getLevel(cur_exp:number){
        if(cur_exp>sumExp) {
            setExp(cur_exp-sumExp)
            return levelArr.length
        }
        for(let i = 0; i<levelArr.length; i++)
        {
            if(cur_exp<=levelArr[i])
            {
                setExp(cur_exp)
                return i
            }
            else cur_exp-=levelArr[i]
        }
    }
    function getProgress(exp:number){
        if(level! >= 9)
        {
        return 0
        }
        else
        return Perimeter-Math.floor((exp/levelArr[level!])*Perimeter)
    }
    function getCurexp(curExp:number)
    {
        if(curExp>sumExp) {
            curExp-=sumExp
            return (curExp)
        }
        for(let i = 0; i<levelArr.length; i++)
        {
            if(curExp<=levelArr[i])
            {
                return (curExp)
            }
            else curExp-=levelArr[i]
        }
    }
    const [exp, setExp] = useState(parseInt(localStorage.getItem('exp') as string)||0)
    const [cur_exp,setCur_exp] = useState(()=>getCurexp(exp))
    const [level,setLevel] = useState(()=>getLevel(exp))
    const [progress,setProgress] = useState(()=>getProgress(cur_exp!))
    const handleSpinAction = useCallback(()=>
    {
        let compare_level=0
        let compare_progress=Perimeter
        let i = 0
        setLevel(0)
        let beingClick = setInterval(()=>{
            setCur_exp(Math.floor(i/Perimeter * levelArr[compare_level]))
            setProgress(Perimeter-i*1)
            if(level===compare_level && progress===compare_progress) {
                setCur_exp(cur_exp)
                clearInterval(beingClick)
            }
            if(i===Perimeter && level!==compare_level) {setLevel(prev=>prev!+1);i=0;compare_level++; compare_progress=Perimeter}
            compare_progress--
            i++
        },1000/Perimeter)
        // }
    },[exp])
    return (
        <>
        <svg onClick={handleSpinAction} className="progress" style={{width:50, height:50, backgroundColor:'bg-secondary', cursor:'pointer'}}>
                    <text style={{fontWeight:600}} className="loading h5" fill={levelColors[level!]||"#FA4616"} x={radiusCx} y={radiusCy} textAnchor="middle" alignmentBaseline="middle">{level}</text>
                    <circle strokeDasharray={Perimeter} strokeDashoffset={progress} className="progress-circle" cx={radiusCx} cy={radiusCy} r={radius} fill="transparent" stroke={levelColors[level!]||"#FA4616"} strokeWidth='3'></circle>
                </svg>
                <div style={{minWidth:Perimeter, width:"50%", height:50, backgroundColor:'white', borderRadius:5, border:"1px solid"}}
                    className="d-flex flex-column align-items-center"
                >
                    <span style={{color:levelColors[level!]||"#FA4616", fontSize:16, fontWeight:500}}>
                        {levelTitles[level!]||"Super Challenger"} 
                    </span>
                    <div style={{width:Perimeter, height:5, borderRadius:5, backgroundColor:"black"}} className="position-relative">
                        <div style={{width:Perimeter-progress, height:5, borderRadius:5, top:0, backgroundColor:levelColors[level!]||"#FA4616"}} className=" position-absolute"></div>
                        {level!>=levelArr.length?"Max":cur_exp}
                        <span className="position-absolute" style={{right:0}}>
                        {levelArr[level!]||"Max"}
                        </span>
                    </div>
                </div>
        </>
    )
}
export default memo(Exp_Profile)