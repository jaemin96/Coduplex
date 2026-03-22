import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  // 검색 범위 필터
  const searchMonthly = searchParams.get('searchMonthly');
  const searchConsult = searchParams.get('searchConsult');
  // const searchJPTM = searchParams.get('searchJPTM');

  // 검색 키워드
  const searchStr = searchParams.get('searchStr');

  useEffect(() => {
    console.log({ searchParams, searchMonthly, searchStr, searchConsult });
  }, [searchConsult, searchMonthly, searchParams, searchStr]);

  return (
    <div className="pl-4 space-y-2">
      {/* 검색 필터 */}
      <div>
        <strong>Monthly: </strong> {searchMonthly === '1' ? '활성' : '비활성'}
      </div>
      <div>
        <strong>Consult: </strong> {searchConsult === '1' ? '활성' : '비활성'}
      </div>
      <div>{/* <strong>JPTM: </strong> {searchJPTM === '1' ? '활성' : '비활성'} */}</div>

      {/* 검색 키워드 */}
      <div>
        <strong>검색 keyword: </strong> {searchStr || '없음'}
      </div>
    </div>
  );
};

export default SearchPage;
