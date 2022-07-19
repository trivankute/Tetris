import clsx from 'clsx'

function FlexColumnDiv(
    {children, style, specialClassName}
    :{children:React.ReactNode, style?:React.CSSProperties, specialClassName?:string}
    )
    :JSX.Element 
    {
    return (
        <div className={clsx('justify-content-center align-items-center d-flex flex-column',{
            [specialClassName!]:specialClassName
        })} style={{...style}}> 
            {children}
        </div>
    )
}
export default FlexColumnDiv