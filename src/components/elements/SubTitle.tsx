import React from "react";

interface Props {
  children: React.ReactNode;
}

const SubTitle = React.memo((props: Props) => {
  const { children } = props;
  return (
    <>
      <h2 className="my-4 text-center text-2xl bold">{children}</h2>
    </>
  );
});

export default SubTitle;
