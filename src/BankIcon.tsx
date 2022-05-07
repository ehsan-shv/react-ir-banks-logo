import React, { FC } from 'react';
// @ts-ignore: Unreachable code error
import icons from './icons.svg';
import banksCode from './banksCode';

interface IBank {
  code: string;
  name: string;
  id: string;
}

interface BankIconProps {
  digits: number | string;
  onFindBankName?: (name: string) => void;
  size?: string;
  margin?: string;
}

export const BankIcon: FC<BankIconProps> = ({
  digits,
  onFindBankName,
  size = '40px',
  margin = '8px',
}) => {
  const bankId = () => {
    if (!digits) return <></>;

    if (digits && digits.toString().length === 16) {
      const code = digits.toString().substr(0, 6);
      const findBank = (banksCode as IBank[]).find(bank => bank.code === code);

      if (findBank) {
        if (onFindBankName) onFindBankName(findBank.name);
        if (onFindBankName) onFindBankName('');
        return (
          <svg
            className="c-IRBankIcon"
            style={{ width: size, height: size, margin }}
          >
            <use xlinkHref={`${icons}#${findBank.id}`}></use>
          </svg>
        );
      } else {
        if (onFindBankName) onFindBankName('');
        return <></>;
      }
    } else {
      if (onFindBankName) onFindBankName('');
      return <></>;
    }
  };
  return bankId();
};
