// src/hooks/useDocumentTitle.ts
import { useEffect } from 'react';

export const useDocumentTitle = (title: string, description: string) => {
  useEffect(() => {
    // 페이지 제목 변경
    document.title = title;

    // meta description 태그 찾기
    let metaDescription = document.querySelector('meta[name="description"]');

    // 만약 meta 태그가 없다면 새로 생성
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    // description 내용 변경
    metaDescription.setAttribute('content', description);

  }, [title, description]); // title이나 description이 바뀔 때만 실행
};