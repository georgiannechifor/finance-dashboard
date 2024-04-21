import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { CreditCardOutlined, EllipsisOutlined, PlusOutlined, SearchOutlined, SwapOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Dropdown, Form, Input, Row, Select, Space, Table, Tabs, Tag, Typography } from 'antd';
import { PaymentStatus } from '../components/wallets/payment-status';

const data = [
  {
    currency: 'USD',
    countryCode: 'US',
    balance: 0,
    bank: 'Core Bank',
    serviceProvider: 'LuLu Exchange',
    country: 'SA',
    alias: 'payment-wallet',
    status: 0
  },
  {
    currency: 'USD',
    countryCode: 'US',
    balance: 0,
    bank: 'Core Bank',
    serviceProvider: 'LuLu Exchange',
    country: 'KW',
    alias: 'core-bank-wallet-USD',
    status: 1
  },
  {
    currency: 'AED',
    countryCode: 'AE',
    balance: 10000,
    bank: 'Puduppadi Service Co',
    serviceProvider: 'LuLu Exchange',
    country: 'QA',
    alias: 'top-up-wallet',
    status: 1
  },
  {
    currency: 'USD',
    countryCode: 'US',
    balance: 0,
    bank: 'Metro',
    serviceProvider: 'LuLu Exchange',
    country: 'QA',
    alias: 'alias-name-one',
    status: 3
  },
  {
    currency: 'USD',
    countryCode: 'US',
    balance: 100,
    bank: 'Core Bank',
    serviceProvider: 'LuLu Exchange',
    country: 'DE',
    alias: 'top-up-wallet-rejected',
    status: 2
  },
  {
    currency: 'USD',
    countryCode: 'US',
    balance: 0,
    bank: 'Core Bank',
    serviceProvider: 'LuLu Exchange',
    country: 'SA',
    alias: 'payment-wallet',
    status: 0
  }
];

export const Wallets = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [topupDrawerOpen, setTopupDrawerOpen] = useState<boolean>(false);

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
      key: 'balance',
      title: 'Balance',
      dataIndex: 'balance'
    },
    {
      key: 'bank',
      title: 'Bank',
      dataIndex: 'bank'
    },
    {
      key: 'serviceProvider',
      title: 'Service Provider',
      dataIndex: 'serviceProvider'
    },
    {
      key: 'country',
      title: 'Country',
      dataIndex: 'country'
    },
    {
      key: 'alias',
      title: 'Alias',
      dataIndex: 'alias'
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
      render: () => (
        <Dropdown
          menu={{
            items: [
              { key: 'top-up', label: 'Top-up wallet', icon: <PlusOutlined />, onClick: () => setTopupDrawerOpen(true) },
              { key: 'transfer', label: 'Transfer', icon: <SwapOutlined /> },
              { key: 'payout', label: 'Payout', icon: <CreditCardOutlined /> }
            ]
          }}
          trigger={['click']}
        >
          <EllipsisOutlined className="text-xl" />
        </Dropdown>
      )
    }
  ];

  return (
    <div className="h-full flex flex-col items-stretch justify-stretch">
      <div className="bg-white w-full p-5">
        <Typography.Title className="!m-0 !p-0 flex flex-row items-center gap-3" level={4}>
          Wallets <Tag className="rounded-full bg-gray-100">5</Tag>
        </Typography.Title>

        <Tabs
          items={[
            {
              key: 'overview',
              label: 'Overview'
            },
            {
              key: 'requested',
              label: 'Requested'
            },
            {
              key: 'in-verification',
              label: 'In verification'
            },
            {
              key: 'approved',
              label: 'Approved'
            },
            {
              key: 'rejected',
              label: 'Rejected'
            }
          ]}
        />
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <Input
          prefix={<SearchOutlined />}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          size="large"
          placeholder="search for name, country, bank or currency"
        />

        <Table
          columns={columns}
          dataSource={
            !searchValue
              ? data
              : data.filter(
                  (item) =>
                    item.serviceProvider.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.bank.toLowerCase().includes(searchValue.toLowerCase()) ||
                    item.alias.toLowerCase().includes(searchValue.toLowerCase())
                )
          }
        />
      </div>

      <Drawer
        footer={
          <Row className="gap-5 justify-end">
            <Button type="text" className="font-semibold">
              Cancel
            </Button>
            <Button type="primary">Top up</Button>
          </Row>
        }
        title="Top up wallet"
        width={450}
        open={topupDrawerOpen}
        onClose={() => setTopupDrawerOpen(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Bank linking methods">
            <Select
              placeholder="Select option"
              options={[
                {
                  value: 'offline',
                  label: 'Offline Transfer'
                },
                {
                  value: 'net',
                  label: 'Net banking (on hold)'
                },
                {
                  value: 'debit',
                  label: 'Debit card'
                },
                {
                  value: 'debit-auth',
                  label: 'Debit authorization (DDS)'
                }
              ]}
            />
          </Form.Item>

          <Form.Item label="Transaction details">
            <Col span={24}>
              <span className="text-gray-400 block pb-5">Write down your transaction details and upload a proof of the offline transaction.</span>
            </Col>
            <Row className="flex flex-row justify-between">
              <Col span={11}>
                <Form.Item label="Transaction id" required>
                  <Input placeholder="D9-145234123412" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Load amount" required>
                  <Input placeholder="5000.00" addonAfter={<span>AED</span>} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Source of income" required>
              <Select options={[]} placeholder="Business" />
            </Form.Item>

            <Form.Item label="Purpose of transaction" required>
              <Select options={[]} placeholder="Trade transactions" />
            </Form.Item>

            <Form.Item label="Remarks (optional)">
              <Input.TextArea placeholder="Type something..." />
            </Form.Item>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};
