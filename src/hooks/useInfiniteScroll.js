/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react';

const useInfiniteScroll = ({
  root = null,
  rootMargin = '0px',
  threshold = 0.5,
  target,
  targetArray,
  pageSize,
  endPoint = 1, // 리스트의 갯수중 불러올 시점 (pageSize가 20이고 endPoint가 5라면, 15번째 리스트 아이템을 관찰)
}) => {
  const [count, setCount] = useState(1);
  // IntersectionObserver 생성자 등록 및 callback 함수 등록
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries, observer) => {
          // observer 자기자신, // entries: 마지막 칠드런 정보를 담은 객체[], // target: ref로 지정한애 Container
          if (entries[0].isIntersecting) {
            // 관찰하고 있는 entry가 화면에 보여지는 경우
            setCount(v => v + 1); // get 요청
            observer.disconnect(); // setCount가 무한으로 올라가는 것을 방지하기 위해 연결 끊음
          }
        },
        {
          root,
          rootMargin,
          threshold,
        }
      ),
    [target]
  );

  useEffect(() => {
    // 데이터가 정상적으로 추가됐을 때, 다시 관찰시작
    if (pageSize * count <= targetArray.length) {
      // children === 이슈목록 컨테이너의 자식 컴포넌트(헤더, postListItem, 로딩)
      // target.current.children.length - endPoint === 칠드런div 중 마지막 태그가 관찰대상 타겟이됨
      observer.observe(target.current.children[target.current.children.length - endPoint]); // 타겟설정 및 관찰시작
    }
    return () => {
      if (target.current !== null && observer) {
        observer.unobserve(target.current); // 관찰 해제
      }
    };
  }, [count, targetArray, target, pageSize]);

  return {
    count,
    setCount,
  };
};

export default useInfiniteScroll;
