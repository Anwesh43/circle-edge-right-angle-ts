const parts : number = 4 
const scGap : number = 0.02 / parts 
const deg : number = 360 
const rot : number = Math.PI / 2 
const strokeFactor : number = 90 
const sizeFactor : number = 4.9 
const delay : number = 20 
const colors : Array<string> = [
    "#f44336",
    "#4A148C",
    "#00C853",
    "#AA00FF",
    "#FFD600"
] 
const backColor : string = "#bdbdbd"

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}