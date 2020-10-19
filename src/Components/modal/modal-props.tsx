import { ReactNode } from "react";

export class ModalProps {
    constructor(
        public title: string,
        public handleOk?: any,
        public handleCancel?: any,
        public hideButton?: boolean,
        public customFooter?: ReactNode[]
    ) { }
}