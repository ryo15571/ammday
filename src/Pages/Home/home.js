import 'react-slideshow-image/dist/styles.css'
import ReactTypingEffect from 'react-typing-effect'


const Home = () => {
    return (
      <div>
            <div className='text-center font-bold text-3xl text-gray-700 pt-28 '>
<ReactTypingEffect text={["Amm Day","วันเกิดใครน้าาาา"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
</div>
        <div className="w-full py-10">
            <div className="w-8/12 py-8 mx-auto">
        <img  src="./amm2.jpg" alt="..." className="shadow max-w-full h-auto align-middle border-none animate-pulse" />
      </div>
      </div>
        
        </div>
        )
}
export default Home