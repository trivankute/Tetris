import {useEffect, useRef, memo} from 'react'
function JoyStick({specialClassName, handleKeyDown}:{specialClassName:string, handleKeyDown:(e:KeyboardEvent) =>void}):JSX.Element {
    const JoyStickRef = useRef<HTMLCanvasElement>(null)
    var width:number, height:number, radius:number, x_orig:number, y_orig:number;
    let coord:any
    let paint:any
    let beingDraw:any
    let angle_in_degrees = 0
    var speed = 0
    width = 125;
    height = 125;
    radius = 20;
    x_orig = width / 2;
    y_orig = height / 2;
    coord = { x: 0, y: 0 }
    paint = false;
    var ctx:CanvasRenderingContext2D;
    useEffect(()=>{
        ctx = JoyStickRef!.current!.getContext('2d') as CanvasRenderingContext2D;     
        
        JoyStickRef.current!.width = width;
        JoyStickRef.current!.height = height; 
        resize(); 
        JoyStickRef.current!.addEventListener('mousedown', (e) => {
            beingDraw = setInterval(()=>{
                if(speed===100 && ((angle_in_degrees<360 && angle_in_degrees>330)||(angle_in_degrees<90 && angle_in_degrees>0)))
                {
                    let e = new KeyboardEvent("keydown", {
                          key: "d",
                        })
                    handleKeyDown(e)
                }
                if(speed===100 && (angle_in_degrees>210 && angle_in_degrees<330))
                {
                    let e = new KeyboardEvent("keydown", {
                        key: "s",
                      })
                  handleKeyDown(e)
                }
                if(speed===100 && (angle_in_degrees>90 && angle_in_degrees<210))
                {
                    let e = new KeyboardEvent("keydown", {
                        key: "a",
                      })
                  handleKeyDown(e)
                }
            },100)
            startDrawing(e)
        }
         );
        JoyStickRef.current!.addEventListener('mouseup', 
        (e) => {
            stopDrawing()
            clearInterval(beingDraw)
        }
        );
        JoyStickRef.current!.addEventListener('mousemove', 
        (e) => {
            Draw(e)
         }
         );
    
        JoyStickRef.current!.addEventListener('touchstart', (e) => {
            beingDraw = setInterval(()=>{
                if(speed===100 && ((angle_in_degrees<360 && angle_in_degrees>330)||(angle_in_degrees<90 && angle_in_degrees>0)))
                {
                    let e = new KeyboardEvent("keydown", {
                          key: "d",
                        })
                    handleKeyDown(e)
                }
                if(speed===100 && (angle_in_degrees>210 && angle_in_degrees<330))
                {
                    let e = new KeyboardEvent("keydown", {
                        key: "s",
                      })
                  handleKeyDown(e)
                }
                if(speed===100 && (angle_in_degrees>90 && angle_in_degrees<210))
                {
                    let e = new KeyboardEvent("keydown", {
                        key: "a",
                      })
                  handleKeyDown(e)
                }
            },100)
            startDrawing(e)
        });
        JoyStickRef.current!.addEventListener('touchend', 
        (e) => {
            stopDrawing()
            clearInterval(beingDraw)
        });
        JoyStickRef.current!.addEventListener('touchcancel', 
        (e) => {
            stopDrawing()
            clearInterval(beingDraw)
        });
        JoyStickRef.current!.addEventListener('touchmove', Draw);
    },[])

    function resize() {
        background();
        joystick(width / 2, height / 2);
    }

    function background() {
        ctx.beginPath();
        ctx.arc(x_orig, y_orig, radius + 20, 0, Math.PI * 2, true);
        ctx.fillStyle = '#ECE5E5';
        ctx.fill();
    }

    function joystick(width:number, height:number) {
        ctx.beginPath();
        ctx.arc(width, height, radius, 0, Math.PI * 2, true);
        ctx.fillStyle = '#F08080';
        ctx.fill();
        ctx.strokeStyle = '#F6ABAB';
        ctx.lineWidth = 8;
        ctx.stroke();
    }

    function getPosition(event:any) {
        var mouse_x = event.clientX || event.touches[0].clientX;
        var mouse_y = event.clientY || event.touches[0].clientY;
        coord.x = mouse_x - JoyStickRef.current!.getBoundingClientRect().x;
        coord.y = mouse_y - JoyStickRef.current!.getBoundingClientRect().y;
    }

    function is_it_in_the_circle() {
        var current_radius = Math.sqrt(Math.pow(coord.x - x_orig, 2) + Math.pow(coord.y - y_orig, 2));
        if (radius >= current_radius) return true
        else return false
    }


    function startDrawing(event:any) {
        paint = true;
        getPosition(event);
        if (is_it_in_the_circle()) {
            ctx.clearRect(0, 0, JoyStickRef.current!.width, JoyStickRef.current!.height);
            background();
            joystick(coord.x, coord.y);
            Draw(event);
        }
    }


    function stopDrawing() {
        paint = false;
        ctx.clearRect(0, 0, JoyStickRef.current!.width, JoyStickRef.current!.height);
        background();
        joystick(width / 2, height / 2);
    }

    function Draw(event:any) {
        if (paint) {
            ctx.clearRect(0, 0, JoyStickRef.current!.width, JoyStickRef.current!.height);
            background();
            var x, y;
            var angle = Math.atan2((coord.y - y_orig), (coord.x - x_orig));

            if (Math.sign(angle) == -1) {
                angle_in_degrees = Math.round(-angle * 180 / Math.PI);
            }
            else {
                angle_in_degrees =Math.round( 360 - angle * 180 / Math.PI);
            }


            if (is_it_in_the_circle()) {
                joystick(coord.x, coord.y);
                x = coord.x;
                y = coord.y;
            }
            else {
                x = radius * Math.cos(angle) + x_orig;
                y = radius * Math.sin(angle) + y_orig;
                joystick(x, y);
            }

        
            getPosition(event);

            speed =  Math.round(100 * Math.sqrt(Math.pow(x - x_orig, 2) + Math.pow(y - y_orig, 2)) / radius);

        }
    } 


    return (
        <div className={specialClassName} style={{bottom:0, left:-110}}>
        <canvas ref={JoyStickRef} id="JoyStick"  ></canvas>
        </div>
    )
}
export default memo(JoyStick)