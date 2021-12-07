import 'tailwindcss/tailwind.css'

export default function header () {
    return (
        <div className = "">
          <div className="block" >
            <ul className="flex flex-row m-6 justify-center space-x-16 text-xl text-center">
              <li className="p-3 w-36 transform border border-opacity-0 rounded-lg hover:border-opacity-100 hover:shadow-lg hover:border-blue-300 hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="font-sans active:underline" aria-current="page" href="/projects">Projects</a>
              </li>
              <li className="p-3 w-36 transform border border-opacity-0 rounded-lg hover:border-opacity-100 hover:shadow-lg hover:border-blue-300 hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/experiences">Experiences</a>
              </li>
              <li className="p-3 w-36 transform border border-opacity-0 rounded-lg hover:border-opacity-100 hover:shadow-lg hover:border-blue-300 hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="p-3 w-36 transform border border-opacity-0 rounded-lg hover:border-opacity-100 hover:shadow-lg hover:border-blue-300 hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/interests">Interests</a>
              </li>
              <li className="p-3 w-36 transform border border-opacity-0 rounded-lg hover:border-opacity-100 hover:shadow-lg hover:border-blue-300 hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
    )
}