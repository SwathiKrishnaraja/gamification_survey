import { Step } from 'react-joyride';

export const stepsForTour1: Step[] = [
    {
        target: '.Badges-div',
        content: 'In this version, you are awarded badges for your progress in the survey',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.individual-badge',
        content: 'Hover over the badge to see the badge details',
        spotlightPadding: 0,
        placement: 'left',
        disableOverlay: true,
    },

    {
        target: '.progress-bar-div',
        content: 'Your progress is shown here.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.sv_row:nth-child(1)',
        content: 'On progressing in the survey, you will be notified when you unlock a new badge',
        placement: 'bottom',
        disableOverlay: true,
    },
    {
        target: '.Badges-div',
        content: 'The badge gets activated in the badges list. It is also possible to unlock other badges by progressing in the survey',
        spotlightPadding: 0,
        disableBeacon: true,
        disableOverlay: true,
    },
]

export const stepsForTraditionalTour: Step[] = [

    {
        target: '.progress-bar-div',
        content: 'Your progress is shown here.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.sv_row:nth-child(1)',
        content: 'Questions are presented in the below formats. Please choose option and click Next to proceed to the next page',
        placement: 'bottom',
        spotlightPadding: 0,
        disableOverlay: true,
    },

]