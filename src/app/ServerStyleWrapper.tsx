"use client";

import React, {useState} from "react";
import {useServerInsertedHTML} from "next/navigation";
import {ServerStyleSheet, StyleSheetManager} from "styled-components";

/*렌더링시 깜빡임을 해결하기 위해 SSR 단계에서 스타일 주입*/
export default function ServerStyleWrapper({children}: { children: React.ReactNode; }) {
  //Sheet 객체 생성
  const [sheet] = useState(() => new ServerStyleSheet());

  //sheet에 수집된 CSS를 모아서 <style>태그로 서버 렌더링 완료 후 최종 html head에 주입
  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement(); //CSS -> <style>태그 변환
    return <>{styles}</>;
  });

  //클라이언트 환경이면 아무것도 안함 (이미 스타일 주입이 된 상태이기 때문에)
  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  //하위트리 렌더시 스타일드컴포넌트 css를 sheet에 수집
  return (
      <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );
}
