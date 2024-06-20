import { Activities, Author, ActivityAttachment, Audience } from './Activities';

describe('Activities', () => {
    const EXAMPLE_AUTHOR = {
        name: 'Jeff Michael  Anderson',
        id: '172f231f-54b4-4e78-904c-33ec4703f7e7',
        status: 'Not Blocked',
        display_picture: {
            large: 'https://social.mastmojo.com/uploads/picture/file/119861/reduced_d9be7579b1c37da8d80807820199b288.jpg',
            original:
                'https://social.mastmojo.com/uploads/picture/file/119861/d9be7579b1c37da8d80807820199b288.jpg',
            reduced:
                'https://social.mastmojo.com/uploads/picture/file/119861/reduced_d9be7579b1c37da8d80807820199b288.jpg',
        },
    };
    const EXAMPLE_AUDIENCES = [
        {
            name: 'Ezequiel Montelione',
            id: '49c2710d-b574-4708-ad85-7dec47a9ceb0',
            status: 'Not Blocked',
            display_picture: {
                large: null,
                original: null,
                reduced: null,
            },
            type: 'User',
            designation: null,
        },
        {
            name: 'Patricio Guerrero',
            id: '5b24f5a1-47ba-4a3d-94cd-0565c84c73a1',
            status: 'Not Blocked',
            display_picture: {
                large: null,
                original: null,
                reduced: null,
            },
            type: 'User',
            designation: null,
        },
        {
            name: 'Maximiliano Gomez',
            id: 'de63cd6f-9626-4bf6-a11e-2082768fdbc1',
            status: 'Not Blocked',
            display_picture: {
                large: null,
                original: null,
                reduced: null,
            },
            type: 'User',
            designation: null,
        },
    ];
    const EXAMPLE_ATTACHMENTS = [
        {
            id: 119880,
            activity_id: 249772,
            activity_object_id: 246857,
            title: null,
            file_name: 'VideoTest.mp4',
            content_type: 'video/mp4',
            extension: 'mp4',
            url: {
                original:
                    'https://social.mastmojo.com/uploads/attachment/file/119880/VideoTest.mp4',
                reduced:
                    'https://social.mastmojo.com/uploads/attachment/file/119880/reduced_VideoTest.mp4',
            },
        },
        {
            id: 119875,
            activity_id: 249767,
            activity_object_id: 246852,
            title: null,
            file_name: 'Screenshot_3.png',
            content_type: 'image/png',
            extension: 'png',
            url: {
                original:
                    'https://social.mastmojo.com/uploads/attachment/file/119875/Screenshot_3.png',
                reduced:
                    'https://social.mastmojo.com/uploads/attachment/file/119875/reduced_Screenshot_3.png',
            },
        },
        {
            id: 119876,
            activity_id: 249768,
            activity_object_id: 246853,
            title: null,
            file_name: 'headshot-head-skeleton-512.png',
            content_type: 'image/png',
            extension: 'png',
            url: {
                original:
                    'https://social.mastmojo.com/uploads/attachment/file/119876/headshot-head-skeleton-512.png',
                reduced:
                    'https://social.mastmojo.com/uploads/attachment/file/119876/reduced_headshot-head-skeleton-512.png',
            },
        },
        {
            id: 119877,
            activity_id: 249769,
            activity_object_id: 246854,
            title: null,
            file_name: 'Screenshot_2.png',
            content_type: 'image/png',
            extension: 'png',
            url: {
                original:
                    'https://social.mastmojo.com/uploads/attachment/file/119877/Screenshot_2.png',
                reduced:
                    'https://social.mastmojo.com/uploads/attachment/file/119877/reduced_Screenshot_2.png',
            },
        },
        {
            id: 119878,
            activity_id: 249770,
            activity_object_id: 246855,
            title: null,
            file_name: 'Screenshot_5.png',
            content_type: 'image/png',
            extension: 'png',
            url: {
                original:
                    'https://social.mastmojo.com/uploads/attachment/file/119878/Screenshot_5.png',
                reduced:
                    'https://social.mastmojo.com/uploads/attachment/file/119878/reduced_Screenshot_5.png',
            },
        },
        {
            id: 119879,
            activity_id: 249771,
            activity_object_id: 246856,
            title: null,
            file_name: 'Screenshot_4.png',
            content_type: 'image/png',
            extension: 'png',
            url: {
                original:
                    'https://social.mastmojo.com/uploads/attachment/file/119879/Screenshot_4.png',
                reduced:
                    'https://social.mastmojo.com/uploads/attachment/file/119879/reduced_Screenshot_4.png',
            },
        },
    ];
    const EXAMPLE_ACTIVITY = {
        id: 249773,
        activity_type: 'Idea',
        created_at: '2020-07-14T00:18:56.741Z',
        updated_at: '2020-07-14T00:18:56.741Z',
        title: null,
        content: 'IDEA ATTACHMENT idea',
        author: EXAMPLE_AUTHOR,
        audience: EXAMPLE_AUDIENCES,
        links: [],
        attachments: EXAMPLE_ATTACHMENTS,
        tags: [{ code: 'video', label: 'video' }],
        comments_count: 0,
        likes_count: 0,
        pinned: false,
        can_edit: false,
        can_delete: false,
        upvoted: false,
        downvoted: false,
        upvote_count: 0,
        downvote_count: 0,
        upvote_ratio: 0,
        downvote_ratio: 0,
    };

    it('should allow example backend Author', () => {
        const authorExample: Author = EXAMPLE_AUTHOR;
        expect(authorExample).toBeTruthy();
    });
    it('should allow example backend Attachments', () => {
        EXAMPLE_ATTACHMENTS.forEach(attachment => {
            const attachmentExample: ActivityAttachment = attachment;
            expect(attachmentExample).toBeTruthy();
        });
    });
    it('should allow example backend Audience', () => {
        EXAMPLE_AUDIENCES.forEach(audience => {
            const audienceExample: Audience = audience;
            expect(audienceExample).toBeTruthy();
        });
    });
    it('should allow example backend Activity', () => {
        const activityExample: Activities = EXAMPLE_ACTIVITY;
        expect(activityExample).toBeTruthy();
    });
});
