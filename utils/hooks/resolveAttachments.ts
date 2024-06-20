import { DocumentPickerResponse } from 'react-native-document-picker';

import { Attachments } from '../models/Feedback/Feedback';
import ResponseModel from '../models/ResponseModel';

export const resolveAttachments = (
    isEdit: boolean,
    allDocs: DocumentPickerResponse[],
    incomingAttachment: any[],
) => {
    let incomingAttachmentsId: string[] = [];
    let remainingAttachmentsId: string[] = [];
    let deletedAttachmentsId: string[] = [];
    let documentsToCreate: DocumentPickerResponse[] = [];

    if (!isEdit) {
        documentsToCreate = allDocs;
    } else {
        incomingAttachmentsId = incomingAttachment.map(ia => ia.id);
        remainingAttachmentsId = allDocs
            .filter((ca: any) => ca.id)
            .map((ra: any) => ra.id);
        deletedAttachmentsId = [...incomingAttachmentsId];

        remainingAttachmentsId.map(raid =>
            deletedAttachmentsId.splice(deletedAttachmentsId.indexOf(raid), 1),
        );
        documentsToCreate = allDocs.filter((ca: any) => !ca.id);
    }

    return {
        documentsToCreate,
        deletedAttachmentsId,
        remainingAttachmentsId,
    };
};

export const createAttachments = async (
    docs: DocumentPickerResponse[],
    func: (
        featureName: string,
        document: DocumentPickerResponse,
    ) => Promise<ResponseModel<Attachments>>,
) => {
    const attachmentIds: any[] = [];

    if (docs.length > 0) {
        const response = await Promise.all(
            docs.map(async i => await func('social', i)),
        ).catch(error => {
            console.error(error);
        });

        response &&
            response.forEach(item => {
                if (item.success) {
                    attachmentIds.push(item.data.attachment.id);
                }
            });
    }

    return attachmentIds;
};
