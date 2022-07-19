import Button from 'react-bootstrap/Button'
import {memo, useCallback} from 'react'
function SpinButton({specialClassName, handleKeyDown}:{specialClassName:string, handleKeyDown:(e:KeyboardEvent) =>void}):JSX.Element
{
    const spin = useCallback(() =>
    {
        let e = new KeyboardEvent("keydown", {
            code: "Space",
          })
      handleKeyDown(e)
    },[])
    return (
        <Button onTouchStart={spin} className={specialClassName} style={{bottom:40, right:-70}}>
            Spin
        </Button>
    )
}
export default memo(SpinButton)