import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

function TeacherSubjectDialog(props: any) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value: string) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
       
      </Dialog>
    );
}

export default TeacherSubjectDialog