import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = React.memo((props: Props) => {
  const { children } = props;
  return (
    <>
      <section className="my-4 px-4 mx-auto max-w-prose">{children}</section>
    </>
  );
});

export default Container;
