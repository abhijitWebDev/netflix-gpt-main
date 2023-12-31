import conf from "../conf/conf";
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${conf.tmdbKey}`,
    }
  };

  export const background_image = "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg";


  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"

  export const supportedLanguages = [
    {Identifier: "english", Name: "English"},
    {Identifier: "hindi", Name: "हिंदी"},
    {Identifier: "spanish", Name: "Español"},
    {Identifier: "french", Name: "Français"},
    
  ];

 