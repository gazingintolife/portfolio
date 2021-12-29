export default function footer () {
    return (
        <div className = "flex flex-col place-items-center mt-3">
            <div className = "font-sans text-xl font-normal text-center">
                <h5 >Get in touch and let's build something cool together</h5>
            </div>
            <div className = "p-6 flex flex-row place-items-center divide-x-2">
                <a
                href = ""
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src = "/linkedin.svg" alt = "Linkedin" className = "social"/>
                </a>

                <a
                    href = "https://twitter.com/gazingintolife"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src = "/twitter.svg" alt = "Twitter" className = "social"/>
                </a>

                <a
                    href = "https://github.com/gazingintolife"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src = "/github.svg" alt = "Github" className = "social"/>
                </a>

                <a
                    href = "https://angel.co/u/avinash-rathee"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src = "/angellist.svg" alt = "AngelList" className = "social"/>
                </a>

                <a
                    href = "mailto:avinash.rathee1@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src = "/email.svg" alt = "Email" className = "social"/>
                </a>
            </div>
            <style jsx> {`
                  .social {
                    height: 2em;
                    padding: 0 0.5rem;
                  }
            `}
            
            </style>
        </div>
    )
}