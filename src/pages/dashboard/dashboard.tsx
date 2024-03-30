import { InfoCircleFilled, InfoCircleOutlined, InfoOutlined, PlusOutlined, RetweetOutlined, ToTopOutlined } from '@ant-design/icons';
import { Column } from '@ant-design/plots';
import { Button, Card as CardAnt, Empty, Row, Space, Typography } from 'antd';
import { Card } from '../../components/dashboard/card';

const { Title, Paragraph } = Typography;

const config = {
  data: {
    type: 'fetch',
    value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json'
  },
  xField: '月份',
  yField: '月均降雨量',
  colorField: 'name',
  group: true,
  style: {
    inset: 5
    // insetLeft:5,
    // insetRight:20,
    // insetBottom:10
    // insetTop:10
  }
};

export const Dashboard = () => (
  <div className="h-full relative overflow-hidden">
    <Title className="!mb-0" level={4}>
      Hello Georgian,
    </Title>
    <Title level={4} className="!font-thin !m-0">
      Have a nice day!
    </Title>

    <div className="h-full flex gap-5 pt-8 items-start pb-14 flex-nowrap">
      <div className="flex-1 flex flex-col gap-5 h-full">
        <Row className="flex flex-row items-center w-full gap-5">
          <Card title="Total transfers" value={200} icon={<RetweetOutlined color="#ff0000" />} />
          <Card title="Total Payouts" value={156} icon={<ToTopOutlined />} />
          <Card title="Total Top ups" value={78} icon={<PlusOutlined />} />
        </Row>

        <div className="bg-white rounded-lg shadow flex-1">
          <Column {...config} title="Transactions overview" />
        </div>

        <Row className="gap-5">
          <Card title="Open Position" value="$60,500.00" />
          <Card title="Total transactions amount" value="$560,564.12" />
        </Row>

        <CardAnt title="Market Rates" className="flex-1">
          <div className="flex flex-col items-center justify-center h-full w-full flex-1">
            <Empty />
          </div>
        </CardAnt>
      </div>

      <div className="w-1/4 flex flex-col gap-5 h-full">
        <CardAnt title="Notifications" className="flex-1 shadow">
          <Space className="flex flex-col items-start gap-5">
            <Row className="flex flex-row items-start flex-nowrap gap-3">
              <InfoCircleOutlined className="text-blue-500 bg-blue-200/40 p-2 rounded-full" />
              <div className="flex flex-col">
                <p className="text-gray-500 text-wrap !m-0">Emaar has requested to join your network as a merchant</p>
                <Button className="w-fit font-semibold mt-2">Open Request</Button>
              </div>
            </Row>
            <Row className="flex flex-row items-start flex-nowrap gap-3">
              <InfoCircleOutlined className="text-blue-500 bg-blue-200/40 p-2 rounded-full" />
              <div className="flex flex-col">
                <p className="text-gray-500 text-wrap !m-0">Emaar has requested to open a USD wallet</p>
                <Button className="w-fit font-semibold mt-2">Open Request</Button>
              </div>
            </Row>
            <Row className="flex flex-row items-start flex-nowrap gap-3">
              <InfoCircleOutlined className="text-blue-500 bg-blue-200/40 p-2 rounded-full" />
              <div className="flex flex-col">
                <p className="text-gray-500 text-wrap !m-0">Something in the system</p>
              </div>
            </Row>
          </Space>
        </CardAnt>

        <CardAnt title="Favorite Service Providers" className="flex-1 shadow">
          <p>Emaar has requested to join your network as a merchant</p>
          <p>Emaar has requested to join your network as a merchant</p>
          <p>Emaar has requested to join your network as a merchant</p>
          <p>Emaar has requested to join your network as a merchant</p>
        </CardAnt>
      </div>
    </div>
  </div>
);
