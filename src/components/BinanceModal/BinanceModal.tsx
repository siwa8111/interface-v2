import React from 'react';
import { CustomModal } from 'components';
import { useTranslation } from 'react-i18next';

interface BinanceModalProps {
  open: boolean;
  onClose: () => void;
}

const BinanceModal: React.FC<BinanceModalProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      background='#fff'
      overflow='hidden'
    >
      <div style={{ height: '100%', width: '100%', overflowY: 'auto' }}>
        <iframe
          title='binance connect'
          allow='accelerometer; autoplay; camera; gyroscope; payment'
          frameBorder='0'
          height='600px'
          src={`https://sandbox.bifinity.org/en/pre-connect?merchantCode=quickswap_test&timestamp=${new Date().getTime()}`}
          width='100%'
        >
          <p>{t('notSupportIframe')}</p>
        </iframe>
      </div>
    </CustomModal>
  );
};

export default BinanceModal;
