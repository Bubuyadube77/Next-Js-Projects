export default function RootLayout({ children }) {
    return (
      <html lang="en"> 
          <body>
          <header>
            <nav>
              <ul>
                <li>Home</li>
                <li>About</li>
              </ul>
            </nav>
          </header>
            {children}
          </body>
      </html>
    );
  }