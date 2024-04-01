'use client'

export default function GlobalError({ error }) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <p>Error:{error}</p>
            </body>
        </html>
    )
}