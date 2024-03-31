import type { FC } from 'react';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Typography } from 'antd';

interface IServiceProviderProps {
  icon: IconName;
  provider: string;
  value: number;
}

export const ServiceProvider: FC<IServiceProviderProps> = ({ icon, provider, value }) => (
  <Row className="flex items-center w-full">
    <FontAwesomeIcon
      icon={['fab', icon]}
      className="rounded-full flex items-center justify-center mr-2 p-1 aspect-square bg-gray-500/20"
      size="2xl"
    />
    <Typography.Paragraph className="flex-1 !mb-0">{provider}</Typography.Paragraph>
    <p className="!ml-auto rounded-xl bg-green-500/20 text-green-500 text-[13px] py-0.5 px-2 m-0">{value} TRX</p>
  </Row>
);
