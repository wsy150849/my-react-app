import { useRef } from "react";
import { Avatar, Modal, Menu, Dropdown, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import avatar from "@/assets/images/avatar.png";

const AvatarIcon = () => {
    const navigate = useNavigate();
	// 退出登录
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};

    const items = [
        {
            key: "1",
            label: (
                <div
                    onClick={() => {
                        navigate("/home/index");
                    }}
                >
                    首页
                </div>
            ),
        },
        {
            key: "4",
            label: <span className="dropdown-item">退出登录</span>,
            onClick: logout
        }
    ]

    return (
        <>
            <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
                <Avatar
                    src={avatar}
                    size={35}
                />
            </Dropdown>
        </>
    )
}
export default AvatarIcon;