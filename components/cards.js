export default function Cards (props) {
    return (
        <div className = "container card" >
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <style>{`
            .container {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
              }
      
              .card:hover,
              .card:focus,
              .card:active {
                color: #0070f3;
                border-color: #0070f3;
              }
      
              .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
              }
      
              .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
              }

              a {
                color: inherit;
                text-decoration: none;
              }
            `}            
            </style>
        </div>
    )
}