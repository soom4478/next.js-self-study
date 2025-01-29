import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

// 개별 레이아웃 설정
Home.getLayout = (page: ReactNode)=> {
  return <SearchableLayout>{page}</SearchableLayout>
} // 페이지에 레이아웃을 감싼 형태로 리턴턴