
import React from "react";
export function SkillBadge({ skill, color, level }) {
  return (
    <span
      // Combines the base skill style with the specific color class
      className={`skill-badge ${color}`}
    >
      {skill} ({level})
    </span>
  );
}