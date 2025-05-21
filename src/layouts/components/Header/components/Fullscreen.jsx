import screenfull from "screenfull";
import { message } from "antd";
import { useEffect, useState } from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

const Fullscreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        screenfull.on("change", () => {
            if (screenfull.isFullscreen) setIsFullscreen(true);
            else setIsFullscreen(false);
            return () => screenfull.off("change", () => { });
        });
    }, [])

    const toggleFullscreen = () => {
        if (!screenfull.isEnabled) message.warning("当前您的浏览器不支持全屏 ❌");
        setIsFullscreen(!isFullscreen);
		screenfull.toggle();
    }

    return (
        <div className="icon-style iconfont" onClick={toggleFullscreen}>
            {!isFullscreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
        </div>
    )
}

export default Fullscreen;