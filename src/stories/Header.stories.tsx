import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta<typeof Header> = {
    component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    args: {
        title: "Sumeet Singh",
        subtitle: "Fullstack Developer",
        github: "https://github.com/SSinghNet",
        linkedin: "https://www.linkedin.com/in/sumeet-singh-net",
        email: "sumeet605@gmail.com"
    },
};