import type { Meta, StoryObj } from '@storybook/react';

import Project from './Project';

const meta: Meta<typeof Project> = {
    component: Project,
};

export default meta;
type Story = StoryObj<typeof Project>;

export const Primary: Story = {
    args: {
        title: "Project Title",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue mauris rhoncus. Morbi enim nunc faucibus a pellentesque sit.",
        tech: "Node.js, HTML",
        img: "https://smsmagic-13d6c.kxcdn.com/wp-content/uploads/2021/01/Shorten-URL-1024x635.png",
        githublink: "#"
    },
};