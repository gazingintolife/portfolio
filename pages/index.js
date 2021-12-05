import Head from 'next/head'
import Cards from '../components/cards'
import Footer from '../components/footer'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Avinash's Portfolio</title>
        <link rel="icon" href="/icon.svg" />
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className = "mx-20 border border-black h-5/6">
        <div className = "border border-black my-1 h-24 text-center my-16">
          <div className = "flex flex-row justify-center">
            <h3 className = "font-serif px-1">Hi</h3>
            <img className="" src="/hand-wave.svg" alt="Hand Wave" className="logo" />,
            <h3 className = "px-3 font-serif">Welcome to my Portfolio.</h3>
          </div>
          <h1 className="block font-serif">
            I am Avinash
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-6 mx-8 border border-purple-2 justify-items-center">
          
          <a href = "/about" className="border border-purple-2"><Cards title = "About Me" img = "about.png"/></a>

          <a href = "/experiences"><Cards title = "Experiences" img = "experience.png"/></a>

          <a href = "/projects"><Cards title = "Projects" img = "projects.png"/></a>

          <a href = "/interests"><Cards title = "Interests" img = "interests.png"/></a>
          
        </div>

        

      </main>

      <footer className = "fixed-bottom block h-1/6 mx-20">
        <Footer/>
      </footer>
    </div>
  )
}
