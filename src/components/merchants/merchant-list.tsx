import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Row, Select, Table, Tag } from 'antd';
import { Card } from '../dashboard/card';
import { PaymentStatus } from '../wallets/payment-status';

const data = [
  {
    id: 1,
    name: 'Merchant 1',
    wallets: 1,
    status: 4,
    walletData: [{ type: 'Requested', label: 'MX', country: 'Mexico', date: '20/11/2022' }]
  },
  {
    id: 2,
    name: 'Merchant 2',
    wallets: 2,
    status: 1
  },
  {
    id: 3,
    name: 'Merchant 3',
    wallets: 5,
    status: 1
  }
];

export const MerchantList = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Wallets',
      dataIndex: 'wallets',
      key: 'wallets',
      render: (text: string, record: any) => (
        <div>
          <span>{text}</span>
          {record.walletData?.map((item: any) => (
            <div key={item.label} className="pl-3 mt-3">
              <Row className="flex flex-row items-center">
                <span className="flex flex-row items-center">
                  <span className="block w-3 h-3 bg-red-500 mr-2" /> {item.label}
                </span>
                <Tag color="#d0d0d0" className="ml-3 rounded h-5 w-20 p-0 flex items-center justify-center">
                  {item.type}
                </Tag>
              </Row>
              <Row className="gap-3 text-gray-400">
                <span>Country: {item.country}</span>
                <span>Date requested: {item.date}</span>
              </Row>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: number) => <PaymentStatus status={text} />
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_: any, record: any) => (
        <Button type="text" className="text-blue-500" onClick={() => navigate(`?id=${record.id}`)}>
          View profile
        </Button>
      )
    }
  ];

  return (
    <div>
      <Row className="gap-5">
        <Card title="Total merchants" value={5} icon="shop" color="bg-gray-400/10 !rounded" />
        <Card title="Total wallets" value={28} icon="wallet" color="bg-gray-400/10 !rounded" />
        <Card title="Average transaction" value="$560" icon="money-bill-transfer" color="bg-gray-400/10 !rounded" />
      </Row>

      <Row className="flex flex-row justify-between mt-5">
        <Input placeholder="Search for merchants" prefix={<SearchOutlined />} className="w-[300px]" />
        <Select
          options={[
            {
              value: 'all',
              label: 'All statuses'
            }
          ]}
          defaultValue="all"
        />
      </Row>

      <div className="mt-5">
        <Table rowKey={(item) => item.id} columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};
