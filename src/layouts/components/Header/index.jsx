import { Layout } from "antd";
import CollapseIcon from "./components/CollapseIcon";
import Fullscreen from "./components/Fullscreen";
import AvatarIcon from "./components/AvatarIcon";
import './index.scss'

const LayoutHeader = () => {
    const { Header } = Layout;
    return (
        <Header className="header">
            <div className="header-lf">
                <CollapseIcon/>
            </div>
            <div className="header-ri">
                <Fullscreen />
                <span className="username">Hooks</span>
                <AvatarIcon />
            </div>
        </Header>
    )
}

export default LayoutHeader;