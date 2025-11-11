import galleryItems from '../data/gallery.json';

export function Gallery() {
  return (
    <div className="page">
      <section className="hero" style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="pill">Gallery</div>
        <h1 style={{ marginTop: 16 }}>Memories from the Road</h1>
      </section>

      <section>
        <div
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
          }}
        >
          {galleryItems.map((item) => (
            <article
              key={item.id}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--card)',
                boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ position: 'relative', paddingBottom: '62%', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
              {/* <div style={{ padding: '20px 24px 24px' }}>
                <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
              </div> */}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

