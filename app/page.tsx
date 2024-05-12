import styles from "../styles/styles.module.css";
import React from "react";
import { Textarea } from "@nextui-org/react";
import { Session } from "inspector";
import { redirect } from "next/navigation";
export default function Home() {
  if (!Session) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="dark text-foreground bg-background">
      <div className={styles.pageContainer}>
        <div id={styles.sidebar}>
          Notes:
          <div></div>
        </div>
        <div className={styles.editorContainer}>
          <div className={styles.toolbar}>toolbar</div>
          <div className={styles.note}>
            <div className={styles.noteTitle}>
              <Textarea
                variant="bordered"
                placeholder="Title"
                maxRows={1}
                className="text-lg"
              ></Textarea>
            </div>
            <div className={styles.noteContent}>
              <Textarea
                variant="faded"
                label="Content"
                maxRows={40}
                className="text-md"
                placeholder="Start writing here..."
              ></Textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
