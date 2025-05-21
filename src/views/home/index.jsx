import welcome from 'assets/images/welcome01.png'
import './index.scss'
const Home = () => {
  return (
    <div className="home">
        <img src={welcome} alt="" />
        {/* <div className='ani'></div> */}
    </div>
  )
}
export default Home