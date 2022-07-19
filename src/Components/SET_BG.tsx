import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx'

type Props = {
    children?:React.ReactChild|React.ReactChild[],
    specialClassName?:string
}
function SET_BG({children,specialClassName}:Props) {
    return (
        <div className={clsx("vh-100 w-100 d-flex flex-column justify-content-center align-items-center",{
            [specialClassName!]:specialClassName
        })}>
            {children}
        </div>
    )
}
export default SET_BG