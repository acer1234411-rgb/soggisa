import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 라우트(페이지)가 변경될 때마다 스크롤 위치를 맨 위로 초기화합니다.
 * SPA에서 페이지 이동 시 이전 스크롤 위치가 유지되는 문제를 해결합니다.
 */
export default function RouteScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
