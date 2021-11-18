import Head from 'next/head'
import Cards from '../components/cards'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Avinash's Portfolio</title>
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <div className = "intro">
          <h2>
            Hi <img src="/hand-wave.svg" alt="Hand Wave" className="logo" />, Welcome to my Portfolio.
          </h2>
          <h1 className="title">
            I am Avinash
          </h1>
        </div>
        <div className="grid">
          
          <a href = "/about"><Cards title = "About Me" description = "I am a Generalist who has a hard time describing what I do, so you may get a different answer each time you ask."/></a>

          <a href = "/experiences"><Cards title = "Experiences" description = "Brief overview of mistakes I have made and lessons learnt founding two failed sartups"/></a>

          <a href = "/projects"><Cards title = "Projects" description = "Projects that I built for my own and other's businesses"/></a>

          <a href = "/interests"><Cards title = "Interests" description = "Science, Technology, History, Philosophy, I love it all. Check out my favourites"/></a>
          
        </div>
      </main>

      <footer>
        <Footer/>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        div {
          border: 1px solid green
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
