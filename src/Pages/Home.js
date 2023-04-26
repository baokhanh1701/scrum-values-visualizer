import {
    MenuFoldOutlined,
    RadarChartOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, FloatButton } from 'antd';
import { useState, useEffect } from 'react';
import AssessmentForm from './AssessmentForm';
import Profile from './Profile';
import TeamAssessment from './TeamAssessment';
import { useParams } from 'react-router-dom';
import { getAccount } from '../Firebase/services';
const { Header, Sider, Content, Footer } = Layout;
const Home = () => {
    const {uid} = useParams();
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('');
    const [ isGuest, setIsGuest ] = useState(false);
    const [profileData, setProfileData] = useState([]);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const menuClick = (e) => {
        console.log('click', e);
        setCurrent(e.key);
    }
    useEffect(() => {
        getAccount('users', {
            fieldName: 'uid',
            operator: '==',
            compareValue: uid
        }).then((data) => {
            setProfileData(data[0]);
            console.log(uid!==JSON.parse(localStorage.getItem('data')).uid);
            setIsGuest(uid!==JSON.parse(localStorage.getItem('data')).uid);
        })
    })
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                ></div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['assessment-form']}
                    onClick={menuClick}
                    items={[
                        {
                            key: 'assessment-form',
                            icon: <RadarChartOutlined />,
                            label: 'Assessment Form',
                        },
                        {
                            key: 'personal-assessment',
                            icon: <UserOutlined />,
                            label: 'Personal Assessment',
                        },
                        {
                            key: 'team-assessment',
                            icon: <TeamOutlined />,
                            label: 'Team Assessment',
                        },

                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {(current === 'assessment-form')
                        ? <AssessmentForm id='assessment-form-content'/>
                        : (current === 'personal-assessment') ? <Profile />
                        : <TeamAssessment />
                    }
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Beehexa ©2023 Created by Nguyen Kieu Bao Khanh
                </Footer>
            </Layout>
            <FloatButton.BackTop />
        </Layout>
    );
};
export default Home;
