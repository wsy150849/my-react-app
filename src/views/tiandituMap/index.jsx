import React, { forwardRef, useEffect, useRef } from 'react';
import './index.scss';

const TiandituMap = forwardRef((props, ref) => {
    console.log('props--->',props, props.onScale(), ref);
    
    // 实际初始化地图的函数
    const initMapInstance = () => {
        window.map = new window.T.Map('map-container', {
            projection: 'EPSG:4326', // 明确坐标系
            maxZoom: 18, // 最大缩放级别
            minZoom: 5, // 最小缩放级别
        });
        // 设置中国地理边界（经度73~135，纬度18~53）
        const chinaBounds = new window.T.LngLatBounds(
            new T.LngLat(-176.48, -84.86), // 西南角
            new T.LngLat(177.18, 84.54) // 东北角
        );
        window.map.setMaxBounds(chinaBounds);
        window.map.centerAndZoom(new window.T.LngLat(116.404, 39.915), 12); // 北京坐标
        // 添加控件并确保交互功能
        //创建对象
        var ctrl = new window.T.Control.MapType();
        //添加控件
        ctrl.setPosition(T_ANCHOR_BOTTOM_RIGHT);
        window.map.addControl(ctrl);
        const zoom = new window.T.Control.Zoom();
        window.map.addControl(zoom);
        zoom.setPosition(T_ANCHOR_BOTTOM_RIGHT);
        window.map.addControl(new window.T.Control.Scale());
        window.map.enableDrag();
        // 将实例挂载到window便于管理
        window.mapInstance = window.map;
    };
    const initialized = useRef(false);
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;
        let script = null;
        // 动态加载天地图 API（如果未在 index.html 中预先加载）
        if (!window.T) {
            script = document.createElement('script');
            script.src = `https://api.tianditu.gov.cn/api?v=4.0&tk=8a751764d15ecc34c5851da8730077a0`;
            script.async = true;
            document.head.appendChild(script);
            script.onload = () => initMapInstance();
        } else {
            console.log('地图初始化完成');
            // 如果 API 已存在（如通过 public/index.html 提前加载），直接初始化
            initMapInstance();
        }
        return () => {
            if (script && document.head.contains(script)) {
                document.head.removeChild(script);
            }
            if (window.mapInstance) {
                // 销毁地图实例
                window.mapInstance = null;
            }
        };
    }, []);

    return <div id="map-container" style={{ width: '100%', height: '100%' }} />;
});

export default TiandituMap;