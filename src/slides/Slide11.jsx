import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide11 = () => {
  const deviceFlow = [
    'Microsoft Graph API 인증',
    '브라우저 기반 사용자 인증',
    'Public Client (Client Secret 불필요)'
  ];

  const autoRefresh = [
    '1. 서버 시작 시 자동 검증 및 갱신',
    '2. 실시간 갱신 (만료 5분 전)',
    '3. 스케줄러 갱신 (매일 00:00 KST)',
    '4. 수동 갱신 API (/api/auth/graph/refresh)'
  ];

  const tokenManagement = [
    'Access Token: 1시간 유효',
    'Refresh Token: 90일 유효',
    'MSAL 영구 캐시 (.msal-cache.json)',
    '서버 재시작 시 자동 복구'
  ];

  return (
    <Slide number={11}>
      <div className="split-layout">
        <div className="split-left">
          <h1 style={{ textAlign: 'center' }}>9. MSAL 인증 시스템</h1>

          <div className="vertical-layout">
            <InfoBox title="Device Flow 인증" items={deviceFlow} />
            <InfoBox title="4단계 토큰 자동 갱신" items={autoRefresh} />
            <InfoBox title="토큰 관리" items={tokenManagement} />
          </div>
        </div>
        <div className="split-right-with-padding">
          <img src={`${import.meta.env.BASE_URL}msal.jpg`} alt="MSAL Authentication" className="split-image" />
        </div>
      </div>
    </Slide>
  );
};


export default Slide11;
