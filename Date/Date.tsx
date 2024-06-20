import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

import _isEmpty from 'lodash/isEmpty';

import { Button, Text } from 'uikit';

import constColors from 'utils/constants/constColors';

const SingleMarking = props => {
    const [selected, setSelected] = useState(props.selected || '');

    return (
        <>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {
                        selected: true,
                        disableTouchEvent: true,
                        selectedColor: constColors.brandBlue600,
                    },
                }}
            />
            <Button
                disabled={!selected}
                onPress={() => {
                    props.onRangeSelected(selected);
                }}>
                {
                    <Text
                        headingType={'h6'}
                        fontWeight={'semibold'}
                        color={constColors.bgWhite}
                        wrapperStyle={{ marginTop: 16 }}>
                        {'Apply'}
                    </Text>
                }
            </Button>
        </>
    );
};

class CalendarWithPeriodFill extends React.Component {
    state = {
        start: {},
        end: {},
        period: {},
    };

    getDateString(timestamp: string | number | Date) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        let dateString = `${year}-`;
        if (month < 10) {
            dateString += `0${month}-`;
        } else {
            dateString += `${month}-`;
        }
        if (day < 10) {
            dateString += `0${day}`;
        } else {
            dateString += day;
        }

        return dateString;
    }

    getPeriod(startTimestamp: number, endTimestamp: number) {
        const period = {};
        let currentTimestamp = startTimestamp;

        while (currentTimestamp < endTimestamp) {
            const dateString = this.getDateString(currentTimestamp);
            period[dateString] = {
                textColor: 'white',
                color: constColors.textCaption2,
                startingDay: currentTimestamp === startTimestamp,
            };
            currentTimestamp += 24 * 60 * 60 * 1000;
        }

        const dateString = this.getDateString(endTimestamp);

        period[dateString] = {
            textColor: 'white',
            color: constColors.textCaption2,
            endingDay: true,
        };
        return period;
    }

    setDay(dayObj: { dateString: any; day: any; month: any; year: any }) {
        const { start, end } = this.state;
        const { dateString, day, month, year } = dayObj;
        // timestamp returned by dayObj is in 12:00AM UTC 0, want local 12:00AM
        const timestamp = new Date(year, month - 1, day).getTime();
        const newDayObj = { ...dayObj, timestamp };
        // if there is no start day, add start. or if there is already a end and start date, restart
        const startIsEmpty = _isEmpty(start);
        if (startIsEmpty || (!startIsEmpty && !_isEmpty(end))) {
            const period = {
                [dateString]: {
                    textColor: 'white',
                    color: constColors.textCaption2,
                    endingDay: true,
                    startingDay: true,
                },
            };

            this.setState({ start: newDayObj, period, end: {} });
        } else {
            // if end date is older than start date switch
            const { timestamp: savedTimestamp } = start;

            if (savedTimestamp > timestamp) {
                const period = this.getPeriod(timestamp, savedTimestamp);
                this.onRangeSelected?.(newDayObj.dateString, start.dateString);
                this.setState({ start: newDayObj, end: start, period });
            } else {
                const period = this.getPeriod(savedTimestamp, timestamp);
                this.onRangeSelected?.(start.dateString, newDayObj.dateString);
                this.setState({ end: newDayObj, start, period });
            }
        }
    }

    render() {
        const { period } = this.state;

        return (
            <>
                <Calendar
                    onDayPress={this.setDay.bind(this)}
                    markingType="period"
                    markedDates={period}
                />
                <Button
                    disabled={
                        !(
                            Object.keys(this.state.end).length ||
                            Object.keys(this.state.period).length ||
                            Object.keys(this.state.start).length
                        )
                    }
                    onPress={() => {
                        this.props.onRangeSelected(
                            this.state.start,
                            this.state.end,
                        );
                    }}>
                    {
                        <Text
                            headingType={'h6'}
                            fontWeight={'semibold'}
                            color={constColors.bgWhite}
                            wrapperStyle={{ marginTop: 16 }}>
                            {'Apply'}
                        </Text>
                    }
                </Button>
            </>
        );
    }
}

const Date = props => {
    return props.type === 'period' ? (
        <CalendarWithPeriodFill {...props} />
    ) : (
        <SingleMarking {...props} />
    );
};

export default Date;
