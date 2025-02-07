import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => <BookItem key={book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => <BookItem key={book.id} {...book}/>)}
      </section>
    </div>
  );
}

// 개별 레이아웃 설정
Home.getLayout = (page: ReactNode)=> {
  return <SearchableLayout>{page}</SearchableLayout>
} // 페이지에 레이아웃을 감싼 형태로 리턴