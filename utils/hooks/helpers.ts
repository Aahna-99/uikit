import moment from 'moment';

const multipleReplaceText = (props: any) => {
    const { text, textToReplace, textToReplaceWith } = props;
    let newText = text;

    const regEx = new RegExp(textToReplace, 'g');
    const matches = (text.match(regEx) || []).length;

    if (matches > 0) {
        for (let i = 0; i < matches; i++) {
            newText = newText.replace(textToReplace, textToReplaceWith);
        }
    }

    return newText;
};

const groupByKeyAndPinned = (
    data: any[],
    groupedData: any[],
    key: string,
    format: Function,
) => {
    let groups = {};
    groupedData.forEach(group => {
        groups[group['title']] = group['data'];
    });

    data.forEach(game => {
        let date = '';
        if (game.pinned) {
            date = 'Pinned posts';
        } else {
            date = format(game[key]);
        }
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(game);
    });

    return Object.keys(groups).map(date => ({
        title: date,
        data: groups[date],
    }));
};

const getTimeFromDate = (dateString: string, format: string, options: any) => {
    format = format || 'hh:mm:ss a';
    return options.ignoreTimeZone
        ? moment.parseZone(dateString).format(format)
        : moment(dateString).format(format);
};

const customDateFormat = (datetime: string, format: string) => {
    format = format || 'MMM DD, YYYY';
    const date = moment(datetime, 'YYYY-MM-DD hh:mm:ss a').toDate();
    return moment(date).format(format);
};

const pluck = (array: any[], key: string) => {
    return array.map(o => o[key]);
};

const findWhere = (array: any[], criteria: any) => {
    return array.find(function (item) {
        return Object.keys(criteria).every(function (key) {
            return item[key] === criteria[key];
        });
    });
};

const buildTime = (value: any) => {
    const duration = moment.duration(value, 'minutes');
    const hours = duration.hours();
    const minutes = duration.minutes();
    if (hours !== undefined && hours > 0) {
        return `${hours} Hrs${
            minutes && minutes > 0 ? ` ${minutes} mins` : ''
        }`;
    } else {
        if (minutes !== 0) {
            return `${minutes} minutes`;
        } else {
            return '-';
        }
    }
};

const buildDescriptiveTime = (value: any) => {
    if (value) {
        let time = value.split(':');
        time[0] = Number.parseInt(time[0], 10);
        time[1] = Number.parseInt(time[1], 10);
        time[2] = Number.parseInt(time[2], 10);
        if (time[0] == 0 && time[1] == 0 && time[2] > 0) {
            return 'Less than a minute';
        }
        if (time[0] > 0 && time[1] > 0) {
            return `${time[0]}hrs ${time[1]}mins`;
        } else if (time[0] > 0) {
            return `${time[0]}hrs`;
        } else if (time[1] > 0) {
            return `${time[1]}mins`;
        } else '-';
    }
};

const jobTitle = (job_title: any) => {
    return !job_title
        ? ''
        : typeof job_title == 'string'
        ? job_title
        : job_title.name;
};

const HTMLToPlainText = (html: string) => {
    if (!html) return '';

    let text = html;
    text = text
        .replace(/\n/gi, '')
        .replace(/<style([\s\S]*?)<\/style>/gi, '')
        .replace(/<script([\s\S]*?)<\/script>/gi, '')
        .replace(/<a.*?>(.*?)<\/a.*?>/gi, ' $1 ')
        .replace(/<\/div>|<\/h1>|<\/h2>|<\/h3>|<\/h4>|<\/h5>|<\/h6>/gi, '\n\n')
        .replace(/<\/li>/gi, '\n')
        .replace(/<li.*?>/gi, '  -  ')
        .replace(/<\/ul>/gi, '\n\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<br\s*[\/]?>/gi, '\n')
        .replace(/<[^>]+>/gi, '')
        .replace(/^\s*/gim, '')
        .replace(/ ,/gi, ',')
        .replace(/ +/gi, ' ')
        .replace(/\n+/gi, '\n\n')
        .replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, ' ');

    return text;
};

export {
    multipleReplaceText,
    groupByKeyAndPinned,
    getTimeFromDate,
    customDateFormat,
    pluck,
    findWhere,
    buildTime,
    buildDescriptiveTime,
    jobTitle,
    HTMLToPlainText,
};
