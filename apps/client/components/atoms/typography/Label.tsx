type Props = {
  value: string;
  variant: "title" | "label";
};
export const Label = ({ value, variant }: Props) => {
  var textClass;
  switch (variant) {
    case "title":
      textClass = "text-4xl";
      break;
    case "label":
      textClass = "text-xl";
      break;
  }
  return <div className={`${textClass}`}>{value}</div>;
};
