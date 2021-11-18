export default function footer () {
    return (
        <div className = "footer">
            <div className = "container">
                <h5>Get in touch and let's build something cool together</h5>
            </div>
            <div className = "container">
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
                .container {
                    padding:  1.5rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid yellow;
                  }

                  .footer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid yellow;
                  }

                  .social {
                    height: 2em;
                    padding: 0 0.5rem;
                  }
            `}
            
            </style>
        </div>
    )
}