import { Step } from 'react-joyride';

export const stepsForTour1: Step[] = [
    {
        target: '.Badges-div',
        content: 'In this version, you are awarded badges for your progress in the survey',
        disableBeacon: true,
        spotlightPadding: 0,
    },
    {
        target: '.individual-badge',
        content: 'Hover over the badge to see the badge details',
        spotlightPadding: 0,
        placement: 'right'
    },

    {
        target: '.progress-bar-div',
        content: 'Your progress is shown here.',
    },
    {
        target: '.sv_row:nth-child(1)',
        content: 'Few questions are in presented in the radiogroup format. Please choose one option',
        placement: 'bottom',
    },
    {
        target: '.sv_row:nth-child(2)',
        content: 'Few questions are presented in matrix format. Please choose one option.',
        placement: 'bottom',
    },
    {
        target: '.sv_row:nth-child(3)',
        content: 'Few questions are presented with checkboxes. Please feel free to choose multiple options if necessary.',
        placement: 'bottom',
    },
    {
        target: '.sv_row:nth-child(4)',
        content: 'Few questions are presented with text area. Please provide your input in the provided text area.',
        placement: 'top',
    },
    {
        target: '.toast',
        content: 'You are presented with a badge based on your achievement.',
        placement: 'bottom',
    },
]
export const stepsForTour2: Step[] = [
    {
        target: '.toast',
        content: 'You are presented with a badge based on your achievement.',
        disableBeacon: true,
        spotlightPadding: 0,
        // placement: 'bottom',
    },
    {
        target: '.Badges-div',
        content: 'The badge gets activated in the badges list',
        spotlightPadding: 0,
    },
]
