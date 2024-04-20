import { Column } from '@ant-design/plots';
import { Card as CardAnt, Col, Empty, Row, Space, Typography } from 'antd';
import { Card } from '../components/dashboard/card';
import { Notification } from '../components/dashboard/notification';
import { ServiceProvider } from '../components/dashboard/service-provider';

const { Title } = Typography;

const config = {
  data: [
    {
      name: 'Top-ups',
      amount: 25000,
      value: '25-03-2024'
    },
    {
      name: 'Transfers',
      amount: 8000,
      value: '25-03-2024'
    },
    {
      name: 'Payouts',
      amount: 15000,
      value: '25-03-2024'
    },

    {
      name: 'Top-ups',
      amount: 8000,
      value: '26-03-2024'
    },
    {
      name: 'Transfers',
      amount: 16000,
      value: '26-03-2024'
    },
    {
      name: 'Payouts',
      amount: 35000,
      value: '26-03-2024'
    },

    {
      name: 'Top-ups',
      amount: 2000,
      value: '27-03-2024'
    },
    {
      name: 'Transfers',
      amount: 8000,
      value: '27-03-2024'
    },
    {
      name: 'Payouts',
      amount: 3000,
      value: '27-03-2024'
    },

    {
      name: 'Top-ups',
      amount: 25000,
      value: '28-03-2024'
    },
    {
      name: 'Transfers',
      amount: 8000,
      value: '28-03-2024'
    },
    {
      name: 'Payouts',
      amount: 15000,
      value: '28-03-2024'
    },

    {
      name: 'Top-ups',
      amount: 25000,
      value: '29-03-2024'
    },
    {
      name: 'Transfers',
      amount: 8000,
      value: '29-03-2024'
    },
    {
      name: 'Payouts',
      amount: 15000,
      value: '29-03-2024'
    },

    {
      name: 'Top-ups',
      amount: 25000,
      value: '30-03-2024'
    },
    {
      name: 'Transfers',
      amount: 8000,
      value: '30-03-2024'
    },
    {
      name: 'Payouts',
      amount: 15000,
      value: '30-03-2024'
    },

    {
      name: 'Top-ups',
      amount: 25000,
      value: '31-03-2024'
    },
    {
      name: 'Transfers',
      amount: 8000,
      value: '31-03-2024'
    },
    {
      name: 'Payouts',
      amount: 15000,
      value: '31-03-2024'
    },

    {
      name: 'Top-ups',
      amount: 25000,
      value: '01-04-2024'
    },
    {
      name: 'Transfers',
      amount: 8000,
      value: '01-04-2024'
    },
    {
      name: 'Payouts',
      amount: 35000,
      value: '01-04-2024'
    }
  ],
  xField: 'value',
  yField: 'amount',
  colorField: 'name',
  legend: true,
  group: true,
  style: {
    inset: 5
  }
};

export const Dashboard = () => {
  const { innerHeight } = window;

  return (
    <div className="h-full flex flex-col items-stretch justify-stretch">
      <div className="flex flex-col items-start">
        <Title className="!mb-0" level={4}>
          Hello Georgian,
        </Title>
        <Title level={4} className="!font-thin !m-0">
          Have a nice day!
        </Title>
      </div>

      <Row className="flex-1 flex flex-row gap-5 pt-8 items-start flex-nowrap">
        <Col span={19} className="flex-1 flex flex-col gap-5 h-full">
          <Row className="flex flex-row items-center w-full gap-5">
            <Card title="Total transfers" value={200} icon="up-down" color="text-blue-400 bg-blue-400/20" />
            <Card title="Total Payouts" value={156} icon="arrow-up" color="text-red-400 bg-red-400/20" />
            <Card title="Total Top ups" value={78} icon="plus" color="text-green-400 bg-green-400/20" />
          </Row>

          <div className="bg-white rounded-lg shadow">
            <Column {...config} title="Transactions overview" height={innerHeight * 0.35} />
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
        </Col>

        <Col span={5} className="flex flex-col gap-5 h-full">
          <CardAnt title="Notifications" className="flex-1 shadow">
            <Space className="flex flex-col items-start gap-5 overflow-y-auto max-h-[30vh]">
              <Notification buttonText="Open request" text="Nicholas has requested to join your network as a merchant" icon="store" />
              <Notification buttonText="Open request" text="Joe has requested to open a USD wallet" icon="wallet" />
              <Notification text="Notification about something in the system" icon="info-circle" />
            </Space>
          </CardAnt>

          <CardAnt title="Favorite Service Providers" className="flex-1 shadow">
            <div className="flex w-full flex-col items-start gap-5 overflow-y-auto max-h-[30vh]">
              <ServiceProvider icon="apple" provider="Apple Inc" value={490} />
              <ServiceProvider icon="themeisle" provider="Themeisle Service Provider" value={490} />
              <ServiceProvider icon="medrt" provider="Medrt Services" value={490} />
            </div>
          </CardAnt>
        </Col>
      </Row>
    </div>
  );
};
