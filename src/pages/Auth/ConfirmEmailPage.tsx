import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Typography, Image, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { ASSETS } from '../../assets/assets';
import AuthService from '../../services/authService';

const { Title, Text } = Typography;

const ConfirmEmail: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const userId = queryParams.get('userId');

    if (token && userId) {
      AuthService.confirmEmail({ token, userId })
        .then(() => setIsVerified(true))
        .catch(() => {
          setIsVerified(false);
          setErrorMessage(t('errorMessage'));
        });
    } else {
      setIsVerified(false);
      setErrorMessage(t('noToken'));
    }
  }, [location, t]);

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Image src={ASSETS.LOGO} alt="App Logo" width={300} preview={false} />
        </div>
        <Card bordered={false}>
          {isVerified === null && (
            <div style={{ textAlign: 'center' }}>
              <Spin size="large" />
              <Title level={4} style={{ marginTop: 16 }}>
                {t('verifyingEmail')}
              </Title>
            </div>
          )}

          {isVerified === true && (
            <div style={{ textAlign: 'center' }}>
              <Title level={3} style={{ color: '#52c41a' }}>
                {t('emailConfirmed')}
              </Title>
              <div style={{ marginTop: 24 }}>
                <Button type="primary" onClick={handleRedirect}>
                  {t('goToLogin')}
                </Button>
              </div>
            </div>
          )}

          {isVerified === false && (
            <div style={{ textAlign: 'center' }}>
              <Title level={3} style={{ color: '#ff4d4f' }}>
                {t('emailFailed')}
              </Title>
              <Text type="danger">{errorMessage}</Text>
              <div style={{ marginTop: 24 }}>
                <Button danger onClick={handleRedirect}>
                  {t('tryAgain')}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default ConfirmEmail;
