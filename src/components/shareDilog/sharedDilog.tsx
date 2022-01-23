import { Modal } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDilog } from "../../redux/shareDilog/action";
import { selectDilog } from "../../redux/shareDilog/selector";
import { USER_DIALOG_ID, USER_DIALOG_NAME } from "./constants";



export interface ISharedDialog {
  id: string;
  DialogBody: React.FC;
  hasCustomFooter?: boolean;
}

export const SharedDialog = ({
  id,
  DialogBody,
  hasCustomFooter = false,
}: ISharedDialog) => {
  
  const dispatch = useDispatch();
 
  let footer: any;
  
  const {
    id: dialogDataId,
    name,
    isShowing
    
  } = useSelector(selectDilog(id)) || {};

  const handleConfirm = useCallback(() => {
    dispatch(showDilog({ id: USER_DIALOG_ID, name: USER_DIALOG_NAME }));
  }, []);

  // const handleCancel = useCallback(() => {
  //   dispatch(cancelDilog(id));
  // }, []);

  if (id !== dialogDataId) {
    return null;
  }

  //   if (id == USER_DIALOG_ID || id == USER_DIALOG_ID1 || id == USER_DIALOG_ID2 || id == USER_DIALOG_ID3) {
  //   footer = <DefauldDialogProductFooter handleCancel={handleCancel} />;
  // } else {
  //   footer = (
  //     <DefauldDialogFooter
  //       handleConfirm={handleConfirm}
  //       handleCancel={handleCancel}
  //     />
  //   );
  // }

  return (
    <>
      <Modal
        title={name}
        // visible={isShowed}
        onOk={handleConfirm}
        // onCancel={handleCancel}
        destroyOnClose={true}
        footer=""
      >
        <DialogBody />
        {footer}
      </Modal>
    </>
  );
};
