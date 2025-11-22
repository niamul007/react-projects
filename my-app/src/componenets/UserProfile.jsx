import React from 'react';
const UserProfile = (props) => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-2xl transition duration-300 hover:shadow-indigo-300 border-t-8 border-indigo-500">
            <div className="skills-section mt-5 border-t pt-4">
                <h4 className="text-sm font-bold text-gray-700 mb-2">Technical Skills:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                    {/* TODO: Use props.user.skills.map() here 
                      For each skill object, render a <SkillBadge /> and pass its properties as props.
                    */}
                    <p className="text-sm text-gray-400">Map skill data here...</p>
                </div>
            </div>
        </div>
    );
};