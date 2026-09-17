export default function RootLayout({ children }) {
    return (
      <html lang="en"> 
          <body>
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </nav>
          </header>
            {children}
            <footer>&copy; {new Date().getFullYear()} Generic Wev dev LLC.</footer>
          </body>
      </html>
    );
  }