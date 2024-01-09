import LandingPresentation from "./components/LandingPresentation"
import LandinPackages from "./components/LandingPackages"
import LandingInformation from "./components/LandingInformation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20 bg-gradient-to-br from-blue-100 to-cyan-600">
      <LandingPresentation></LandingPresentation>
      <LandinPackages></LandinPackages>
      <LandingInformation></LandingInformation>
    </main>
  )
}
