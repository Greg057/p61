'use client';

// 🎯 PORTFOLIO PAGE USING ACTUAL PORTFOLIOLAYOUT SYSTEM
// This ensures 100% visual parity with the SaaS version
import PortfolioLayout from '@/components/PortfolioLayout'

// User data embedded at build time (no server-side dependencies)
// NOTE: File URLs include GitHub Pages basePath (e.g., /repo-name/user-files/...)
const userData = {
  "userInfo": {
    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
    "full_name": "2test4324",
    "title": "sasasa",
    "email": "jane.doe@email.com",
    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
    "location": "San Francisco, CA",
    "avatarUrl": null,
    "cvUrl": "/p61/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
    "custom_links": [
      {
        "id": "linkedin",
        "url": "https://linkedin.com/in/janedoe",
        "icon": "linkedin",
        "title": "LinkedIn"
      },
      {
        "id": "github",
        "url": "https://github.com/janedoe",
        "icon": "github",
        "title": "GitHub"
      }
    ],
    "published_data": {
      "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
      "email": "jane.doe@email.com",
      "title": "sasasa",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
      "location": "San Francisco, CA",
      "avatarUrl": null,
      "full_name": "2test4324",
      "custom_links": [
        {
          "id": "linkedin",
          "url": "https://linkedin.com/in/janedoe",
          "icon": "linkedin",
          "title": "LinkedIn"
        },
        {
          "id": "github",
          "url": "https://github.com/janedoe",
          "icon": "github",
          "title": "GitHub"
        }
      ],
      "published_data": {
        "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
        "email": "jane.doe@email.com",
        "title": "sasasa",
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
        "location": "San Francisco, CA",
        "avatarUrl": null,
        "full_name": "2test",
        "custom_links": [
          {
            "id": "linkedin",
            "url": "https://linkedin.com/in/janedoe",
            "icon": "linkedin",
            "title": "LinkedIn"
          },
          {
            "id": "github",
            "url": "https://github.com/janedoe",
            "icon": "github",
            "title": "GitHub"
          }
        ],
        "published_data": {
          "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
          "email": "jane.doe@email.com",
          "title": "sasasa",
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
          "location": "San Francisco, CA",
          "avatarUrl": null,
          "full_name": "2test",
          "custom_links": [
            {
              "id": "linkedin",
              "url": "https://linkedin.com/in/janedoe",
              "icon": "linkedin",
              "title": "LinkedIn"
            },
            {
              "id": "github",
              "url": "https://github.com/janedoe",
              "icon": "github",
              "title": "GitHub"
            }
          ],
          "published_data": {
            "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
            "email": "jane.doe@email.com",
            "title": "sasasa",
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
            "location": "San Francisco, CA",
            "avatarUrl": null,
            "full_name": "test",
            "custom_links": [
              {
                "id": "linkedin",
                "url": "https://linkedin.com/in/janedoe",
                "icon": "linkedin",
                "title": "LinkedIn"
              },
              {
                "id": "github",
                "url": "https://github.com/janedoe",
                "icon": "github",
                "title": "GitHub"
              }
            ],
            "published_data": {
              "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
              "email": "jane.doe@email.com",
              "title": "sasasa",
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
              "location": "San Francisco, CA",
              "avatarUrl": null,
              "full_name": "test",
              "custom_links": [
                {
                  "id": "linkedin",
                  "url": "https://linkedin.com/in/janedoe",
                  "icon": "linkedin",
                  "title": "LinkedIn"
                },
                {
                  "id": "github",
                  "url": "https://github.com/janedoe",
                  "icon": "github",
                  "title": "GitHub"
                }
              ],
              "published_data": {
                "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                "email": "jane.doe@email.com",
                "title": "sasasa",
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                "location": "San Francisco, CA",
                "avatarUrl": null,
                "full_name": "YES",
                "custom_links": [
                  {
                    "id": "linkedin",
                    "url": "https://linkedin.com/in/janedoe",
                    "icon": "linkedin",
                    "title": "LinkedIn"
                  },
                  {
                    "id": "github",
                    "url": "https://github.com/janedoe",
                    "icon": "github",
                    "title": "GitHub"
                  }
                ],
                "published_data": {
                  "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                  "email": "jane.doe@email.com",
                  "title": "sasasa",
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                  "location": "San Francisco, CA",
                  "avatarUrl": null,
                  "full_name": "YES",
                  "custom_links": [
                    {
                      "id": "linkedin",
                      "url": "https://linkedin.com/in/janedoe",
                      "icon": "linkedin",
                      "title": "LinkedIn"
                    },
                    {
                      "id": "github",
                      "url": "https://github.com/janedoe",
                      "icon": "github",
                      "title": "GitHub"
                    }
                  ],
                  "published_data": {
                    "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                    "email": "jane.doe@email.com",
                    "title": "sasasa",
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                    "location": "San Francisco, CA",
                    "avatarUrl": null,
                    "full_name": "YES",
                    "custom_links": [
                      {
                        "id": "linkedin",
                        "url": "https://linkedin.com/in/janedoe",
                        "icon": "linkedin",
                        "title": "LinkedIn"
                      },
                      {
                        "id": "github",
                        "url": "https://github.com/janedoe",
                        "icon": "github",
                        "title": "GitHub"
                      }
                    ],
                    "published_data": {
                      "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                      "email": "jane.doe@email.com",
                      "title": "sasasa",
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                      "location": "San Francisco, CA",
                      "avatarUrl": null,
                      "full_name": "YES",
                      "custom_links": [
                        {
                          "id": "linkedin",
                          "url": "https://linkedin.com/in/janedoe",
                          "icon": "linkedin",
                          "title": "LinkedIn"
                        },
                        {
                          "id": "github",
                          "url": "https://github.com/janedoe",
                          "icon": "github",
                          "title": "GitHub"
                        }
                      ],
                      "published_data": {
                        "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                        "email": "jane.doe@email.com",
                        "title": "sasasa",
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                        "location": "San Francisco, CA",
                        "avatarUrl": null,
                        "full_name": "YES",
                        "custom_links": [
                          {
                            "id": "linkedin",
                            "url": "https://linkedin.com/in/janedoe",
                            "icon": "linkedin",
                            "title": "LinkedIn"
                          },
                          {
                            "id": "github",
                            "url": "https://github.com/janedoe",
                            "icon": "github",
                            "title": "GitHub"
                          }
                        ],
                        "published_data": {
                          "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                          "email": "jane.doe@email.com",
                          "title": "sasasa",
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                          "location": "San Francisco, CA",
                          "avatarUrl": null,
                          "full_name": "YES",
                          "custom_links": [
                            {
                              "id": "linkedin",
                              "url": "https://linkedin.com/in/janedoe",
                              "icon": "linkedin",
                              "title": "LinkedIn"
                            },
                            {
                              "id": "github",
                              "url": "https://github.com/janedoe",
                              "icon": "github",
                              "title": "GitHub"
                            }
                          ],
                          "published_data": {
                            "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                            "email": "jane.doe@email.com",
                            "title": "sasasa",
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                            "location": "San Francisco, CA",
                            "avatarUrl": null,
                            "full_name": "YES",
                            "custom_links": [
                              {
                                "id": "linkedin",
                                "url": "https://linkedin.com/in/janedoe",
                                "icon": "linkedin",
                                "title": "LinkedIn"
                              },
                              {
                                "id": "github",
                                "url": "https://github.com/janedoe",
                                "icon": "github",
                                "title": "GitHub"
                              }
                            ],
                            "published_data": {
                              "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                              "email": "jane.doe@email.com",
                              "title": "sasasa",
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                              "location": "San Francisco, CA",
                              "avatarUrl": null,
                              "full_name": "YES",
                              "custom_links": [
                                {
                                  "id": "linkedin",
                                  "url": "https://linkedin.com/in/janedoe",
                                  "icon": "linkedin",
                                  "title": "LinkedIn"
                                },
                                {
                                  "id": "github",
                                  "url": "https://github.com/janedoe",
                                  "icon": "github",
                                  "title": "GitHub"
                                }
                              ],
                              "published_data": {
                                "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                "email": "jane.doe@email.com",
                                "title": "sasasa",
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                "location": "San Francisco, CA",
                                "avatarUrl": null,
                                "full_name": "YES",
                                "custom_links": [
                                  {
                                    "id": "linkedin",
                                    "url": "https://linkedin.com/in/janedoe",
                                    "icon": "linkedin",
                                    "title": "LinkedIn"
                                  },
                                  {
                                    "id": "github",
                                    "url": "https://github.com/janedoe",
                                    "icon": "github",
                                    "title": "GitHub"
                                  }
                                ],
                                "published_data": {
                                  "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                  "email": "jane.doe@email.com",
                                  "title": "sasasa",
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                  "location": "San Francisco, CA",
                                  "avatarUrl": null,
                                  "full_name": "YES",
                                  "custom_links": [
                                    {
                                      "id": "linkedin",
                                      "url": "https://linkedin.com/in/janedoe",
                                      "icon": "linkedin",
                                      "title": "LinkedIn"
                                    },
                                    {
                                      "id": "github",
                                      "url": "https://github.com/janedoe",
                                      "icon": "github",
                                      "title": "GitHub"
                                    }
                                  ],
                                  "published_data": {
                                    "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                    "email": "jane.doe@email.com",
                                    "title": "sasasa",
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                    "location": "San Francisco, CA",
                                    "avatarUrl": null,
                                    "full_name": "YES",
                                    "custom_links": [
                                      {
                                        "id": "linkedin",
                                        "url": "https://linkedin.com/in/janedoe",
                                        "icon": "linkedin",
                                        "title": "LinkedIn"
                                      },
                                      {
                                        "id": "github",
                                        "url": "https://github.com/janedoe",
                                        "icon": "github",
                                        "title": "GitHub"
                                      }
                                    ],
                                    "published_data": {
                                      "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                      "email": "jane.doe@email.com",
                                      "title": "sasasa",
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                      "location": "San Francisco, CA",
                                      "avatarUrl": null,
                                      "full_name": "YES",
                                      "custom_links": [
                                        {
                                          "id": "linkedin",
                                          "url": "https://linkedin.com/in/janedoe",
                                          "icon": "linkedin",
                                          "title": "LinkedIn"
                                        },
                                        {
                                          "id": "github",
                                          "url": "https://github.com/janedoe",
                                          "icon": "github",
                                          "title": "GitHub"
                                        }
                                      ],
                                      "published_data": {
                                        "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                        "email": "jane.doe@email.com",
                                        "title": "sasasa",
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                        "location": "San Francisco, CA",
                                        "avatarUrl": null,
                                        "full_name": "YES",
                                        "custom_links": [
                                          {
                                            "id": "linkedin",
                                            "url": "https://linkedin.com/in/janedoe",
                                            "icon": "linkedin",
                                            "title": "LinkedIn"
                                          },
                                          {
                                            "id": "github",
                                            "url": "https://github.com/janedoe",
                                            "icon": "github",
                                            "title": "GitHub"
                                          }
                                        ],
                                        "published_data": {
                                          "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                          "email": "jane.doe@email.com",
                                          "title": "sasasa",
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                          "location": "San Francisco, CA",
                                          "avatarUrl": null,
                                          "full_name": "YES",
                                          "custom_links": [
                                            {
                                              "id": "linkedin",
                                              "url": "https://linkedin.com/in/janedoe",
                                              "icon": "linkedin",
                                              "title": "LinkedIn"
                                            },
                                            {
                                              "id": "github",
                                              "url": "https://github.com/janedoe",
                                              "icon": "github",
                                              "title": "GitHub"
                                            }
                                          ],
                                          "published_data": {
                                            "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                            "email": "jane.doe@email.com",
                                            "title": "sasasa",
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                            "location": "San Francisco, CA",
                                            "avatarUrl": null,
                                            "full_name": "YES",
                                            "custom_links": [
                                              {
                                                "id": "linkedin",
                                                "url": "https://linkedin.com/in/janedoe",
                                                "icon": "linkedin",
                                                "title": "LinkedIn"
                                              },
                                              {
                                                "id": "github",
                                                "url": "https://github.com/janedoe",
                                                "icon": "github",
                                                "title": "GitHub"
                                              }
                                            ],
                                            "published_data": {
                                              "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                              "email": "jane.doe@email.com",
                                              "title": "sasasa",
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                              "location": "San Francisco, CA",
                                              "avatarUrl": null,
                                              "full_name": "YES",
                                              "custom_links": [
                                                {
                                                  "id": "linkedin",
                                                  "url": "https://linkedin.com/in/janedoe",
                                                  "icon": "linkedin",
                                                  "title": "LinkedIn"
                                                },
                                                {
                                                  "id": "github",
                                                  "url": "https://github.com/janedoe",
                                                  "icon": "github",
                                                  "title": "GitHub"
                                                }
                                              ],
                                              "published_data": {
                                                "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                "email": "jane.doe@email.com",
                                                "title": "sasasa",
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                "location": "San Francisco, CA",
                                                "avatarUrl": null,
                                                "full_name": "YES",
                                                "custom_links": [
                                                  {
                                                    "id": "linkedin",
                                                    "url": "https://linkedin.com/in/janedoe",
                                                    "icon": "linkedin",
                                                    "title": "LinkedIn"
                                                  },
                                                  {
                                                    "id": "github",
                                                    "url": "https://github.com/janedoe",
                                                    "icon": "github",
                                                    "title": "GitHub"
                                                  }
                                                ],
                                                "published_data": {
                                                  "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                  "email": "jane.doe@email.com",
                                                  "title": "sasasa",
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                  "location": "San Francisco, CA",
                                                  "avatarUrl": null,
                                                  "full_name": "YES",
                                                  "custom_links": [
                                                    {
                                                      "id": "linkedin",
                                                      "url": "https://linkedin.com/in/janedoe",
                                                      "icon": "linkedin",
                                                      "title": "LinkedIn"
                                                    },
                                                    {
                                                      "id": "github",
                                                      "url": "https://github.com/janedoe",
                                                      "icon": "github",
                                                      "title": "GitHub"
                                                    }
                                                  ],
                                                  "published_data": {
                                                    "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                    "email": "jane.doe@email.com",
                                                    "title": "sasasa",
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                    "location": "San Francisco, CA",
                                                    "avatarUrl": null,
                                                    "full_name": "YES",
                                                    "custom_links": [
                                                      {
                                                        "id": "linkedin",
                                                        "url": "https://linkedin.com/in/janedoe",
                                                        "icon": "linkedin",
                                                        "title": "LinkedIn"
                                                      },
                                                      {
                                                        "id": "github",
                                                        "url": "https://github.com/janedoe",
                                                        "icon": "github",
                                                        "title": "GitHub"
                                                      }
                                                    ],
                                                    "published_data": {
                                                      "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                      "email": "jane.doe@email.com",
                                                      "title": "sasasa",
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                      "location": "San Francisco, CA",
                                                      "avatarUrl": null,
                                                      "full_name": "YES",
                                                      "custom_links": [
                                                        {
                                                          "id": "linkedin",
                                                          "url": "https://linkedin.com/in/janedoe",
                                                          "icon": "linkedin",
                                                          "title": "LinkedIn"
                                                        },
                                                        {
                                                          "id": "github",
                                                          "url": "https://github.com/janedoe",
                                                          "icon": "github",
                                                          "title": "GitHub"
                                                        }
                                                      ],
                                                      "published_data": {
                                                        "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                        "email": "jane.doe@email.com",
                                                        "title": "sasasa",
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                        "location": "San Francisco, CA",
                                                        "avatarUrl": null,
                                                        "full_name": "YES",
                                                        "custom_links": [
                                                          {
                                                            "id": "linkedin",
                                                            "url": "https://linkedin.com/in/janedoe",
                                                            "icon": "linkedin",
                                                            "title": "LinkedIn"
                                                          },
                                                          {
                                                            "id": "github",
                                                            "url": "https://github.com/janedoe",
                                                            "icon": "github",
                                                            "title": "GitHub"
                                                          }
                                                        ],
                                                        "published_data": {
                                                          "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                          "email": "jane.doe@email.com",
                                                          "title": "sasasa",
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                          "location": "San Francisco, CA",
                                                          "avatarUrl": null,
                                                          "full_name": "YES",
                                                          "custom_links": [
                                                            {
                                                              "id": "linkedin",
                                                              "url": "https://linkedin.com/in/janedoe",
                                                              "icon": "linkedin",
                                                              "title": "LinkedIn"
                                                            },
                                                            {
                                                              "id": "github",
                                                              "url": "https://github.com/janedoe",
                                                              "icon": "github",
                                                              "title": "GitHub"
                                                            }
                                                          ],
                                                          "published_data": {
                                                            "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                            "email": "jane.doe@email.com",
                                                            "title": "sasasa",
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                            "location": "San Francisco, CA",
                                                            "avatarUrl": null,
                                                            "full_name": "YES",
                                                            "custom_links": [
                                                              {
                                                                "id": "linkedin",
                                                                "url": "https://linkedin.com/in/janedoe",
                                                                "icon": "linkedin",
                                                                "title": "LinkedIn"
                                                              },
                                                              {
                                                                "id": "github",
                                                                "url": "https://github.com/janedoe",
                                                                "icon": "github",
                                                                "title": "GitHub"
                                                              }
                                                            ],
                                                            "published_data": {
                                                              "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                              "email": "jane.doe@email.com",
                                                              "title": "sasasa",
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                              "location": "San Francisco, CA",
                                                              "avatarUrl": null,
                                                              "full_name": "YES",
                                                              "custom_links": [
                                                                {
                                                                  "id": "linkedin",
                                                                  "url": "https://linkedin.com/in/janedoe",
                                                                  "icon": "linkedin",
                                                                  "title": "LinkedIn"
                                                                },
                                                                {
                                                                  "id": "github",
                                                                  "url": "https://github.com/janedoe",
                                                                  "icon": "github",
                                                                  "title": "GitHub"
                                                                }
                                                              ],
                                                              "published_data": {
                                                                "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                                "email": "jane.doe@email.com",
                                                                "title": "sasasa",
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                                "location": "San Francisco, CA",
                                                                "avatarUrl": null,
                                                                "full_name": "NO",
                                                                "custom_links": [
                                                                  {
                                                                    "id": "linkedin",
                                                                    "url": "https://linkedin.com/in/janedoe",
                                                                    "icon": "linkedin",
                                                                    "title": "LinkedIn"
                                                                  },
                                                                  {
                                                                    "id": "github",
                                                                    "url": "https://github.com/janedoe",
                                                                    "icon": "github",
                                                                    "title": "GitHub"
                                                                  }
                                                                ],
                                                                "published_data": {
                                                                  "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                                  "email": "jane.doe@email.com",
                                                                  "title": "sasasa",
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                                  "location": "San Francisco, CA",
                                                                  "avatarUrl": null,
                                                                  "full_name": "NO",
                                                                  "custom_links": [
                                                                    {
                                                                      "id": "linkedin",
                                                                      "url": "https://linkedin.com/in/janedoe",
                                                                      "icon": "linkedin",
                                                                      "title": "LinkedIn"
                                                                    },
                                                                    {
                                                                      "id": "github",
                                                                      "url": "https://github.com/janedoe",
                                                                      "icon": "github",
                                                                      "title": "GitHub"
                                                                    }
                                                                  ],
                                                                  "published_data": {
                                                                    "cvUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/cv.pdf",
                                                                    "email": "jane.doe@email.com",
                                                                    "title": "sasasa",
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, React, Node.js, and AWS.",
                                                                    "location": "San Francisco, CA",
                                                                    "avatarUrl": null,
                                                                    "full_name": "hhuhuiu",
                                                                    "custom_links": [
                                                                      {
                                                                        "id": "linkedin",
                                                                        "url": "https://linkedin.com/in/janedoe",
                                                                        "icon": "linkedin",
                                                                        "title": "LinkedIn"
                                                                      },
                                                                      {
                                                                        "id": "github",
                                                                        "url": "https://github.com/janedoe",
                                                                        "icon": "github",
                                                                        "title": "GitHub"
                                                                      }
                                                                    ],
                                                                    "published_data": null
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "educations": [
    {
      "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "degree": "Bachelor of Computer Science",
      "university": "University of California, Berkeley",
      "start_year": "2015",
      "end_year": "2019",
      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "Berkeley, CA",
      "published_data": {
        "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
        "degree": "Bachelor of Computer Science",
        "logoUrl": null,
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "end_year": "2019",
        "location": "Berkeley, CA",
        "start_year": "2015",
        "university": "University of California, Berkeley",
        "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
        "order_index": 0,
        "custom_links": [],
        "published_data": {
          "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
          "degree": "Bachelor of Computer Science",
          "logoUrl": null,
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "end_year": "2019",
          "location": "Berkeley, CA",
          "start_year": "2015",
          "university": "University of California, Berkeley",
          "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
          "order_index": 0,
          "custom_links": [],
          "published_data": {
            "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
            "degree": "Bachelor of Computer Science",
            "logoUrl": null,
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "end_year": "2019",
            "location": "Berkeley, CA",
            "start_year": "2015",
            "university": "University of California, Berkeley",
            "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
            "order_index": 0,
            "custom_links": [],
            "published_data": {
              "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
              "degree": "Bachelor of Computer Science",
              "logoUrl": null,
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "end_year": "2019",
              "location": "Berkeley, CA",
              "start_year": "2015",
              "university": "University of California, Berkeley",
              "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
              "order_index": 0,
              "custom_links": [],
              "published_data": {
                "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                "degree": "Bachelor of Computer Science",
                "logoUrl": null,
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "end_year": "2019",
                "location": "Berkeley, CA",
                "start_year": "2015",
                "university": "University of California, Berkeley",
                "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                "order_index": 0,
                "custom_links": [],
                "published_data": {
                  "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                  "degree": "Bachelor of Computer Science",
                  "logoUrl": null,
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "end_year": "2019",
                  "location": "Berkeley, CA",
                  "start_year": "2015",
                  "university": "University of California, Berkeley",
                  "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                  "order_index": 0,
                  "custom_links": [],
                  "published_data": {
                    "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                    "degree": "Bachelor of Computer Science",
                    "logoUrl": null,
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "end_year": "2019",
                    "location": "Berkeley, CA",
                    "start_year": "2015",
                    "university": "University of California, Berkeley",
                    "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                    "order_index": 0,
                    "custom_links": [],
                    "published_data": {
                      "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                      "degree": "Bachelor of Computer Science",
                      "logoUrl": null,
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "end_year": "2019",
                      "location": "Berkeley, CA",
                      "start_year": "2015",
                      "university": "University of California, Berkeley",
                      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                      "order_index": 0,
                      "custom_links": [],
                      "published_data": {
                        "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                        "degree": "Bachelor of Computer Science",
                        "logoUrl": null,
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "end_year": "2019",
                        "location": "Berkeley, CA",
                        "start_year": "2015",
                        "university": "University of California, Berkeley",
                        "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                        "order_index": 0,
                        "custom_links": [],
                        "published_data": {
                          "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                          "degree": "Bachelor of Computer Science",
                          "logoUrl": null,
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "end_year": "2019",
                          "location": "Berkeley, CA",
                          "start_year": "2015",
                          "university": "University of California, Berkeley",
                          "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                          "order_index": 0,
                          "custom_links": [],
                          "published_data": {
                            "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                            "degree": "Bachelor of Computer Science",
                            "logoUrl": null,
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "end_year": "2019",
                            "location": "Berkeley, CA",
                            "start_year": "2015",
                            "university": "University of California, Berkeley",
                            "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                            "order_index": 0,
                            "custom_links": [],
                            "published_data": {
                              "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                              "degree": "Bachelor of Computer Science",
                              "logoUrl": null,
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "end_year": "2019",
                              "location": "Berkeley, CA",
                              "start_year": "2015",
                              "university": "University of California, Berkeley",
                              "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                              "order_index": 0,
                              "custom_links": [],
                              "published_data": {
                                "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                "degree": "Bachelor of Computer Science",
                                "logoUrl": null,
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "end_year": "2019",
                                "location": "Berkeley, CA",
                                "start_year": "2015",
                                "university": "University of California, Berkeley",
                                "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                "order_index": 0,
                                "custom_links": [],
                                "published_data": {
                                  "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                  "degree": "Bachelor of Computer Science",
                                  "logoUrl": null,
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "end_year": "2019",
                                  "location": "Berkeley, CA",
                                  "start_year": "2015",
                                  "university": "University of California, Berkeley",
                                  "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                  "order_index": 0,
                                  "custom_links": [],
                                  "published_data": {
                                    "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                    "degree": "Bachelor of Computer Science",
                                    "logoUrl": null,
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "end_year": "2019",
                                    "location": "Berkeley, CA",
                                    "start_year": "2015",
                                    "university": "University of California, Berkeley",
                                    "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                    "order_index": 0,
                                    "custom_links": [],
                                    "published_data": {
                                      "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                      "degree": "Bachelor of Computer Science",
                                      "logoUrl": null,
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "end_year": "2019",
                                      "location": "Berkeley, CA",
                                      "start_year": "2015",
                                      "university": "University of California, Berkeley",
                                      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                      "order_index": 0,
                                      "custom_links": [],
                                      "published_data": {
                                        "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                        "degree": "Bachelor of Computer Science",
                                        "logoUrl": null,
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "end_year": "2019",
                                        "location": "Berkeley, CA",
                                        "start_year": "2015",
                                        "university": "University of California, Berkeley",
                                        "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                        "order_index": 0,
                                        "custom_links": [],
                                        "published_data": {
                                          "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                          "degree": "Bachelor of Computer Science",
                                          "logoUrl": null,
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "end_year": "2019",
                                          "location": "Berkeley, CA",
                                          "start_year": "2015",
                                          "university": "University of California, Berkeley",
                                          "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                          "order_index": 0,
                                          "custom_links": [],
                                          "published_data": {
                                            "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                            "degree": "Bachelor of Computer Science",
                                            "logoUrl": null,
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "end_year": "2019",
                                            "location": "Berkeley, CA",
                                            "start_year": "2015",
                                            "university": "University of California, Berkeley",
                                            "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                            "order_index": 0,
                                            "custom_links": [],
                                            "published_data": {
                                              "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                              "degree": "Bachelor of Computer Science",
                                              "logoUrl": null,
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "end_year": "2019",
                                              "location": "Berkeley, CA",
                                              "start_year": "2015",
                                              "university": "University of California, Berkeley",
                                              "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                              "order_index": 0,
                                              "custom_links": [],
                                              "published_data": {
                                                "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                "degree": "Bachelor of Computer Science",
                                                "logoUrl": null,
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "end_year": "2019",
                                                "location": "Berkeley, CA",
                                                "start_year": "2015",
                                                "university": "University of California, Berkeley",
                                                "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                "order_index": 0,
                                                "custom_links": [],
                                                "published_data": {
                                                  "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                  "degree": "Bachelor of Computer Science",
                                                  "logoUrl": null,
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "end_year": "2019",
                                                  "location": "Berkeley, CA",
                                                  "start_year": "2015",
                                                  "university": "University of California, Berkeley",
                                                  "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                  "order_index": 0,
                                                  "custom_links": [],
                                                  "published_data": {
                                                    "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                    "degree": "Bachelor of Computer Science",
                                                    "logoUrl": null,
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "end_year": "2019",
                                                    "location": "Berkeley, CA",
                                                    "start_year": "2015",
                                                    "university": "University of California, Berkeley",
                                                    "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                    "order_index": 0,
                                                    "custom_links": [],
                                                    "published_data": {
                                                      "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                      "degree": "Bachelor of Computer Science",
                                                      "logoUrl": null,
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "end_year": "2019",
                                                      "location": "Berkeley, CA",
                                                      "start_year": "2015",
                                                      "university": "University of California, Berkeley",
                                                      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                      "order_index": 0,
                                                      "custom_links": [],
                                                      "published_data": {
                                                        "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                        "degree": "Bachelor of Computer Science",
                                                        "logoUrl": null,
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "end_year": "2019",
                                                        "location": "Berkeley, CA",
                                                        "start_year": "2015",
                                                        "university": "University of California, Berkeley",
                                                        "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                        "order_index": 0,
                                                        "custom_links": [],
                                                        "published_data": {
                                                          "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                          "degree": "Bachelor of Computer Science",
                                                          "logoUrl": null,
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "end_year": "2019",
                                                          "location": "Berkeley, CA",
                                                          "start_year": "2015",
                                                          "university": "University of California, Berkeley",
                                                          "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                          "order_index": 0,
                                                          "custom_links": [],
                                                          "published_data": {
                                                            "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                            "degree": "Bachelor of Computer Science",
                                                            "logoUrl": null,
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "end_year": "2019",
                                                            "location": "Berkeley, CA",
                                                            "start_year": "2015",
                                                            "university": "University of California, Berkeley",
                                                            "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                            "order_index": 0,
                                                            "custom_links": [],
                                                            "published_data": {
                                                              "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                              "degree": "Bachelor of Computer Science",
                                                              "logoUrl": null,
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "end_year": "2019",
                                                              "location": "Berkeley, CA",
                                                              "start_year": "2015",
                                                              "university": "University of California, Berkeley",
                                                              "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                              "order_index": 0,
                                                              "custom_links": [],
                                                              "published_data": {
                                                                "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                                "degree": "Bachelor of Computer Science",
                                                                "logoUrl": null,
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "end_year": "2019",
                                                                "location": "Berkeley, CA",
                                                                "start_year": "2015",
                                                                "university": "University of California, Berkeley",
                                                                "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                                "order_index": 0,
                                                                "custom_links": [],
                                                                "published_data": {
                                                                  "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                                  "degree": "Bachelor of Computer Science",
                                                                  "logoUrl": null,
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "end_year": "2019",
                                                                  "location": "Berkeley, CA",
                                                                  "start_year": "2015",
                                                                  "university": "University of California, Berkeley",
                                                                  "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                                  "order_index": 0,
                                                                  "custom_links": [],
                                                                  "published_data": {
                                                                    "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                                    "degree": "Bachelor of Computer Science",
                                                                    "logoUrl": null,
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "end_year": "2019",
                                                                    "location": "Berkeley, CA",
                                                                    "start_year": "2015",
                                                                    "university": "University of California, Berkeley",
                                                                    "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                                    "order_index": 0,
                                                                    "custom_links": [],
                                                                    "published_data": {
                                                                      "id": "449d4189-fb8b-4fc6-bb01-87ef4ab96dc4",
                                                                      "degree": "Bachelor of Computer Science",
                                                                      "logoUrl": null,
                                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                      "end_year": "2019",
                                                                      "location": "Berkeley, CA",
                                                                      "start_year": "2015",
                                                                      "university": "University of California, Berkeley",
                                                                      "description": "Relevant Coursework:\r\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
                                                                      "order_index": 0,
                                                                      "custom_links": [],
                                                                      "published_data": null
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  ],
  "experiences": [
    {
      "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "company": "TechWave Solutions",
      "position": "Software Engineer",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "San Francisco, CA",
      "published_data": {
        "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
        "company": "TechWave Solutions",
        "logoUrl": null,
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "end_date": "Present",
        "location": "San Francisco, CA",
        "position": "Software Engineer",
        "start_date": "Jan 2021",
        "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
        "order_index": 0,
        "custom_links": [],
        "published_data": {
          "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
          "company": "TechWave Solutions",
          "logoUrl": null,
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "end_date": "Present",
          "location": "San Francisco, CA",
          "position": "Software Engineer",
          "start_date": "Jan 2021",
          "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
          "order_index": 0,
          "custom_links": [],
          "published_data": {
            "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
            "company": "TechWave Solutions",
            "logoUrl": null,
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "end_date": "Present",
            "location": "San Francisco, CA",
            "position": "Software Engineer",
            "start_date": "Jan 2021",
            "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
            "order_index": 0,
            "custom_links": [],
            "published_data": {
              "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
              "company": "TechWave Solutions",
              "logoUrl": null,
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "end_date": "Present",
              "location": "San Francisco, CA",
              "position": "Software Engineer",
              "start_date": "Jan 2021",
              "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
              "order_index": 0,
              "custom_links": [],
              "published_data": {
                "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                "company": "TechWave Solutions",
                "logoUrl": null,
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "end_date": "Present",
                "location": "San Francisco, CA",
                "position": "Software Engineer",
                "start_date": "Jan 2021",
                "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                "order_index": 0,
                "custom_links": [],
                "published_data": {
                  "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                  "company": "TechWave Solutions",
                  "logoUrl": null,
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "end_date": "Present",
                  "location": "San Francisco, CA",
                  "position": "Software Engineer",
                  "start_date": "Jan 2021",
                  "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                  "order_index": 0,
                  "custom_links": [],
                  "published_data": {
                    "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                    "company": "TechWave Solutions",
                    "logoUrl": null,
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "end_date": "Present",
                    "location": "San Francisco, CA",
                    "position": "Software Engineer",
                    "start_date": "Jan 2021",
                    "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                    "order_index": 0,
                    "custom_links": [],
                    "published_data": {
                      "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                      "company": "TechWave Solutions",
                      "logoUrl": null,
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "end_date": "Present",
                      "location": "San Francisco, CA",
                      "position": "Software Engineer",
                      "start_date": "Jan 2021",
                      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                      "order_index": 0,
                      "custom_links": [],
                      "published_data": {
                        "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                        "company": "TechWave Solutions",
                        "logoUrl": null,
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "end_date": "Present",
                        "location": "San Francisco, CA",
                        "position": "Software Engineer",
                        "start_date": "Jan 2021",
                        "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                        "order_index": 0,
                        "custom_links": [],
                        "published_data": {
                          "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                          "company": "TechWave Solutions",
                          "logoUrl": null,
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "end_date": "Present",
                          "location": "San Francisco, CA",
                          "position": "Software Engineer",
                          "start_date": "Jan 2021",
                          "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                          "order_index": 0,
                          "custom_links": [],
                          "published_data": {
                            "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                            "company": "TechWave Solutions",
                            "logoUrl": null,
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "end_date": "Present",
                            "location": "San Francisco, CA",
                            "position": "Software Engineer",
                            "start_date": "Jan 2021",
                            "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                            "order_index": 0,
                            "custom_links": [],
                            "published_data": {
                              "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                              "company": "TechWave Solutions",
                              "logoUrl": null,
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "end_date": "Present",
                              "location": "San Francisco, CA",
                              "position": "Software Engineer",
                              "start_date": "Jan 2021",
                              "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                              "order_index": 0,
                              "custom_links": [],
                              "published_data": {
                                "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                "company": "TechWave Solutions",
                                "logoUrl": null,
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "end_date": "Present",
                                "location": "San Francisco, CA",
                                "position": "Software Engineer",
                                "start_date": "Jan 2021",
                                "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                "order_index": 0,
                                "custom_links": [],
                                "published_data": {
                                  "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                  "company": "TechWave Solutions",
                                  "logoUrl": null,
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "end_date": "Present",
                                  "location": "San Francisco, CA",
                                  "position": "Software Engineer",
                                  "start_date": "Jan 2021",
                                  "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                  "order_index": 0,
                                  "custom_links": [],
                                  "published_data": {
                                    "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                    "company": "TechWave Solutions",
                                    "logoUrl": null,
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "end_date": "Present",
                                    "location": "San Francisco, CA",
                                    "position": "Software Engineer",
                                    "start_date": "Jan 2021",
                                    "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                    "order_index": 0,
                                    "custom_links": [],
                                    "published_data": {
                                      "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                      "company": "TechWave Solutions",
                                      "logoUrl": null,
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "end_date": "Present",
                                      "location": "San Francisco, CA",
                                      "position": "Software Engineer",
                                      "start_date": "Jan 2021",
                                      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                      "order_index": 0,
                                      "custom_links": [],
                                      "published_data": {
                                        "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                        "company": "TechWave Solutions",
                                        "logoUrl": null,
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "end_date": "Present",
                                        "location": "San Francisco, CA",
                                        "position": "Software Engineer",
                                        "start_date": "Jan 2021",
                                        "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                        "order_index": 0,
                                        "custom_links": [],
                                        "published_data": {
                                          "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                          "company": "TechWave Solutions",
                                          "logoUrl": null,
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "end_date": "Present",
                                          "location": "San Francisco, CA",
                                          "position": "Software Engineer",
                                          "start_date": "Jan 2021",
                                          "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                          "order_index": 0,
                                          "custom_links": [],
                                          "published_data": {
                                            "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                            "company": "TechWave Solutions",
                                            "logoUrl": null,
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "end_date": "Present",
                                            "location": "San Francisco, CA",
                                            "position": "Software Engineer",
                                            "start_date": "Jan 2021",
                                            "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                            "order_index": 0,
                                            "custom_links": [],
                                            "published_data": {
                                              "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                              "company": "TechWave Solutions",
                                              "logoUrl": null,
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "end_date": "Present",
                                              "location": "San Francisco, CA",
                                              "position": "Software Engineer",
                                              "start_date": "Jan 2021",
                                              "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                              "order_index": 0,
                                              "custom_links": [],
                                              "published_data": {
                                                "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                "company": "TechWave Solutions",
                                                "logoUrl": null,
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "end_date": "Present",
                                                "location": "San Francisco, CA",
                                                "position": "Software Engineer",
                                                "start_date": "Jan 2021",
                                                "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                "order_index": 0,
                                                "custom_links": [],
                                                "published_data": {
                                                  "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                  "company": "TechWave Solutions",
                                                  "logoUrl": null,
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "end_date": "Present",
                                                  "location": "San Francisco, CA",
                                                  "position": "Software Engineer",
                                                  "start_date": "Jan 2021",
                                                  "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                  "order_index": 0,
                                                  "custom_links": [],
                                                  "published_data": {
                                                    "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                    "company": "TechWave Solutions",
                                                    "logoUrl": null,
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "end_date": "Present",
                                                    "location": "San Francisco, CA",
                                                    "position": "Software Engineer",
                                                    "start_date": "Jan 2021",
                                                    "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                    "order_index": 0,
                                                    "custom_links": [],
                                                    "published_data": {
                                                      "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                      "company": "TechWave Solutions",
                                                      "logoUrl": null,
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "end_date": "Present",
                                                      "location": "San Francisco, CA",
                                                      "position": "Software Engineer",
                                                      "start_date": "Jan 2021",
                                                      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                      "order_index": 0,
                                                      "custom_links": [],
                                                      "published_data": {
                                                        "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                        "company": "TechWave Solutions",
                                                        "logoUrl": null,
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "end_date": "Present",
                                                        "location": "San Francisco, CA",
                                                        "position": "Software Engineer",
                                                        "start_date": "Jan 2021",
                                                        "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                        "order_index": 0,
                                                        "custom_links": [],
                                                        "published_data": {
                                                          "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                          "company": "TechWave Solutions",
                                                          "logoUrl": null,
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "end_date": "Present",
                                                          "location": "San Francisco, CA",
                                                          "position": "Software Engineer",
                                                          "start_date": "Jan 2021",
                                                          "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                          "order_index": 0,
                                                          "custom_links": [],
                                                          "published_data": {
                                                            "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                            "company": "TechWave Solutions",
                                                            "logoUrl": null,
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "end_date": "Present",
                                                            "location": "San Francisco, CA",
                                                            "position": "Software Engineer",
                                                            "start_date": "Jan 2021",
                                                            "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                            "order_index": 0,
                                                            "custom_links": [],
                                                            "published_data": {
                                                              "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                              "company": "TechWave Solutions",
                                                              "logoUrl": null,
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "end_date": "Present",
                                                              "location": "San Francisco, CA",
                                                              "position": "Software Engineer",
                                                              "start_date": "Jan 2021",
                                                              "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                              "order_index": 0,
                                                              "custom_links": [],
                                                              "published_data": {
                                                                "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                                "company": "TechWave Solutions",
                                                                "logoUrl": null,
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "end_date": "Present",
                                                                "location": "San Francisco, CA",
                                                                "position": "Software Engineer",
                                                                "start_date": "Jan 2021",
                                                                "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                                "order_index": 0,
                                                                "custom_links": [],
                                                                "published_data": {
                                                                  "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                                  "company": "TechWave Solutions",
                                                                  "logoUrl": null,
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "end_date": "Present",
                                                                  "location": "San Francisco, CA",
                                                                  "position": "Software Engineer",
                                                                  "start_date": "Jan 2021",
                                                                  "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                                  "order_index": 0,
                                                                  "custom_links": [],
                                                                  "published_data": {
                                                                    "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                                    "company": "TechWave Solutions",
                                                                    "logoUrl": null,
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "end_date": "Present",
                                                                    "location": "San Francisco, CA",
                                                                    "position": "Software Engineer",
                                                                    "start_date": "Jan 2021",
                                                                    "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                                    "order_index": 0,
                                                                    "custom_links": [],
                                                                    "published_data": {
                                                                      "id": "4cd12724-75cd-420f-bc97-b71f54d0dbf8",
                                                                      "company": "TechWave Solutions",
                                                                      "logoUrl": null,
                                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                      "end_date": "Present",
                                                                      "location": "San Francisco, CA",
                                                                      "position": "Software Engineer",
                                                                      "start_date": "Jan 2021",
                                                                      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\r\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\r\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\r\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\r\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
                                                                      "order_index": 0,
                                                                      "custom_links": [],
                                                                      "published_data": null
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      "id": "b5487964-8792-4982-8176-c6ba84bd803c",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "company": "BrightApps Inc.",
      "position": "Junior Software Engineer",
      "start_date": "Jun 2019",
      "end_date": "Dec 2020",
      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
      "logoUrl": null,
      "order_index": 1,
      "custom_links": [],
      "location": "San Jose, CA",
      "published_data": {
        "id": "b5487964-8792-4982-8176-c6ba84bd803c",
        "company": "BrightApps Inc.",
        "logoUrl": null,
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "end_date": "Dec 2020",
        "location": "San Jose, CA",
        "position": "Junior Software Engineer",
        "start_date": "Jun 2019",
        "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
        "order_index": 1,
        "custom_links": [],
        "published_data": {
          "id": "b5487964-8792-4982-8176-c6ba84bd803c",
          "company": "BrightApps Inc.",
          "logoUrl": null,
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "end_date": "Dec 2020",
          "location": "San Jose, CA",
          "position": "Junior Software Engineer",
          "start_date": "Jun 2019",
          "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
          "order_index": 1,
          "custom_links": [],
          "published_data": {
            "id": "b5487964-8792-4982-8176-c6ba84bd803c",
            "company": "BrightApps Inc.",
            "logoUrl": null,
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "end_date": "Dec 2020",
            "location": "San Jose, CA",
            "position": "Junior Software Engineer",
            "start_date": "Jun 2019",
            "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
            "order_index": 1,
            "custom_links": [],
            "published_data": {
              "id": "b5487964-8792-4982-8176-c6ba84bd803c",
              "company": "BrightApps Inc.",
              "logoUrl": null,
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "end_date": "Dec 2020",
              "location": "San Jose, CA",
              "position": "Junior Software Engineer",
              "start_date": "Jun 2019",
              "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
              "order_index": 1,
              "custom_links": [],
              "published_data": {
                "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                "company": "BrightApps Inc.",
                "logoUrl": null,
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "end_date": "Dec 2020",
                "location": "San Jose, CA",
                "position": "Junior Software Engineer",
                "start_date": "Jun 2019",
                "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                "order_index": 1,
                "custom_links": [],
                "published_data": {
                  "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                  "company": "BrightApps Inc.",
                  "logoUrl": null,
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "end_date": "Dec 2020",
                  "location": "San Jose, CA",
                  "position": "Junior Software Engineer",
                  "start_date": "Jun 2019",
                  "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                  "order_index": 1,
                  "custom_links": [],
                  "published_data": {
                    "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                    "company": "BrightApps Inc.",
                    "logoUrl": null,
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "end_date": "Dec 2020",
                    "location": "San Jose, CA",
                    "position": "Junior Software Engineer",
                    "start_date": "Jun 2019",
                    "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                    "order_index": 1,
                    "custom_links": [],
                    "published_data": {
                      "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                      "company": "BrightApps Inc.",
                      "logoUrl": null,
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "end_date": "Dec 2020",
                      "location": "San Jose, CA",
                      "position": "Junior Software Engineer",
                      "start_date": "Jun 2019",
                      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                      "order_index": 1,
                      "custom_links": [],
                      "published_data": {
                        "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                        "company": "BrightApps Inc.",
                        "logoUrl": null,
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "end_date": "Dec 2020",
                        "location": "San Jose, CA",
                        "position": "Junior Software Engineer",
                        "start_date": "Jun 2019",
                        "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                        "order_index": 1,
                        "custom_links": [],
                        "published_data": {
                          "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                          "company": "BrightApps Inc.",
                          "logoUrl": null,
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "end_date": "Dec 2020",
                          "location": "San Jose, CA",
                          "position": "Junior Software Engineer",
                          "start_date": "Jun 2019",
                          "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                          "order_index": 1,
                          "custom_links": [],
                          "published_data": {
                            "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                            "company": "BrightApps Inc.",
                            "logoUrl": null,
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "end_date": "Dec 2020",
                            "location": "San Jose, CA",
                            "position": "Junior Software Engineer",
                            "start_date": "Jun 2019",
                            "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                            "order_index": 1,
                            "custom_links": [],
                            "published_data": {
                              "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                              "company": "BrightApps Inc.",
                              "logoUrl": null,
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "end_date": "Dec 2020",
                              "location": "San Jose, CA",
                              "position": "Junior Software Engineer",
                              "start_date": "Jun 2019",
                              "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                              "order_index": 1,
                              "custom_links": [],
                              "published_data": {
                                "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                "company": "BrightApps Inc.",
                                "logoUrl": null,
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "end_date": "Dec 2020",
                                "location": "San Jose, CA",
                                "position": "Junior Software Engineer",
                                "start_date": "Jun 2019",
                                "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                "order_index": 1,
                                "custom_links": [],
                                "published_data": {
                                  "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                  "company": "BrightApps Inc.",
                                  "logoUrl": null,
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "end_date": "Dec 2020",
                                  "location": "San Jose, CA",
                                  "position": "Junior Software Engineer",
                                  "start_date": "Jun 2019",
                                  "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                  "order_index": 1,
                                  "custom_links": [],
                                  "published_data": {
                                    "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                    "company": "BrightApps Inc.",
                                    "logoUrl": null,
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "end_date": "Dec 2020",
                                    "location": "San Jose, CA",
                                    "position": "Junior Software Engineer",
                                    "start_date": "Jun 2019",
                                    "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                    "order_index": 1,
                                    "custom_links": [],
                                    "published_data": {
                                      "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                      "company": "BrightApps Inc.",
                                      "logoUrl": null,
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "end_date": "Dec 2020",
                                      "location": "San Jose, CA",
                                      "position": "Junior Software Engineer",
                                      "start_date": "Jun 2019",
                                      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                      "order_index": 1,
                                      "custom_links": [],
                                      "published_data": {
                                        "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                        "company": "BrightApps Inc.",
                                        "logoUrl": null,
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "end_date": "Dec 2020",
                                        "location": "San Jose, CA",
                                        "position": "Junior Software Engineer",
                                        "start_date": "Jun 2019",
                                        "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                        "order_index": 1,
                                        "custom_links": [],
                                        "published_data": {
                                          "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                          "company": "BrightApps Inc.",
                                          "logoUrl": null,
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "end_date": "Dec 2020",
                                          "location": "San Jose, CA",
                                          "position": "Junior Software Engineer",
                                          "start_date": "Jun 2019",
                                          "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                          "order_index": 1,
                                          "custom_links": [],
                                          "published_data": {
                                            "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                            "company": "BrightApps Inc.",
                                            "logoUrl": null,
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "end_date": "Dec 2020",
                                            "location": "San Jose, CA",
                                            "position": "Junior Software Engineer",
                                            "start_date": "Jun 2019",
                                            "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                            "order_index": 1,
                                            "custom_links": [],
                                            "published_data": {
                                              "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                              "company": "BrightApps Inc.",
                                              "logoUrl": null,
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "end_date": "Dec 2020",
                                              "location": "San Jose, CA",
                                              "position": "Junior Software Engineer",
                                              "start_date": "Jun 2019",
                                              "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                              "order_index": 1,
                                              "custom_links": [],
                                              "published_data": {
                                                "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                "company": "BrightApps Inc.",
                                                "logoUrl": null,
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "end_date": "Dec 2020",
                                                "location": "San Jose, CA",
                                                "position": "Junior Software Engineer",
                                                "start_date": "Jun 2019",
                                                "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                "order_index": 1,
                                                "custom_links": [],
                                                "published_data": {
                                                  "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                  "company": "BrightApps Inc.",
                                                  "logoUrl": null,
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "end_date": "Dec 2020",
                                                  "location": "San Jose, CA",
                                                  "position": "Junior Software Engineer",
                                                  "start_date": "Jun 2019",
                                                  "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                  "order_index": 1,
                                                  "custom_links": [],
                                                  "published_data": {
                                                    "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                    "company": "BrightApps Inc.",
                                                    "logoUrl": null,
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "end_date": "Dec 2020",
                                                    "location": "San Jose, CA",
                                                    "position": "Junior Software Engineer",
                                                    "start_date": "Jun 2019",
                                                    "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                    "order_index": 1,
                                                    "custom_links": [],
                                                    "published_data": {
                                                      "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                      "company": "BrightApps Inc.",
                                                      "logoUrl": null,
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "end_date": "Dec 2020",
                                                      "location": "San Jose, CA",
                                                      "position": "Junior Software Engineer",
                                                      "start_date": "Jun 2019",
                                                      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                      "order_index": 1,
                                                      "custom_links": [],
                                                      "published_data": {
                                                        "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                        "company": "BrightApps Inc.",
                                                        "logoUrl": null,
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "end_date": "Dec 2020",
                                                        "location": "San Jose, CA",
                                                        "position": "Junior Software Engineer",
                                                        "start_date": "Jun 2019",
                                                        "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                        "order_index": 1,
                                                        "custom_links": [],
                                                        "published_data": {
                                                          "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                          "company": "BrightApps Inc.",
                                                          "logoUrl": null,
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "end_date": "Dec 2020",
                                                          "location": "San Jose, CA",
                                                          "position": "Junior Software Engineer",
                                                          "start_date": "Jun 2019",
                                                          "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                          "order_index": 1,
                                                          "custom_links": [],
                                                          "published_data": {
                                                            "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                            "company": "BrightApps Inc.",
                                                            "logoUrl": null,
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "end_date": "Dec 2020",
                                                            "location": "San Jose, CA",
                                                            "position": "Junior Software Engineer",
                                                            "start_date": "Jun 2019",
                                                            "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                            "order_index": 1,
                                                            "custom_links": [],
                                                            "published_data": {
                                                              "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                              "company": "BrightApps Inc.",
                                                              "logoUrl": null,
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "end_date": "Dec 2020",
                                                              "location": "San Jose, CA",
                                                              "position": "Junior Software Engineer",
                                                              "start_date": "Jun 2019",
                                                              "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                              "order_index": 1,
                                                              "custom_links": [],
                                                              "published_data": {
                                                                "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                                "company": "BrightApps Inc.",
                                                                "logoUrl": null,
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "end_date": "Dec 2020",
                                                                "location": "San Jose, CA",
                                                                "position": "Junior Software Engineer",
                                                                "start_date": "Jun 2019",
                                                                "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                                "order_index": 1,
                                                                "custom_links": [],
                                                                "published_data": {
                                                                  "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                                  "company": "BrightApps Inc.",
                                                                  "logoUrl": null,
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "end_date": "Dec 2020",
                                                                  "location": "San Jose, CA",
                                                                  "position": "Junior Software Engineer",
                                                                  "start_date": "Jun 2019",
                                                                  "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                                  "order_index": 1,
                                                                  "custom_links": [],
                                                                  "published_data": {
                                                                    "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                                    "company": "BrightApps Inc.",
                                                                    "logoUrl": null,
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "end_date": "Dec 2020",
                                                                    "location": "San Jose, CA",
                                                                    "position": "Junior Software Engineer",
                                                                    "start_date": "Jun 2019",
                                                                    "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                                    "order_index": 1,
                                                                    "custom_links": [],
                                                                    "published_data": {
                                                                      "id": "b5487964-8792-4982-8176-c6ba84bd803c",
                                                                      "company": "BrightApps Inc.",
                                                                      "logoUrl": null,
                                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                      "end_date": "Dec 2020",
                                                                      "location": "San Jose, CA",
                                                                      "position": "Junior Software Engineer",
                                                                      "start_date": "Jun 2019",
                                                                      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\r\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\r\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\r\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\r\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
                                                                      "order_index": 1,
                                                                      "custom_links": [],
                                                                      "published_data": null
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  ],
  "projects": [
    {
      "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "name": "Portfolio Builder Web App",
      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
      "picUrl": null,
      "order_index": 0,
      "technology_names": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": {
        "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
        "name": "Portfolio Builder Web App",
        "picUrl": null,
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
        "order_index": 0,
        "custom_links": [],
        "published_data": {
          "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
          "name": "Portfolio Builder Web App",
          "picUrl": null,
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
          "order_index": 0,
          "custom_links": [],
          "published_data": {
            "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
            "name": "Portfolio Builder Web App",
            "picUrl": null,
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
            "order_index": 0,
            "custom_links": [],
            "published_data": {
              "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
              "name": "Portfolio Builder Web App",
              "picUrl": null,
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
              "order_index": 0,
              "custom_links": [],
              "published_data": {
                "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                "name": "Portfolio Builder Web App",
                "picUrl": null,
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                "order_index": 0,
                "custom_links": [],
                "published_data": {
                  "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                  "name": "Portfolio Builder Web App",
                  "picUrl": null,
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                  "order_index": 0,
                  "custom_links": [],
                  "published_data": {
                    "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                    "name": "Portfolio Builder Web App",
                    "picUrl": null,
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                    "order_index": 0,
                    "custom_links": [],
                    "published_data": {
                      "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                      "name": "Portfolio Builder Web App",
                      "picUrl": null,
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                      "order_index": 0,
                      "custom_links": [],
                      "published_data": {
                        "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                        "name": "Portfolio Builder Web App",
                        "picUrl": null,
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                        "order_index": 0,
                        "custom_links": [],
                        "published_data": {
                          "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                          "name": "Portfolio Builder Web App",
                          "picUrl": null,
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                          "order_index": 0,
                          "custom_links": [],
                          "published_data": {
                            "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                            "name": "Portfolio Builder Web App",
                            "picUrl": null,
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                            "order_index": 0,
                            "custom_links": [],
                            "published_data": {
                              "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                              "name": "Portfolio Builder Web App",
                              "picUrl": null,
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                              "order_index": 0,
                              "custom_links": [],
                              "published_data": {
                                "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                "name": "Portfolio Builder Web App",
                                "picUrl": null,
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                "order_index": 0,
                                "custom_links": [],
                                "published_data": {
                                  "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                  "name": "Portfolio Builder Web App",
                                  "picUrl": null,
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                  "order_index": 0,
                                  "custom_links": [],
                                  "published_data": {
                                    "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                    "name": "Portfolio Builder Web App",
                                    "picUrl": null,
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                    "order_index": 0,
                                    "custom_links": [],
                                    "published_data": {
                                      "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                      "name": "Portfolio Builder Web App",
                                      "picUrl": null,
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                      "order_index": 0,
                                      "custom_links": [],
                                      "published_data": {
                                        "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                        "name": "Portfolio Builder Web App",
                                        "picUrl": null,
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                        "order_index": 0,
                                        "custom_links": [],
                                        "published_data": {
                                          "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                          "name": "Portfolio Builder Web App",
                                          "picUrl": null,
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                          "order_index": 0,
                                          "custom_links": [],
                                          "published_data": {
                                            "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                            "name": "Portfolio Builder Web App",
                                            "picUrl": null,
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                            "order_index": 0,
                                            "custom_links": [],
                                            "published_data": {
                                              "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                              "name": "Portfolio Builder Web App",
                                              "picUrl": null,
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                              "order_index": 0,
                                              "custom_links": [],
                                              "published_data": {
                                                "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                "name": "Portfolio Builder Web App",
                                                "picUrl": null,
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                "order_index": 0,
                                                "custom_links": [],
                                                "published_data": {
                                                  "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                  "name": "Portfolio Builder Web App",
                                                  "picUrl": null,
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                  "order_index": 0,
                                                  "custom_links": [],
                                                  "published_data": {
                                                    "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                    "name": "Portfolio Builder Web App",
                                                    "picUrl": null,
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                    "order_index": 0,
                                                    "custom_links": [],
                                                    "published_data": {
                                                      "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                      "name": "Portfolio Builder Web App",
                                                      "picUrl": null,
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                      "order_index": 0,
                                                      "custom_links": [],
                                                      "published_data": {
                                                        "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                        "name": "Portfolio Builder Web App",
                                                        "picUrl": null,
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                        "order_index": 0,
                                                        "custom_links": [],
                                                        "published_data": {
                                                          "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                          "name": "Portfolio Builder Web App",
                                                          "picUrl": null,
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                          "order_index": 0,
                                                          "custom_links": [],
                                                          "published_data": {
                                                            "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                            "name": "Portfolio Builder Web App",
                                                            "picUrl": null,
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                            "order_index": 0,
                                                            "custom_links": [],
                                                            "published_data": {
                                                              "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                              "name": "Portfolio Builder Web App",
                                                              "picUrl": null,
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                              "order_index": 0,
                                                              "custom_links": [],
                                                              "published_data": {
                                                                "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                                "name": "Portfolio Builder Web App",
                                                                "picUrl": null,
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                                "order_index": 0,
                                                                "custom_links": [],
                                                                "published_data": {
                                                                  "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                                  "name": "Portfolio Builder Web App",
                                                                  "picUrl": null,
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                                  "order_index": 0,
                                                                  "custom_links": [],
                                                                  "published_data": {
                                                                    "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                                    "name": "Portfolio Builder Web App",
                                                                    "picUrl": null,
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                                    "order_index": 0,
                                                                    "custom_links": [],
                                                                    "published_data": {
                                                                      "id": "dbba291c-15d8-4738-9f9c-719ae59558c9",
                                                                      "name": "Portfolio Builder Web App",
                                                                      "picUrl": null,
                                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\r\n- Implemented user authentication, template themes, and image upload features.\r\n- Deployed application on Vercel with continuous integration.",
                                                                      "order_index": 0,
                                                                      "custom_links": [],
                                                                      "published_data": null,
                                                                      "technology_names": [
                                                                        "Next.js",
                                                                        "Supabase",
                                                                        "Vercel"
                                                                      ],
                                                                      "technology_details": []
                                                                    },
                                                                    "technology_names": [
                                                                      "Next.js",
                                                                      "Supabase",
                                                                      "Vercel"
                                                                    ],
                                                                    "technology_details": []
                                                                  },
                                                                  "technology_names": [
                                                                    "Next.js",
                                                                    "Supabase",
                                                                    "Vercel"
                                                                  ],
                                                                  "technology_details": []
                                                                },
                                                                "technology_names": [
                                                                  "Next.js",
                                                                  "Supabase",
                                                                  "Vercel"
                                                                ],
                                                                "technology_details": []
                                                              },
                                                              "technology_names": [
                                                                "Next.js",
                                                                "Supabase",
                                                                "Vercel"
                                                              ],
                                                              "technology_details": []
                                                            },
                                                            "technology_names": [
                                                              "Next.js",
                                                              "Supabase",
                                                              "Vercel"
                                                            ],
                                                            "technology_details": []
                                                          },
                                                          "technology_names": [
                                                            "Next.js",
                                                            "Supabase",
                                                            "Vercel"
                                                          ],
                                                          "technology_details": []
                                                        },
                                                        "technology_names": [
                                                          "Next.js",
                                                          "Supabase",
                                                          "Vercel"
                                                        ],
                                                        "technology_details": []
                                                      },
                                                      "technology_names": [
                                                        "Next.js",
                                                        "Supabase",
                                                        "Vercel"
                                                      ],
                                                      "technology_details": []
                                                    },
                                                    "technology_names": [
                                                      "Next.js",
                                                      "Supabase",
                                                      "Vercel"
                                                    ],
                                                    "technology_details": []
                                                  },
                                                  "technology_names": [
                                                    "Next.js",
                                                    "Supabase",
                                                    "Vercel"
                                                  ],
                                                  "technology_details": []
                                                },
                                                "technology_names": [
                                                  "Next.js",
                                                  "Supabase",
                                                  "Vercel"
                                                ],
                                                "technology_details": []
                                              },
                                              "technology_names": [
                                                "Next.js",
                                                "Supabase",
                                                "Vercel"
                                              ],
                                              "technology_details": []
                                            },
                                            "technology_names": [
                                              "Next.js",
                                              "Supabase",
                                              "Vercel"
                                            ],
                                            "technology_details": []
                                          },
                                          "technology_names": [
                                            "Next.js",
                                            "Supabase",
                                            "Vercel"
                                          ],
                                          "technology_details": []
                                        },
                                        "technology_names": [
                                          "Next.js",
                                          "Supabase",
                                          "Vercel"
                                        ],
                                        "technology_details": []
                                      },
                                      "technology_names": [
                                        "Next.js",
                                        "Supabase",
                                        "Vercel"
                                      ],
                                      "technology_details": []
                                    },
                                    "technology_names": [
                                      "Next.js",
                                      "Supabase",
                                      "Vercel"
                                    ],
                                    "technology_details": []
                                  },
                                  "technology_names": [
                                    "Next.js",
                                    "Supabase",
                                    "Vercel"
                                  ],
                                  "technology_details": []
                                },
                                "technology_names": [
                                  "Next.js",
                                  "Supabase",
                                  "Vercel"
                                ],
                                "technology_details": []
                              },
                              "technology_names": [
                                "Next.js",
                                "Supabase",
                                "Vercel"
                              ],
                              "technology_details": []
                            },
                            "technology_names": [
                              "Next.js",
                              "Supabase",
                              "Vercel"
                            ],
                            "technology_details": []
                          },
                          "technology_names": [
                            "Next.js",
                            "Supabase",
                            "Vercel"
                          ],
                          "technology_details": []
                        },
                        "technology_names": [
                          "Next.js",
                          "Supabase",
                          "Vercel"
                        ],
                        "technology_details": []
                      },
                      "technology_names": [
                        "Next.js",
                        "Supabase",
                        "Vercel"
                      ],
                      "technology_details": []
                    },
                    "technology_names": [
                      "Next.js",
                      "Supabase",
                      "Vercel"
                    ],
                    "technology_details": []
                  },
                  "technology_names": [
                    "Next.js",
                    "Supabase",
                    "Vercel"
                  ],
                  "technology_details": []
                },
                "technology_names": [
                  "Next.js",
                  "Supabase",
                  "Vercel"
                ],
                "technology_details": []
              },
              "technology_names": [
                "Next.js",
                "Supabase",
                "Vercel"
              ],
              "technology_details": []
            },
            "technology_names": [
              "Next.js",
              "Supabase",
              "Vercel"
            ],
            "technology_details": []
          },
          "technology_names": [
            "Next.js",
            "Supabase",
            "Vercel"
          ],
          "technology_details": []
        },
        "technology_names": [
          "Next.js",
          "Supabase",
          "Vercel"
        ],
        "technology_details": []
      },
      "technologyNames": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technologyDetails": []
    },
    {
      "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "name": "Movie Recommendation System",
      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
      "picUrl": null,
      "order_index": 1,
      "technology_names": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": {
        "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
        "name": "Movie Recommendation System",
        "picUrl": null,
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
        "order_index": 1,
        "custom_links": [],
        "published_data": {
          "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
          "name": "Movie Recommendation System",
          "picUrl": null,
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
          "order_index": 1,
          "custom_links": [],
          "published_data": {
            "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
            "name": "Movie Recommendation System",
            "picUrl": null,
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
            "order_index": 1,
            "custom_links": [],
            "published_data": {
              "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
              "name": "Movie Recommendation System",
              "picUrl": null,
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
              "order_index": 1,
              "custom_links": [],
              "published_data": {
                "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                "name": "Movie Recommendation System",
                "picUrl": null,
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                "order_index": 1,
                "custom_links": [],
                "published_data": {
                  "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                  "name": "Movie Recommendation System",
                  "picUrl": null,
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                  "order_index": 1,
                  "custom_links": [],
                  "published_data": {
                    "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                    "name": "Movie Recommendation System",
                    "picUrl": null,
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                    "order_index": 1,
                    "custom_links": [],
                    "published_data": {
                      "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                      "name": "Movie Recommendation System",
                      "picUrl": null,
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                      "order_index": 1,
                      "custom_links": [],
                      "published_data": {
                        "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                        "name": "Movie Recommendation System",
                        "picUrl": null,
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                        "order_index": 1,
                        "custom_links": [],
                        "published_data": {
                          "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                          "name": "Movie Recommendation System",
                          "picUrl": null,
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                          "order_index": 1,
                          "custom_links": [],
                          "published_data": {
                            "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                            "name": "Movie Recommendation System",
                            "picUrl": null,
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                            "order_index": 1,
                            "custom_links": [],
                            "published_data": {
                              "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                              "name": "Movie Recommendation System",
                              "picUrl": null,
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                              "order_index": 1,
                              "custom_links": [],
                              "published_data": {
                                "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                "name": "Movie Recommendation System",
                                "picUrl": null,
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                "order_index": 1,
                                "custom_links": [],
                                "published_data": {
                                  "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                  "name": "Movie Recommendation System",
                                  "picUrl": null,
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                  "order_index": 1,
                                  "custom_links": [],
                                  "published_data": {
                                    "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                    "name": "Movie Recommendation System",
                                    "picUrl": null,
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                    "order_index": 1,
                                    "custom_links": [],
                                    "published_data": {
                                      "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                      "name": "Movie Recommendation System",
                                      "picUrl": null,
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                      "order_index": 1,
                                      "custom_links": [],
                                      "published_data": {
                                        "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                        "name": "Movie Recommendation System",
                                        "picUrl": null,
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                        "order_index": 1,
                                        "custom_links": [],
                                        "published_data": {
                                          "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                          "name": "Movie Recommendation System",
                                          "picUrl": null,
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                          "order_index": 1,
                                          "custom_links": [],
                                          "published_data": {
                                            "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                            "name": "Movie Recommendation System",
                                            "picUrl": null,
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                            "order_index": 1,
                                            "custom_links": [],
                                            "published_data": {
                                              "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                              "name": "Movie Recommendation System",
                                              "picUrl": null,
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                              "order_index": 1,
                                              "custom_links": [],
                                              "published_data": {
                                                "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                "name": "Movie Recommendation System",
                                                "picUrl": null,
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                "order_index": 1,
                                                "custom_links": [],
                                                "published_data": {
                                                  "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                  "name": "Movie Recommendation System",
                                                  "picUrl": null,
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                  "order_index": 1,
                                                  "custom_links": [],
                                                  "published_data": {
                                                    "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                    "name": "Movie Recommendation System",
                                                    "picUrl": null,
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                    "order_index": 1,
                                                    "custom_links": [],
                                                    "published_data": {
                                                      "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                      "name": "Movie Recommendation System",
                                                      "picUrl": null,
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                      "order_index": 1,
                                                      "custom_links": [],
                                                      "published_data": {
                                                        "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                        "name": "Movie Recommendation System",
                                                        "picUrl": null,
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                        "order_index": 1,
                                                        "custom_links": [],
                                                        "published_data": {
                                                          "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                          "name": "Movie Recommendation System",
                                                          "picUrl": null,
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                          "order_index": 1,
                                                          "custom_links": [],
                                                          "published_data": {
                                                            "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                            "name": "Movie Recommendation System",
                                                            "picUrl": null,
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                            "order_index": 1,
                                                            "custom_links": [],
                                                            "published_data": {
                                                              "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                              "name": "Movie Recommendation System",
                                                              "picUrl": null,
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                              "order_index": 1,
                                                              "custom_links": [],
                                                              "published_data": {
                                                                "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                                "name": "Movie Recommendation System",
                                                                "picUrl": null,
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                                "order_index": 1,
                                                                "custom_links": [],
                                                                "published_data": {
                                                                  "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                                  "name": "Movie Recommendation System",
                                                                  "picUrl": null,
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                                  "order_index": 1,
                                                                  "custom_links": [],
                                                                  "published_data": {
                                                                    "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                                    "name": "Movie Recommendation System",
                                                                    "picUrl": null,
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                                    "order_index": 1,
                                                                    "custom_links": [],
                                                                    "published_data": {
                                                                      "id": "e6581e31-1365-482d-a3d4-4ca990e5d7c1",
                                                                      "name": "Movie Recommendation System",
                                                                      "picUrl": null,
                                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\r\n- Deployed the model as a Flask API and integrated it into a React front end.\r\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
                                                                      "order_index": 1,
                                                                      "custom_links": [],
                                                                      "published_data": null,
                                                                      "technology_names": [
                                                                        "Python",
                                                                        "scikit-learn",
                                                                        "Flask",
                                                                        "React"
                                                                      ],
                                                                      "technology_details": []
                                                                    },
                                                                    "technology_names": [
                                                                      "Python",
                                                                      "scikit-learn",
                                                                      "Flask",
                                                                      "React"
                                                                    ],
                                                                    "technology_details": []
                                                                  },
                                                                  "technology_names": [
                                                                    "Python",
                                                                    "scikit-learn",
                                                                    "Flask",
                                                                    "React"
                                                                  ],
                                                                  "technology_details": []
                                                                },
                                                                "technology_names": [
                                                                  "Python",
                                                                  "scikit-learn",
                                                                  "Flask",
                                                                  "React"
                                                                ],
                                                                "technology_details": []
                                                              },
                                                              "technology_names": [
                                                                "Python",
                                                                "scikit-learn",
                                                                "Flask",
                                                                "React"
                                                              ],
                                                              "technology_details": []
                                                            },
                                                            "technology_names": [
                                                              "Python",
                                                              "scikit-learn",
                                                              "Flask",
                                                              "React"
                                                            ],
                                                            "technology_details": []
                                                          },
                                                          "technology_names": [
                                                            "Python",
                                                            "scikit-learn",
                                                            "Flask",
                                                            "React"
                                                          ],
                                                          "technology_details": []
                                                        },
                                                        "technology_names": [
                                                          "Python",
                                                          "scikit-learn",
                                                          "Flask",
                                                          "React"
                                                        ],
                                                        "technology_details": []
                                                      },
                                                      "technology_names": [
                                                        "Python",
                                                        "scikit-learn",
                                                        "Flask",
                                                        "React"
                                                      ],
                                                      "technology_details": []
                                                    },
                                                    "technology_names": [
                                                      "Python",
                                                      "scikit-learn",
                                                      "Flask",
                                                      "React"
                                                    ],
                                                    "technology_details": []
                                                  },
                                                  "technology_names": [
                                                    "Python",
                                                    "scikit-learn",
                                                    "Flask",
                                                    "React"
                                                  ],
                                                  "technology_details": []
                                                },
                                                "technology_names": [
                                                  "Python",
                                                  "scikit-learn",
                                                  "Flask",
                                                  "React"
                                                ],
                                                "technology_details": []
                                              },
                                              "technology_names": [
                                                "Python",
                                                "scikit-learn",
                                                "Flask",
                                                "React"
                                              ],
                                              "technology_details": []
                                            },
                                            "technology_names": [
                                              "Python",
                                              "scikit-learn",
                                              "Flask",
                                              "React"
                                            ],
                                            "technology_details": []
                                          },
                                          "technology_names": [
                                            "Python",
                                            "scikit-learn",
                                            "Flask",
                                            "React"
                                          ],
                                          "technology_details": []
                                        },
                                        "technology_names": [
                                          "Python",
                                          "scikit-learn",
                                          "Flask",
                                          "React"
                                        ],
                                        "technology_details": []
                                      },
                                      "technology_names": [
                                        "Python",
                                        "scikit-learn",
                                        "Flask",
                                        "React"
                                      ],
                                      "technology_details": []
                                    },
                                    "technology_names": [
                                      "Python",
                                      "scikit-learn",
                                      "Flask",
                                      "React"
                                    ],
                                    "technology_details": []
                                  },
                                  "technology_names": [
                                    "Python",
                                    "scikit-learn",
                                    "Flask",
                                    "React"
                                  ],
                                  "technology_details": []
                                },
                                "technology_names": [
                                  "Python",
                                  "scikit-learn",
                                  "Flask",
                                  "React"
                                ],
                                "technology_details": []
                              },
                              "technology_names": [
                                "Python",
                                "scikit-learn",
                                "Flask",
                                "React"
                              ],
                              "technology_details": []
                            },
                            "technology_names": [
                              "Python",
                              "scikit-learn",
                              "Flask",
                              "React"
                            ],
                            "technology_details": []
                          },
                          "technology_names": [
                            "Python",
                            "scikit-learn",
                            "Flask",
                            "React"
                          ],
                          "technology_details": []
                        },
                        "technology_names": [
                          "Python",
                          "scikit-learn",
                          "Flask",
                          "React"
                        ],
                        "technology_details": []
                      },
                      "technology_names": [
                        "Python",
                        "scikit-learn",
                        "Flask",
                        "React"
                      ],
                      "technology_details": []
                    },
                    "technology_names": [
                      "Python",
                      "scikit-learn",
                      "Flask",
                      "React"
                    ],
                    "technology_details": []
                  },
                  "technology_names": [
                    "Python",
                    "scikit-learn",
                    "Flask",
                    "React"
                  ],
                  "technology_details": []
                },
                "technology_names": [
                  "Python",
                  "scikit-learn",
                  "Flask",
                  "React"
                ],
                "technology_details": []
              },
              "technology_names": [
                "Python",
                "scikit-learn",
                "Flask",
                "React"
              ],
              "technology_details": []
            },
            "technology_names": [
              "Python",
              "scikit-learn",
              "Flask",
              "React"
            ],
            "technology_details": []
          },
          "technology_names": [
            "Python",
            "scikit-learn",
            "Flask",
            "React"
          ],
          "technology_details": []
        },
        "technology_names": [
          "Python",
          "scikit-learn",
          "Flask",
          "React"
        ],
        "technology_details": []
      },
      "technologyNames": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technologyDetails": []
    },
    {
      "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "name": "Task Manager Mobile App",
      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
      "picUrl": null,
      "order_index": 2,
      "technology_names": [
        "React Native",
        "SQLite"
      ],
      "technology_details": [],
      "custom_links": [],
      "published_data": {
        "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
        "name": "Task Manager Mobile App",
        "picUrl": null,
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
        "order_index": 2,
        "custom_links": [],
        "published_data": {
          "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
          "name": "Task Manager Mobile App",
          "picUrl": null,
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
          "order_index": 2,
          "custom_links": [],
          "published_data": {
            "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
            "name": "Task Manager Mobile App",
            "picUrl": null,
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
            "order_index": 2,
            "custom_links": [],
            "published_data": {
              "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
              "name": "Task Manager Mobile App",
              "picUrl": null,
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
              "order_index": 2,
              "custom_links": [],
              "published_data": {
                "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                "name": "Task Manager Mobile App",
                "picUrl": null,
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                "order_index": 2,
                "custom_links": [],
                "published_data": {
                  "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                  "name": "Task Manager Mobile App",
                  "picUrl": null,
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                  "order_index": 2,
                  "custom_links": [],
                  "published_data": {
                    "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                    "name": "Task Manager Mobile App",
                    "picUrl": null,
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                    "order_index": 2,
                    "custom_links": [],
                    "published_data": {
                      "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                      "name": "Task Manager Mobile App",
                      "picUrl": null,
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                      "order_index": 2,
                      "custom_links": [],
                      "published_data": {
                        "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                        "name": "Task Manager Mobile App",
                        "picUrl": null,
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                        "order_index": 2,
                        "custom_links": [],
                        "published_data": {
                          "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                          "name": "Task Manager Mobile App",
                          "picUrl": null,
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                          "order_index": 2,
                          "custom_links": [],
                          "published_data": {
                            "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                            "name": "Task Manager Mobile App",
                            "picUrl": null,
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                            "order_index": 2,
                            "custom_links": [],
                            "published_data": {
                              "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                              "name": "Task Manager Mobile App",
                              "picUrl": null,
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                              "order_index": 2,
                              "custom_links": [],
                              "published_data": {
                                "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                "name": "Task Manager Mobile App",
                                "picUrl": null,
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                "order_index": 2,
                                "custom_links": [],
                                "published_data": {
                                  "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                  "name": "Task Manager Mobile App",
                                  "picUrl": null,
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                  "order_index": 2,
                                  "custom_links": [],
                                  "published_data": {
                                    "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                    "name": "Task Manager Mobile App",
                                    "picUrl": null,
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                    "order_index": 2,
                                    "custom_links": [],
                                    "published_data": {
                                      "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                      "name": "Task Manager Mobile App",
                                      "picUrl": null,
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                      "order_index": 2,
                                      "custom_links": [],
                                      "published_data": {
                                        "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                        "name": "Task Manager Mobile App",
                                        "picUrl": null,
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                        "order_index": 2,
                                        "custom_links": [],
                                        "published_data": {
                                          "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                          "name": "Task Manager Mobile App",
                                          "picUrl": null,
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                          "order_index": 2,
                                          "custom_links": [],
                                          "published_data": {
                                            "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                            "name": "Task Manager Mobile App",
                                            "picUrl": null,
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                            "order_index": 2,
                                            "custom_links": [],
                                            "published_data": {
                                              "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                              "name": "Task Manager Mobile App",
                                              "picUrl": null,
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                              "order_index": 2,
                                              "custom_links": [],
                                              "published_data": {
                                                "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                "name": "Task Manager Mobile App",
                                                "picUrl": null,
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                "order_index": 2,
                                                "custom_links": [],
                                                "published_data": {
                                                  "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                  "name": "Task Manager Mobile App",
                                                  "picUrl": null,
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                  "order_index": 2,
                                                  "custom_links": [],
                                                  "published_data": {
                                                    "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                    "name": "Task Manager Mobile App",
                                                    "picUrl": null,
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                    "order_index": 2,
                                                    "custom_links": [],
                                                    "published_data": {
                                                      "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                      "name": "Task Manager Mobile App",
                                                      "picUrl": null,
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                      "order_index": 2,
                                                      "custom_links": [],
                                                      "published_data": {
                                                        "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                        "name": "Task Manager Mobile App",
                                                        "picUrl": null,
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                        "order_index": 2,
                                                        "custom_links": [],
                                                        "published_data": {
                                                          "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                          "name": "Task Manager Mobile App",
                                                          "picUrl": null,
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                          "order_index": 2,
                                                          "custom_links": [],
                                                          "published_data": {
                                                            "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                            "name": "Task Manager Mobile App",
                                                            "picUrl": null,
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                            "order_index": 2,
                                                            "custom_links": [],
                                                            "published_data": {
                                                              "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                              "name": "Task Manager Mobile App",
                                                              "picUrl": null,
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                              "order_index": 2,
                                                              "custom_links": [],
                                                              "published_data": {
                                                                "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                                "name": "Task Manager Mobile App",
                                                                "picUrl": null,
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                                "order_index": 2,
                                                                "custom_links": [],
                                                                "published_data": {
                                                                  "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                                  "name": "Task Manager Mobile App",
                                                                  "picUrl": null,
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                                  "order_index": 2,
                                                                  "custom_links": [],
                                                                  "published_data": {
                                                                    "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                                    "name": "Task Manager Mobile App",
                                                                    "picUrl": null,
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                                    "order_index": 2,
                                                                    "custom_links": [],
                                                                    "published_data": {
                                                                      "id": "8a823965-08fc-43ae-8611-ef58ef073eb1",
                                                                      "name": "Task Manager Mobile App",
                                                                      "picUrl": null,
                                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                      "description": "- Created a cross-platform mobile app using React Native for task tracking.\r\n- Integrated push notifications and offline storage using SQLite.\r\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
                                                                      "order_index": 2,
                                                                      "custom_links": [],
                                                                      "published_data": null,
                                                                      "technology_names": [
                                                                        "React Native",
                                                                        "SQLite"
                                                                      ],
                                                                      "technology_details": []
                                                                    },
                                                                    "technology_names": [
                                                                      "React Native",
                                                                      "SQLite"
                                                                    ],
                                                                    "technology_details": []
                                                                  },
                                                                  "technology_names": [
                                                                    "React Native",
                                                                    "SQLite"
                                                                  ],
                                                                  "technology_details": []
                                                                },
                                                                "technology_names": [
                                                                  "React Native",
                                                                  "SQLite"
                                                                ],
                                                                "technology_details": []
                                                              },
                                                              "technology_names": [
                                                                "React Native",
                                                                "SQLite"
                                                              ],
                                                              "technology_details": []
                                                            },
                                                            "technology_names": [
                                                              "React Native",
                                                              "SQLite"
                                                            ],
                                                            "technology_details": []
                                                          },
                                                          "technology_names": [
                                                            "React Native",
                                                            "SQLite"
                                                          ],
                                                          "technology_details": []
                                                        },
                                                        "technology_names": [
                                                          "React Native",
                                                          "SQLite"
                                                        ],
                                                        "technology_details": []
                                                      },
                                                      "technology_names": [
                                                        "React Native",
                                                        "SQLite"
                                                      ],
                                                      "technology_details": []
                                                    },
                                                    "technology_names": [
                                                      "React Native",
                                                      "SQLite"
                                                    ],
                                                    "technology_details": []
                                                  },
                                                  "technology_names": [
                                                    "React Native",
                                                    "SQLite"
                                                  ],
                                                  "technology_details": []
                                                },
                                                "technology_names": [
                                                  "React Native",
                                                  "SQLite"
                                                ],
                                                "technology_details": []
                                              },
                                              "technology_names": [
                                                "React Native",
                                                "SQLite"
                                              ],
                                              "technology_details": []
                                            },
                                            "technology_names": [
                                              "React Native",
                                              "SQLite"
                                            ],
                                            "technology_details": []
                                          },
                                          "technology_names": [
                                            "React Native",
                                            "SQLite"
                                          ],
                                          "technology_details": []
                                        },
                                        "technology_names": [
                                          "React Native",
                                          "SQLite"
                                        ],
                                        "technology_details": []
                                      },
                                      "technology_names": [
                                        "React Native",
                                        "SQLite"
                                      ],
                                      "technology_details": []
                                    },
                                    "technology_names": [
                                      "React Native",
                                      "SQLite"
                                    ],
                                    "technology_details": []
                                  },
                                  "technology_names": [
                                    "React Native",
                                    "SQLite"
                                  ],
                                  "technology_details": []
                                },
                                "technology_names": [
                                  "React Native",
                                  "SQLite"
                                ],
                                "technology_details": []
                              },
                              "technology_names": [
                                "React Native",
                                "SQLite"
                              ],
                              "technology_details": []
                            },
                            "technology_names": [
                              "React Native",
                              "SQLite"
                            ],
                            "technology_details": []
                          },
                          "technology_names": [
                            "React Native",
                            "SQLite"
                          ],
                          "technology_details": []
                        },
                        "technology_names": [
                          "React Native",
                          "SQLite"
                        ],
                        "technology_details": []
                      },
                      "technology_names": [
                        "React Native",
                        "SQLite"
                      ],
                      "technology_details": []
                    },
                    "technology_names": [
                      "React Native",
                      "SQLite"
                    ],
                    "technology_details": []
                  },
                  "technology_names": [
                    "React Native",
                    "SQLite"
                  ],
                  "technology_details": []
                },
                "technology_names": [
                  "React Native",
                  "SQLite"
                ],
                "technology_details": []
              },
              "technology_names": [
                "React Native",
                "SQLite"
              ],
              "technology_details": []
            },
            "technology_names": [
              "React Native",
              "SQLite"
            ],
            "technology_details": []
          },
          "technology_names": [
            "React Native",
            "SQLite"
          ],
          "technology_details": []
        },
        "technology_names": [
          "React Native",
          "SQLite"
        ],
        "technology_details": []
      },
      "technologyNames": [
        "React Native",
        "SQLite"
      ],
      "technologyDetails": []
    }
  ],
  "userTechnologies": [
    {
      "id": "cb22574c-4b4d-4f3c-9ece-39efa540d440",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Java",
      "technology_name": "Java",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 0,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "e58bc51c-bd86-44f6-af5b-25ae3210b31a",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Python",
      "technology_name": "Python",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 1,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "e9e15784-c17a-497c-9f86-5b522d1ae940",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "JavaScript",
      "technology_name": "JavaScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 2,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "076c544a-4663-4daf-a323-e015a881b08c",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "React",
      "technology_name": "React",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 3,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "b9612a71-2ebc-477f-8bff-3f5e0d9bb7e6",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Node.js",
      "technology_name": "Node.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 4,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "f3c41856-a8d4-4cb3-8c95-2fab605f1ea1",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "TypeScript",
      "technology_name": "TypeScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 5,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "df0ac7e4-70ea-464e-858a-fff488bce646",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "C++",
      "technology_name": "C++",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 6,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "ce3787a0-e9e6-47e8-badf-bb411ba4d03d",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Next.js",
      "technology_name": "Next.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 7,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "8c71ebed-60c4-4b55-9745-04309c7cd7b6",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Spring Boot",
      "technology_name": "Spring Boot",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 8,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "f427b7eb-d123-4c15-be0b-aa11b55a4fff",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Express.js",
      "technology_name": "Express.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 9,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "32ec9418-b299-4eb0-a543-e9ce303d7197",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Django",
      "technology_name": "Django",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 10,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "a98eed74-d88a-432a-b0d4-790f3eeaffd4",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "PostgreSQL",
      "technology_name": "PostgreSQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 11,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "470abca7-22c5-4047-99d7-bf01e91246c7",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "MongoDB",
      "technology_name": "MongoDB",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 12,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "88587210-ffc3-4193-a895-270a7408674e",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "MySQL",
      "technology_name": "MySQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 13,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "5fa9c69f-f010-4cf2-8ed4-70bb7731bd1d",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Redis",
      "technology_name": "Redis",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 14,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "74484372-d582-4b20-9422-003b983e19b1",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "AWS",
      "technology_name": "AWS",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 15,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "55c6b812-c237-4ab2-a250-93ca6716e4ca",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Docker",
      "technology_name": "Docker",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 16,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "a5c79ee3-96f9-4102-9105-848f728f7277",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Kubernetes",
      "technology_name": "Kubernetes",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 17,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "05b7bd70-558d-4703-ace4-35bc9613fe39",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Git",
      "technology_name": "Git",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 18,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "b1660d5e-c92c-4324-a191-877c055411db",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Jenkins",
      "technology_name": "Jenkins",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 19,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "250954da-d333-42e0-88dc-f39f7c086db0",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "CI/CD pipelines",
      "technology_name": "CI/CD pipelines",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 20,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "c81446a2-063e-476a-8e96-fe028fa41371",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "REST APIs",
      "technology_name": "REST APIs",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 21,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "6d5e8326-7f28-41c0-b0de-0d29e2b66d1a",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "GraphQL",
      "technology_name": "GraphQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 22,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "c6fd9aef-9413-45a7-9c45-ade51d6e4749",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Unit Testing",
      "technology_name": "Unit Testing",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 23,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "477b1930-d07c-4602-ba95-68f4e0e39978",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Agile/Scrum",
      "technology_name": "Agile/Scrum",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 24,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "185a681a-b08e-40f4-9b16-b331f7c803fa",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Test-Driven Development (TDD)",
      "technology_name": "Test-Driven Development (TDD)",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 25,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "66145fa2-0e93-4ddb-a914-fddd3d089fd6",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "GitHub Actions",
      "technology_name": "GitHub Actions",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 26,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "d5ad0d98-228b-4b66-bcb7-0e19b1c27e26",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Supabase",
      "technology_name": "Supabase",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 27,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "da71d530-1652-481c-9166-3ae49741a3ba",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Vercel",
      "technology_name": "Vercel",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 28,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "3e914463-5880-45ac-9ecd-8ae33e1a828d",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "scikit-learn",
      "technology_name": "scikit-learn",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 29,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "9d3b9375-f275-40ad-ba88-f95d503c262c",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "Flask",
      "technology_name": "Flask",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 30,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "22313f41-eaf3-4e8a-ae3b-3318feba672d",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "React Native",
      "technology_name": "React Native",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 31,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    },
    {
      "id": "25880b1f-b43d-4dec-8222-bce9e226a34e",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "display_name": "SQLite",
      "technology_name": "SQLite",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 32,
      "created_at": "2025-09-16T13:15:41.426+00:00",
      "updated_at": "2025-09-16T13:15:41.426+00:00"
    }
  ],
  "customSections": [
    {
      "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "section_name": "code jams",
      "layout_type": "list",
      "items": [
        {
          "id": "751d7487-0457-485d-9659-7ab425d00594",
          "logoUrl": "/p61/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
          "location": "SF",
          "logoFile": null,
          "orderIndex": 0,
          "customLinks": [
            {
              "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
              "url": "demo",
              "icon": "website",
              "title": "demo"
            }
          ],
          "description": "did this and that",
          "primaryTitle": "test",
          "secondaryTitle": "google"
        }
      ],
      "created_at": "2025-09-17T13:09:51.624+00:00",
      "updated_at": "2025-09-17T13:09:51.624+00:00",
      "published_data": {
        "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
        "items": [
          {
            "id": "751d7487-0457-485d-9659-7ab425d00594",
            "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
            "location": "SF",
            "logoFile": null,
            "orderIndex": 0,
            "customLinks": [
              {
                "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                "url": "demo",
                "icon": "website",
                "title": "demo"
              }
            ],
            "description": "did this and that",
            "primaryTitle": "test",
            "secondaryTitle": "google"
          }
        ],
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "created_at": "2025-09-17T12:56:13.936+00:00",
        "updated_at": "2025-09-17T12:56:13.936+00:00",
        "layout_type": "list",
        "section_name": "code jams",
        "published_data": {
          "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
          "items": [
            {
              "id": "751d7487-0457-485d-9659-7ab425d00594",
              "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
              "location": "SF",
              "logoFile": null,
              "orderIndex": 0,
              "customLinks": [
                {
                  "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                  "url": "demo",
                  "icon": "website",
                  "title": "demo"
                }
              ],
              "description": "did this and that",
              "primaryTitle": "test",
              "secondaryTitle": "google"
            }
          ],
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "created_at": "2025-09-17T12:55:39.597+00:00",
          "updated_at": "2025-09-17T12:55:39.597+00:00",
          "layout_type": "list",
          "section_name": "code jams",
          "published_data": {
            "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
            "items": [
              {
                "id": "751d7487-0457-485d-9659-7ab425d00594",
                "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                "location": "SF",
                "logoFile": null,
                "orderIndex": 0,
                "customLinks": [
                  {
                    "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                    "url": "demo",
                    "icon": "website",
                    "title": "demo"
                  }
                ],
                "description": "did this and that",
                "primaryTitle": "test",
                "secondaryTitle": "google"
              }
            ],
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "created_at": "2025-09-17T12:51:51.698+00:00",
            "updated_at": "2025-09-17T12:51:51.698+00:00",
            "layout_type": "list",
            "section_name": "code jams",
            "published_data": {
              "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
              "items": [
                {
                  "id": "751d7487-0457-485d-9659-7ab425d00594",
                  "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                  "location": "SF",
                  "logoFile": null,
                  "orderIndex": 0,
                  "customLinks": [
                    {
                      "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                      "url": "demo",
                      "icon": "website",
                      "title": "demo"
                    }
                  ],
                  "description": "did this and that",
                  "primaryTitle": "test",
                  "secondaryTitle": "google"
                }
              ],
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "created_at": "2025-09-17T12:51:37.864+00:00",
              "updated_at": "2025-09-17T12:51:37.864+00:00",
              "layout_type": "list",
              "section_name": "code jams",
              "published_data": {
                "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                "items": [
                  {
                    "id": "751d7487-0457-485d-9659-7ab425d00594",
                    "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                    "location": "SF",
                    "logoFile": null,
                    "orderIndex": 0,
                    "customLinks": [
                      {
                        "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                        "url": "demo",
                        "icon": "website",
                        "title": "demo"
                      }
                    ],
                    "description": "did this and that",
                    "primaryTitle": "test",
                    "secondaryTitle": "google"
                  }
                ],
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "created_at": "2025-09-17T12:50:05.242+00:00",
                "updated_at": "2025-09-17T12:50:05.242+00:00",
                "layout_type": "list",
                "section_name": "code jams",
                "published_data": {
                  "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                  "items": [
                    {
                      "id": "751d7487-0457-485d-9659-7ab425d00594",
                      "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                      "location": "SF",
                      "logoFile": null,
                      "orderIndex": 0,
                      "customLinks": [
                        {
                          "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                          "url": "demo",
                          "icon": "website",
                          "title": "demo"
                        }
                      ],
                      "description": "did this and that",
                      "primaryTitle": "test",
                      "secondaryTitle": "google"
                    }
                  ],
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "created_at": "2025-09-17T12:49:41.222+00:00",
                  "updated_at": "2025-09-17T12:49:41.222+00:00",
                  "layout_type": "list",
                  "section_name": "code jams",
                  "published_data": {
                    "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                    "items": [
                      {
                        "id": "751d7487-0457-485d-9659-7ab425d00594",
                        "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                        "location": "SF",
                        "logoFile": null,
                        "orderIndex": 0,
                        "customLinks": [
                          {
                            "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                            "url": "demo",
                            "icon": "website",
                            "title": "demo"
                          }
                        ],
                        "description": "did this and that",
                        "primaryTitle": "test",
                        "secondaryTitle": "google"
                      }
                    ],
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "created_at": "2025-09-17T12:46:01.637+00:00",
                    "updated_at": "2025-09-17T12:46:01.637+00:00",
                    "layout_type": "list",
                    "section_name": "code jams",
                    "published_data": {
                      "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                      "items": [
                        {
                          "id": "751d7487-0457-485d-9659-7ab425d00594",
                          "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                          "location": "SF",
                          "logoFile": null,
                          "orderIndex": 0,
                          "customLinks": [
                            {
                              "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                              "url": "demo",
                              "icon": "website",
                              "title": "demo"
                            }
                          ],
                          "description": "did this and that",
                          "primaryTitle": "test",
                          "secondaryTitle": "google"
                        }
                      ],
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "created_at": "2025-09-17T12:42:13.145+00:00",
                      "updated_at": "2025-09-17T12:42:13.145+00:00",
                      "layout_type": "list",
                      "section_name": "code jams",
                      "published_data": {
                        "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                        "items": [
                          {
                            "id": "751d7487-0457-485d-9659-7ab425d00594",
                            "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                            "location": "SF",
                            "logoFile": null,
                            "orderIndex": 0,
                            "customLinks": [
                              {
                                "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                "url": "demo",
                                "icon": "website",
                                "title": "demo"
                              }
                            ],
                            "description": "did this and that",
                            "primaryTitle": "test",
                            "secondaryTitle": "google"
                          }
                        ],
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "created_at": "2025-09-17T12:41:17.614+00:00",
                        "updated_at": "2025-09-17T12:41:17.614+00:00",
                        "layout_type": "list",
                        "section_name": "code jams",
                        "published_data": {
                          "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                          "items": [
                            {
                              "id": "751d7487-0457-485d-9659-7ab425d00594",
                              "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                              "location": "SF",
                              "logoFile": null,
                              "orderIndex": 0,
                              "customLinks": [
                                {
                                  "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                  "url": "demo",
                                  "icon": "website",
                                  "title": "demo"
                                }
                              ],
                              "description": "did this and that",
                              "primaryTitle": "test",
                              "secondaryTitle": "google"
                            }
                          ],
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "created_at": "2025-09-17T12:31:26.956+00:00",
                          "updated_at": "2025-09-17T12:31:26.956+00:00",
                          "layout_type": "list",
                          "section_name": "code jams",
                          "published_data": {
                            "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                            "items": [
                              {
                                "id": "751d7487-0457-485d-9659-7ab425d00594",
                                "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                "location": "SF",
                                "logoFile": null,
                                "orderIndex": 0,
                                "customLinks": [
                                  {
                                    "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                    "url": "demo",
                                    "icon": "website",
                                    "title": "demo"
                                  }
                                ],
                                "description": "did this and that",
                                "primaryTitle": "test",
                                "secondaryTitle": "google"
                              }
                            ],
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "created_at": "2025-09-17T12:26:12.784+00:00",
                            "updated_at": "2025-09-17T12:26:12.784+00:00",
                            "layout_type": "list",
                            "section_name": "code jams",
                            "published_data": {
                              "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                              "items": [
                                {
                                  "id": "751d7487-0457-485d-9659-7ab425d00594",
                                  "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                  "location": "SF",
                                  "logoFile": null,
                                  "orderIndex": 0,
                                  "customLinks": [
                                    {
                                      "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                      "url": "demo",
                                      "icon": "website",
                                      "title": "demo"
                                    }
                                  ],
                                  "description": "did this and that",
                                  "primaryTitle": "test",
                                  "secondaryTitle": "google"
                                }
                              ],
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "created_at": "2025-09-17T12:21:43.986+00:00",
                              "updated_at": "2025-09-17T12:21:43.986+00:00",
                              "layout_type": "list",
                              "section_name": "code jams",
                              "published_data": {
                                "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                "items": [
                                  {
                                    "id": "751d7487-0457-485d-9659-7ab425d00594",
                                    "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                    "location": "SF",
                                    "logoFile": null,
                                    "orderIndex": 0,
                                    "customLinks": [
                                      {
                                        "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                        "url": "demo",
                                        "icon": "website",
                                        "title": "demo"
                                      }
                                    ],
                                    "description": "did this and that",
                                    "primaryTitle": "test",
                                    "secondaryTitle": "google"
                                  }
                                ],
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "created_at": "2025-09-17T12:13:51.532+00:00",
                                "updated_at": "2025-09-17T12:13:51.532+00:00",
                                "layout_type": "list",
                                "section_name": "code jams",
                                "published_data": {
                                  "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                  "items": [
                                    {
                                      "id": "751d7487-0457-485d-9659-7ab425d00594",
                                      "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                      "location": "SF",
                                      "logoFile": null,
                                      "orderIndex": 0,
                                      "customLinks": [
                                        {
                                          "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                          "url": "demo",
                                          "icon": "website",
                                          "title": "demo"
                                        }
                                      ],
                                      "description": "did this and that",
                                      "primaryTitle": "test",
                                      "secondaryTitle": "google"
                                    }
                                  ],
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "created_at": "2025-09-17T12:13:38.593+00:00",
                                  "updated_at": "2025-09-17T12:13:38.593+00:00",
                                  "layout_type": "list",
                                  "section_name": "code jams",
                                  "published_data": {
                                    "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                    "items": [
                                      {
                                        "id": "751d7487-0457-485d-9659-7ab425d00594",
                                        "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                        "location": "SF",
                                        "logoFile": null,
                                        "orderIndex": 0,
                                        "customLinks": [
                                          {
                                            "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                            "url": "demo",
                                            "icon": "website",
                                            "title": "demo"
                                          }
                                        ],
                                        "description": "did this and that",
                                        "primaryTitle": "test",
                                        "secondaryTitle": "google"
                                      }
                                    ],
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "created_at": "2025-09-17T12:06:06.1+00:00",
                                    "updated_at": "2025-09-17T12:06:06.1+00:00",
                                    "layout_type": "list",
                                    "section_name": "code jams",
                                    "published_data": {
                                      "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                      "items": [
                                        {
                                          "id": "751d7487-0457-485d-9659-7ab425d00594",
                                          "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                          "location": "SF",
                                          "logoFile": null,
                                          "orderIndex": 0,
                                          "customLinks": [
                                            {
                                              "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                              "url": "demo",
                                              "icon": "website",
                                              "title": "demo"
                                            }
                                          ],
                                          "description": "did this and that",
                                          "primaryTitle": "test",
                                          "secondaryTitle": "google"
                                        }
                                      ],
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "created_at": "2025-09-17T12:05:23.808+00:00",
                                      "updated_at": "2025-09-17T12:05:23.808+00:00",
                                      "layout_type": "list",
                                      "section_name": "code jams",
                                      "published_data": {
                                        "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                        "items": [
                                          {
                                            "id": "751d7487-0457-485d-9659-7ab425d00594",
                                            "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                            "location": "SF",
                                            "logoFile": null,
                                            "orderIndex": 0,
                                            "customLinks": [
                                              {
                                                "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                "url": "demo",
                                                "icon": "website",
                                                "title": "demo"
                                              }
                                            ],
                                            "description": "did this and that",
                                            "primaryTitle": "test",
                                            "secondaryTitle": "google"
                                          }
                                        ],
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "created_at": "2025-09-17T08:25:42.413+00:00",
                                        "updated_at": "2025-09-17T08:25:42.413+00:00",
                                        "layout_type": "list",
                                        "section_name": "code jams",
                                        "published_data": {
                                          "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                          "items": [
                                            {
                                              "id": "751d7487-0457-485d-9659-7ab425d00594",
                                              "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                              "location": "SF",
                                              "logoFile": null,
                                              "orderIndex": 0,
                                              "customLinks": [
                                                {
                                                  "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                  "url": "demo",
                                                  "icon": "website",
                                                  "title": "demo"
                                                }
                                              ],
                                              "description": "did this and that",
                                              "primaryTitle": "test",
                                              "secondaryTitle": "google"
                                            }
                                          ],
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "created_at": "2025-09-17T08:24:39.825+00:00",
                                          "updated_at": "2025-09-17T08:24:39.825+00:00",
                                          "layout_type": "list",
                                          "section_name": "code jams",
                                          "published_data": {
                                            "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                            "items": [
                                              {
                                                "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                "location": "SF",
                                                "logoFile": null,
                                                "orderIndex": 0,
                                                "customLinks": [
                                                  {
                                                    "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                    "url": "demo",
                                                    "icon": "website",
                                                    "title": "demo"
                                                  }
                                                ],
                                                "description": "did this and that",
                                                "primaryTitle": "test",
                                                "secondaryTitle": "google"
                                              }
                                            ],
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "created_at": "2025-09-17T08:22:01.247+00:00",
                                            "updated_at": "2025-09-17T08:22:01.247+00:00",
                                            "layout_type": "list",
                                            "section_name": "code jams",
                                            "published_data": {
                                              "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                              "items": [
                                                {
                                                  "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                  "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                  "location": "SF",
                                                  "logoFile": null,
                                                  "orderIndex": 0,
                                                  "customLinks": [
                                                    {
                                                      "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                      "url": "demo",
                                                      "icon": "website",
                                                      "title": "demo"
                                                    }
                                                  ],
                                                  "description": "did this and that",
                                                  "primaryTitle": "test",
                                                  "secondaryTitle": "google"
                                                }
                                              ],
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "created_at": "2025-09-17T08:17:51.706+00:00",
                                              "updated_at": "2025-09-17T08:17:51.706+00:00",
                                              "layout_type": "list",
                                              "section_name": "code jams",
                                              "published_data": {
                                                "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                "items": [
                                                  {
                                                    "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                    "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                    "location": "SF",
                                                    "logoFile": null,
                                                    "orderIndex": 0,
                                                    "customLinks": [
                                                      {
                                                        "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                        "url": "demo",
                                                        "icon": "website",
                                                        "title": "demo"
                                                      }
                                                    ],
                                                    "description": "did this and that",
                                                    "primaryTitle": "test",
                                                    "secondaryTitle": "google"
                                                  }
                                                ],
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "created_at": "2025-09-17T08:17:33.904+00:00",
                                                "updated_at": "2025-09-17T08:17:33.904+00:00",
                                                "layout_type": "list",
                                                "section_name": "code jams",
                                                "published_data": {
                                                  "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                  "items": [
                                                    {
                                                      "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                      "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                      "location": "SF",
                                                      "logoFile": null,
                                                      "orderIndex": 0,
                                                      "customLinks": [
                                                        {
                                                          "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                          "url": "demo",
                                                          "icon": "website",
                                                          "title": "demo"
                                                        }
                                                      ],
                                                      "description": "did this and that",
                                                      "primaryTitle": "test",
                                                      "secondaryTitle": "google"
                                                    }
                                                  ],
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "created_at": "2025-09-17T08:14:59.021+00:00",
                                                  "updated_at": "2025-09-17T08:14:59.021+00:00",
                                                  "layout_type": "list",
                                                  "section_name": "code jams",
                                                  "published_data": {
                                                    "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                    "items": [
                                                      {
                                                        "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                        "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                        "location": "SF",
                                                        "logoFile": null,
                                                        "orderIndex": 0,
                                                        "customLinks": [
                                                          {
                                                            "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                            "url": "demo",
                                                            "icon": "website",
                                                            "title": "demo"
                                                          }
                                                        ],
                                                        "description": "did this and that",
                                                        "primaryTitle": "test",
                                                        "secondaryTitle": "google"
                                                      }
                                                    ],
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "created_at": "2025-09-17T08:13:23.306+00:00",
                                                    "updated_at": "2025-09-17T08:13:23.306+00:00",
                                                    "layout_type": "list",
                                                    "section_name": "code jams",
                                                    "published_data": {
                                                      "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                      "items": [
                                                        {
                                                          "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                          "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                          "location": "SF",
                                                          "logoFile": null,
                                                          "orderIndex": 0,
                                                          "customLinks": [
                                                            {
                                                              "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                              "url": "demo",
                                                              "icon": "website",
                                                              "title": "demo"
                                                            }
                                                          ],
                                                          "description": "did this and that",
                                                          "primaryTitle": "test",
                                                          "secondaryTitle": "google"
                                                        }
                                                      ],
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "created_at": "2025-09-17T08:13:02.944+00:00",
                                                      "updated_at": "2025-09-17T08:13:02.944+00:00",
                                                      "layout_type": "list",
                                                      "section_name": "code jams",
                                                      "published_data": {
                                                        "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                        "items": [
                                                          {
                                                            "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                            "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                            "location": "SF",
                                                            "logoFile": null,
                                                            "orderIndex": 0,
                                                            "customLinks": [
                                                              {
                                                                "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                "url": "demo",
                                                                "icon": "website",
                                                                "title": "demo"
                                                              }
                                                            ],
                                                            "description": "did this and that",
                                                            "primaryTitle": "test",
                                                            "secondaryTitle": "google"
                                                          }
                                                        ],
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "created_at": "2025-09-17T08:12:20.873+00:00",
                                                        "updated_at": "2025-09-17T08:12:20.873+00:00",
                                                        "layout_type": "list",
                                                        "section_name": "code jams",
                                                        "published_data": {
                                                          "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                          "items": [
                                                            {
                                                              "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                              "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                              "location": "SF",
                                                              "logoFile": null,
                                                              "orderIndex": 0,
                                                              "customLinks": [
                                                                {
                                                                  "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                  "url": "demo",
                                                                  "icon": "website",
                                                                  "title": "demo"
                                                                }
                                                              ],
                                                              "description": "did this and that",
                                                              "primaryTitle": "test",
                                                              "secondaryTitle": "google"
                                                            }
                                                          ],
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "created_at": "2025-09-17T08:11:49.315+00:00",
                                                          "updated_at": "2025-09-17T08:11:49.315+00:00",
                                                          "layout_type": "list",
                                                          "section_name": "code jams",
                                                          "published_data": {
                                                            "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                            "items": [
                                                              {
                                                                "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                                "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                                "location": "SF",
                                                                "logoFile": null,
                                                                "orderIndex": 0,
                                                                "customLinks": [
                                                                  {
                                                                    "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                    "url": "demo",
                                                                    "icon": "website",
                                                                    "title": "demo"
                                                                  }
                                                                ],
                                                                "description": "did this and that",
                                                                "primaryTitle": "test",
                                                                "secondaryTitle": "google"
                                                              }
                                                            ],
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "created_at": "2025-09-17T08:06:25.561+00:00",
                                                            "updated_at": "2025-09-17T08:06:25.561+00:00",
                                                            "layout_type": "list",
                                                            "section_name": "code jams",
                                                            "published_data": {
                                                              "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                              "items": [
                                                                {
                                                                  "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                                  "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                                  "location": "SF",
                                                                  "logoFile": null,
                                                                  "orderIndex": 0,
                                                                  "customLinks": [
                                                                    {
                                                                      "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                      "url": "demo",
                                                                      "icon": "website",
                                                                      "title": "demo"
                                                                    }
                                                                  ],
                                                                  "description": "did this and that",
                                                                  "primaryTitle": "test",
                                                                  "secondaryTitle": "google"
                                                                }
                                                              ],
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "created_at": "2025-09-17T08:03:28.621+00:00",
                                                              "updated_at": "2025-09-17T08:03:28.621+00:00",
                                                              "layout_type": "list",
                                                              "section_name": "code jams",
                                                              "published_data": {
                                                                "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                                "items": [
                                                                  {
                                                                    "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                                    "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                                    "location": "SF",
                                                                    "logoFile": null,
                                                                    "orderIndex": 0,
                                                                    "customLinks": [
                                                                      {
                                                                        "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                        "url": "demo",
                                                                        "icon": "website",
                                                                        "title": "demo"
                                                                      }
                                                                    ],
                                                                    "description": "did this and that",
                                                                    "primaryTitle": "test",
                                                                    "secondaryTitle": "google"
                                                                  }
                                                                ],
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "created_at": "2025-09-17T08:02:51.289+00:00",
                                                                "updated_at": "2025-09-17T08:02:51.289+00:00",
                                                                "layout_type": "list",
                                                                "section_name": "code jams",
                                                                "published_data": {
                                                                  "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                                  "items": [
                                                                    {
                                                                      "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                                      "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                                      "location": "SF",
                                                                      "logoFile": null,
                                                                      "orderIndex": 0,
                                                                      "customLinks": [
                                                                        {
                                                                          "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                          "url": "demo",
                                                                          "icon": "website",
                                                                          "title": "demo"
                                                                        }
                                                                      ],
                                                                      "description": "did this and that",
                                                                      "primaryTitle": "test",
                                                                      "secondaryTitle": "google"
                                                                    }
                                                                  ],
                                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                  "created_at": "2025-09-17T08:01:59.387+00:00",
                                                                  "updated_at": "2025-09-17T08:01:59.387+00:00",
                                                                  "layout_type": "list",
                                                                  "section_name": "code jams",
                                                                  "published_data": {
                                                                    "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                                    "items": [
                                                                      {
                                                                        "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                                        "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                                        "location": "SF",
                                                                        "logoFile": null,
                                                                        "orderIndex": 0,
                                                                        "customLinks": [
                                                                          {
                                                                            "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                            "url": "demo",
                                                                            "icon": "website",
                                                                            "title": "demo"
                                                                          }
                                                                        ],
                                                                        "description": "did this and that",
                                                                        "primaryTitle": "test",
                                                                        "secondaryTitle": "google"
                                                                      }
                                                                    ],
                                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                    "created_at": "2025-09-17T07:51:16.52+00:00",
                                                                    "updated_at": "2025-09-17T07:51:16.52+00:00",
                                                                    "layout_type": "list",
                                                                    "section_name": "code jams",
                                                                    "published_data": {
                                                                      "id": "88d851d3-f07b-4812-8c03-28142c9e3450",
                                                                      "items": [
                                                                        {
                                                                          "id": "751d7487-0457-485d-9659-7ab425d00594",
                                                                          "logoUrl": "https://ugsufdqwqaiqbawfsxwp.supabase.co/storage/v1/object/public/user-files/dc5261d4-e9a5-43e8-9719-987a0d8124ca/custom-sections/751d7487-0457-485d-9659-7ab425d00594-logo-1758064570674.png",
                                                                          "location": "SF",
                                                                          "logoFile": null,
                                                                          "orderIndex": 0,
                                                                          "customLinks": [
                                                                            {
                                                                              "id": "2f721c7b-c5a5-4e50-ba4f-d34f0b6b6a33",
                                                                              "url": "demo",
                                                                              "icon": "website",
                                                                              "title": "demo"
                                                                            }
                                                                          ],
                                                                          "description": "did this and that",
                                                                          "primaryTitle": "test",
                                                                          "secondaryTitle": "google"
                                                                        }
                                                                      ],
                                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                      "created_at": "2025-09-17T07:18:06.061+00:00",
                                                                      "updated_at": "2025-09-17T07:18:06.061+00:00",
                                                                      "layout_type": "list",
                                                                      "section_name": "code jams",
                                                                      "published_data": null
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
      "section_name": "New ffef",
      "layout_type": "list",
      "items": [
        {
          "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
          "logoUrl": null,
          "dateInfo": "ge",
          "logoFile": null,
          "orderIndex": 0,
          "customLinks": [
            {
              "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
              "url": "gregeg",
              "icon": "instagram",
              "title": "grge"
            },
            {
              "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
              "url": "de",
              "icon": "website",
              "title": "dem"
            }
          ],
          "primaryTitle": "fewfwef",
          "secondaryTitle": "few"
        }
      ],
      "created_at": "2025-09-17T13:09:51.624+00:00",
      "updated_at": "2025-09-17T13:09:51.624+00:00",
      "published_data": {
        "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
        "items": [
          {
            "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
            "logoUrl": null,
            "dateInfo": "ge",
            "logoFile": null,
            "orderIndex": 0,
            "customLinks": [
              {
                "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                "url": "gregeg",
                "icon": "instagram",
                "title": "grge"
              },
              {
                "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                "url": "de",
                "icon": "website",
                "title": "dem"
              }
            ],
            "primaryTitle": "fewfwef",
            "secondaryTitle": "few"
          }
        ],
        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
        "created_at": "2025-09-17T12:56:13.936+00:00",
        "updated_at": "2025-09-17T12:56:13.936+00:00",
        "layout_type": "list",
        "section_name": "New ffef",
        "published_data": {
          "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
          "items": [
            {
              "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
              "logoUrl": null,
              "dateInfo": "ge",
              "logoFile": null,
              "orderIndex": 0,
              "customLinks": [
                {
                  "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                  "url": "gregeg",
                  "icon": "instagram",
                  "title": "grge"
                },
                {
                  "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                  "url": "de",
                  "icon": "website",
                  "title": "dem"
                }
              ],
              "primaryTitle": "fewfwef",
              "secondaryTitle": "few"
            }
          ],
          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
          "created_at": "2025-09-17T12:55:39.597+00:00",
          "updated_at": "2025-09-17T12:55:39.597+00:00",
          "layout_type": "list",
          "section_name": "New ffef",
          "published_data": {
            "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
            "items": [
              {
                "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                "logoUrl": null,
                "dateInfo": "ge",
                "logoFile": null,
                "orderIndex": 0,
                "customLinks": [
                  {
                    "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                    "url": "gregeg",
                    "icon": "instagram",
                    "title": "grge"
                  },
                  {
                    "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                    "url": "de",
                    "icon": "website",
                    "title": "dem"
                  }
                ],
                "primaryTitle": "fewfwef",
                "secondaryTitle": "few"
              }
            ],
            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
            "created_at": "2025-09-17T12:51:51.698+00:00",
            "updated_at": "2025-09-17T12:51:51.698+00:00",
            "layout_type": "list",
            "section_name": "New ffef",
            "published_data": {
              "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
              "items": [
                {
                  "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                  "logoUrl": null,
                  "dateInfo": "ge",
                  "logoFile": null,
                  "orderIndex": 0,
                  "customLinks": [
                    {
                      "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                      "url": "gregeg",
                      "icon": "instagram",
                      "title": "grge"
                    },
                    {
                      "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                      "url": "de",
                      "icon": "website",
                      "title": "dem"
                    }
                  ],
                  "primaryTitle": "fewfwef",
                  "secondaryTitle": "few"
                }
              ],
              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
              "created_at": "2025-09-17T12:51:37.864+00:00",
              "updated_at": "2025-09-17T12:51:37.864+00:00",
              "layout_type": "list",
              "section_name": "New ffef",
              "published_data": {
                "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                "items": [
                  {
                    "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                    "logoUrl": null,
                    "dateInfo": "ge",
                    "logoFile": null,
                    "orderIndex": 0,
                    "customLinks": [
                      {
                        "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                        "url": "gregeg",
                        "icon": "instagram",
                        "title": "grge"
                      },
                      {
                        "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                        "url": "de",
                        "icon": "website",
                        "title": "dem"
                      }
                    ],
                    "primaryTitle": "fewfwef",
                    "secondaryTitle": "few"
                  }
                ],
                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                "created_at": "2025-09-17T12:50:05.242+00:00",
                "updated_at": "2025-09-17T12:50:05.242+00:00",
                "layout_type": "list",
                "section_name": "New ffef",
                "published_data": {
                  "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                  "items": [
                    {
                      "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                      "logoUrl": null,
                      "dateInfo": "ge",
                      "logoFile": null,
                      "orderIndex": 0,
                      "customLinks": [
                        {
                          "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                          "url": "gregeg",
                          "icon": "instagram",
                          "title": "grge"
                        },
                        {
                          "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                          "url": "de",
                          "icon": "website",
                          "title": "dem"
                        }
                      ],
                      "primaryTitle": "fewfwef",
                      "secondaryTitle": "few"
                    }
                  ],
                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                  "created_at": "2025-09-17T12:49:41.222+00:00",
                  "updated_at": "2025-09-17T12:49:41.222+00:00",
                  "layout_type": "list",
                  "section_name": "New ffef",
                  "published_data": {
                    "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                    "items": [
                      {
                        "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                        "logoUrl": null,
                        "dateInfo": "ge",
                        "logoFile": null,
                        "orderIndex": 0,
                        "customLinks": [
                          {
                            "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                            "url": "gregeg",
                            "icon": "instagram",
                            "title": "grge"
                          },
                          {
                            "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                            "url": "de",
                            "icon": "website",
                            "title": "dem"
                          }
                        ],
                        "primaryTitle": "fewfwef",
                        "secondaryTitle": "few"
                      }
                    ],
                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                    "created_at": "2025-09-17T12:46:01.638+00:00",
                    "updated_at": "2025-09-17T12:46:01.638+00:00",
                    "layout_type": "list",
                    "section_name": "New ffef",
                    "published_data": {
                      "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                      "items": [
                        {
                          "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                          "logoUrl": null,
                          "dateInfo": "ge",
                          "logoFile": null,
                          "orderIndex": 0,
                          "customLinks": [
                            {
                              "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                              "url": "gregeg",
                              "icon": "instagram",
                              "title": "grge"
                            },
                            {
                              "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                              "url": "de",
                              "icon": "website",
                              "title": "dem"
                            }
                          ],
                          "primaryTitle": "fewfwef",
                          "secondaryTitle": "few"
                        }
                      ],
                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                      "created_at": "2025-09-17T12:42:13.145+00:00",
                      "updated_at": "2025-09-17T12:42:13.145+00:00",
                      "layout_type": "list",
                      "section_name": "New ffef",
                      "published_data": {
                        "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                        "items": [
                          {
                            "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                            "logoUrl": null,
                            "dateInfo": "ge",
                            "logoFile": null,
                            "orderIndex": 0,
                            "customLinks": [
                              {
                                "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                "url": "gregeg",
                                "icon": "instagram",
                                "title": "grge"
                              },
                              {
                                "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                "url": "de",
                                "icon": "website",
                                "title": "dem"
                              }
                            ],
                            "primaryTitle": "fewfwef",
                            "secondaryTitle": "few"
                          }
                        ],
                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                        "created_at": "2025-09-17T12:41:17.614+00:00",
                        "updated_at": "2025-09-17T12:41:17.614+00:00",
                        "layout_type": "list",
                        "section_name": "New ffef",
                        "published_data": {
                          "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                          "items": [
                            {
                              "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                              "logoUrl": null,
                              "dateInfo": "ge",
                              "logoFile": null,
                              "orderIndex": 0,
                              "customLinks": [
                                {
                                  "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                  "url": "gregeg",
                                  "icon": "instagram",
                                  "title": "grge"
                                },
                                {
                                  "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                  "url": "de",
                                  "icon": "website",
                                  "title": "dem"
                                }
                              ],
                              "primaryTitle": "fewfwef",
                              "secondaryTitle": "few"
                            }
                          ],
                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                          "created_at": "2025-09-17T12:31:26.956+00:00",
                          "updated_at": "2025-09-17T12:31:26.956+00:00",
                          "layout_type": "list",
                          "section_name": "New ffef",
                          "published_data": {
                            "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                            "items": [
                              {
                                "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                "logoUrl": null,
                                "dateInfo": "ge",
                                "logoFile": null,
                                "orderIndex": 0,
                                "customLinks": [
                                  {
                                    "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                    "url": "gregeg",
                                    "icon": "instagram",
                                    "title": "grge"
                                  },
                                  {
                                    "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                    "url": "de",
                                    "icon": "website",
                                    "title": "dem"
                                  }
                                ],
                                "primaryTitle": "fewfwef",
                                "secondaryTitle": "few"
                              }
                            ],
                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                            "created_at": "2025-09-17T12:26:12.784+00:00",
                            "updated_at": "2025-09-17T12:26:12.784+00:00",
                            "layout_type": "list",
                            "section_name": "New ffef",
                            "published_data": {
                              "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                              "items": [
                                {
                                  "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                  "logoUrl": null,
                                  "dateInfo": "ge",
                                  "logoFile": null,
                                  "orderIndex": 0,
                                  "customLinks": [
                                    {
                                      "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                      "url": "gregeg",
                                      "icon": "instagram",
                                      "title": "grge"
                                    },
                                    {
                                      "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                      "url": "de",
                                      "icon": "website",
                                      "title": "dem"
                                    }
                                  ],
                                  "primaryTitle": "fewfwef",
                                  "secondaryTitle": "few"
                                }
                              ],
                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                              "created_at": "2025-09-17T12:21:43.986+00:00",
                              "updated_at": "2025-09-17T12:21:43.986+00:00",
                              "layout_type": "list",
                              "section_name": "New ffef",
                              "published_data": {
                                "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                "items": [
                                  {
                                    "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                    "logoUrl": null,
                                    "dateInfo": "ge",
                                    "logoFile": null,
                                    "orderIndex": 0,
                                    "customLinks": [
                                      {
                                        "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                        "url": "gregeg",
                                        "icon": "instagram",
                                        "title": "grge"
                                      },
                                      {
                                        "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                        "url": "de",
                                        "icon": "website",
                                        "title": "dem"
                                      }
                                    ],
                                    "primaryTitle": "fewfwef",
                                    "secondaryTitle": "few"
                                  }
                                ],
                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                "created_at": "2025-09-17T12:13:51.532+00:00",
                                "updated_at": "2025-09-17T12:13:51.532+00:00",
                                "layout_type": "list",
                                "section_name": "New ffef",
                                "published_data": {
                                  "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                  "items": [
                                    {
                                      "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                      "logoUrl": null,
                                      "dateInfo": "ge",
                                      "logoFile": null,
                                      "orderIndex": 0,
                                      "customLinks": [
                                        {
                                          "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                          "url": "gregeg",
                                          "icon": "instagram",
                                          "title": "grge"
                                        },
                                        {
                                          "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                          "url": "de",
                                          "icon": "website",
                                          "title": "dem"
                                        }
                                      ],
                                      "primaryTitle": "fewfwef",
                                      "secondaryTitle": "few"
                                    }
                                  ],
                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                  "created_at": "2025-09-17T12:13:38.593+00:00",
                                  "updated_at": "2025-09-17T12:13:38.593+00:00",
                                  "layout_type": "list",
                                  "section_name": "New ffef",
                                  "published_data": {
                                    "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                    "items": [
                                      {
                                        "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                        "logoUrl": null,
                                        "dateInfo": "ge",
                                        "logoFile": null,
                                        "orderIndex": 0,
                                        "customLinks": [
                                          {
                                            "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                            "url": "gregeg",
                                            "icon": "instagram",
                                            "title": "grge"
                                          },
                                          {
                                            "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                            "url": "de",
                                            "icon": "website",
                                            "title": "dem"
                                          }
                                        ],
                                        "primaryTitle": "fewfwef",
                                        "secondaryTitle": "few"
                                      }
                                    ],
                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                    "created_at": "2025-09-17T12:06:06.1+00:00",
                                    "updated_at": "2025-09-17T12:06:06.1+00:00",
                                    "layout_type": "list",
                                    "section_name": "New ffef",
                                    "published_data": {
                                      "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                      "items": [
                                        {
                                          "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                          "logoUrl": null,
                                          "dateInfo": "ge",
                                          "logoFile": null,
                                          "orderIndex": 0,
                                          "customLinks": [
                                            {
                                              "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                              "url": "gregeg",
                                              "icon": "instagram",
                                              "title": "grge"
                                            },
                                            {
                                              "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                              "url": "de",
                                              "icon": "website",
                                              "title": "dem"
                                            }
                                          ],
                                          "primaryTitle": "fewfwef",
                                          "secondaryTitle": "few"
                                        }
                                      ],
                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                      "created_at": "2025-09-17T12:05:23.809+00:00",
                                      "updated_at": "2025-09-17T12:05:23.809+00:00",
                                      "layout_type": "list",
                                      "section_name": "New ffef",
                                      "published_data": {
                                        "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                        "items": [
                                          {
                                            "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                            "logoUrl": null,
                                            "dateInfo": "ge",
                                            "logoFile": null,
                                            "orderIndex": 0,
                                            "customLinks": [
                                              {
                                                "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                "url": "gregeg",
                                                "icon": "instagram",
                                                "title": "grge"
                                              },
                                              {
                                                "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                "url": "de",
                                                "icon": "website",
                                                "title": "dem"
                                              }
                                            ],
                                            "primaryTitle": "fewfwef",
                                            "secondaryTitle": "few"
                                          }
                                        ],
                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                        "created_at": "2025-09-17T08:25:42.413+00:00",
                                        "updated_at": "2025-09-17T08:25:42.413+00:00",
                                        "layout_type": "list",
                                        "section_name": "New ffef",
                                        "published_data": {
                                          "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                          "items": [
                                            {
                                              "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                              "logoUrl": null,
                                              "dateInfo": "ge",
                                              "logoFile": null,
                                              "orderIndex": 0,
                                              "customLinks": [
                                                {
                                                  "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                  "url": "gregeg",
                                                  "icon": "instagram",
                                                  "title": "grge"
                                                },
                                                {
                                                  "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                  "url": "de",
                                                  "icon": "website",
                                                  "title": "dem"
                                                }
                                              ],
                                              "primaryTitle": "fewfwef",
                                              "secondaryTitle": "few"
                                            }
                                          ],
                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                          "created_at": "2025-09-17T08:24:39.825+00:00",
                                          "updated_at": "2025-09-17T08:24:39.825+00:00",
                                          "layout_type": "list",
                                          "section_name": "New ffef",
                                          "published_data": {
                                            "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                            "items": [
                                              {
                                                "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                "logoUrl": null,
                                                "dateInfo": "ge",
                                                "logoFile": null,
                                                "orderIndex": 0,
                                                "customLinks": [
                                                  {
                                                    "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                    "url": "gregeg",
                                                    "icon": "instagram",
                                                    "title": "grge"
                                                  },
                                                  {
                                                    "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                    "url": "de",
                                                    "icon": "website",
                                                    "title": "dem"
                                                  }
                                                ],
                                                "primaryTitle": "fewfwef",
                                                "secondaryTitle": "few"
                                              }
                                            ],
                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                            "created_at": "2025-09-17T08:22:01.247+00:00",
                                            "updated_at": "2025-09-17T08:22:01.247+00:00",
                                            "layout_type": "list",
                                            "section_name": "New ffef",
                                            "published_data": {
                                              "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                              "items": [
                                                {
                                                  "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                  "logoUrl": null,
                                                  "dateInfo": "ge",
                                                  "logoFile": null,
                                                  "orderIndex": 0,
                                                  "customLinks": [
                                                    {
                                                      "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                      "url": "gregeg",
                                                      "icon": "instagram",
                                                      "title": "grge"
                                                    },
                                                    {
                                                      "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                      "url": "de",
                                                      "icon": "website",
                                                      "title": "dem"
                                                    }
                                                  ],
                                                  "primaryTitle": "fewfwef",
                                                  "secondaryTitle": "few"
                                                }
                                              ],
                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                              "created_at": "2025-09-17T08:17:51.706+00:00",
                                              "updated_at": "2025-09-17T08:17:51.706+00:00",
                                              "layout_type": "list",
                                              "section_name": "New ffef",
                                              "published_data": {
                                                "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                "items": [
                                                  {
                                                    "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                    "logoUrl": null,
                                                    "dateInfo": "ge",
                                                    "logoFile": null,
                                                    "orderIndex": 0,
                                                    "customLinks": [
                                                      {
                                                        "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                        "url": "gregeg",
                                                        "icon": "instagram",
                                                        "title": "grge"
                                                      },
                                                      {
                                                        "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                        "url": "de",
                                                        "icon": "website",
                                                        "title": "dem"
                                                      }
                                                    ],
                                                    "primaryTitle": "fewfwef",
                                                    "secondaryTitle": "few"
                                                  }
                                                ],
                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                "created_at": "2025-09-17T08:17:33.904+00:00",
                                                "updated_at": "2025-09-17T08:17:33.904+00:00",
                                                "layout_type": "list",
                                                "section_name": "New ffef",
                                                "published_data": {
                                                  "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                  "items": [
                                                    {
                                                      "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                      "logoUrl": null,
                                                      "dateInfo": "ge",
                                                      "logoFile": null,
                                                      "orderIndex": 0,
                                                      "customLinks": [
                                                        {
                                                          "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                          "url": "gregeg",
                                                          "icon": "instagram",
                                                          "title": "grge"
                                                        },
                                                        {
                                                          "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                          "url": "de",
                                                          "icon": "website",
                                                          "title": "dem"
                                                        }
                                                      ],
                                                      "primaryTitle": "fewfwef",
                                                      "secondaryTitle": "few"
                                                    }
                                                  ],
                                                  "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                  "created_at": "2025-09-17T08:14:59.021+00:00",
                                                  "updated_at": "2025-09-17T08:14:59.021+00:00",
                                                  "layout_type": "list",
                                                  "section_name": "New ffef",
                                                  "published_data": {
                                                    "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                    "items": [
                                                      {
                                                        "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                        "logoUrl": null,
                                                        "dateInfo": "ge",
                                                        "logoFile": null,
                                                        "orderIndex": 0,
                                                        "customLinks": [
                                                          {
                                                            "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                            "url": "gregeg",
                                                            "icon": "instagram",
                                                            "title": "grge"
                                                          },
                                                          {
                                                            "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                            "url": "de",
                                                            "icon": "website",
                                                            "title": "dem"
                                                          }
                                                        ],
                                                        "primaryTitle": "fewfwef",
                                                        "secondaryTitle": "few"
                                                      }
                                                    ],
                                                    "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                    "created_at": "2025-09-17T08:13:23.306+00:00",
                                                    "updated_at": "2025-09-17T08:13:23.306+00:00",
                                                    "layout_type": "list",
                                                    "section_name": "New ffef",
                                                    "published_data": {
                                                      "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                      "items": [
                                                        {
                                                          "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                          "logoUrl": null,
                                                          "dateInfo": "ge",
                                                          "logoFile": null,
                                                          "orderIndex": 0,
                                                          "customLinks": [
                                                            {
                                                              "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                              "url": "gregeg",
                                                              "icon": "instagram",
                                                              "title": "grge"
                                                            },
                                                            {
                                                              "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                              "url": "de",
                                                              "icon": "website",
                                                              "title": "dem"
                                                            }
                                                          ],
                                                          "primaryTitle": "fewfwef",
                                                          "secondaryTitle": "few"
                                                        }
                                                      ],
                                                      "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                      "created_at": "2025-09-17T08:13:02.944+00:00",
                                                      "updated_at": "2025-09-17T08:13:02.944+00:00",
                                                      "layout_type": "list",
                                                      "section_name": "New ffef",
                                                      "published_data": {
                                                        "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                        "items": [
                                                          {
                                                            "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                            "logoUrl": null,
                                                            "dateInfo": "ge",
                                                            "logoFile": null,
                                                            "orderIndex": 0,
                                                            "customLinks": [
                                                              {
                                                                "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                                "url": "gregeg",
                                                                "icon": "instagram",
                                                                "title": "grge"
                                                              },
                                                              {
                                                                "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                                "url": "de",
                                                                "icon": "website",
                                                                "title": "dem"
                                                              }
                                                            ],
                                                            "primaryTitle": "fewfwef",
                                                            "secondaryTitle": "few"
                                                          }
                                                        ],
                                                        "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                        "created_at": "2025-09-17T08:12:20.873+00:00",
                                                        "updated_at": "2025-09-17T08:12:20.873+00:00",
                                                        "layout_type": "list",
                                                        "section_name": "New ffef",
                                                        "published_data": {
                                                          "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                          "items": [
                                                            {
                                                              "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                              "logoUrl": null,
                                                              "dateInfo": "ge",
                                                              "logoFile": null,
                                                              "orderIndex": 0,
                                                              "customLinks": [
                                                                {
                                                                  "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                                  "url": "gregeg",
                                                                  "icon": "instagram",
                                                                  "title": "grge"
                                                                },
                                                                {
                                                                  "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                                  "url": "de",
                                                                  "icon": "website",
                                                                  "title": "dem"
                                                                }
                                                              ],
                                                              "primaryTitle": "fewfwef",
                                                              "secondaryTitle": "few"
                                                            }
                                                          ],
                                                          "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                          "created_at": "2025-09-17T08:11:49.315+00:00",
                                                          "updated_at": "2025-09-17T08:11:49.315+00:00",
                                                          "layout_type": "list",
                                                          "section_name": "New ffef",
                                                          "published_data": {
                                                            "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                            "items": [
                                                              {
                                                                "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                                "logoUrl": null,
                                                                "dateInfo": "ge",
                                                                "logoFile": null,
                                                                "orderIndex": 0,
                                                                "customLinks": [
                                                                  {
                                                                    "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                                    "url": "gregeg",
                                                                    "icon": "instagram",
                                                                    "title": "grge"
                                                                  },
                                                                  {
                                                                    "id": "a60c45cc-f95a-4849-a8b5-6767e54add9e",
                                                                    "url": "de",
                                                                    "icon": "website",
                                                                    "title": "dem"
                                                                  }
                                                                ],
                                                                "primaryTitle": "fewfwef",
                                                                "secondaryTitle": "few"
                                                              }
                                                            ],
                                                            "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                            "created_at": "2025-09-17T08:06:25.561+00:00",
                                                            "updated_at": "2025-09-17T08:06:25.561+00:00",
                                                            "layout_type": "list",
                                                            "section_name": "New ffef",
                                                            "published_data": {
                                                              "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                              "items": [
                                                                {
                                                                  "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                                  "logoUrl": null,
                                                                  "dateInfo": "ge",
                                                                  "logoFile": null,
                                                                  "orderIndex": 0,
                                                                  "customLinks": [
                                                                    {
                                                                      "id": "983a442a-06ab-42f8-9de9-96c3971d7304",
                                                                      "url": "gregeg",
                                                                      "icon": "instagram",
                                                                      "title": "grge"
                                                                    }
                                                                  ],
                                                                  "primaryTitle": "fewfwef",
                                                                  "secondaryTitle": "few"
                                                                }
                                                              ],
                                                              "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                              "created_at": "2025-09-17T08:03:28.622+00:00",
                                                              "updated_at": "2025-09-17T08:03:28.622+00:00",
                                                              "layout_type": "list",
                                                              "section_name": "New ffef",
                                                              "published_data": {
                                                                "id": "3590855d-6bc7-4aed-bfd0-134d553846f9",
                                                                "items": [
                                                                  {
                                                                    "id": "16266d26-182e-4e38-98bb-d9495eb2f6c3",
                                                                    "logoUrl": null,
                                                                    "logoFile": null,
                                                                    "orderIndex": 0,
                                                                    "customLinks": [],
                                                                    "primaryTitle": "fewfwef",
                                                                    "secondaryTitle": "few"
                                                                  }
                                                                ],
                                                                "user_id": "dc5261d4-e9a5-43e8-9719-987a0d8124ca",
                                                                "created_at": "2025-09-17T08:02:51.289+00:00",
                                                                "updated_at": "2025-09-17T08:02:51.289+00:00",
                                                                "layout_type": "list",
                                                                "section_name": "New ffef",
                                                                "published_data": null
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  ],
  "sectionOrder": [
    "personal",
    "projects",
    "88d851d3-f07b-4812-8c03-28142c9e3450",
    "experience",
    "education",
    "skills",
    "3590855d-6bc7-4aed-bfd0-134d553846f9"
  ]
}

// Component layout preferences
const portfolioConfig = {
  "user_info_layout_type": "userInfo4",
  "projects_layout_type": "projects1",
  "skills_layout_type": "skills1",
  "education_layout_type": "timeline",
  "work_layout_type": "card",
  "github_repo_name": "p61",
  "github_username": "Greg057",
  "github_repo_url": "https://github.com/Greg057/p61"
}

export default function Portfolio() {
  return (
    <PortfolioLayout
      personalInfo={userData.userInfo}
      educations={userData.educations || []}
      experiences={userData.experiences || []}
      projects={userData.projects || []}
      userTechnologies={userData.userTechnologies || []}
      customSections={userData.customSections || []}
      userInfoLayoutType={portfolioConfig?.user_info_layout_type || 'userInfo1'}
      projectsLayoutType={portfolioConfig?.projects_layout_type || 'projects1'}
      skillsLayoutType={portfolioConfig?.skills_layout_type || 'skills1'}
      educationLayoutType={portfolioConfig?.education_layout_type || 'card'}
      workLayoutType={portfolioConfig?.work_layout_type || 'card'}
      sectionOrder={userData.sectionOrder || undefined}
    />
  )
}