import ReactCountryFlag from 'react-country-flag';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Row, Select, Table, Tabs, Tag, Typography } from 'antd';
import { PaymentStatus } from '../wallets/payment-status';

const data = [
  {
    currency: 'USD',
    countryCode: 'RO',
    country: 'Romania',
    date: '23/04/2024',
    status: 1
  },
  {
    currency: 'USD',
    countryCode: 'US',
    country: 'Romania',
    date: '23/04/2024',
    status: 1
  },
  {
    currency: 'USD',
    countryCode: 'DE',
    country: 'Romania',
    date: '23/04/2024',
    status: 1
  },
  {
    currency: 'USD',
    countryCode: 'BE',
    country: 'Romania',
    date: '23/04/2024',
    status: 3
  },
  {
    currency: 'USD',
    countryCode: 'IT',
    country: 'Romania',
    date: '23/04/2024',
    status: 2
  },
  {
    currency: 'USD',
    countryCode: 'US',
    country: 'Romania',
    date: '23/04/2024',
    status: 1
  }
];

export const MerchantDetails = () => {
  const columns = [
    {
      key: 'currency',
      title: 'Currency',
      dataIndex: 'currency',
      render: (text: string, record: any) => (
        <Row className="flex flex-row items-center gap-3">
          <ReactCountryFlag
            countryCode={record.countryCode}
            svg
            style={{
              height: '1.5rem',
              width: '1.5rem'
            }}
          />
          {text}
        </Row>
      )
    },
    {
      key: 'country',
      title: 'Country',
      dataIndex: 'country'
    },
    {
      key: 'date',
      title: 'Date requested',
      dataIndex: 'date'
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: (value: number) => <PaymentStatus status={value} />
    },
    {
      key: 'actions',
      title: 'Actions',
      width: 200,
      render: () => (
        <Button type="text" className="text-blue-400">
          View details
        </Button>
      )
    }
  ];

  return (
    <Row className="flex flex-col items-stretch">
      <Button className="self-start" type="text" icon={<ArrowLeftOutlined />}>
        <span>Merchants list</span>
      </Button>

      <div className="bg-white rounded-lg shadow p-5 mt-3">
        <div>
          <Row className="flex flex-row items-center">
            <Typography.Title level={4} className="!mb-0">
              Merchant name
            </Typography.Title>
            <Tag color="green" className="block ml-3 rounded-xl">
              Authorized
            </Tag>
          </Row>
          <Row className="gap-5 mt-2 text-gray-500">
            <span>
              <FontAwesomeIcon icon={['fas', 'globe']} /> georgian.rocks
            </span>
            <span>
              <FontAwesomeIcon icon={['fas', 'location-dot']} /> Cluj-Napoca, Romania
            </span>
            <span>
              <FontAwesomeIcon icon={['fas', 'envelope']} /> contact@georgian.rocks
            </span>
          </Row>
        </div>

        <Tabs
          className="mt-5"
          items={[
            { key: 'wallets', label: 'Wallets' },
            { key: 'transactions', label: 'Transactions' },
            { key: 'documents', label: 'Documents' },
            { key: 'details', label: 'Accounts Details' },
            { key: 'settings', label: 'Settings' }
          ]}
        />

        <div>
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
        </div>

        <div className="mt-5">
          <Table rowKey={(item) => item.id} columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </Row>
  );
};
