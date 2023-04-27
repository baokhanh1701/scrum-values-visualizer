import React from 'react';
import { Typography, Tabs } from "antd";
import Chart from '../Components/Chart';
const { Title, Text } = Typography;

export default function TeamAssessment() {
  return (
    <div>
      <Title>Team Assessment</Title>
      <Text>
        <br />
        <br />
      </Text>
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: "Tab 1",
            key: '1',
            children:
              <div>
                tab1
              </div>
          },
          {
            label: "Tab 2",
            key: '2',
            children:
              <div>
                tab2
              </div>
          }
        ]}
      />
    </div>
  )
}
