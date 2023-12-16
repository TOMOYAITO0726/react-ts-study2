//import { FC } from "react";
import { VFC } from "react";
//FC→バージョン18
//VFC→バージョン17

type Props = {
    color: string;
    fontSize: string;
}

export const Text: VFC<Props> = (props) => {
    const { color, fontSize } = props;
    return<p style={{color, fontSize}}>テキストです</p>
}
//VFC→関数コンポーネント自体の定義