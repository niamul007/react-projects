import React from "react";
import { Avater } from "./Avater.jsx";
import { SkillBadge } from "./SkillBadge.jsx";
import { Details } from "./Details.jsx";

export function UserProfile(user) {
  const userProfileData = {
    id: 1,
    name: "Alex Johnson",
    title: "Front-End Developer",
    bio: "Passionate about clean code, responsive design, and exploring the capabilities of React hooks.",
    avatarUrl: "https://placehold.co/150x150/500754/FFFFFF?text=AJ",
    skills: [
      // The color property values are used as CSS modifier class names in SkillBadge
      { id: "r", name: "React", level: "Advanced", color: "bg-blue-600" },
      { id: "t", name: "Tailwind CSS", level: "Expert", color: "bg-teal-600" },
      { id: "j", name: "JavaScript", level: "Expert", color: "bg-yellow-500" },
      { id: "g", name: "Git", level: "Intermediate", color: "bg-gray-600" },
    ],
  };
  const item = userProfileData.skills.map((skill) => (
    <SkillBadge
      key={skill.id}
      skill={skill.name}
      color={skill.color}
      level={skill.level}
    />
  ));

  if (!user) return <div>Error: User data missing.</div>;

  return (
    <div className="profile-card">
      <Avater name={userProfileData.name} url={userProfileData.avatarUrl} />
      <Details
        name={userProfileData.name}
        title={userProfileData.title}
        bio={userProfileData.bio}
      />
      <div className="skills-section">
        <h4>Technical Skills:</h4>
        <div className="skills-list">
          <SkillBadge skill={item} color={item} level={item} />
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
