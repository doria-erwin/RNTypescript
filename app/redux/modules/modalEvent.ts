import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalState = {
    title?: string;
    modalContent: string | JSX.Element;
    onToggle?: (isSubmitted?: boolean) => void;
    className?: string;
    modalBodyClass?: string;
    // size?: ModalSize, TODO
    backdrop?: any;
    progress?: any;
    withFooter?: boolean;
    onSubmit?: () => void;
    isProcessing?: boolean;
    submitLabel?: string;
    isUploading?: boolean;
    uploadingBody?: string | JSX.Element;
};

const initialState: ModalState = {
    title: '',
    modalContent: '',
    className: '',
    modalBodyClass: '',
    backdrop: true,
    onToggle: () => {},
    withFooter: true,
    onSubmit: () => {},
    isProcessing: false,
    submitLabel: '',
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalContent: (state, action: PayloadAction<ModalState>) => ({
            ...state,
            ...action.payload,
        }),
        clearModalContent: () => ({
            ...initialState,
        }),
    },
});

export const { setModalContent, clearModalContent } = modalSlice.actions;

export default modalSlice.reducer;
