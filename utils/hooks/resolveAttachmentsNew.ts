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
    module = 'social',
) => {
    const attachmentIds: any[] = [];
    let token_hash = {};
    if (docs.length > 0) {
        const response = await Promise.all(
            docs.map(async i => await func(module, i)),
        ).catch(error => {
            console.error(error);
        });
        response &&
            response.forEach(item => {
                if (item.success) {
                    let token = item.link?.split('file_token=')[1];
                    token_hash[item.data?.id] = { file_token: token, ...item };
                    attachmentIds.push(token_hash);
                }
            });
    }

    return token_hash;
};
