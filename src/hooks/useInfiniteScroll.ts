import {useEffect, useRef} from 'react';

interface UseIntersectionObserverProps {
  onIntersect: () => void; // 화면에 보이면 실행할 함수
  isLoading?: boolean;
  threshold?: number; // 얼마나 보여야 발동할지 (0.0 ~ 1.0)
  rootMargin?: string; // 화면에서 얼마나 먼 곳에서부터 감시할지 (px)
}

/**
 * 무한 스크롤 인터섹션 옵저버,
 * onIntersect에 감지시 실행할 함수 입력
 */
export const useInfiniteScroll = ({
                                    onIntersect,
                                    isLoading = false,
                                    threshold = 0.1,
                                    rootMargin = '0px',
                                  }: UseIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!targetRef.current || isLoading) return;

    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onIntersect();
          }
        },
        {threshold, rootMargin}
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [onIntersect, isLoading, threshold, rootMargin]);

  return targetRef;
};