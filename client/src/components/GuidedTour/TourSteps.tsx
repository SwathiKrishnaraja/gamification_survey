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
        target: '.exit-survey',
        content: 'You have an option to exit the survey at any point in the survey. Please note that all the answers will be cleared on choosing to exit the survey.',
        disableBeacon: true,
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.Badges-div',
        content: 'On progressing in the survey, you will be notified when you unlock a new badge. The badge gets activated in the badges list. It is also possible to unlock other badges by progressing in the survey',
        spotlightPadding: 0,
        disableBeacon: true,
        disableOverlay: true,
        locale: {
            last: 'Ok',
        },
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
        locale: {
            last: 'Ok',
        },
    },

]

export const stepsForLeaderboardTour: Step[] = [

    {
        target: '.progress-bar-div',
        content: 'Your progress is shown here.',
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
        target: '.points-container',
        content: 'In this survey, you are provided points based on your progress. Based on the points your position in the leaderboard gets updated.',
        placement: 'left',
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.points-container',
        content: 'The points you collect is shown here.',
        placement: 'bottom',
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.leaderBoard',
        content: 'Your can view your position in the leaderboard here.',
        placement: 'bottom',
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: ".learboard-hint",
        content: 'Here you will find out how to achieve points in the survey.',
        placement: 'left',
        spotlightPadding: 0,
        disableOverlay: true,
    },
    {
        target: '.points-container',
        content: 'On progressing in the survey, you will be notified when you achieve points and leaderboard is updated.',
        spotlightPadding: 0,
        placement: 'left',
        disableBeacon: true,
        disableOverlay: true,
        locale: {
            last: 'Ok',
        },
    },


]