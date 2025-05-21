import Logo from "./components/Logo";
import { Spin, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Icons from "@ant-design/icons";
import "./index.scss";
import { useSelector } from "react-redux";
const LayoutMenu = () => {
    const list = [
        {
            "icon": "HomeOutlined",
            "title": "首页",
            "path": "/home/index"
        },
        {
            "icon": "AreaChartOutlined",
            "title": "数据大屏",
            "path": "/dataScreen/index"
        },
        {
            "icon": "TableOutlined",
            "title": "超级表格",
            "path": "/proTable",
            "children": [
                {
                    "icon": "AppstoreOutlined",
                    "path": "/proTable/useHooks",
                    "title": "使用 Hooks"
                }
            ]
        },
        {
            "icon": "FileTextOutlined",
            "title": "表单 Form",
            "path": "/form",
            "children": [
                {
                    "icon": "AppstoreOutlined",
                    "path": "/form/basicForm",
                    "title": "基础 Form"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/form/validateForm",
                    "title": "校验 Form"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/form/dynamicForm",
                    "title": "动态 Form"
                }
            ]
        },
        {
            "icon": "ProfileOutlined",
            "title": "菜单嵌套",
            "path": "/menu",
            "children": [
                {
                    "icon": "AppstoreOutlined",
                    "path": "/menu/menu1",
                    "title": "菜单1"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/menu/menu2",
                    "title": "菜单2",
                    "children": [
                        {
                            "icon": "AppstoreOutlined",
                            "path": "/menu/menu2/menu21",
                            "title": "菜单2-1"
                        },
                        {
                            "icon": "AppstoreOutlined",
                            "path": "/menu/menu2/menu22",
                            "title": "菜单2-2",
                            "children": [
                                {
                                    "icon": "AppstoreOutlined",
                                    "path": "/menu/menu2/menu22/menu221",
                                    "title": "菜单2-2-1"
                                },
                                {
                                    "icon": "AppstoreOutlined",
                                    "path": "/menu/menu2/menu22/menu222",
                                    "title": "菜单2-2-2"
                                }
                            ]
                        },
                        {
                            "icon": "AppstoreOutlined",
                            "path": "/menu/menu2/menu23",
                            "title": "菜单2-3"
                        }
                    ]
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/menu/menu3",
                    "title": "菜单3"
                }
            ]
        },
        {
            "icon": "ExclamationCircleOutlined",
            "title": "错误页面",
            "path": "/error",
            "children": [
                {
                    "icon": "AppstoreOutlined",
                    "path": "/404",
                    "title": "404页面"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/403",
                    "title": "403页面"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/500",
                    "title": "500页面"
                }
            ]
        },
        {
            "icon": "PaperClipOutlined",
            "title": "外部链接",
            "path": "/link",
            "children": [
                {
                    "icon": "AppstoreOutlined",
                    "path": "/link/gitee",
                    "title": "Gitee 仓库",
                    "isLink": "https://gitee.com/laramie/Hooks-Admin"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/link/github",
                    "title": "GitHub 仓库",
                    "isLink": "https://github.com/HalseySpicy/Hooks-Admin"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/link/juejin",
                    "title": "掘金文档",
                    "isLink": "https://juejin.cn/user/3263814531551816/posts"
                },
                {
                    "icon": "AppstoreOutlined",
                    "path": "/link/myBlog",
                    "title": "个人博客",
                    "isLink": "http://www.spicyboy.cn"
                }
            ]
        }
    ]
    const isCollapse = useSelector((state) => state.menu.isCollapse);
    const [menuList, setMenuList] = useState([])
    const { pathname } = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([pathname]);
    const [openKeys, setOpenKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // 动态渲染 Icon 图标
    const customIcons = Icons;
    const addIcon = (name) => {
        return React.createElement(customIcons[name]);
    };
    const deepLoopFloat = (menuList, newArr = []) => {
        menuList.forEach((item) => {
            // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
            if (!item?.children?.length) return newArr.push({ label: item.title, key: item.path, icon: addIcon(item.icon) });
            newArr.push({ label: item.title, key: item.path, icon: addIcon(item.icon), children: deepLoopFloat(item.children) });
        });
        return newArr;
    };
    const getMenuData = async () => {
        setLoading(true);
        try {
            const arr = await deepLoopFloat(list)
            setMenuList(arr);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            getMenuData();
        }, 100);
        // ✅ 必须添加清理函数
        return () => clearTimeout(timer);
    }, []);
    const clickMenu = ({ key }) => {
        setSelectedKeys([key]);
        navigate(key);
    }

    const onOpenChange = (openKeys) => {
        if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
        const latestOpenKey = openKeys[openKeys.length - 1];
        if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
        setOpenKeys([latestOpenKey]);

    }
    return (
        <div className="menu">
            <Spin spinning={loading} tip="Loading...">
                <Logo/>
                <Menu
                    theme="dark"
                    mode="inline"
                    triggerSubMenuAction="click"
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    items={menuList}
                    onClick={clickMenu}
                    inlineCollapsed={isCollapse}
                    onOpenChange={onOpenChange}
                ></Menu>
            </Spin>
        </div>
    )
}

export default LayoutMenu;