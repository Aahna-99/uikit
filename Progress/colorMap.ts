import constColors from 'utils/constants/constColors';

export const ColorMap = {
    Global: {
        'on track': constColors.ctaPrimary,
        'not started': constColors.systemStatusDisabled,
        'in progress': constColors.ctaPrimary,
        behind: constColors.systemStatusWarning,
        achieved: constColors.systemStatusSuccess,
        'at risk': constColors.cta3,
    },
    learning: {
        InProgress: constColors.dynamicYellow6,
        Completed: constColors.dynamicGreen6,
        Failed: constColors.dynamicRed6,
        EvaluationPending: constColors.dynamicYellow6,
    },
};
