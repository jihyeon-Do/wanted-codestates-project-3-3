import { useState } from "react";

const DualSelector = ({
  titleName,
  optionsArr,
  saveOptionsArr,
  changeOptionsArr,
}) => {
  // Todo : 선택시 Count값 증가시키기
  const [checkedItemCount, setCheckedItemCount] = useState(0);

  // 검색한 단어가 존재하는지 체크하고 이에따라 changeOptionsArr 함수 실행
  const searchValue = ({ target }) => {
    const res = saveOptionsArr.filter(({ name }) => {
      return name.includes(target.value);
    });
    changeOptionsArr(res);
  };

  // Todo : 선택된 태그를 감지하는 핸들러로 선택된 것에 대한 체크 처리 필요
  const selectTarget = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <input type="text" onChange={searchValue}></input>
      <header>{titleName}</header>
      <ul>
        {optionsArr.map((val, idx) => (
          <li key={idx} onClick={selectTarget}>{`${val.emoji} ${val.name}`}</li>
        ))}
      </ul>
      <div>
        {checkedItemCount}/{optionsArr.length}
      </div>
    </div>
  );
};

export default DualSelector;
