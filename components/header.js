import 'tailwindcss/tailwind.css'

export default function header () {
    return (
        <div className = "mt-6">
          <div className="" >
            <ul className="flex flex-col flex-1 mx-6 items-center gap-y-1 justify-center md:flex-row md:m-6 md:justify-center md:space-x-16 text-xl text-center">
              <li className="p-3 w-36 transform rounded-lg hover:shadow-lg hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="font-sans active:underline" aria-current="page" href="/projects">Projects</a>
              </li>
              <li className="p-3 w-36 transform rounded-lg hover:shadow-lg hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/experiences">Experiences</a>
              </li>
              <li className="p-3 w-36 transform rounded-lg hover:shadow-lg hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="p-3 w-36 transform rounded-lg hover:shadow-lg hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/interests">Interests</a>
              </li>
              <li className="p-3 w-36 transform rounded-lg hover:shadow-lg hover:text-blue-700 hover:scale-105 transition duration-300 ease-in-out">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
    )
}