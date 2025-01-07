import Banner from './components/Banner/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Insta from './components/Insta/index';
import Mapa from './components/Ubicacion/UbicacionMapa'



export default function Home() {
  return (
    <main>
      <Banner />
      <Testimonials />
      <FAQ />
      <Mapa />
      <Insta />
    </main>
  )
}
