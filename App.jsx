import { site } from './data.js'

export default function App() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.waText)}`
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <nav><b>{site.name}</b><span><a href="#menu">Menu</a><a href="#visit">Visit</a></span></nav>
          <h1>{site.tagline}</h1>
          <p>{site.about}</p>
          <a className="btn" href={wa} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
          <a className="btn ghost" href="#visit">Find us</a>
        </div>
      </header>
      <main className="wrap">
        <section>
          <h2>More than a café</h2>
          <div className="grid">
            {site.vibes.map(v => (
              <div className="card" key={v.title}><span className="ic">{v.icon}</span><h3>{v.title}</h3><p>{v.text}</p></div>
            ))}
          </div>
        </section>
        <section id="menu">
          <h2>Menu favourites</h2>
          <ul className="menu">
            {site.menu.map(m => (
              <li key={m.name}><span>{m.name}<small>{m.desc}</small></span><b>{m.price}</b></li>
            ))}
          </ul>
        </section>
        <section id="visit">
          <h2>Visit us</h2>
          <div className="card visit">
            <p><b>Address</b><br />{site.address}</p>
            <p><b>Hours</b><br />{site.hours}</p>
            <p><b>Price</b><br />{site.price}</p>
            <a className="btn" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </div>
        </section>
        <p className="note">{site.note}</p>
      </main>
    </>
  )
}
