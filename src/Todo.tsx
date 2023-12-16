import { TodoType } from "./types/todo";

export const Todo = (
    //props: Pick<TodoType, "userId" | "title" | "completed">
    //Pick→TodoTypeからuserId,title,completedプロパティのみを抽出し、propsの型として使用する
    props: Omit<TodoType, "id">//Omit→特定のプロパティを省略する 
    ) => {
    const { title, userId, completed = false } = props; //defaultでcompleted = falseと設定
    const completedMark = completed ? "[完]" : "[未]"; 
    return<p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>
}