import Head from 'next/head'
import Cards from '../components/cards'
import Footer from '../components/footer'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="md:h-screen flex flex-col">
      <Head>
        <title>Avinash's Portfolio</title>
        <link rel="icon" href="/icon.svg" />
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='stylesheet' href='./index.scss'/>
      </Head>

      <div className='flex flex-col  bg-black text-white'>
        <main className = "mx-20 h-5/6 grid grid-row-2">
          <div className = "my-1 mt-6 md:h-24 text-center md:my-16 block">
          
            <div className = "flex flex-col md:flex-row justify-center">
              <div className='flex flex-col items-center my-3 md:flex-row md:mx-6'>
                <h3 className = "font-sans text-3xl font-bold px-1 md:px-3">Hi</h3>
                <img className="inline-block h-8 w-8" src="/hand-wave.svg" alt="Hand Wave"/>
              </div>
              <h3 className = "px-3 my-3 font-sans font-bold text-3xl">Welcome to my Portfolio.</h3>
            </div>

            <div className = "flex flex-col md:flex-row justify-center my-6">
              <h1 className="font-sans text-5xl font-extrabold py-6 px-3">
                I am
              </h1>
              <h1 className = "font-sans text-5xl font-semibold text-blue-500 p-6 px-2">Avinash</h1>
            </div>

          </div>

          <div className="flex flex-col md:mx-6 items-center md:flex-row md:space-x-6 md:justify-evenly">
            <a href = "/about" className="py-6"><Cards title = "About Me" img = "about.png"/></a>

            <a href = "/experiences" className="py-6"><Cards title = "Experiences" img = "experience.png"/></a>

            <a href = "/projects" className="py-6"><Cards title = "Projects" img = "projects.png"/></a>

            <a href = "/interests" className="py-6"><Cards title = "Interests" img = "interests.png"/></a>
          </div>
        </main>

        <footer className = "md:fixed-bottom h-1/6 mx-20 mt-16">
          <Footer/>
        </footer>
      </div>
    </div>
  )
}
