import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TaskBox, { taskBoxProps } from '../components/TaskboxBit/index'
import { TramRounded } from '@material-ui/icons';

export default {
    title: 'Example/TaskBox',
    component: TaskBox,

} as Meta;

const Template: Story<taskBoxProps> = (args) => <TaskBox {...args} />;
const tasks = [
    { title: 'Jogging', done: true },
    { title: 'Yoga', done: true },
    { title: 'Breakfast', done: false },
    { title: 'Work', done: false },
    { title: 'Lunch', done: false },
    { title: 'Tea', done: false },
    { title: 'Driving', done: false },
    { title: 'Dinner', done: false },
    { title: 'Walk', done: false },
    { title: 'Sleeping', done: false },

]
export const Primary = Template.bind({});
Primary.args = {
    tasks: tasks,
    theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    tasks: tasks,
    theme: "secondary",
};
