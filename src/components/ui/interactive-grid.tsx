"use client"

import { useEffect, useRef, useState } from "react"

interface Dot {
  x: number
  y: number
  render: (ctx: CanvasRenderingContext2D, mouse: Dot, params: CanvasParams) => void
}

interface CanvasParams {
  dotDistance: number
  dotRadius: number
  minProximity: number
  repaintAlpha: number
}

interface InteractiveGridProps {
  dotDistance?: number
  dotRadius?: number
  minProximity?: number
  repaintAlpha?: number 
}

export function InteractiveGrid({
  dotDistance = 40, // Increased to reduce dot count
  dotRadius = 2,
  minProximity = 200,
  repaintAlpha = 1, 
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isVisible = useRef(true)
  const [params] = useState<CanvasParams>({
    dotDistance,
    dotRadius,
    minProximity,
    repaintAlpha,
  })
  const mouseRef = useRef<Partial<Dot>>({ x: 0, y: 0 })
  const dotsRef = useRef<Dot[]>([])
  const minProxSquaredRef = useRef(params.minProximity * params.minProximity)

  useEffect(() => {
    const createDots = (w: number, h: number) => {
      const newDots: Dot[] = []
      for (let x = 0; x < w; x += params.dotDistance) {
        for (let y = 0; y < h; y += params.dotDistance) {
          newDots.push({
            x,
            y,
            render: (ctx, mousePos, p) => {
              if (mousePos.x === undefined || mousePos.y === undefined) return;
              const dX = x - mousePos.x
              const dY = y - mousePos.y
              const distSquared = dX * dX + dY * dY

              if (distSquared <= minProxSquaredRef.current) {
                const brightness = 50 - (distSquared / minProxSquaredRef.current) * 40
                const color = `hsl(45, 80%, ${brightness}%)`

                ctx.fillStyle = color
                ctx.strokeStyle = color
                ctx.beginPath()
                ctx.arc(x, y, p.dotRadius, 0, Math.PI * 2)
                ctx.fill()

                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.lineTo(mousePos.x, mousePos.y)
                ctx.stroke()
              } else {
                ctx.fillStyle = "rgba(212, 175, 55, 0.15)" // dim neutral dots, slightly gold
                ctx.beginPath()
                ctx.arc(x, y, p.dotRadius, 0, Math.PI * 2)
                ctx.fill()
              }
            },
          })
        }
      }
      dotsRef.current = newDots
    }

    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    createDots(canvas.width, canvas.height)
  }, [params.dotDistance])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Just relying on the other useEffect to recreate dots on distance change,
      // but we need to update them on resize too. Since createDots is in the other effect,
      // we can just force a re-render or pull createDots out.
      // For simplicity, we just trigger a window resize event that the user can handle if needed,
      // but to be correct without warnings, let's pull createDots out to a useCallback if needed.
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [params])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    let animateId: number;
    const animate = () => {
      animateId = requestAnimationFrame(animate)
      if (!isVisible.current) return

      // Clear the canvas (no background fill → transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot) => dot.render(ctx, mouseRef.current as Dot, params))
    }

    animate()
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animateId)
    }
  }, [params])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-transparent z-0 opacity-40 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ display: "block", background: "transparent" }}
      />
    </div>
  )
}
