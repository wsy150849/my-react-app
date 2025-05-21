import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { switchCollapse } from "@/redux/modules/menu";

const CollapseIcon = (props) => {
    const { isCollapse, switchCollapse } = props;
    return (
        <div className="collapse-icon" onClick={() => switchCollapse()}>
            {isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
    )
}

const mapStateToProps = state => state.menu;
const mapDispatchToProps = { switchCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);