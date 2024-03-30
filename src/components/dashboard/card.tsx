import type { FC } from 'react';
import { Row } from 'antd';

interface ICardProps {
  icon?: any;
  color?: string;
  title: string;
  value: string | number;
}

export const Card: FC<ICardProps> = ({ icon, title, value }) => (
  <Row className="flex-1 flex flex-row items-center justify-start bg-white p-5 rounded-lg gap-5 shadow">
    {icon && <div className="bg-blue-400/20 rounded-full w-10 h-10 flex items-center justify-center">{icon}</div>}
    <div className="flex flex-col items-start justify-center">
      <span className="text-gray-500">{title}</span>
      <span className="text-blue-600 font-bold text-lg">{value}</span>
    </div>
  </Row>
);
