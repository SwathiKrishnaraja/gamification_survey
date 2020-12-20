import { Step } from 'react-joyride';

export const stepsForTour1: Step[] = [
    {
        target: '.Badges-div',
        content: 'Here, you will find a list of badges, that you will be able to collect as you progress in the survey. The badges that we show here, are just examples, to give you an idea of the badges in the actual survey.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.individual-badge',
        content: 'Hover over the badges to see what you will be needing to do, in order to achieve a badge.',
        spotlightPadding: 0,
        placement: 'left',
        disableOverlay: true,
    },

    {
        target: '.progress-bar-div',
        content: 'Your progress in the survey is shown here.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.exit-survey',
        content: 'You have an option to exit the survey at any point in the survey. Please note that all the answers will be cleared on choosing to exit the survey.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.Badges-div',
        content: 'On progressing in the survey, you will be notified when you unlock a new badge. The badge gets activated in the badges list. It is also possible to unlock other badges by progressing in the survey.',
        spotlightPadding: 0,
        disableBeacon: true,
        disableOverlay: true,
    },
]

export const stepsForTraditionalTour: Step[] = [

    {
        target: '.progress-bar-div',
        content: 'Your progress in the survey is shown here.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.exit-survey',
        content: 'You have an option to exit the survey at any point in the survey. Please note that all the answers will be cleared on choosing to exit the survey.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.sv_row:nth-child(2)',
        content: `Questions are presented in the below formats. You will find mandatory as well as
        optional questions throughout the survey. Mandatory questions will be mentioned
        explicitly with an asterisk (*) at the end of the question. Please answer the two questions presented here and click submit to
        complete the guided tour.`,
        placement: 'bottom',
        spotlightPadding: 0,
        disableOverlay: true,
    },

]

export const stepsForLeaderboardTour: Step[] = [

    {
        target: '.progress-bar-div',
        content: 'Your progress in the survey is shown here.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.exit-survey',
        content: 'You have an option to exit the survey at any point in the survey. Please note that all the answers will be cleared on choosing to exit the survey.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.sv_row:nth-child(2)',
        content: `Questions are presented in the below formats. You will find mandatory as well as
        optional questions throughout the survey. Mandatory questions will be mentioned
        explicitly with an asterisk (*) at the end of the question. Please answer the two questions presented here and click submit to
        complete the guided tour.`,
        placement: 'bottom',
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.points-container',
        content: 'Here, you will be able to see the points that you have achieved so far, by progressing in the survey.',
        placement: 'bottom',
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.leaderBoard',
        content: 'Here, you will be able to view your position in the leaderboard.',
        placement: 'bottom',
        spotlightPadding: 0,
        disableOverlay: true,
    }

]