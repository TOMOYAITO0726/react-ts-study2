type TodoType = {
    userId: number;
    title: string;
    completed?: boolean;//?がつくと必須ではなくなる
}
export const Todo = (props: TodoType) => {
    const { title, userId, completed = false } = props; //defaultでcompleted = falseと設定
    const completedMark = completed ? "[完]" : "[未]"; 
    return<p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>
}