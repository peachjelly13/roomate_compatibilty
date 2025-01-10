import React from 'react';

interface PreferenceCardProps {
  icon: React.ReactNode;
  title: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const PreferenceCard: React.FC<PreferenceCardProps> = ({ 
  icon, 
  title, 
  name,
  options,
  value,
  onChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="form-radio text-indigo-600"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default PreferenceCard;