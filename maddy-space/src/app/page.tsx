import "./globals.css";

export default function Home() {
  return (
    <div>
      <main>
        <div style={ styles.container}>
          <div style={styles.box}>
            <nav style={styles.navbar}>
              <button style={styles.home}>
                Home
              </button>
              <button>
                Playlist
              </button>
              <button>
                Love Letters
              </button>
               <button>
                ???
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties} = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed'
  },
  box: {
    width: '100%',
    height: '90%',
    borderRadius: '25px',
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  navbar: {
    width: '100%',
    height: '7%',
    borderRadius: '50px',
    backgroundColor: 'black',
    textAlign: 'center',
    fontFamily: '"Press Start 2P", system-ui, sans-serif'
  },
  home: {
    fontFamily: '"Press Start 2P", system-ui, sans-serif',
    color: 'white',
    backgroundColor: 'black',
  }

}
