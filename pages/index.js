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

      <main className = "mx-20 h-5/6 flex flex-col flex-initial">
        <div className = "my-1 h-24 text-center my-16">
          <div className = "flex flex-row justify-center">
            <h3 className = "font-sans text-3xl px-1">Hi</h3>
            <img className="inline-block h-8 w-8" src="/hand-wave.svg" alt="Hand Wave"/>,
            <h3 className = "px-3 font-sans text-3xl">Welcome to my Portfolio.</h3>
          </div>
          <div className = "flex flex-row justify-center">
            <h1 className="font-sans text-5xl font-semibold py-6 px-3">
              I am
            </h1>
            <h1 className = "font-sans text-5xl font-semibold text-blue-500 p-6 px-2">Avinash</h1>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-6 mx-8 justify-items-center">
          
          <a href = "/about" className=""><Cards title = "About Me" img = "about.png"/></a>

          <a href = "/experiences"><Cards title = "Experiences" img = "experience.png"/></a>

          <a href = "/projects"><Cards title = "Projects" img = "projects.png"/></a>

          <a href = "/interests"><Cards title = "Interests" img = "interests.png"/></a>
          
        </div>

        

      </main>

      <footer className = "fixed-bottom block h-1/6 mx-20 mt-16">
        <Footer/>
      </footer>
    </div>
  )
}
