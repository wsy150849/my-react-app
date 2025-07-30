import Headertime from './components/DataHeaderTime'
import './index.scss'
import dataScreenTitle from "./images/dataScreen-title.png";
import TiandituMap from '../tiandituMap'
import { useRef, useLayoutEffect } from 'react'
import RealTimeAccessChart from "./components/RealTimeAccessChart";
import MaleFemaleRatioChart from "./components/MaleFemaleRatioChart";
import AgeRatioChart from "./components/AgeRatioChart";
import { useNavigate } from 'react-router-dom';
// import ChinaMapChart from "./components/ChinaMapChart";
const DataScreen = () => {
  const navigate = useNavigate()
  const dataScreenRef = useRef(null)
  /* 浏览器监听 resize 事件 */
  const resize = () => {
    if (dataScreenRef.current) {
      dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
    }
  };

  /* 根据浏览器大小推断缩放比例 */
  const getScale = (width = 1920, height = 1080) => {
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
  };

  const goHome = () => {
    navigate('/home/index')
  };

  useLayoutEffect(() => {
    if (dataScreenRef.current) {
      dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
      dataScreenRef.current.style.width = `1920px`;
      dataScreenRef.current.style.height = `1080px`;
    }
    // 为浏览器绑定事件
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="dataScreen" ref={dataScreenRef}>
      <TiandituMap a={1} onScale={getScale} />
      <div className="dataScreen-header">
        <div className="header-lf">
          <span className="header-screening" onClick={goHome}>
            首页
          </span>
        </div>
        <div className="header-ct">
          <div className="header-ct-title">
            <span>智慧旅游可视化大数据展示平台</span>
            <div className="header-ct-warning">平台高峰预警信息（2条）</div>
          </div>
        </div>
        <div className="header-rg">
          <span className="header-download">统计报告</span>
          <Headertime />
        </div>
      </div>
      <div className="dataScreen-lf">
        <div className="dataScreen-top">
          <div className="dataScreen-main-title">
            <span>实时游客统计</span>
            <img src={dataScreenTitle} alt="" />
          </div>
          <div className="dataScreen-main-chart">
            <RealTimeAccessChart />
          </div>
        </div>
        <div className="dataScreen-center">
          <div className="dataScreen-main-title">
            <span>男女比例</span>
            <img src={dataScreenTitle} alt="" />
          </div>
          <div className="dataScreen-main-chart">
            <MaleFemaleRatioChart />
          </div>
        </div>
        <div className="dataScreen-bottom">
          <div className="dataScreen-main-title">
            <span>年龄比例</span>
            <img src={dataScreenTitle} alt="" />
          </div>
          <div className="dataScreen-main-chart">
            <AgeRatioChart />
          </div>
        </div>
      </div>
      <div className="dataScreen-rg">
        <div className="dataScreen-top">
          <div className="dataScreen-main-title">
            <span>热门景区排行</span>
            <img src={dataScreenTitle} alt="" />
          </div>
          <div className="dataScreen-main-chart">
            {/* <ChinaMapChart /> */}
          </div>
        </div>
      </div>
    </div >
  )
}
export default DataScreen