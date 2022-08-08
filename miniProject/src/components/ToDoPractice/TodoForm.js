import React, { useCallback, useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(text);
      setText("");
    },
    [text, onInsert]
  );

  return (
    <form data-testid="todoForm" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={text}
        placeholder="할 일을 입력해주세요"
      />
      <button>submit</button>
    </form>
  );
};

export default TodoForm;
