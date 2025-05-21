
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useState, useEffect } from "react";
import "./index.scss";
import LayoutMenu from "@/layouts/components/Menu";
import LayoutHeader from "@/layouts/components/Header";
import LayoutFooter from "./components/Footer";
import { connect } from "react-redux";
import { switchCollapse } from "@/redux/modules/menu";

const LayoutIndex = (props) => {
    const { Content, Sider } = Layout;
    const { isCollapse, switchCollapse } = props
    const listenWindow = () => {
        let screenWidth = document.body.clientWidth;
        if (screenWidth < 1200 && !isCollapse) {
            switchCollapse()
        } else if (screenWidth > 1200 && isCollapse) {
            switchCollapse()
        }
    }
    useEffect(() => {
        window.addEventListener('resize', listenWindow);
        return () => {
            window.removeEventListener('resize', listenWindow);
        };
    }, [isCollapse])
    return (
        <section className="container">
            <Sider trigger={null} collapsed={isCollapse} width={220} theme="dark">
                <LayoutMenu />
            </Sider>
            <Layout>
                <LayoutHeader></LayoutHeader>
                <Content >
                    <Outlet></Outlet>
                </Content>
                <LayoutFooter></LayoutFooter>
            </Layout>
        </section>
    )
}
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { switchCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);