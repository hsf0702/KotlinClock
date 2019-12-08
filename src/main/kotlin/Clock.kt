import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin

/**
@author:Hsf
@date:2019/12/8-20:15
 */

//初始化canvans
val canvans = document.getElementById("canvans") as HTMLCanvasElement
val ctx = canvans.getContext("2d") as CanvasRenderingContext2D
val width = window.innerWidth
val height = window.innerHeight
val radius = 100.0//半径

fun main(args: Array<String>) {
    console.log("KotlinJs")
    //设置canvans宽高
    ctx.canvas.width = width
    ctx.canvas.height = height

    drawClock()
    window.setInterval({ drawClock() }, 1000)

}

private fun drawClock() {
    //
    ctx.clearRect(0.0, 0.0, width.toDouble(), height.toDouble())
    drawBackGround()
    drawDots()
    drawHoursText()

    val date = Date().asDynamic()
    val hour = date.getHours()
    val minute = date.getMinutes()
    val second = date.getSeconds()
    println("$hour,$minute,$second")
    drawHoursLine(hour, minute)
    drawMintuesLine(minute)
    drawSecondsLine(second)
    drawCenterDot()
    ctx.restore()
}

fun drawCenterDot() {
    ctx.beginPath()
    ctx.arc(0.0, 0.0, 4.0, 0.0, 2 * PI)
    ctx.fillStyle = "#ccc"
    ctx.fill()
}

fun drawHoursLine(hours: Int, minute: Int) {
    ctx.save()
    ctx.beginPath()
    val rad = 2 * PI / 12 * hours
    val mRad = 2 * PI / 60 / 12 * minute
    ctx.lineCap = CanvasLineCap.ROUND
    ctx.rotate(rad + mRad)
    ctx.moveTo(0.0, 10.0)
    ctx.lineTo(0.0, -radius / 2)
    ctx.stroke()
    ctx.restore()
}

fun drawMintuesLine(minutes: Int) {
    ctx.save()
    ctx.beginPath()
    val rad = 2 * PI / 60 * minutes
    ctx.lineCap = CanvasLineCap.ROUND
    ctx.lineWidth = 4.0
    ctx.rotate(rad)
    ctx.moveTo(0.0, 12.0)
    ctx.lineTo(0.0, -radius + 36)
    ctx.stroke()
    ctx.restore()
}

fun drawSecondsLine(seconds: Int) {
    ctx.save()
    ctx.beginPath()
    val rad = 2 * PI / 60 * seconds
    ctx.lineCap = CanvasLineCap.ROUND
    ctx.lineWidth = 3.0
    ctx.rotate(rad)
    ctx.fillStyle = "#f00"
    ctx.moveTo(-2.0, 20.0)
    ctx.lineTo(2.0, 20.0)
    ctx.lineTo(1.0, -radius + 18)
    ctx.lineTo(-1.0, -radius + 18)
    ctx.fill()
    ctx.restore()
}

val hourArr = arrayOf("3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2")
fun drawHoursText() {
    hourArr.forEachIndexed { index, s ->
        ctx.beginPath()
        ctx.font = "20px Arial"
        ctx.textAlign = CanvasTextAlign.CENTER
        ctx.textBaseline = CanvasTextBaseline.MIDDLE
        val rad = 2 * PI / 12 * index
        val x = cos(rad) * (radius - 25)
        val y = sin(rad) * (radius - 25)
        ctx.fillStyle = "#000"
        ctx.fillText(s, x, y)
    }
}

fun drawDots() {
    val range = 0..59
    range.forEach {
        ctx.beginPath()
        val rad = 2 * PI / 60 * it
        val x = cos(rad) * (radius - 10)
        val y = sin(rad) * (radius - 10)
        ctx.arc(x, y, 2.0, 0.0, 2 * PI)
        if (it % 5 == 0) {
            ctx.fillStyle = "#000"
        } else {
            ctx.fillStyle = "#ccc"
        }

        ctx.fill()
    }

}

fun drawBackGround() {
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = 6.0
    ctx.translate((width / 2).toDouble(), (height / 2).toDouble() - 200)//设置原点
    ctx.arc(0.0, 0.0, radius, 0.0, 2 * PI)//画圆
    ctx.stroke()//线条
}
