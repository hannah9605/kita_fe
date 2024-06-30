import style from "../../pages/[...afterLogin]/workspace/workspace.module.css";

export default function GuideBtn() {
  return (
    <div className={style.guide_btn}>
      <p>
        <span style={{ marginRight: "20px" }} className="red">
          필독
        </span>
        저작권 가이드라인을 확인하시겠습니까?
      </p>
      <button className="flex_between">
        가이드라인 보러가기
        <div className={style.arrow_btn}>
          <img src="/images/dark/r_arrow_w.png" alt="" />
        </div>
      </button>
    </div>
  );
}
