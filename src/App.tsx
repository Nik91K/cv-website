import './App.css'
import LayoutPage from './layoutPage/index'

function App() {
  return (
    <LayoutPage>
      <section 
        className="min-h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/background/background.jpg')" }}
      >
        <div className="w-full content-center justify-center">
          <div className="text-white text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Front-end Developer
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#16161a]">
        <div className="container">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="text-gray-300 text-lg leading-relaxed">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam mollitia, sed perspiciatis minima id doloribus aperiam cupiditate ullam voluptatibus aut eveniet reiciendis suscipit obcaecati sunt, quae repudiandae quasi maiores?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aspernatur adipisci accusamus consequatur facere voluptas, doloremque maxime, rem sunt accusantium iusto, voluptate laboriosam suscipit obcaecati magni quos qui molestiae eaque?
            </p>
          </div>
        </div>
      </section>
    </LayoutPage>
  )
}

export default App