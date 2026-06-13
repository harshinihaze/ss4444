import { useState } from "react"

export default function Games() {
  const [score, setScore] = useState(0)

  return (
    <section className="games">
      <h2>Play While You Wait 🎮</h2>

      <button onClick={() => setScore(score + 1)}>
        Catch Star ⭐
      </button>

      <p>Score: {score}</p>
    </section>
  )
}
