export const Tabs = ({ value }) => {
  let content = '';

  if (value === 1) {
    content = 'Some text 1';
  } else if (value === 2) {
    content = 'Some text 2';
  } else {
    content = 'Some text 3';
  }

  return <div>{content}</div>;
};
