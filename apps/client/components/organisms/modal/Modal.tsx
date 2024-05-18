import { Button, ButtonProps } from "@/components/atoms/button/Button";
import {
  ModalContainer,
  ModalContainerProps,
} from "@/components/atoms/modal/ModalContainer";
import { Label } from "@/components/atoms/typography/Label";
import { ButtonList } from "@/components/molecules/buttonList/ButtonList";

type Props = {
  title: string;
  buttonList: ButtonProps[];
  showCloseButton?: boolean;
} & ModalContainerProps;

export const Modal = ({
  isOpened,
  setIsOpened,
  title,
  buttonList,
  showCloseButton,
  children,
}: Props) => {
  return (
    <ModalContainer isOpened={isOpened} setIsOpened={setIsOpened}>
      <div className="space-y-4">
        <Label value={title} variant="title" />
        {children}
        <ButtonList buttons={buttonList}>
          {showCloseButton && (
            <Button
              value="Close"
              color="tertiary"
              onClick={() => {
                setIsOpened(false);
              }}
            />
          )}
        </ButtonList>
      </div>
    </ModalContainer>
  );
};
