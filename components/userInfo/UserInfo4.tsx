"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Mail, Linkedin, FileDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { UserInfo } from '../../types/supabase-types';
import { ensureAbsoluteUrl } from '../../lib/utils';

// Extended UserInfo interface for portfolio preview that includes CV filename
interface ExtendedUserInfo extends UserInfo {
  cvFileName?: string | null;
}

interface UserInfo4Props {
  personalInfo: ExtendedUserInfo;
}

export default function UserInfo4({ personalInfo }: UserInfo4Props) {
  // Find social links from custom_links
  const githubLink = personalInfo.custom_links?.find(link => link.icon === 'github');
  const linkedinLink = personalInfo.custom_links?.find(link => link.icon === 'linkedin');
  const xLink = personalInfo.custom_links?.find(link => link.icon === 'twitter' || link.icon === 'x');
  
  const githubUrl = githubLink ? ensureAbsoluteUrl(githubLink.url) : null;
  const linkedinUrl = linkedinLink ? ensureAbsoluteUrl(linkedinLink.url) : null;
  const xUrl = xLink ? ensureAbsoluteUrl(xLink.url) : null;
  const cvUrl = ensureAbsoluteUrl(personalInfo.cvUrl);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {personalInfo.avatarUrl && (
            <Avatar className="w-32 h-32">
              <AvatarImage src={personalInfo.avatarUrl || undefined} alt={personalInfo.full_name || ''} />
              <AvatarFallback>{(personalInfo.full_name || '').split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          )}

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{personalInfo.full_name}</h1>
            {personalInfo.title && (
              <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
            )}
            {personalInfo.location && (
              <p className="text-muted-foreground mb-4">{personalInfo.location}</p>
            )}

            <div className="flex items-center gap-2">
              {(cvUrl || personalInfo.cvUrl) && (
                cvUrl ? (
                  <Link href={cvUrl} target="_blank">
                    <Button variant="default">
                      <span className="font-semibold">Resume</span>
                      <FileDown className="ml-2 size-5" />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="default"
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
                  >
                    <span className="font-semibold">Resume</span>
                    <FileDown className="ml-2 size-5" />
                  </Button>
                )
              )}
              {personalInfo.email && (
                <Button variant="outline" size="icon" asChild>
                  <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button variant="outline" size="icon" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg className="h-5 w-5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                </Button>
              )}
              {linkedinUrl && (
                <Button variant="outline" size="icon" asChild>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {xUrl && (
                <Button variant="outline" size="icon" asChild>
                  <a href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="X social media">
                    <svg className="h-5 w-5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  </a>
                </Button>
              )}
            </div>

            {personalInfo.about_me && (
              <div className="mt-6 text-center md:text-left">
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.about_me}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

