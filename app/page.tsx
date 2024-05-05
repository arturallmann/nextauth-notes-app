import styles from "../styles/styles.module.css";
import React from "react";
import Tiptap from "../components/Tiptap.js";

export default function Home() {
  return (
    <main>
      <div className={styles.pageContainer}>
        <div id={styles.sidebar}>
          Notes:
          <div></div>
        </div>
        <div className={styles.editorContainer}>
          <div className={styles.toolbar}>toolbar</div>
          <Tiptap />
        </div>
      </div>
    </main>
  );
}
