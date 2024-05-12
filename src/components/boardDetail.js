import { useLocation } from "react-router-dom";

export default function BoardDetail() {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <>
      <div>{data?.title}</div>
      <div>{data?.auth}</div>
      <div>{data?.content}</div>
    </>
  );
}
