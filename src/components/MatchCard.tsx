import React from 'react';
import { MessageCircle, ThumbsUp } from 'lucide-react';

interface MatchCardProps {
  name: string;
  compatibility: number;
  image: string;
  displayPreferences: string[];
}

const MatchCard: React.FC<MatchCardProps> = ({ name, compatibility, image, displayPreferences }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          {compatibility}% Match
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {displayPreferences.map((pref, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
              >
                {pref}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800">
            <MessageCircle className="w-4 h-4" />
            <span>Message</span>
          </button>
          <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800">
            <ThumbsUp className="w-4 h-4" />
            <span>Like Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;