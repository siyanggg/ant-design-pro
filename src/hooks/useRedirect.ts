import { useLocation } from 'umi';

const useRedirect = ({ baseUrl = '' }: { baseUrl: string }) => {
  const location = useLocation();

  function getSubUrl(): string {
    const subUrl: string = location.pathname.replace(baseUrl, '');
    if (subUrl === undefined || subUrl === null || subUrl === '') {
      return '/';
    }
    if (subUrl !== '/') {
      if (subUrl.endswith('/')) {
        return subUrl.substring(0, subUrl.length - 1);
      }
    }
    return subUrl;
  }
  const subUrl = getSubUrl();
  return { subUrl };
};

export default useRedirect;
