import { Environment } from "@/components/Environment/Environment";
import s from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={s.title}>BLUM Next.js Template</h1>
      <p className={s.description}>
        Šablona pro tvorbu Next.js aplikací v rámci středoškolských praxí Blogic University.
      </p>
      <Environment />
    </main>
  );
}
