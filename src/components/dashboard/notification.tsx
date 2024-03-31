import type { FC } from 'react';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row } from 'antd';

interface INotificationProps {
  text: string;
  buttonText?: string;
  onClickButton?: () => void;
  icon: IconName;
}

export const Notification: FC<INotificationProps> = ({ text, buttonText, onClickButton, icon }) => (
  <Row className="flex flex-row items-start flex-nowrap gap-3">
    <FontAwesomeIcon icon={['fas', icon]} className="p-2 rounded-full text-blue-500 bg-blue-500/20" />
    <div className="flex flex-col">
      <p className="text-gray-500 text-wrap !m-0">{text}</p>
      {buttonText && (
        <Button className="w-fit font-semibold mt-2" onClick={onClickButton}>
          {buttonText}
        </Button>
      )}
    </div>
  </Row>
);
