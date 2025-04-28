
import { Card, Row, Col,Image } from 'antd';
import Register from '../../components/Auth/Register';
import { ASSETS } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <Image src={ASSETS.LOGO} alt="App Logo" width={300} preview={false} />
        </div>
        <Card title={t('register')} >
          <Register />
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterPage;