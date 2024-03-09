import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta: Meta<typeof Icon> = {
    component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Github: Story = {
    args: {
        link: "#",
        iconname: "github",
        size: 2
    },
};

export const Linkedin: Story = {
    args: {
        link: "#",
        iconname: "linkedin",
        size: 2
    },
};