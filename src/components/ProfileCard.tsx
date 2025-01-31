import React from 'react';
import { LinkedInProfile } from '../types/linkedin';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Award, 
  Star,
  Building2
} from 'lucide-react';

interface ProfileCardProps {
  profile: LinkedInProfile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const formatDate = (date?: { year?: number; month?: number }) => {
    if (!date?.year) return 'Present';
    const month = date.month 
      ? new Date(2000, date.month - 1).toLocaleString('default', { month: 'short' }) 
      : '';
    return `${month} ${date.year}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800">
        {profile.backgroundImage?.[0]?.url && (
          <img
            src={profile.backgroundImage[0].url}
            alt="Background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Profile Header */}
      <div className="relative px-6 pb-6">
        <div className="flex flex-col sm:flex-row -mt-16 sm:-mt-20 mb-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src={profile.profilePicture || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'}
              alt={profile.firstName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-gray-900">
                {profile.firstName} {profile.lastName}
              </h1>
              {profile.isTopVoice && (
                <Star className="w-6 h-6 text-yellow-500" />
              )}
            </div>
            <p className="text-xl text-gray-600 mt-1">{profile.headline}</p>
            {profile.geo && (
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{profile.geo.full || profile.geo.city}</span>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {profile.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">About</h2>
            <p className="text-gray-600 whitespace-pre-line">{profile.summary}</p>
          </div>
        )}

        {/* Experience */}
        {profile.position && profile.position.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Briefcase className="w-6 h-6 mr-2" />
              Experience
            </h2>
            <div className="space-y-6">
              {profile.position.map((pos, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex items-start gap-4">
                    {pos.companyLogo && (
                      <img 
                        src={pos.companyLogo} 
                        alt={pos.companyName} 
                        className="w-12 h-12 rounded"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{pos.title}</h3>
                      <p className="text-gray-600">{pos.companyName}</p>
                      <p className="text-sm text-gray-500">
                        {formatDate(pos.start)} - {formatDate(pos.end)}
                        {pos.location && ` · ${pos.location}`}
                      </p>
                      {pos.companyIndustry && (
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <Building2 className="w-4 h-4 mr-1" />
                          {pos.companyIndustry}
                        </div>
                      )}
                      {pos.description && (
                        <p className="mt-2 text-gray-600">{pos.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {profile.educations && profile.educations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              Education
            </h2>
            <div className="space-y-6">
              {profile.educations.map((edu, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex items-start gap-4">
                    {edu.logo?.[0]?.url && (
                      <img 
                        src={edu.logo[0].url} 
                        alt={edu.schoolName} 
                        className="w-12 h-12 rounded"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {edu.schoolName}
                      </h3>
                      <p className="text-gray-600">
                        {edu.degree} {edu.fieldOfStudy && `· ${edu.fieldOfStudy}`}
                      </p>
                      {(edu.start?.year || edu.end?.year) && (
                        <p className="text-sm text-gray-500">
                          {edu.start?.year || ''} - {edu.end?.year || 'Present'}
                        </p>
                      )}
                      {edu.description && (
                        <p className="mt-2 text-gray-600">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {profile.skills && profile.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {skill.name}
                  {skill.endorsementsCount > 0 && (
                    <span className="bg-blue-100 px-2 py-0.5 rounded-full text-xs">
                      {skill.endorsementsCount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;