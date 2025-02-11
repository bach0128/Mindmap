import * as React from "react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default ({ children }: Props) => {
  return (
    <div className="p-6 gap-3">
      <div>
        <h1>Mindmap</h1>
        <p>
          Mindmap is an intuitive and powerful digital mind mapping tool
          designed to help you visualize, organize, and develop your ideas with
          ease. Whether you're brainstorming for a new project, planning your
          next big venture, or simply trying to make sense of complex
          information, Mindmap provides the perfect canvas for your thoughts.
        </p>
      </div>
      <div>
        <h2>Key Features</h2>

        <ul>
          <li>
            <strong>Intuitive Interface</strong>: Create and edit mind maps with
            simple drag-and-drop functionality.
          </li>
          <li>
            <strong>Flexible Node Types</strong>: Add text, images, links, and
            custom icons to your nodes.
          </li>
          <li>
            <strong>Real-time Collaboration</strong>: Work together with your
            team in real-time, seeing changes as they happen.
          </li>
          <li>
            <strong>Cross-platform Sync</strong>: Access your mind maps on any
            device, with seamless syncing across desktop and mobile.
          </li>
          <li>
            <strong>Smart Layout</strong>: Automatically organize your ideas
            with intelligent layout algorithms.
          </li>
          <li>
            <strong>Export Options</strong>: Share your mind maps in various
            formats, including PDF, PNG, and interactive HTML.
          </li>
          <li>
            <strong>Templates</strong>: Jump-start your brainstorming with a
            variety of pre-designed templates.
          </li>
        </ul>
      </div>

      <div>
        <h2>Why Mindmap?</h2>
        <p>
          Mindmap isn't just another note-taking app – it's a visual thinking
          tool that helps you:
        </p>
        <ul>
          <li>Clarify your thoughts and ideas</li>
          <li>Identify connections between concepts</li>
          <li>Improve memory and retention of information</li>
          <li>Enhance creative problem-solving</li>
          <li>Streamline project planning and management</li>
        </ul>
        <p>
          Whether you're a student, professional, entrepreneur, or creative
          thinker, Mindmap empowers you to unlock your full potential and bring
          your ideas to life.
        </p>
        <p>
          Get started with Mindmap today and transform the way you think, plan,
          and create!
        </p>
      </div>
    </div>
  );
};
