import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageTitle = React.memo((props: Props) => {
  const { children } = props;
  return (
    <>
      <h1 className="my-4 text-center text-3xl bold">{children}</h1>
    </>
  );
});

export default PageTitle;
