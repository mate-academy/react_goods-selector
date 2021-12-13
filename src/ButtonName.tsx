type Props = {
  callback: boolean
};

export const ButtonName: React.FC<Props> = ({ callback }) => (
  callback === true
    ? (<span>Add</span>)
    : (<span>Remove</span>)
);
