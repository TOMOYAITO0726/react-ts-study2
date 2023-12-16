import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
    const { title, userId, completed = false } = props; //defaultでcompleted = falseと設定
    const completedMark = completed ? "[完]" : "[未]"; 
    return<p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>
}
    //props: Pick<TodoType, "userId" | "title" | "completed">
    //Pick→TodoTypeからuserId,title,completedプロパティのみを抽出し、propsの型として使用する
    //props: Omit<TodoType, "id">//Omit→特定のプロパティを省略する 