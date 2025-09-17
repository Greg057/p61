import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Mail, FileDown } from "lucide-react";
import type { UserInfo } from '../../types/supabase-types';
import { ensureAbsoluteUrl } from '../../lib/utils';
import { CustomLinkIconWrapper } from '../../lib/custom-link-icons';

// Extended UserInfo interface for portfolio preview that includes CV filename
interface ExtendedUserInfo extends UserInfo {
  cvFileName?: string | null;
}

interface UserInfo3Props {
  personalInfo: ExtendedUserInfo;
}


export default function UserInfo3({ personalInfo }: UserInfo3Props) {
  const cvUrl = ensureAbsoluteUrl(personalInfo.cvUrl);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {personalInfo.avatarUrl && (
          <div className="md:col-span-1">
            <Avatar className="w-32 h-32 mx-auto md:mx-0">
              <AvatarImage src={personalInfo.avatarUrl || undefined} alt={personalInfo.full_name || ''} />
              <AvatarFallback>{(personalInfo.full_name || '').split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
        )}

        <div className="md:col-span-2 flex flex-col mt-auto">
          <h1 className="text-3xl font-bold mb-2">{personalInfo.full_name}</h1>
          {personalInfo.title && (
            <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
          )}
          {personalInfo.location && (
            <p className="text-muted-foreground mb-4">{personalInfo.location}</p>
          )}

          {personalInfo.about_me && (
            <div className={`prose dark:prose-invert max-w-none mb-6`}>
              <p>{personalInfo.about_me}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {personalInfo.email && (
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
            )}
            {(cvUrl || personalInfo.cvUrl) && (
              <Button variant="outline" size="sm" asChild>
                {cvUrl ? (
                  <a href={cvUrl} target="_blank" download aria-label="View CV" rel="noreferrer">
                    <FileDown className="mr-2 w-4 h-4" />
                    Resume
                  </a>
                ) : (
                  <button 
                    onClick={() => {
                      if (personalInfo.cvUrl) {
                        const a = document.createElement('a');
                        a.href = personalInfo.cvUrl;
                        a.download = personalInfo.cvFileName || 'resume.pdf';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                      }
                    }}
                    aria-label="Download CV"
                  >
                    <FileDown className="mr-2 w-4 h-4" />
                    Resume
                  </button>
                )}
              </Button>
            )}
            {personalInfo.custom_links && personalInfo.custom_links.length > 0 && personalInfo.custom_links.map((link) => {
              const linkUrl = ensureAbsoluteUrl(link.url);
              return linkUrl ? (
                <Button key={link.id} variant="outline" size="sm" asChild>
                  <a href={linkUrl} target="_blank" rel="noopener noreferrer" title={link.title}>
                    <CustomLinkIconWrapper iconKey={link.icon} className="mr-2" />
                    {link.title}
                  </a>
                </Button>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

