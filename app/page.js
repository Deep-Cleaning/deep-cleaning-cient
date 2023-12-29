import LandingPresentation from "./components/LandingPresentation"
import LandinPackages from "./components/LandingPackages"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <LandingPresentation></LandingPresentation>
      <LandinPackages></LandinPackages>
    </main>
  )
}
