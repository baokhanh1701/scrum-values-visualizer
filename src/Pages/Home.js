import {
    MenuFoldOutlined,
    RadarChartOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, FloatButton, Typography, Avatar } from 'antd';
import { useState, useEffect } from 'react';
import AssessmentForm from './AssessmentForm';
import Profile from './Profile';
import TeamAssessment from './TeamAssessment';
import { useNavigate, useParams } from 'react-router-dom';

import { getAccount, getDocument } from '../Firebase/services';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/config';
const { Header, Sider, Content, Footer } = Layout;
const Home = () => {
    const navigate = useNavigate();
    const { uid } = useParams();
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('profile');
    const [isGuest, setIsGuest] = useState(false);
    const [profileData, setProfileData] = useState([]);
    const [historyData, setHistoryData] = useState([]);

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
            console.log(uid !== JSON.parse(localStorage.getItem('data')).uid);
            setIsGuest(uid !== JSON.parse(localStorage.getItem('data')).uid);
        });
    }, [uid]);
    useEffect(() => {
        getDocument('assessment', {
            fieldName: 'userToDb',
            operator: '==',
            compareValue: JSON.parse(localStorage.getItem('data'))
        }).then((data) => {
            setHistoryData(data);
        })
    }, [uid])
    const handleSignOut = async (auth) => {
        const logOut = await signOut(auth);
        try {
            console.log(logOut);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}
                style={{
                    
                }}
            >
                <div className="logo" />
                <div
                    style={{
                        width: "100%",
                        height: 32,
                        padding: 20,
                        marginBottom: 50,
                        background: 'rgba(255, 255, 255, 0.2)',
                        alignSelf: "center",

                    }}
                >
                    <Typography.Title style={{
                        color: "white"
                    }} level={2}>Scrum Visualizer</Typography.Title>
                </div>
                
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['profile']}
                    onClick={menuClick}
                    style={{marginTop: 100}}
                    items={[
                        {
                            key: 'profile',
                            icon: <UserOutlined />,
                            label: 'Profile',
                        },
                        {
                            key: 'assessment-form',
                            icon: <RadarChartOutlined />,
                            label: 'Assessment Form',
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
                    <Button
                        type="text"
                        onClick={() => {
                            handleSignOut(auth);
                        }}
                        style={{
                            fontSize: '16px',
                            height: 64,
                        }}
                    >Sign Out</Button>
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
                        ? <AssessmentForm id='assessment-form-content' />
                        : (current === 'profile') ? <Profile profileData={profileData} historyData={historyData} />
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
