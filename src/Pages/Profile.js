import { UserOutlined } from '@ant-design/icons';
import React, { Children, useEffect, useState } from 'react'
import { Layout, Row, Col, Typography, List, Tabs, Avatar } from "antd";
import { getDocument } from '../Firebase/services';
import { useParams } from 'react-router-dom';
import Chart from '../Components/Chart';
const { Title, Text } = Typography;

export default function PersonalAssessment({ profileData, historyData }) {
  const uid = useParams();
  const profileDataArray = [
    `First Name: ${profileData?.firstName}`,
    `Last Name: ${profileData?.lastName}`,
    `Team: ${profileData?.team_uid}`,
    `Role: ${profileData?.roles}`,
    `Facebook: ${profileData?.facebookLink}`,
  ]

  const historyDataArray = historyData.map(item => {
    return item
  });

  return (
    <div>
      <Title>Profile</Title>
      <Avatar
        size="large"
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          color: "black",
          cursor: "pointer",
          width: 100,
          marginRight: 50,
          height: 100
        }}
        icon={profileData?.photoURL ? <img src={profileData?.photoURL} alt="user" /> : <UserOutlined />}
      >
      </Avatar>
      <Text style={{
        fontSize: 25
      }}>
        Welcome back, {<Text style={{ fontSize: 25 }} strong>{profileData?.lastName}  {profileData?.firstName}</Text>}!
        <br />
        <br />
      </Text>
      <br />
      <Tabs
        defaultActiveKey="pii"
        items={[
          {
            label: "Personal Information",
            key: 'pii',
            children:
              <div style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}>
                <br />
                <br />
                <br />
                <List
                  size="large"
                  style={{
                    width: "40vw"
                  }}
                  header={<Title strong level={4}>PERSONAL INFORMATION</Title>}
                  footer={<div style={{ backgroundColor: '#1C1C1C' }}></div>}
                  bordered
                  dataSource={profileDataArray}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <br />
                <br />
                <br />
              </div>
          },
          {
            label: "History",
            key: 'history',
            children:
              <div>
                <List
                  itemLayout="vertical"
                  size="large"
                  style={{
                    width: "30vw"
                  }}
                  header={<Title strong level={4}>HISTORY</Title>}
                  footer={<div style={{ backgroundColor: '#1C1C1C' }}></div>}
                  bordered
                  dataSource={historyDataArray}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<a href={
                          "/chart?cou=" + item.scrumValuesState.courage
                          + "&com=" + item.scrumValuesState.commitment
                          + "&foc=" + item.scrumValuesState.focus
                          + "&ope=" + item.scrumValuesState.openness
                          + "&res=" + item.scrumValuesState.respect
                        } >Personal Assessment {index + 1}</a>}
                        description={<div>Created at {item?.createdAt.toDate().toDateString()}</div>}
                      />
                      <ul>
                        <li>Courage: {item.scrumValuesState.courage} (attributes)</li>
                        <li>Commitment: {item.scrumValuesState.commitment} (attributes)</li>
                        <li>Focus: {item.scrumValuesState.focus} (attributes)</li>
                        <li>Openness: {item.scrumValuesState.openness} (attributes)</li>
                        <li>Respect: {item.scrumValuesState.respect} (attributes)</li>
                      </ul>
                    </List.Item>)}
                />
              </div>
          }
        ]}
      // new Array(3).fill(null).map((_, i) => {
      // const id = String(i + 1);
      // return {
      //   label: `Tab ${id}`,
      //   key: id,
      //   children: `Content of Tab Pane ${id}`,
      // };})
      />

      <br />
      <br />
    </div>
  )
}
