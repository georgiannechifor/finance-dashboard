import type { FC } from 'react';
import React, { useMemo } from 'react';
import { Tag } from 'antd';

interface IPaymentStatusProps {
  status: number;
}

export const PaymentStatus: FC<IPaymentStatusProps> = ({ status }) => {
  const statusColor = useMemo(() => {
    switch (status) {
      case 0:
        return 'yellow';
      case 1:
        return 'green';
      case 2:
        return 'red';
      case 3:
        return 'blue';
      case 4:
        return 'gray';
      default:
        return '';
    }
  }, [status]);
  const statusText = useMemo(() => {
    switch (status) {
      case 0:
        return 'In verification';
      case 1:
        return 'Approved';
      case 2:
        return 'Rejected';
      case 3:
        return 'Verified';
      case 4:
        return 'Pending';
      default:
        return '';
    }
  }, [status]);

  return (
    <Tag color={statusColor} className="rounded-xl">
      {statusText}
    </Tag>
  );
};
