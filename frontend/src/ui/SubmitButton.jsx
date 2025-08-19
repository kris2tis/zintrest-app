import Button from "./button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, classNameButton }) {
  const { pending } = useFormStatus();

  return (
    <Button className={classNameButton} disabled={pending} variant="primary">
      {children}
    </Button>
  );
}
