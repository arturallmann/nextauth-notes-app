import styles from "../styles/styles.module.css";
import React from "react";
import { Textarea } from "@nextui-org/react";
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
          <div className="note">
            <div className="noteTitle">
              <input type="text"></input>
            </div>
            <div className="noteContent">
              <Textarea></Textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
