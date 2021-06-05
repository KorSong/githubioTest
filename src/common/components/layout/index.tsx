import Head from "next/head";
import S from "./styles";

export default function Layout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head>
        <title>{title && title + " - "}test's Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="블로그에 목마를 때 적는 곳" />
        <meta name="og:title" content={"test's Blog"} />
        <meta name="og:description" content="블로그에 목마를 때 적는 곳" />
      </Head>
      <header>
        <S.Nav>Header</S.Nav>
      </header>
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
}
