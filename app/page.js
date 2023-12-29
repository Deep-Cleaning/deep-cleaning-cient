import ButtonPrimary from "./Components/ButtonPrimary"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Bienvenidos a Deep Cleaning
      </h1>
      <ButtonPrimary
        children='! Reserva Ahora !'
      >
      </ButtonPrimary>
    </main>
  )
}
